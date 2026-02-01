import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { parse, isPast } from "date-fns";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    EBWidgets: {
      createWidget: (config: {
        widgetType: string;
        eventId: string;
        modal: boolean;
        modalTriggerElementId: string;
        onOrderComplete: () => void;
      }) => void;
    };
  }
}

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

const Events = () => {
  const [eventbriteEvents, setEventbriteEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch events from database
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
        } else {
          setEventbriteEvents(data || []);
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("Error fetching events:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();

    // Load Eventbrite widget script with security attributes
    const script = document.createElement("script");
    script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "no-referrer";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Initialize Eventbrite widgets when events are loaded
  useEffect(() => {
    if (eventbriteEvents.length > 0 && window.EBWidgets) {
      eventbriteEvents.forEach((event) => {
        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: event.eventbrite_id,
          modal: true,
          modalTriggerElementId: `eventbrite-widget-modal-trigger-${event.eventbrite_id}`,
          onOrderComplete: () => {
            console.log("Order complete!");
          },
        });
      });
    }
  }, [eventbriteEvents]);

  const parseEventDateTime = (dateStr: string | null, timeStr: string | null) => {
    try {
      if (!dateStr || !timeStr) return new Date();
      // Extract just the start time (before the dash)
      const startTime = timeStr.split('-')[0].trim();
      const dateTimeStr = `${dateStr} ${startTime}`;
      return parse(dateTimeStr, "MMMM d, yyyy h:mm a", new Date());
    } catch {
      return new Date();
    }
  };

  const allStaticEvents = [
    {
      title: "Career Transition Workshop",
      date: "December 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Online via Zoom",
      capacity: "20 spots available",
      description:
        "Learn proven strategies for successfully transitioning to a new career field or industry.",
      type: "Workshop",
    },
    {
      title: "Networking Strategies Masterclass",
      date: "January 10, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual Event",
      capacity: "30 spots available",
      description:
        "Master the art of professional networking both online and in-person to accelerate your career growth.",
      type: "Masterclass",
    },
    {
      title: "Resume Writing Bootcamp",
      date: "January 25, 2026",
      time: "10:00 AM - 1:00 PM",
      location: "Online Workshop",
      capacity: "25 spots available",
      description:
        "Intensive session on creating compelling, ATS-friendly resumes that get you noticed by recruiters.",
      type: "Bootcamp",
    },
  ];

  const { upcomingEvents, pastEvents } = useMemo(() => {
    const upcoming: typeof allStaticEvents = [];
    const past: Array<{ title: string; date: string; attendees?: string; description: string; time?: string; location?: string; capacity?: string; type?: string }> = [];

    // Categorize static events
    allStaticEvents.forEach((event) => {
      const eventDateTime = parseEventDateTime(event.date, event.time);
      if (isPast(eventDateTime)) {
        past.push({
          ...event,
          attendees: event.capacity // Use capacity as attendees for past events
        });
      } else {
        upcoming.push(event);
      }
    });

    return { upcomingEvents: upcoming, pastEvents: past };
  }, []);

  const { upcomingEventbriteEvents, pastEventbriteEvents } = useMemo(() => {
    const upcoming: Event[] = [];
    const past: Event[] = [];

    eventbriteEvents.forEach((event) => {
      const eventDateTime = parseEventDateTime(event.date, event.time);
      if (isPast(eventDateTime)) {
        past.push(event);
      } else {
        upcoming.push(event);
      }
    });

    return { upcomingEventbriteEvents: upcoming, pastEventbriteEvents: past };
  }, [eventbriteEvents]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary">
              Events & Workshops
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our interactive events and workshops to learn valuable career
              skills, connect with like-minded professionals, and accelerate your
              career growth.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Upcoming Events
          </h2>

          {/* Eventbrite Events from Database */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-6">
            {upcomingEventbriteEvents.map((event) => (
              <Card
                key={event.id}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-accent text-accent-foreground">
                      Eventbrite
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-heading text-primary">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {event.description && (
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  )}
                  <div className="space-y-2 text-sm">
                    {event.date && (
                      <div className="flex items-center space-x-2 text-foreground">
                        <Calendar className="h-4 w-4 text-secondary" />
                        <span>{event.date}</span>
                      </div>
                    )}
                    {event.time && (
                      <div className="flex items-center space-x-2 text-foreground">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center space-x-2 text-foreground">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    {event.capacity && (
                      <div className="flex items-center space-x-2 text-foreground">
                        <Users className="h-4 w-4 text-secondary" />
                        <span>{event.capacity}</span>
                      </div>
                    )}
                  </div>
                  <noscript>
                    <a
                      href={`https://www.eventbrite.com/e/tickets-${event.eventbrite_id}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-secondary hover:underline text-sm"
                    >
                      Buy Tickets on Eventbrite
                    </a>
                  </noscript>
                  <Button
                    id={`eventbrite-widget-modal-trigger-${event.eventbrite_id}`}
                    type="button"
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    Buy Tickets
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Static Upcoming Events */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-secondary text-white">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-xl font-heading text-primary">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-foreground">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-foreground">
                      <Clock className="h-4 w-4 text-secondary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-foreground">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-foreground">
                      <Users className="h-4 w-4 text-secondary" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Past Events
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Past Eventbrite Events */}
            {pastEventbriteEvents.map((event) => (
              <Card key={event.id} className="border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-heading font-semibold text-primary">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {event.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1 text-foreground">
                          <Calendar className="h-4 w-4 text-secondary" />
                          <span>{event.date}</span>
                        </div>
                        {event.capacity && (
                          <div className="flex items-center space-x-1 text-foreground">
                            <Users className="h-4 w-4 text-secondary" />
                            <span>{event.capacity}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      Completed
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Past Static Events */}
            {pastEvents.map((event, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-heading font-semibold text-primary">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {event.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1 text-foreground">
                          <Calendar className="h-4 w-4 text-secondary" />
                          <span>{event.date}</span>
                        </div>
                        {event.attendees && (
                          <div className="flex items-center space-x-1 text-foreground">
                            <Users className="h-4 w-4 text-secondary" />
                            <span>{event.attendees}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      Completed
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6 bg-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl font-heading font-bold">
              Stay Updated on Upcoming Events
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Subscribe to our newsletter to receive notifications about new
              workshops, seminars, and career development events.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button className="bg-secondary hover:bg-secondary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
