import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  MessageSquare,
  Users,
  Video,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "One-on-One Career Coaching",
      description:
        "Personalized coaching sessions focused on your specific career goals and challenges.",
      features: [
        "Goal setting and planning",
        "Career transition support",
        "Personal branding strategies",
        "Networking guidance",
      ],
      duration: "45-60 minute sessions",
    },
    {
      icon: Target,
      title: "Group Coaching",
      description:
        "Learn and grow alongside peers facing similar career challenges in supportive group sessions.",
      features: [
        "Collaborative learning environment",
        "Shared experiences and insights",
        "Cost-effective option",
        "Monthly cohort sessions",
      ],
      duration: "90-minute group sessions",
    },
    {
      icon: TrendingUp,
      title: "Career Counselling",
      description:
        "Strategic guidance for long-term career planning and development across various life stages.",
      features: [
        "Career path exploration",
        "Skills assessment",
        "Industry trend analysis",
        "Long-term strategy development",
      ],
      duration: "Multiple sessions",
    },
    {
      icon: FileText,
      title: "CV Writing",
      description:
        "Get a professionally crafted CV that stands out to employers and showcases your unique value proposition.",
      features: [
        "ATS-optimized formatting",
        "Achievement-focused content",
        "Industry-specific keywords",
        "Unlimited revisions",
      ],
      duration: "3-5 business days",
    },
    {
      icon: MessageSquare,
      title: "Cover Letters",
      description:
        "Compelling, customized cover letters that capture attention and demonstrate your fit for the role.",
      features: [
        "Tailored to specific positions",
        "Highlights key qualifications",
        "Professional tone and structure",
        "Quick turnaround time",
      ],
      duration: "2-3 business days",
    },
    {
      icon: Video,
      title: "Mock Interviews",
      description:
        "Practice makes perfect. Build confidence with realistic interview simulations and expert feedback.",
      features: [
        "Common and behavioral questions",
        "Detailed performance feedback",
        "Body language coaching",
        "Industry-specific scenarios",
      ],
      duration: "60-minute sessions",
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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive career coaching solutions designed to support you at
              every stage of your professional journey. Choose the service that
              best fits your current needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-heading text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Duration:
                      </span>{" "}
                      {service.duration}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary text-center mb-12">
              How It Works
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Book Your Session
                  </h3>
                  <p className="text-muted-foreground">
                    Choose a convenient time slot and select the service that best
                    fits your needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Initial Consultation
                  </h3>
                  <p className="text-muted-foreground">
                    We'll discuss your goals, challenges, and create a customized
                    action plan tailored to your situation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Work Together
                  </h3>
                  <p className="text-muted-foreground">
                    Through coaching sessions and deliverables, we'll work together
                    to achieve your career objectives.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    Achieve Your Goals
                  </h3>
                  <p className="text-muted-foreground">
                    See real results as you land interviews, receive offers, and
                    advance in your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl font-heading font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Take the first step toward your career goals. Book a free
              consultation to discuss which service is right for you.
            </p>
            <Link to="/book">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Book Your Free Consultation
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

export default Services;
