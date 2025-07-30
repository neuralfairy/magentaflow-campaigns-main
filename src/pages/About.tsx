import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Globe
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Marketing at Fortune 500 company with 15+ years in performance marketing.",
      expertise: ["Strategic Planning", "Team Leadership", "Growth Strategy"]
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in marketing automation and AI-driven optimization.",
      expertise: ["AI/ML", "Marketing Tech", "Platform Architecture"]
    },
    {
      name: "Lisa Rodriguez",
      role: "Head of Client Success",
      bio: "Customer success leader with expertise in B2B relationship management and ROI optimization.",
      expertise: ["Client Relations", "Performance Analysis", "Strategy Development"]
    },
    {
      name: "David Park",
      role: "Lead Data Scientist",
      bio: "PhD in Statistics with focus on predictive modeling and campaign optimization algorithms.",
      expertise: ["Data Science", "Predictive Analytics", "A/B Testing"]
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Results-Driven",
      description: "Every campaign we create is designed with measurable outcomes and ROI in mind."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Client-Centric",
      description: "Your success is our success. We're committed to delivering exceptional results for every client."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We continuously evolve our strategies and technology to stay ahead of industry trends."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Transparency",
      description: "Complete visibility into campaign performance with honest, data-driven reporting."
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Industry Recognition",
      stat: "15+ Awards",
      description: "Recognized for excellence in performance marketing and client satisfaction"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Happy Clients",
      stat: "500+",
      description: "Successful campaigns delivered for businesses across various industries"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Average ROI Increase",
      stat: "340%",
      description: "Consistent performance improvements across all client campaigns"
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Global Reach",
      stat: "25+ Countries",
      description: "International expertise in diverse markets and audiences"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We're on a Mission to Transform B2B Marketing
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            BusinessCurious Podcast Solutions was founded with a simple belief: every promotional campaign should deliver measurable results. We combine data science, creative strategy, and cutting-edge technology to help businesses achieve exceptional ROI.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2019 in Austin, Texas, BusinessCurious emerged from a frustration with traditional marketing agencies that focused on vanity metrics instead of real business outcomes.
              </p>
              <p>
                Our founders, Sarah Johnson and Michael Chen, recognized that B2B companies needed a different approach—one that prioritized performance, transparency, and measurable results over flashy creative campaigns.
              </p>
              <p>
                Today, we've helped over 500 businesses across 25+ countries optimize their promotional campaigns, achieving an average ROI increase of 340%. Our performance-based model ensures that our success is directly tied to yours.
              </p>
              <p>
                We're not just a marketing agency—we're your growth partners, committed to delivering the results that matter most to your business.
              </p>
            </div>
          </div>
          <div className="bg-gradient-secondary p-8 rounded-2xl border border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2019</div>
              <div className="text-muted-foreground mb-6">Founded in Austin, TX</div>
              
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground mb-6">Successful Campaigns</div>
              
              <div className="text-4xl font-bold text-primary mb-2">340%</div>
              <div className="text-muted-foreground mb-6">Average ROI Increase</div>
              
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border bg-card text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-secondary rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Milestones that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.stat}</div>
                <div className="font-semibold mb-2">{achievement.title}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Industry experts dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            To revolutionize B2B marketing by creating promotional campaigns that deliver measurable, 
            sustainable growth for our clients. We believe every marketing dollar should work harder, 
            every campaign should drive real results, and every business deserves a marketing partner 
            that's truly invested in their success.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="https://salescentri.com/company/about-us" target="_blank" rel="noopener noreferrer">
              Learn More About Our Company
            </a>
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help transform your promotional campaigns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Schedule a Meeting
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;