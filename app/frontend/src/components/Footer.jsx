
Action: file_editor create /app/frontend/src/components/Footer.jsx --file-text "import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Our Team', id: 'team' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'Audit & Assurance',
    'Tax Planning',
    'Business Consulting',
    'GST Services',
    'Accounting Services',
    'Company Formation'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className=\"bg-slate-950 border-t border-slate-800\">
      <div className=\"max-w-7xl mx-auto px-6 py-16 lg:py-20\">
        {/* Main Footer Content */}
        <div className=\"grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12\">
          {/* Company Info */}
          <div className=\"space-y-6\">
            <div className=\"flex items-center space-x-3\">
              <div className=\"w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg\">
                <span className=\"text-slate-900 font-bold text-xl\">JR</span>
              </div>
              <div>
                <h3 className=\"text-lg font-bold text-white\">{companyInfo.name}</h3>
                <p className=\"text-xs text-slate-400\">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className=\"text-slate-400 leading-relaxed\">
              Your trusted partner in financial excellence. Providing comprehensive CA services with integrity and expertise since 2004.
            </p>
            <div className=\"flex space-x-4\">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className=\"w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group\"
                >
                  <social.icon className=\"text-slate-400 group-hover:text-white transition-colors duration-300\" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className=\"text-lg font-bold text-white mb-6\">Quick Links</h4>
            <ul className=\"space-y-3\">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className=\"text-slate-400 hover:text-amber-400 transition-colors duration-300 text-left\"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className=\"text-lg font-bold text-white mb-6\">Our Services</h4>
            <ul className=\"space-y-3\">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className=\"text-slate-400 hover:text-amber-400 transition-colors duration-300 text-left\"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className=\"text-lg font-bold text-white mb-6\">Contact Us</h4>
            <ul className=\"space-y-4\">
              <li className=\"flex items-start space-x-3\">
                <Phone className=\"text-amber-400 flex-shrink-0 mt-1\" size={20} />
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className=\"text-slate-400 hover:text-amber-400 transition-colors duration-300\">
                  {companyInfo.phone}
                </a>
              </li>
              <li className=\"flex items-start space-x-3\">
                <Mail className=\"text-amber-400 flex-shrink-0 mt-1\" size={20} />
                <a href={`mailto:${companyInfo.email}`} className=\"text-slate-400 hover:text-amber-400 transition-colors duration-300 break-all\">
                  {companyInfo.email}
                </a>
              </li>
              <li className=\"flex items-start space-x-3\">
                <MapPin className=\"text-amber-400 flex-shrink-0 mt-1\" size={20} />
                <span className=\"text-slate-400\">
                  {companyInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=\"pt-8 border-t border-slate-800\">
          <div className=\"flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0\">
            <p className=\"text-slate-400 text-sm text-center md:text-left\">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className=\"flex space-x-6 text-sm\">
              <button className=\"text-slate-400 hover:text-amber-400 transition-colors duration-300\">
                Privacy Policy
              </button>
              <button className=\"text-slate-400 hover:text-amber-400 transition-colors duration-300\">
                Terms of Service
              </button>
              <button className=\"text-slate-400 hover:text-amber-400 transition-colors duration-300\">
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"
Observation: Create successful: /app/frontend/src/components/Footer.jsx
