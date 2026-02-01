import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  FileText,
  MessageSquare,
  Users,
  Video,
  Target,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import heroImage from "@/assets/hero-home.jpeg";

const Index = () => {
  const services = [
    {
      icon: FileText,
      title: "CV Writing",
      description:
        "Professional CV crafting that highlights your strengths and achievements",
    },
    {
      icon: MessageSquare,
      title: "Cover Letters",
      description:
        "Compelling cover letters tailored to your target positions",
    },
    {
      icon: Video,
      title: "Mock Interviews",
      description:
        "Practice sessions with feedback to boost your interview confidence",
    },
    {
      icon: Users,
      title: "One-on-One Coaching",
      description:
        "Personalized guidance to navigate your unique career journey",
    },
    {
      icon: Target,
      title: "Group Coaching",
      description:
        "Collaborative sessions with peers on common career challenges",
    },
    {
      icon: TrendingUp,
      title: "Career Counselling",
      description:
        "Strategic planning and advice for long-term career success",
    },
  ];

  const benefits = [
    "Personalized career strategies",
    "Expert guidance from certified coaches",
    "Proven track record of success",
    "Flexible scheduling options",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-background to-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary leading-tight">
                Advance Your Career With Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional career coaching to help you unlock your potential,
                land your dream job, and achieve lasting career success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
                    Book a Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-delayed">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-lg mx-auto">
                <img
                  src={heroImage}
                  alt="Professional career coaching session"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive career coaching services designed to help you succeed
              at every stage of your professional journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold text-primary">
                Why Choose Career Advancement?
              </h2>
              <p className="text-lg text-muted-foreground">
                We're committed to your success. Our experienced coaches provide
                personalized support to help you achieve your career goals.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                  <p className="text-muted-foreground">Successful career transitions</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                  <p className="text-muted-foreground">Client satisfaction rate</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                  <p className="text-muted-foreground">Years of experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Schedule a free consultation today and discover how we can help you
            achieve your career goals.
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in 0.6s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default Index;
