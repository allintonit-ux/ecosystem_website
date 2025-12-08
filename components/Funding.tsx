import React, { useState } from 'react';
import Payment from './Payment';

// Pledge Form Component (based on Contact form)
const PledgeForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        company: '',
        country: '',
        phone: '',
        email: '',
        pledgeAmount: '',
        pledgeFrequency: '',
        comments: '',
        accepted: false,
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.accepted) return;
        if (!form.firstName || !form.lastName || !form.company || !form.country || !form.phone || !form.email) return;
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            onClose();
        }, 2000);
        setForm({ firstName: '', lastName: '', company: '', country: '', phone: '', email: '', pledgeAmount: '', pledgeFrequency: '', comments: '', accepted: false });
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Pledge Now</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl">×</button>
                </div>

                {formSubmitted && (
                    <div className="mb-4 bg-green-50 text-green-700 p-3 rounded-md border border-green-200">
                        Thanks for your pledge! We'll reach out soon.
                    </div>
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
                        <label className="block text-sm font-medium text-slate-700 mb-1">Contact Number *</label>
                        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Pledge Amount ($) *</label>
                        <input type="number" min="0" step="0.01" value={form.pledgeAmount} onChange={(e) => setForm({ ...form, pledgeAmount: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="0.00" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Pledge Frequency *</label>
                        <select value={form.pledgeFrequency} onChange={(e) => setForm({ ...form, pledgeFrequency: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required>
                            <option value="">Select</option>
                            <option>One-time</option>
                            <option>Monthly</option>
                            <option>Annually</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Additional Comments</label>
                        <textarea value={form.comments} onChange={(e) => setForm({ ...form, comments: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" rows={3} />
                    </div>
                    <div className="md:col-span-2 flex items-center gap-2">
                        <input id="privacy-pledge" type="checkbox" checked={form.accepted} onChange={(e) => setForm({ ...form, accepted: e.target.checked })} className="w-4 h-4 border-slate-300 rounded" />
                        <label htmlFor="privacy-pledge" className="text-sm text-slate-700">I agree to the privacy policy *</label>
                    </div>
                    <div className="md:col-span-2 flex gap-3">
                        <button type="submit" disabled={!form.accepted} className="flex-1 px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            Submit Pledge
                        </button>
                        <button type="button" onClick={onClose} className="px-8 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-semibold transition-colors">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const Funding: React.FC = () => {
    // Left card data
    const pledgersCount = 59;
    const pledgersGoal = 1000;
    const pledgePercentage = ((pledgersCount / pledgersGoal) * 100).toFixed(1);
    const totalAmount = 234678;

    // Right card data
    const fundedAmount = 12345;
    const goalAmount = 67890;
    const fundPercentage = ((fundedAmount / goalAmount) * 100).toFixed(1);
    const investorCount = 42;

    const [showPayment, setShowPayment] = useState(false);
    const [showPledgeForm, setShowPledgeForm] = useState(false);

    const handleWhatsAppSharePledge = () => {
        const shareText = `Support the X Ecosystem Platform! Help us reach our goal of ${pledgersGoal} pledgers! Currently ${pledgePercentage}% pledged with ${pledgersCount} pledgers and $${totalAmount.toLocaleString()} raised. Join us in building the future!`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleWhatsAppShareFund = () => {
        const shareText = `Support the X Ecosystem Platform! Help us reach our funding goal of S$${goalAmount.toLocaleString()}! Currently ${fundPercentage}% funded with ${investorCount} funders. Join us in building the future!`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <section id="funding" className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="mx-auto w-full md:w-[90%] lg:w-[90%] xl:w-[90%] px-4 md:px-0">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Funding</h2>
                        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Support This Platform by Funding and Sharing</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left side - Pledge card */}
                        <div className="flex items-start justify-center md:justify-end">
                            <div className="w-full max-w-md aspect-square bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center">
                                {/* Progress bar */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-slate-600">Progress</span>
                                        <span className="text-sm font-bold text-brand-600">{pledgePercentage}% pledged</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-brand-500 to-brand-600 h-full rounded-full transition-all duration-500"
                                            style={{ width: `${pledgePercentage}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Pledgers count */}
                                <div className="mb-6">
                                    <div className="text-4xl font-bold text-slate-900 mb-1">
                                        {pledgersCount} pledgers
                                    </div>
                                    <div className="text-slate-600">
                                        of <span className="font-semibold">{pledgersGoal}</span> goal
                                    </div>
                                </div>

                                {/* Total amount */}
                                <div className="mb-8">
                                    <div className="text-lg font-semibold text-slate-700">
                                        ${totalAmount.toLocaleString()}
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="space-y-3">
                                    <button
                                        onClick={() => setShowPledgeForm(true)}
                                        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        PLEDGE NOW
                                    </button>
                                    <button
                                        onClick={handleWhatsAppSharePledge}
                                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Share with friends
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Funding card */}
                        <div className="flex items-start justify-center md:justify-start">
                            <div className="w-full max-w-md aspect-square bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center">
                                {/* Progress bar */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-slate-600">Progress</span>
                                        <span className="text-sm font-bold text-brand-600">{fundPercentage}% funded</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-brand-500 to-brand-600 h-full rounded-full transition-all duration-500"
                                            style={{ width: `${fundPercentage}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Amount raised */}
                                <div className="mb-6">
                                    <div className="text-4xl font-bold text-slate-900 mb-1">
                                        S${fundedAmount.toLocaleString()}
                                    </div>
                                    <div className="text-slate-600">
                                        of <span className="font-semibold">S${goalAmount.toLocaleString()}</span> goal
                                    </div>
                                </div>

                                {/* Investors count */}
                                <div className="mb-8">
                                    <div className="text-lg font-semibold text-slate-700">
                                        {investorCount} funders
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="space-y-3">
                                    <button
                                        onClick={() => setShowPayment(true)}
                                        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        FUND NOW
                                    </button>
                                    <button
                                        onClick={handleWhatsAppShareFund}
                                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Share with friends
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showPayment && <Payment onClose={() => setShowPayment(false)} />}
            {showPledgeForm && <PledgeForm onClose={() => setShowPledgeForm(false)} />}
        </>
    );
};

export default Funding;
