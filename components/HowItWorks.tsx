import React, { useState, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    phone: '',
    email: '',
    accepted: false,
  });

  const handlePlayClick = () => {
    if (!isUnlocked) {
      setShowForm(true);
    }
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.accepted) return;
    if (!form.firstName || !form.lastName || !form.company || !form.country || !form.phone || !form.email) return;

    // Simulate API call
    setTimeout(() => {
      setIsUnlocked(true);
      setShowForm(false);
      // Auto-play video after unlocking
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 500);
  };

  return (
    <section id="how" className="py-20 bg-slate-50">
      <div className="mx-auto w-full md:w-[80%] lg:w-[75%] xl:w-[70%] px-4 md:px-0">
        <div className="mb-12 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
          <p className="mt-4 text-lg text-slate-600">X functions as a B2B2C ecosystem connecting Sellers to Buyers for transactions, with Project Engineers (PEs) utilizing its features to procure, manage, and oversee supplies.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
            {/* Video Container */}
            <div className="relative pb-[56.25%] rounded-lg overflow-hidden bg-slate-900">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                controls={isUnlocked}
                poster="/video-poster.jpg"
                onPlay={(e) => {
                  if (!isUnlocked) {
                    e.preventDefault();
                    (e.target as HTMLVideoElement).pause();
                    handlePlayClick();
                  }
                }}
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play Button Overlay (shown when not unlocked) */}
              {!isUnlocked && !showForm && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer hover:bg-black/40 transition-colors"
                  onClick={handlePlayClick}
                >
                  <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-brand-600 fill-current ml-1" />
                  </div>
                </div>
              )}

              {/* Form Overlay */}
              {showForm && !isUnlocked && (
                <div className="absolute inset-0 bg-white overflow-y-auto">
                  <div className="min-h-full flex items-center justify-center p-4">
                    <div className="max-w-xl w-full">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-brand-600 mb-1">Unlock the demo: Submit to watch!</h3>
                        <p className="text-sm text-slate-600">Just fill out this quick form for instant access to our demo.</p>
                      </div>

                      <form onSubmit={handleSubmitForm} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">First Name *</label>
                          <input
                            value={form.firstName}
                            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                            className="w-full px-2 py-1.5 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">Last Name *</label>
                          <input
                            value={form.lastName}
                            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                            className="w-full px-2 py-1.5 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-xs font-medium text-slate-700 mb-1">Company *</label>
                          <input
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            className="w-full px-2 py-1.5 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">Country *</label>
                          <select
                            value={form.country}
                            onChange={(e) => setForm({ ...form, country: e.target.value })}
                            className="w-full px-2 py-1.5 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                            required
                          >
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
                          <label className="block text-xs font-medium text-slate-700 mb-1">Contact Number *</label>
                          <input
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-2 py-1.5 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-xs font-medium text-slate-700 mb-1">Email *</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-2 py-1.5 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                            required
                          />
                        </div>
                        <div className="md:col-span-2 flex items-center gap-2">
                          <input
                            id="privacy-how"
                            type="checkbox"
                            checked={form.accepted}
                            onChange={(e) => setForm({ ...form, accepted: e.target.checked })}
                            className="w-4 h-4 border-slate-300 rounded"
                          />
                          <label htmlFor="privacy-how" className="text-sm text-slate-700">I agree to the privacy policy *</label>
                        </div>
                        <div className="md:col-span-2">
                          <button
                            type="submit"
                            disabled={!form.accepted}
                            className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Submit to Watch <Play className="w-5 h-5 fill-current" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
