import React from 'react';

const Sector: React.FC = () => {
  const sectors = [
    { title: 'Oil & Gas', desc: 'Field Exploration, Operational Support, Process Safety, Industrial Supply' },
    { title: 'Construction', desc: 'Power Equipment, Safety Gear, Material Handling, Site Measurement' },
    { title: 'Marine Logistic', desc: 'Vessel Management, Port Operations, Cargo Logistics, Route Tracking' },
    { title: 'MRO', desc: 'Maintenance, Repair, Overhaul' },
    { title: 'EPC', desc: 'Engineering, Procurement, Construction' },
    { title: 'ESG', desc: 'Environmental, Social, Governance' },
  ];

  return (
    <section id="sector" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto w-full md:w-[80%] lg:w-[75%] xl:w-[70%] px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Sector</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Industries We Serve</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((s, i) => (
            <div key={s.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">{i + 1}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sector;
