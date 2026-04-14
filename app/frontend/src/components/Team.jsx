Now let me create the remaining components:
Action: file_editor create /app/frontend/src/components/Team.jsx --file-text "import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { teamMembers } from '../data/mock';

const Team = () => {
  return (
    <section id=\"team\" className=\"py-24 lg:py-32 bg-slate-950 relative overflow-hidden\">
      {/* Background decoration */}
      <div className=\"absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl\"></div>
      
      <div className=\"max-w-7xl mx-auto px-6 relative z-10\">
        {/* Section Header */}
        <div className=\"text-center max-w-3xl mx-auto mb-16 lg:mb-20\">
          <span className=\"text-amber-400 font-semibold text-sm uppercase tracking-wider\">Our Team</span>
          <h2 className=\"text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight\">
            Meet the Experts Behind
            <span className=\"block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-2\">
              Your Success
            </span>
          </h2>
          <p className=\"text-lg text-slate-300 leading-relaxed\">
            Our team of highly qualified Chartered Accountants brings decades of combined experience to serve you better.
          </p>
        </div>

        {/* Team Grid */}
        <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8\">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id}
              className=\"bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden\"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className=\"p-0\">
                {/* Image */}
                <div className=\"relative overflow-hidden h-80\">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className=\"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500\"
                  />
                  <div className=\"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent\"></div>
                  
                  {/* Floating badge */}
                  <div className=\"absolute top-4 right-4\">
                    <Badge className=\"bg-gradient-to-r from-amber-500 to-orange-600 text-white border-none font-semibold px-3 py-1\">
                      {member.experience}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className=\"p-6 space-y-3\">
                  <div>
                    <h3 className=\"text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300\">
                      {member.name}
                    </h3>
                    <p className=\"text-amber-400 font-semibold mt-1\">
                      {member.position}
                    </p>
                  </div>
                  
                  <div className=\"flex items-center space-x-2\">
                    <Badge variant=\"outline\" className=\"border-slate-600 text-slate-300\">
                      {member.qualification}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div className=\"mt-16 text-center\">
          <div className=\"bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 max-w-3xl mx-auto\">
            <p className=\"text-slate-300 text-lg leading-relaxed\">
              Our partners are supported by a dedicated team of qualified professionals, ensuring personalized attention and expert service for every client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
"
Observation: Create successful: /app/frontend/src/components/Team.jsx
