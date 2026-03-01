import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo, useCallback } from "react";
import { parse, isPast } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { useAdminCheck } from "@/hooks/useAdminCheck";
import EventAdminControls from "@/components/events/EventAdminControls";


interface PublicEvent {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  event_time: string | null;
  location: string | null;
  capacity: string | null;
  eventbrite_id: string;
}

const Events = () => {
  const { isAdmin } = useAdminCheck();
  const [eventbriteEvents, setEventbriteEvents] = useState<PublicEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEvents = useCallback(async () => {
    try {
      const { data, error } = await supabase.rpc("get_public_events");
      if (error) {
        if (import.meta.env.DEV) console.error("Error fetching events:", error);
      } else {
        setEventbriteEvents(data || []);
      }
    } catch (error) {
      if (import.meta.env.DEV) console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);


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
    const upcoming: PublicEvent[] = [];
    const past: PublicEvent[] = [];

    eventbriteEvents.forEach((event) => {
      const eventDateTime = parseEventDateTime(event.event_date, event.event_time);
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
              Live sessions, group workshops, and speaking engagements — designed
              to equip and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4 text-center">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Join us. Check back regularly for upcoming workshops, webinars, and community events. All events are designed to give you practical tools and a chance to connect with a community of ambitious professionals.
          </p>

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
                    {event.event_date && (
                      <div className="flex items-center space-x-2 text-foreground">
                        <Calendar className="h-4 w-4 text-secondary" />
                        <span>{event.event_date}</span>
                      </div>
                    )}
                    {event.event_time && (
                      <div className="flex items-center space-x-2 text-foreground">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span>{event.event_time}</span>
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
                  <a
                    href={`https://www.eventbrite.com/e/${event.eventbrite_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      type="button"
                      className="w-full bg-secondary hover:bg-secondary/90"
                    >
                      Buy Tickets
                    </Button>
                  </a>
                  {isAdmin && (
                    <EventAdminControls
                      event={event}
                      onUpdated={fetchEvents}
                      onDeleted={fetchEvents}
                    />
                  )}
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
                          <span>{event.event_date}</span>
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
                  {isAdmin && (
                    <EventAdminControls
                      event={event}
                      onUpdated={fetchEvents}
                      onDeleted={fetchEvents}
                    />
                  )}
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

      {/* Speaking & Corporate Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl font-heading font-bold">
              Bring Career Advancement to your organization.
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Nosi is available for keynotes, panel discussions, and corporate
              training events. Topics include career development, confidence,
              personal branding, and leadership.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 mt-4">
                Request a Speaking Engagement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
