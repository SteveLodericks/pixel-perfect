import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary">
              Let's talk.
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us where you are. We'll help you figure out where to go.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">
              Reach us directly.
            </h2>

            <Card className="border-border">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-1">
                      Email
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      info@careeradvance.com
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-1">
                      LinkedIn
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Connect with us on LinkedIn
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/_careeradvancement?igsh=ZDFuemg0c3Jlemt4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-1">
                      Instagram
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Follow us on Instagram
                    </p>
                  </div>
                </a>

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

            {/* FAQ Section */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl text-primary mb-4">
                  Common questions.
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm font-medium text-foreground">
                      How quickly can I start?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      Most clients begin within 1–3 business days of their
                      consultation.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-sm font-medium text-foreground">
                      Do you work with clients outside the UK/South Africa?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      Yes — we work with professionals globally via Zoom.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-sm font-medium text-foreground">
                      I don't know which service I need.
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      Start with the free consultation. We'll recommend the right
                      path based on your situation.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-sm font-medium text-foreground">
                      How long does coaching typically last?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      Engagements range from a single intensive session to
                      multi-month programs, scoped around your goals and
                      timeline.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
