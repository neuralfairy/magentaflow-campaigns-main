import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, TrendingUp, Target, Zap, BarChart3, Users, Star } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Performance-Based Campaigns",
      description: "ROI-driven promotional campaigns that deliver measurable results and drive conversions."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Conversion Optimization",
      description: "Advanced analytics and A/B testing to maximize your campaign performance and revenue."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Real-Time Analytics",
      description: "Live tracking and reporting to monitor campaign performance and optimize in real-time."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Advanced Targeting",
      description: "Precision audience targeting to reach the right prospects at the right time."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      content: "BusinessCurious transformed our promotional campaigns. We saw a 340% increase in qualified leads within 60 days.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Growth Dynamics",
      content: "The ROI calculator helped us forecast our investment returns accurately. Exceeded expectations by 25%.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "InnovateCorp",
      content: "Their performance-based approach aligned perfectly with our goals. Outstanding results and support.",
      rating: 5
    }
  ];

  const stats = [
    { number: "340%", label: "Average ROI Increase" },
    { number: "2.5x", label: "Conversion Rate Boost" },
    { number: "500+", label: "Successful Campaigns" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Performance Campaigns That Drive Real Results
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your promotional campaigns with data-driven strategies that maximize conversions and deliver measurable ROI for your B2B business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial • Setup in minutes
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Promotional Campaigns?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our performance-based approach ensures every dollar spent delivers maximum impact on your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-card transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Marketing ROI
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop wasting budget on campaigns that don't convert. Our performance-based promotional campaigns are designed to deliver measurable results that directly impact your bottom line.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Data-driven campaign optimization",
                  "Real-time performance tracking",
                  "Advanced audience targeting",
                  "ROI-focused strategies",
                  "Conversion rate optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                  View Interactive Demo
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-secondary p-8 rounded-2xl border border-border">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">ROI Calculator</h3>
                  <p className="text-muted-foreground mb-6">
                    Calculate your potential return on investment with our promotional campaigns
                  </p>
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground">Monthly Ad Spend</div>
                      <div className="text-2xl font-bold text-primary">$50,000</div>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground">Projected ROI Increase</div>
                      <div className="text-2xl font-bold text-primary">340%</div>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground">Additional Monthly Revenue</div>
                      <div className="text-2xl font-bold text-primary">$170,000</div>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-6" asChild>
                    <a href="https://salescentri.com/get-started/contact" target="_blank" rel="noopener noreferrer">
                      Get Custom Calculation
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Growing B2B Companies
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our clients say about their campaign results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Promotional Campaigns?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of B2B companies that have maximized their ROI with our performance-based campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Schedule Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;