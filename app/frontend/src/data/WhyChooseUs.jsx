
Action: file_editor create /app/frontend/src/components/WhyChooseUs.jsx --file-text "import React from 'react';
import { Award, Users, Clock, Briefcase } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: Award,
      title: \"Expert Team\",
      description: \"Qualified CAs with decades of combined experience\",
      stat: \"50+\",
      label: \"Years Combined Experience\"
    },
    {
      id: 2,
      icon: Users,
      title: \"Client Focused\",
      description: \"Personalized solutions tailored to your business needs\",
      stat: \"500+\",
      label: \"Satisfied Clients\"
    },
    {
      id: 3,
      icon: Clock,
      title: \"Timely Delivery\",
      description: \"Meeting deadlines with precision and reliability\",
      stat: \"99%\",
      label: \"On-Time Delivery\"
    },
    {
      id: 4,
      icon: Briefcase,
      title: \"Comprehensive Services\",
      description: \"One-stop solution for all your financial needs\",
      stat: \"15+\",
      label: \"Service Offerings\"
    }
  ];

  return (
    <section id=\"why-us\" className=\"py-24 lg:py-32 bg-slate-900 relative overflow-hidden\">
      {/* Background image with overlay */}
      <div className=\"absolute inset-0 z-0\">
        <img 
          src=\"https://images.unsplash.com/photo-1762151662378-f40e20901824\" 
          alt=\"Background\"
          className=\"w-full h-full object-cover opacity-10\"
        />
        <div className=\"absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900\"></div>
      </div>

      {/* Decorative elements */}
      <div className=\"absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl\"></div>
      
      <div className=\"max-w-7xl mx-auto px-6 relative z-10\">
        {/* Section Header */}
        <div className=\"text-center max-w-3xl mx-auto mb-16 lg:mb-20\">
          <span className=\"text-amber-400 font-semibold text-sm uppercase tracking-wider\">Why Choose Us</span>
          <h2 className=\"text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight\">
            Experience Excellence in
            <span className=\"block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-2\">
              Financial Services
            </span>
          </h2>
          <p className=\"text-lg text-slate-300 leading-relaxed\">
            When you choose JollyRogger Associates, you're choosing a partner committed to your financial success.
          </p>
        </div>

        {/* Features Grid */}
        <div className=\"grid md:grid-cols-2 lg:grid-cols-4 gap-8\">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className=\"group relative\"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className=\"relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 hover:border-amber-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2\">
                {/* Glow effect */}
                <div className=\"absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 rounded-2xl transition-all duration-500\"></div>
                
                <div className=\"relative z-10 space-y-6\">
                  {/* Icon */}
                  <div className=\"w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6\">
                    <feature.icon className=\"text-slate-900\" size={32} />
                  </div>

                  {/* Stat */}
                  <div>
                    <div className=\"text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2\">
                      {feature.stat}
                    </div>
                    <div className=\"text-sm text-slate-400 font-medium\">
                      {feature.label}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className=\"text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300\">
                      {feature.title}
                    </h3>
                    <p className=\"text-slate-400 leading-relaxed\">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className=\"mt-20 text-center\">
          <div className=\"bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-12 shadow-2xl\">
            <h3 className=\"text-3xl font-bold text-white mb-4\">
              Ready to Experience the Difference?
            </h3>
            <p className=\"text-slate-300 text-lg mb-8 max-w-2xl mx-auto\">
              Join hundreds of satisfied clients who trust us with their financial success. Let's discuss how we can help your business thrive.
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
              <a 
                href=\"tel:+919876543210\"
                className=\"inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105\"
              >
                Call Us Now
              </a>
              <a 
                href=\"mailto:info@jollyrogger.com\"
                className=\"inline-flex items-center justify-center border-2 border-slate-600 text-white hover:bg-slate-700 font-semibold text-lg px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300\"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
