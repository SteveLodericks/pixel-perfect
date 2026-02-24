import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary">
              About Career Advancement
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering professionals to reach their full potential through personalized career coaching and strategic guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="overflow-hidden bg-background">
              <img
                src={aboutImage}
                alt="Career Advancement team"
                className="w-full object-cover rounded-[2.5rem]"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary">
                Meet Nosi September
              </h2>
              <p className="text-sm font-semibold text-secondary italic">
                Founder & Head Career Coach
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nosi brings over a decade of experience in career development and
                human resources coaching. After graduating with an Honours degree
                in Information Systems, she found herself unemployed and
                completely unprepared. Four years of university, and no one had
                taught her how to write a CV that lands, interview with
                conviction, or negotiate her own worth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                She figured it out. Built a successful career in banking and
                financial services. Then made a deliberate choice: go back and
                become the mentor she never had.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That decision became Career Advancement. Today, Nosi and her team
                work with professionals across the globe - combining proven
                methodology with deep personalization, because no two career
                journeys are the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <Card className="border-border">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary text-center">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To be the leading catalyst for professional transformation —
                  empowering individuals everywhere to do work that aligns with
                  who they are.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-border">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary text-center">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To equip professionals with the clarity, confidence, and
                  strategies needed to navigate transitions, secure opportunities,
                  and grow sustainably.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border-border">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary text-center">
                  Our Values
                </h3>
                <div className="space-y-3 text-muted-foreground text-center">
                  <p className="font-semibold text-foreground">Integrity</p>
                  <p className="font-semibold text-foreground">Excellence</p>
                  <p className="font-semibold text-foreground">Empowerment</p>
                  <p className="font-semibold text-foreground">Collaboration</p>
                  <p className="font-semibold text-foreground">Growth</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-heading font-bold text-primary text-center">
              How we work.
            </h2>
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                    Personalized Strategy
                  </h4>
                  <p className="text-muted-foreground">
                    We start by understanding your background, goals, and blockers.
                    Every plan is built around you — not a template.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                    Actionable Insights
                  </h4>
                  <p className="text-muted-foreground">
                    We give you tools you can use immediately. No theory-heavy
                    sessions, just strategies you can act on today.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                    Ongoing Support
                  </h4>
                  <p className="text-muted-foreground">
                    Career growth is a journey. We stay with you — providing
                    accountability, guidance, and encouragement at every milestone.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center pt-4">
              <Link to="/book">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
