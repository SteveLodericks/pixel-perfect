import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { Trash2, Loader2, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useAdminCheck } from "@/hooks/useAdminCheck";
import { supabase } from "@/integrations/supabase/client";

interface Event {
  id: string;
  title: string;
  description: string | null;
  date: string | null;
  time: string | null;
  location: string | null;
  capacity: string | null;
  eventbrite_id: string;
}

const AdminEvents = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isAdmin, loading: adminLoading } = useAdminCheck();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    capacity: "",
    eventbriteId: "",
  });

  // Redirect if not admin
  useEffect(() => {
    if (!adminLoading && !isAdmin) {
      toast({
        title: "Access Denied",
        description: "You must be an admin to access this page",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [isAdmin, adminLoading, navigate, toast]);

  // Fetch events from database
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          if (import.meta.env.DEV) {
            console.error("Error fetching events:", error);
          }
          toast({
            title: "Error loading events",
            description: "Could not load events from the database",
            variant: "destructive",
          });
        } else {
          setEvents(data || []);
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("Error fetching events:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (isAdmin) {
      fetchEvents();
    }
  }, [isAdmin, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.eventbriteId) {
      toast({
        title: "Missing required fields",
        description: "Please fill in title and Eventbrite Event ID",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from("events")
        .insert({
          title: formData.title,
          description: formData.description || null,
          date: formData.date || null,
          time: formData.time || null,
          location: formData.location || null,
          capacity: formData.capacity || null,
          eventbrite_id: formData.eventbriteId,
        })
        .select()
        .single();

      if (error) {
        if (import.meta.env.DEV) {
          console.error("Error creating event:", error);
        }
        toast({
          title: "Error creating event",
          description: "Could not save the event. Make sure you have admin permissions.",
          variant: "destructive",
        });
      } else {
        setEvents([data, ...events]);
        toast({
          title: "Event added successfully",
          description: "Your Eventbrite event has been added to the events page",
        });
        setFormData({
          title: "",
          description: "",
          date: "",
          time: "",
          location: "",
          capacity: "",
          eventbriteId: "",
        });
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error creating event:", error);
      }
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("events")
        .delete()
        .eq("id", id);

      if (error) {
        if (import.meta.env.DEV) {
          console.error("Error deleting event:", error);
        }
        toast({
          title: "Error deleting event",
          description: "Could not delete the event. Make sure you have admin permissions.",
          variant: "destructive",
        });
      } else {
        setEvents(events.filter((event) => event.id !== id));
        toast({
          title: "Event deleted",
          description: "The event has been removed",
        });
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error deleting event:", error);
      }
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  // Show loading state
  if (adminLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">Verifying admin access...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Don't render admin content if not admin (will redirect anyway)
  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Admin Badge */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-2 text-sm text-primary">
            <Shield className="h-4 w-4" />
            <span className="font-medium">Admin Mode</span>
          </div>
        </div>
      </div>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-heading font-bold text-primary mb-8">
              Manage Eventbrite Events
            </h1>

            {/* Add Event Form */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Add New Eventbrite Event</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Event Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      placeholder="Career Transition Workshop"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Learn proven strategies for..."
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        placeholder="December 15, 2025"
                      />
                    </div>

                    <div>
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        placeholder="2:00 PM - 5:00 PM"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        placeholder="Online via Zoom"
                      />
                    </div>

                    <div>
                      <Label htmlFor="capacity">Capacity</Label>
                      <Input
                        id="capacity"
                        value={formData.capacity}
                        onChange={(e) =>
                          setFormData({ ...formData, capacity: e.target.value })
                        }
                        placeholder="20 spots available"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="eventbriteId">Eventbrite Event ID *</Label>
                    <Input
                      id="eventbriteId"
                      value={formData.eventbriteId}
                      onChange={(e) =>
                        setFormData({ ...formData, eventbriteId: e.target.value })
                      }
                      placeholder="1975525265248"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Find this in your Eventbrite event URL or embed code
                    </p>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Adding Event...
                      </>
                    ) : (
                      "Add Event"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Existing Events */}
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold text-primary">
                Existing Events
              </h2>
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              ) : events.length === 0 ? (
                <p className="text-muted-foreground">No events added yet.</p>
              ) : (
                events.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                            {event.title}
                          </h3>
                          {event.description && (
                            <p className="text-muted-foreground mb-2">
                              {event.description}
                            </p>
                          )}
                          <div className="space-y-1 text-sm">
                            {event.date && (
                              <p className="text-foreground">
                                <span className="font-medium">Date:</span> {event.date}
                              </p>
                            )}
                            {event.time && (
                              <p className="text-foreground">
                                <span className="font-medium">Time:</span> {event.time}
                              </p>
                            )}
                            {event.location && (
                              <p className="text-foreground">
                                <span className="font-medium">Location:</span>{" "}
                                {event.location}
                              </p>
                            )}
                            {event.capacity && (
                              <p className="text-foreground">
                                <span className="font-medium">Capacity:</span>{" "}
                                {event.capacity}
                              </p>
                            )}
                            <p className="text-foreground">
                              <span className="font-medium">Event ID:</span>{" "}
                              {event.eventbrite_id}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(event.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminEvents;
