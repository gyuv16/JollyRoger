
Action: file_editor create /app/frontend/src/components/Services.jsx --file-text "import React from 'react';
import { FileCheck, Calculator, TrendingUp, BookOpen, Receipt, Building2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const iconMap = {
  FileCheck,
  Calculator,
  TrendingUp,
  BookOpen,
  Receipt,
  Building2
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: \"Audit & Assurance\",
      description: \"Comprehensive audit services ensuring compliance and transparency in your financial operations with meticulous attention to detail.\",
      icon: \"FileCheck\"
    },
    {
      id: 2,
      title: \"Tax Planning & Compliance\",
      description: \"Strategic tax planning and timely compliance services to optimize your tax liabilities while staying within regulatory frameworks.\",
      icon: \"Calculator\"
    },
    {
      id: 3,
      title: \"Business Consulting\",
      description: \"Expert guidance on financial strategy, business restructuring, and growth planning to take your business to new heights.\",
      icon: \"TrendingUp\"
    },
    {
      id: 4,
      title: \"Accounting Services\",
      description: \"End-to-end accounting solutions including bookkeeping, financial reporting, and management accounting services.\",
      icon: \"BookOpen\"
    },
    {
      id: 5,
      title: \"GST Services\",
      description: \"Complete GST registration, filing, and compliance services with expert handling of complex GST regulations.\",
      icon: \"Receipt\"
    },
    {
      id: 6,
      title: \"Company Formation\",
      description: \"Seamless company registration and incorporation services for startups and established businesses alike.\",
      icon: \"Building2\"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id=\"services\" className=\"py-24 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden\">
      {/* Background decoration */}
      <div className=\"absolute top-1/2 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl\"></div>
      
      <div className=\"max-w-7xl mx-auto px-6 relative z-10\">
        {/* Section Header */}
        <div className=\"text-center max-w-3xl mx-auto mb-16 lg:mb-20\">
          <span className=\"text-amber-400 font-semibold text-sm uppercase tracking-wider\">Our Services</span>
          <h2 className=\"text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight\">
            Comprehensive Financial
            <span className=\"block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-2\">
              Solutions
            </span>
          </h2>
          <p className=\"text-lg text-slate-300 leading-relaxed\">
            From audit and assurance to strategic business consulting, we offer a complete suite of professional services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8\">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id}
                className=\"bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group service-card\"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className=\"p-8 space-y-6\">
                  {/* Icon */}
                  <div className=\"relative\">
                    <div className=\"w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6\">
                      <IconComponent className=\"text-slate-900\" size={32} />
                    </div>
                    <div className=\"absolute -top-2 -right-2 w-20 h-20 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all duration-300\"></div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className=\"text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300\">
                      {service.title}
                    </h3>
                    <p className=\"text-slate-400 leading-relaxed\">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button 
                    onClick={scrollToContact}
                    variant=\"ghost\" 
                    className=\"text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 p-0 h-auto font-semibold group/btn\"
                  >
                    Learn More
                    <ArrowRight className=\"ml-2 group-hover/btn:translate-x-1 transition-transform duration-300\" size={16} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className=\"mt-16 text-center\">
          <p className=\"text-slate-300 text-lg mb-6\">
            Don't see what you're looking for? We offer customized solutions for unique business needs.
          </p>
          <Button 
            onClick={scrollToContact}
            className=\"bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold text-lg px-8 py-6 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105\"
          >
            Discuss Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};


