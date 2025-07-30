import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">BusinessCurious</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Creating performance-based promotional campaigns that drive conversions and maximize ROI for B2B businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://salescentri.com/solutions/psa-suite" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">PSA Suite</a></li>
              <li><a href="https://salescentri.com/services/data-enrichment" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Data Enrichment</a></li>
              <li><a href="https://salescentri.com/services/sdr-service" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">SDR Service</a></li>
              <li><a href="https://salescentri.com/platforms/lead-management/lead-generation" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Lead Generation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Austin, Texas</p>
              <p>United States</p>
              <div className="space-y-1">
                <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">
                  Contact Us
                </a>
                <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">
                  Support
                </a>
                <a href="https://salescentri.com/contact/partnerships" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">
                  Partnerships
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} BusinessCurious Podcast Solutions. All rights reserved.
          </div>
          
          {/* Legal Links */}
          <div className="flex space-x-6 text-sm text-muted-foreground mb-4 md:mb-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="https://salescentri.com/trust/security-privacy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Security</a>
          </div>

          {/* Powered by link */}
          <div className="text-sm text-muted-foreground">
            <a 
              href="https://salescentri.com?utm_source=BusinessCuriousPodcast.com&utm_medium=footer&utm_campaign=partner_network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;