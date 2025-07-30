import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  BarChart3, 
  Zap, 
  TrendingUp, 
  Users, 
  Shield, 
  Globe, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Performance-Based Campaigns",
      description: "ROI-driven promotional campaigns designed to deliver measurable results and drive conversions.",
      benefits: [
        "Guaranteed ROI targets",
        "Pay-per-performance models",
        "Risk-free campaign launches",
        "Transparent reporting"
      ],
      badge: "Most Popular"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive analytics dashboard with real-time insights and detailed performance metrics.",
      benefits: [
        "Real-time campaign tracking",
        "Custom dashboard creation",
        "Automated reporting",
        "Performance predictions"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Conversion Optimization",
      description: "AI-powered optimization tools that continuously improve campaign performance and maximize conversions.",
      benefits: [
        "A/B testing automation",
        "Landing page optimization",
        "Conversion funnel analysis",
        "ROI maximization"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Audience Targeting",
      description: "Precision targeting using advanced demographic, behavioral, and psychographic data.",
      benefits: [
        "Custom audience creation",
        "Lookalike audience modeling",
        "Behavioral targeting",
        "Geographic segmentation"
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Marketing Automation",
      description: "Streamlined workflows and automated campaign management for maximum efficiency.",
      benefits: [
        "Campaign automation",
        "Lead nurturing sequences",
        "Trigger-based actions",
        "Multi-channel coordination"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Brand Safety & Compliance",
      description: "Enterprise-grade security and compliance features to protect your brand reputation.",
      benefits: [
        "Brand safety monitoring",
        "Compliance automation",
        "Risk assessment tools",
        "Quality assurance"
      ]
    }
  ];

  const integrations = [
    "Salesforce CRM",
    "HubSpot",
    "Marketo",
    "Pardot",
    "Google Analytics",
    "Facebook Ads",
    "LinkedIn Ads",
    "Google Ads",
    "Slack",
    "Microsoft Teams",
    "Zapier",
    "Webhook APIs"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4">Features</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Tools for Performance Marketing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, optimize, and scale promotional campaigns that drive real business results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="relative border-border bg-card hover:shadow-card transition-all duration-300">
              {feature.badge && (
                <Badge className="absolute -top-2 left-6 bg-primary text-primary-foreground">
                  {feature.badge}
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-secondary rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing tools and platforms for a unified marketing ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="bg-background p-4 rounded-lg text-center border border-border hover:border-primary transition-colors"
              >
                <span className="text-sm font-medium">{integration}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/solutions/psa-suite/integrations" target="_blank" rel="noopener noreferrer">
                View All Integrations
              </a>
            </Button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Built for Performance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">&lt; 5 min</div>
              <div className="text-muted-foreground">Setup Time</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">&lt; 1s</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">SOC 2</div>
              <div className="text-muted-foreground">Compliance</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and see how our promotional campaigns can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                Interactive Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;