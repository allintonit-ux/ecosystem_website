import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    phone: '',
    email: '',
    comments: '',
    accepted: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.accepted) return;
    if (!form.firstName || !form.lastName || !form.company || !form.country || !form.phone || !form.email) return;

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          company: form.company,
          country: form.country,
          phone: form.phone,
          email: form.email,
          comments: form.comments,
          accepted: form.accepted,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
        setForm({ firstName: '', lastName: '', company: '', country: '', phone: '', email: '', comments: '', accepted: false });
      } else {
        alert('Error submitting form: ' + (data.message || 'Please try again'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to connect to server. Please ensure the backend is running.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Contact us</h2>
            <h3 className="text-2xl font-semibold text-white mb-3">Secure Your Phase 1 MVP Access</h3>
            <p className="text-lg text-blue-100">Join the first ecosystem platform anchored in Singapore setting global standards.</p>
            {/* <p className="text-lg text-blue-100 mb-10 max-w-2xl">
              Join the first ecosystem platform anchored in Singapore setting global standards. 
              Secure your spot for Phase 1 MVP access today.
            </p> */}
            <p className="mt-6 text-sm text-blue-300">
               Limited spots available for early adopters.<br></br>
               Priority given to regional infrastructure players.
            </p>
            
            <h3 className="mt-6 text-2xl font-semibold text-white">We're Here to Help</h3>
            <p className="text-lg text-blue-100">
              Your questions, feedbacks, and collaboration proposals are Welcome.
            </p>
            <p className="text-sm text-blue-300"> 
              Unable to find the information you are looking for or have something you wish to ask us?<br></br>
              Simply fill in this form below and we will get back to you shortly!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
            {formSubmitted && (
              <div className="mb-4 bg-green-50 text-green-700 p-3 rounded-md border border-green-200">Thanks! We'll reach out soon.</div>
            )}
            <form onSubmit={handleSubmitForm} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Company *</label>
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Country *</label>
                <select value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required>
                  <option value="">Select</option>
                  <option>Singapore</option>
                  <option>Malaysia</option>
                  <option>Indonesia</option>
                  <option>Myanmar</option>
                  <option>Vietnam</option>
                  <option>Kazakhstan</option>
                  <option>Brunei</option>
                  <option>Cambodia</option>
                  <option>Laos</option>
                  <option>Philippines</option>
                  <option>Thailand</option>
                  <option>India</option>
                  <option>China</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone number *</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Additional Comments</label>
                <textarea value={form.comments} onChange={(e) => setForm({ ...form, comments: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" rows={2} />
              </div>
              <div className="md:col-span-2 flex items-center gap-2">
                <input id="privacy" type="checkbox" checked={form.accepted} onChange={(e) => setForm({ ...form, accepted: e.target.checked })} className="w-4 h-4 border-slate-300 rounded" />
                <label htmlFor="privacy" className="text-sm text-slate-700">I agree to the privacy policy *</label>
              </div>
              <div className="md:col-span-2">
                <button type="submit" disabled={!form.accepted} className="w-full sm:w-auto px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  Let's talk <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
