import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Spinning 3D CA Logo */}
      <div className="absolute top-32 right-10 lg:right-32 opacity-20 lg:opacity-30">
        <div className="ca-logo-3d w-32 h-32 lg:w-48 lg:h-48">
          <div className="ca-logo-inner bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center">
            <span className="text-slate-900 font-bold text-5xl lg:text-7xl">CA</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block">
              <span className="bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold border border-amber-500/30 backdrop-blur-sm">
                Chartered Accountants & Business Advisors
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Your Trusted
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-2">
                Financial Partners
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Excellence in audit, taxation, and business consulting. We transform complex financial challenges into strategic opportunities for growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold text-lg px-8 py-6 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-2 border-slate-600 text-white hover:bg-slate-800 font-semibold text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Shield className="text-amber-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Users className="text-amber-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Award className="text-amber-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-sm text-slate-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1758518725921-1eb74ed293be" 
                alt="Professional Consultation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-slate-700/50 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Award className="text-slate-900" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">ISO Certified</div>
                  <div className="text-sm text-slate-400">Quality Assurance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-amber-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


