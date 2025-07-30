import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Calendar,
  Users,
  HeadphonesIcon
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Book a Demo",
      description: "Schedule a personalized demo to see our promotional campaigns in action",
      cta: "Schedule Demo",
      link: "https://salescentri.com/get-started/book-demo"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Live Chat",
      description: "Get instant answers to your questions from our support team",
      cta: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Support",
      description: "Send us a detailed message and we'll respond within 24 hours",
      cta: "Contact Support",
      link: "https://salescentri.com/contact/support-request"
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Phone Support",
      description: "Speak directly with our team for immediate assistance",
      cta: "Call Support",
      link: "https://salescentri.com/contact"
    }
  ];

  const offices = [
    {
      city: "Austin",
      address: "123 Business District",
      state: "Texas 78701",
      country: "United States",
      phone: "+1 (512) 555-0123",
      email: "austin@businesscurious.com"
    }
  ];

  const salesContacts = [
    {
      title: "Sales Inquiry",
      description: "Questions about our promotional campaigns and pricing",
      link: "https://salescentri.com/contact/sales-inquiry",
      cta: "Contact Sales"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom solutions for large organizations",
      link: "https://salescentri.com/pricing/enterprise-custom",
      cta: "Enterprise Sales"
    },
    {
      title: "Partnership Opportunities",
      description: "Interested in becoming a partner or affiliate",
      link: "https://salescentri.com/contact/partnerships",
      cta: "Partner With Us"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your promotional campaigns? Our team is here to help you achieve exceptional results. Choose the best way to connect with us.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-card transition-all duration-300 text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  {method.icon}
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription className="text-base">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    {method.cta}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Office Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Office</h2>
            {offices.map((office, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    {office.city} Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <div className="text-muted-foreground">
                      {office.address}<br />
                      {office.state}<br />
                      {office.country}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-muted-foreground">{office.phone}</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">{office.email}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Business Hours</h2>
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-muted-foreground">8:00 AM - 6:00 PM CST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-muted-foreground">9:00 AM - 2:00 PM CST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="border-t border-border pt-3 mt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <HeadphonesIcon className="w-4 h-4 mr-2" />
                    24/7 Emergency Support Available for Enterprise Clients
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sales Contacts */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sales & Partnerships</h2>
            <p className="text-lg text-muted-foreground">
              Connect with the right team for your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salesContacts.map((contact, index) => (
              <Card key={index} className="border-border bg-card text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                  <CardDescription>{contact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={contact.link} target="_blank" rel="noopener noreferrer">
                      {contact.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-secondary rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
            <p className="text-lg text-muted-foreground">
              Get started immediately with these popular options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/get-started/calendly" target="_blank" rel="noopener noreferrer">
                Schedule Meeting
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank" rel="noopener noreferrer">
                Request Quote
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
          <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our team is standing by to help you with any urgent questions or technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer">
                Live Chat Support
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/contact/support-request/submit-ticket" target="_blank" rel="noopener noreferrer">
                Submit Support Ticket
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;