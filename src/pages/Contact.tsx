import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our services? We'd love to hear from you. Send
              us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+27 123 456 789"
                      className="border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-foreground"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="cv">CV Writing</option>
                      <option value="cover">Cover Letters</option>
                      <option value="interview">Mock Interviews</option>
                      <option value="one-on-one">One-on-One Coaching</option>
                      <option value="group">Group Coaching</option>
                      <option value="counselling">Career Counselling</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your career goals and how we can help..."
                      rows={5}
                      className="border-border"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? Use any of the contact methods
                  below. We're here to help you take the next step in your career
                  journey.
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">
                        Email Us
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        info@careeradvance.com
                      </p>
                      <p className="text-muted-foreground text-sm">
                        support@careeradvance.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">
                        Call Us
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        +27 123 456 789
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Mon-Fri: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">
                        Location
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Serving clients nationwide
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Virtual sessions available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>1:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
