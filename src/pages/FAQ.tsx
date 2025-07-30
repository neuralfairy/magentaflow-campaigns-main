import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Search, MessageCircle, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What are promotional campaigns and how do they work?",
          answer: "Promotional campaigns are strategic marketing initiatives designed to increase brand awareness, drive conversions, and generate leads. Our performance-based approach focuses on measurable outcomes like ROI, conversion rates, and customer acquisition costs. We use data-driven strategies, advanced targeting, and continuous optimization to ensure your campaigns deliver real business results."
        },
        {
          question: "How quickly can I get started with your platform?",
          answer: "You can get started immediately with our 14-day free trial. The initial setup takes less than 5 minutes, and our onboarding team will help you launch your first campaign within 24 hours. We provide complete setup assistance, strategy consultation, and technical integration support to ensure a smooth start."
        },
        {
          question: "Do I need technical expertise to use your platform?",
          answer: "No technical expertise required! Our platform is designed for marketers, not developers. We provide an intuitive dashboard, drag-and-drop campaign builders, and pre-built templates. Our support team is available to help with setup, and we offer comprehensive training resources and one-on-one onboarding sessions."
        },
        {
          question: "What's included in the free trial?",
          answer: "The 14-day free trial includes full access to Professional plan features: up to 25 active campaigns, advanced analytics, A/B testing, priority support, and all optimization tools. No credit card required, and you can upgrade or cancel anytime during the trial period."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "How does your pricing work?",
          answer: "We offer three transparent pricing tiers: Starter ($99/month), Professional ($299/month), and Enterprise (custom pricing). All plans include core promotional campaign features with no hidden fees. You can upgrade or downgrade anytime, and we offer annual discounts for long-term commitments."
        },
        {
          question: "Do you offer custom pricing for large organizations?",
          answer: "Yes, we provide custom Enterprise pricing based on your specific needs, campaign volume, and requirements. Enterprise plans include dedicated account management, custom integrations, SLA guarantees, and white-label options. Contact our sales team for a personalized quote."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise accounts. All payments are processed securely with 256-bit SSL encryption, and we're PCI DSS compliant for your security."
        },
        {
          question: "Is there a money-back guarantee?",
          answer: "Yes! We offer a 30-day money-back guarantee for all paid plans. If you're not completely satisfied with our promotional campaigns platform, we'll refund your money, no questions asked. This is in addition to the 14-day free trial."
        }
      ]
    },
    {
      category: "Features & Capabilities",
      questions: [
        {
          question: "What types of promotional campaigns can I create?",
          answer: "Our platform supports all types of B2B promotional campaigns: lead generation, brand awareness, product launches, webinar promotion, content marketing, account-based marketing (ABM), retargeting, and conversion optimization campaigns. Each campaign type includes specialized templates and optimization tools."
        },
        {
          question: "How do you measure campaign performance?",
          answer: "We track comprehensive metrics including ROI, conversion rates, cost per acquisition (CPA), lifetime value (LTV), engagement rates, click-through rates, and attribution across multiple touchpoints. Our analytics dashboard provides real-time reporting with customizable KPIs and automated performance alerts."
        },
        {
          question: "What integrations do you support?",
          answer: "We integrate with 50+ popular tools including Salesforce, HubSpot, Marketo, Pardot, Google Analytics, Facebook Ads, LinkedIn Ads, Google Ads, Slack, Microsoft Teams, Zapier, and custom APIs. New integrations are added regularly based on customer requests."
        },
        {
          question: "Do you provide A/B testing capabilities?",
          answer: "Yes! Advanced A/B testing is included in Professional and Enterprise plans. Test multiple campaign variations simultaneously, including headlines, images, CTAs, targeting parameters, and landing pages. Our platform automatically optimizes for your chosen conversion goals and provides statistical significance analysis."
        }
      ]
    },
    {
      category: "Support & Security",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "We offer multiple support channels: live chat (24/7), email support (response within 4 hours), phone support (business hours), and dedicated account managers for Enterprise clients. All plans include access to our knowledge base, video tutorials, and webinar training sessions."
        },
        {
          question: "How secure is your platform?",
          answer: "Security is our top priority. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade security measures including 256-bit SSL encryption, multi-factor authentication, regular security audits, and data backup procedures. Your data is stored in secure, certified data centers."
        },
        {
          question: "Do you provide training and onboarding?",
          answer: "Yes! All plans include comprehensive onboarding with dedicated success managers, platform training sessions, strategy consultations, and access to our resource library. Enterprise clients receive custom training programs and ongoing strategy sessions."
        },
        {
          question: "What's your uptime guarantee?",
          answer: "We maintain 99.9% uptime with redundant infrastructure and 24/7 monitoring. Enterprise clients receive SLA guarantees with uptime credits for any service interruptions. Our platform is built on enterprise-grade cloud infrastructure for maximum reliability."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4">FAQ</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our promotional campaigns platform, pricing, and features.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {categoryIndex + 1}
                </span>
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={questionIndex} className="border-border bg-card">
                      <CardHeader 
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-semibold text-left">
                            {faq.question}
                          </CardTitle>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </CardHeader>
                      {isOpen && (
                        <CardContent className="pt-0">
                          <CardDescription className="text-base leading-relaxed">
                            {faq.answer}
                          </CardDescription>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="bg-secondary rounded-2xl p-12 text-center mt-20">
          <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help you with any questions about promotional campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer">
                Live Chat Support
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                Contact Support Team
              </a>
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white mt-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial today and experience the power of performance-based promotional campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;