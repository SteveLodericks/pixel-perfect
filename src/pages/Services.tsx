import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Compass,
  Rocket,
  Building2,
  Search,
  Goal,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Compass,
      title: "Career Direction & Transitions",
      description:
        "Whether you're starting your career, considering a career change, returning to the workforce, or questioning your current direction, this service helps you gain clarity and confidence in your next move.",
      subtitle: "We help you find the right career path.",
      features: [
        "Change careers or industries",
        "Feel aligned with your work again",
        "Make intentional, informed career decisions",
      ],
      featureLabel: "Ideal for professionals who want to:",
    },
    {
      icon: Rocket,
      title: "Career Advancement & Engagement",
      description:
        "Designed for professionals who want to grow, advance, or re-engage in their current roles. This coaching focuses on positioning yourself for promotion, increasing visibility, and building a career that keeps you motivated and challenged.",
      subtitle: "Move forward with purpose—and get noticed.",
      features: [
        "Career progression strategy",
        "Executive presence and influence",
        "Re-engaging in your current role",
      ],
      featureLabel: "Focus areas include:",
    },
    {
      icon: Building2,
      title: "Corporate Coaching & Development",
      description:
        "Customized corporate coaching solutions that support employee development, leadership growth, and career engagement. Offered through workshops, presentations, and one-on-one coaching.",
      subtitle: "Practical coaching for individuals and teams.",
      features: [
        "Interactive workshops",
        "Leadership and career development presentations",
        "One-on-one coaching for employees and leaders",
      ],
      featureLabel: "Available formats:",
    },
    {
      icon: Search,
      title: "Job Search Strategy & Personal Branding",
      description:
        "End-to-end job search coaching that helps you stand out in competitive markets. We focus on strategy, messaging, and confidence—so you're not just applying, but attracting opportunities.",
      subtitle: "A structured approach to landing the right role.",
      features: [
        "Targeted job search strategy",
        "Networking and outreach",
        "Resume and LinkedIn profile development",
        "Interview preparation and storytelling",
        "Salary and offer negotiation",
      ],
      featureLabel: "Includes support with:",
    },
    {
      icon: Goal,
      title: "Goal Setting, Strategic Planning & Accountability",
      description:
        "This service helps you move from ideas to execution with a clear plan and built-in accountability. Together, we define meaningful career goals and break them into realistic, strategic steps.",
      subtitle: "Turn goals into consistent action.",
      features: [
        "Clear, achievable career goals",
        "A personalized action plan",
        "Ongoing accountability and progress tracking",
        "Momentum and focus",
      ],
      featureLabel: "You'll gain:",
    },
    {
      icon: Shield,
      title: "Confidence Building & Imposter Syndrome Coaching",
      description:
        "For high-performing professionals who struggle with self-doubt, visibility, or imposter syndrome. This coaching strengthens mindset, confidence, and self-advocacy—so you can show up fully and own your value.",
      subtitle: "Build confidence that matches your capabilities.",
      features: [
        "Overcoming imposter syndrome",
        "Building professional confidence",
        "Self-advocacy and communication",
        "Navigating high-stakes conversations",
      ],
      featureLabel: "Work on:",
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
                  <p className="text-sm font-semibold text-secondary italic">{service.subtitle}</p>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">{service.featureLabel}</p>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
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
