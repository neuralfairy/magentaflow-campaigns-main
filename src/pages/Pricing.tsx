import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started with promotional campaigns",
      features: [
        "Up to 5 active campaigns",
        "Basic analytics dashboard",
        "Email support",
        "Standard templates",
        "Basic targeting options",
        "Monthly performance reports"
      ],
      cta: "Start Free Trial",
      link: "https://salescentri.com/get-started/free-trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Advanced features for growing businesses that need more sophisticated campaigns",
      features: [
        "Up to 25 active campaigns",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom templates",
        "Advanced targeting & segmentation",
        "A/B testing capabilities",
        "Real-time optimization",
        "API access",
        "Weekly strategy sessions"
      ],
      cta: "Start Free Trial",
      link: "https://salescentri.com/get-started/free-trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large organizations with complex requirements",
      features: [
        "Unlimited campaigns",
        "Custom analytics dashboard",
        "Dedicated account manager",
        "White-label solutions",
        "Advanced AI optimization",
        "Custom integrations",
        "SLA guarantees",
        "Training & onboarding",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      link: "https://salescentri.com/contact/sales-inquiry",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Advanced AI Optimization",
      price: "$199/month",
      description: "Machine learning-powered campaign optimization"
    },
    {
      name: "Custom Integrations",
      price: "$99/month",
      description: "Connect with your existing tools and platforms"
    },
    {
      name: "White-label Solution",
      price: "$299/month",
      description: "Brand the platform with your company identity"
    },
    {
      name: "Dedicated Support",
      price: "$149/month",
      description: "Priority support with dedicated account manager"
    }
  ];

  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What's included in the setup?",
      answer: "All plans include complete setup assistance, campaign strategy consultation, and technical integration support to get you started quickly."
    },
    {
      question: "Do you offer custom pricing for large organizations?",
      answer: "Yes, we offer custom Enterprise pricing based on your specific needs, volume, and requirements. Contact our sales team for a personalized quote."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing for Every Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core promotional campaign features with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-border bg-card hover:shadow-card transition-all duration-300 ${plan.popular ? 'border-primary shadow-glow' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/{plan.period}</span>}
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full" 
                  size="lg"
                  asChild
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Optional Add-ons
            </h2>
            <p className="text-lg text-muted-foreground">
              Enhance your plan with additional features and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-border bg-card text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{addon.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{addon.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We've got answers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-secondary rounded-2xl p-12 text-center mb-20">
          <Star className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're confident you'll love our promotional campaigns. If you're not completely satisfied within 30 days, we'll refund your money, no questions asked.
          </p>
          <Button variant="outline" asChild>
            <a href="https://salescentri.com/trust/security-privacy" target="_blank" rel="noopener noreferrer">
              Learn More About Our Guarantee
            </a>
          </Button>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Free Trial?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses already using our promotional campaigns to drive growth.
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
          <p className="text-sm opacity-75 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;