import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
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

  const pastEvents = [
    {
      title: "Interview Skills Workshop",
      date: "November 5, 2025",
      attendees: "45 participants",
      description:
        "Interactive workshop covering behavioral interview techniques and common questions.",
    },
    {
      title: "LinkedIn Optimization Seminar",
      date: "October 20, 2025",
      attendees: "60 participants",
      description:
        "Learn how to optimize your LinkedIn profile to attract recruiters and opportunities.",
    },
    {
      title: "Career Growth Summit",
      date: "September 15, 2025",
      attendees: "100 participants",
      description:
        "Full-day event featuring industry leaders sharing insights on career advancement strategies.",
    },
  ];

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
                        <div className="flex items-center space-x-1 text-foreground">
                          <Users className="h-4 w-4 text-secondary" />
                          <span>{event.attendees}</span>
                        </div>
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
