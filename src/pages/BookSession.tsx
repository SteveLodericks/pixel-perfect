import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Video } from "lucide-react";

const BookSession = () => {
  useEffect(() => {
    // Load Calendly widget script
    // Note: Calendly's CDN doesn't support crossOrigin="anonymous", so we load it without CORS attributes
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary">
              Book a Session
            </h1>
            <p className="text-xl text-muted-foreground">
              Schedule a personalized coaching session at a time that works for
              you. Choose from our available time slots below.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="border-border">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-primary">
                  Flexible Hours
                </h3>
                <p className="text-sm text-muted-foreground">
                  Weekend sessions available 1-6 PM
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Video className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-primary">
                  Virtual Sessions
                </h3>
                <p className="text-sm text-muted-foreground">
                  Meet online from anywhere
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-primary">
                  Easy Rescheduling
                </h3>
                <p className="text-sm text-muted-foreground">
                  Change appointments anytime
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl font-heading font-bold text-primary">
                    Select Your Preferred Time
                  </h2>
                  <p className="text-muted-foreground">
                    Choose a date and time that works best for you. You'll receive
                    a confirmation email with the meeting details.
                  </p>

                  {/* Calendly Widget */}
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/septembernosivuno" 
                    style={{ minWidth: "320px", height: "1000px" }}
                  />

                  <p className="text-sm text-muted-foreground pt-4">
                    Available slots: Saturday/Sunday, 1:00 PM - 6:00 PM (Central
                    European Time)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookSession;
