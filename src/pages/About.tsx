import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
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
              Empowering professionals to reach their full potential through
              personalized career coaching and strategic guidance.
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
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Career Advancement was founded with a simple yet powerful belief:
                everyone deserves the opportunity to thrive in their professional
                life. With over a decade of experience in career development and
                human resources coaching, we've helped hundreds of professionals
                navigate career transitions, land dream jobs, and achieve lasting
                professional success.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Our approach combines proven coaching methodologies with
                personalized strategies tailored to each individual's unique
                strengths, goals, and circumstances. We don't believe in
                one-size-fits-all solutions—your career journey is unique, and
                your coaching experience should be too.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="max-w-4xl mx-auto mt-16 space-y-6">
            <h3 className="text-2xl font-heading font-bold text-primary">
              Meet Founder & Head Career Coach, Nosi September
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              After earning my Honours degree in Information Systems, I found
              myself unexpectedly unemployed for several months. Despite
              spending four years at university, I realized no one had taught
              me how to structure a compelling CV, present myself confidently
              in interviews, or negotiate my salary effectively.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Once I overcame unemployment and built a successful career in
              banking and financial services, I made a decision: to become the
              mentor and coach I once needed. Since then, I have coached and
              mentored hundreds of professionals, helping them build clarity,
              confidence, and successful career paths.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Witnessing the powerful impact coaching can have on people's
              lives led to the founding of Career Advancement. Today, we
              support professionals from around the world, partnering with
              them to build careers they are proud of and futures they are
              excited about.
            </p>
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
                  To be the leading catalyst for professional transformation,
                  empowering individuals worldwide to unlock their full career
                  potential and achieve meaningful, fulfilling work that aligns
                  with their values and aspirations.
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
                  To provide exceptional, personalized career coaching services
                  that equip professionals with the skills, confidence, and
                  strategies needed to navigate career transitions, secure
                  opportunities, and achieve sustainable professional growth.
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
              Our Approach
            </h2>
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                    Personalized Strategy
                  </h4>
                  <p className="text-muted-foreground">
                    We begin by understanding your unique background, goals, and
                    challenges. Every coaching plan is customized to your specific
                    needs and career aspirations.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                    Actionable Insights
                  </h4>
                  <p className="text-muted-foreground">
                    We provide practical, immediately applicable strategies and
                    tools that you can implement right away to see real results in
                    your career journey.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                    Ongoing Support
                  </h4>
                  <p className="text-muted-foreground">
                    Career development is a journey, not a destination. We're with
                    you every step of the way, providing continuous guidance,
                    accountability, and support as you progress toward your goals.
                  </p>
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

export default About;
