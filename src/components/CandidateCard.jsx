import React from 'react';
import { Linkedin, MapPin, Briefcase } from 'lucide-react';

const CandidateCard = () => {
  const candidates = [
    {
      name: "Lydia Watson",
      role: "Chief Technical Officer @ Plaid",
      location: "Boston, USA",
      match: "Excellent match",
      likelihood: "Highly likely to move",
      description: "Created ML infrastructure at Plaid, transaction processing over $100B per year, led a team of 30 engineers, extensive experience with compliance, financial security and distributed systems.",
      strengths: ["Exceeds financial systems scaling requirements"],
      weaknesses: ["Financial compliance experience not highlighted"]
    },
    {
      name: "Peter Samson",
      role: "Chief Technical Officer @ Meta",
      location: "Boston, USA",
      match: "Excellent match",
      likelihood: "Highly likely to move",
      description: "We think Peter is likely to move since he has been at Meta for almost 2 years, following the recent team restructuring in their AR division.",
      strengths: ["Specialized backend infrastructure experience"],
      weaknesses: ["Financial compliance experience not highlighted"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Evaluation Precision
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deep evaluation goes beyond resume basics to spot true role fit
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {candidates.map((candidate, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              {/* Candidate Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                    <p className="text-sm text-gray-600">{candidate.role}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="px-3 py-1 bg-black text-white text-sm rounded-lg hover:bg-gray-800">
                    Invite to apply
                  </button>
                </div>
              </div>

              {/* Location and Icons */}
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{candidate.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Briefcase className="w-4 h-4" />
                  <span>Full-time</span>
                </div>
              </div>

              {/* Match Status */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">{candidate.match}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">{candidate.likelihood}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {candidate.description}
              </p>

              {/* Strengths & Weaknesses */}
              <div className="space-y-3">
                <div>
                  <div className="text-green-600 text-sm font-medium mb-1">✓ Strengths</div>
                  <ul className="text-sm text-gray-700 list-disc list-inside">
                    {candidate.strengths.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-orange-600 text-sm font-medium mb-1">⚠ Weaknesses</div>
                  <ul className="text-sm text-gray-700 list-disc list-inside">
                    {candidate.weaknesses.map((weakness, i) => (
                      <li key={i}>{weakness}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidateCard;