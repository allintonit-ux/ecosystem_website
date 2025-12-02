import React from 'react';

const TechStack: React.FC = () => {
  const stackItems = [
    {
      title: 'AI / ML Layer',
      content: [
        'Azure OpenAI service (Enterprise ChatGPT)',
        'Power Platform AI Builder Credits',
        'Azure AI Document Intelligence'
      ]
    },
    {
      title: 'Platform & Application Layer',
      content: [
        'Azure App Service / API Management (APIM) / Event Grid / Functions'
      ]
    },
    {
      title: 'Tech Stack',
      content: [
        'UI Framework, DevOps & Collab:',
        'React, GitHub Enterprise/Azure DevOps',
        'Back End Database:',
        'MySQL/Postgresql/Google Database/Odoo'
      ]
    },
    {
      title: 'Identity & Access',
      content: [
        'Azure Entra ID + Entra External ID (MAU model)'
      ]
    },
    {
      title: 'Security & Compliance',
      content: [
        'Azure Key Vault',
        'Microsoft Defender + Purview'
      ]
    },
    {
      title: 'IP Algo + Engine',
      content: [
        'BuyerTwin Recommender™',
        'BuyerTwin MatchScore™'
      ]
    }
  ];

  return (
    <section id="tech" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Enterprise-Grade Architecture</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Built on robust Microsoft Azure infrastructure to ensure security, scalability, and AI-driven intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stackItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">{index + 1}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                {item.content.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;