
Action: file_editor create /app/frontend/src/components/About.jsx --file-text "import React from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: \"Precision\",
      description: \"Meticulous attention to detail in every engagement\"
    },
    {
      icon: Eye,
      title: \"Transparency\",
      description: \"Clear communication and honest relationships\"
    },
    {
      icon: Heart,
      title: \"Integrity\",
      description: \"Unwavering ethical standards in all we do\"
    }
  ];

  return (
    <section id=\"about\" className=\"py-24 lg:py-32 bg-slate-900 relative overflow-hidden\">
      {/* Background decoration */}
      <div className=\"absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl\"></div>
      
      <div className=\"max-w-7xl mx-auto px-6 relative z-10\">
        <div className=\"grid lg:grid-cols-2 gap-16 items-center\">
          {/* Left Content */}
          <div className=\"space-y-8\">
            <div>
              <span className=\"text-amber-400 font-semibold text-sm uppercase tracking-wider\">About Us</span>
              <h2 className=\"text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight\">
                Building Financial Success Stories
                <span className=\"block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-2\">
                  Since 2004
                </span>
              </h2>
            </div>

            <p className=\"text-lg text-slate-300 leading-relaxed\">
              JollyRogger Associates is a leading firm of Chartered Accountants, dedicated to providing comprehensive financial solutions to businesses and individuals. With over two decades of excellence, we've built a reputation for integrity, expertise, and client-focused service.
            </p>

            <p className=\"text-lg text-slate-300 leading-relaxed\">
              Our team of qualified professionals brings together diverse expertise in audit, taxation, business consulting, and compliance. We understand that every client is unique, and we tailor our services to meet your specific needs and objectives.
            </p>

            <div className=\"space-y-4\">
              {[
                \"Qualified and experienced CA professionals\",
                \"Personalized service for every client\",
                \"Cutting-edge technology and methodologies\",
                \"Timely delivery and responsive support\"
              ].map((item, index) => (
                <div key={index} className=\"flex items-center space-x-3 group\">
                  <div className=\"flex-shrink-0\">
                    <CheckCircle className=\"text-amber-400 group-hover:scale-110 transition-transform duration-300\" size={24} />
                  </div>
                  <span className=\"text-slate-300 text-lg\">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className=\"space-y-6\">
            <div className=\"relative rounded-2xl overflow-hidden shadow-2xl\">
              <img 
                src=\"https://images.unsplash.com/photo-1758518729908-d4220a678d81\" 
                alt=\"Our Team\"
                className=\"w-full h-80 object-cover\"
              />
              <div className=\"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent\"></div>
              <div className=\"absolute bottom-0 left-0 right-0 p-8\">
                <h3 className=\"text-2xl font-bold text-white mb-2\">Our Values</h3>
                <p className=\"text-slate-300\">Guiding principles that define who we are</p>
              </div>
            </div>

            <div className=\"grid gap-6\">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className=\"bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 group\"
                >
                  <div className=\"flex items-start space-x-4\">
                    <div className=\"flex-shrink-0\">
                      <div className=\"w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300\">
                        <value.icon className=\"text-slate-900\" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className=\"text-xl font-bold text-white mb-2\">{value.title}</h4>
                      <p className=\"text-slate-400\">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
