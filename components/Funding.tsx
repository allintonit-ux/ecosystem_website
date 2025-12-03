import React from 'react';

const Funding: React.FC = () => {
    const fundedAmount = 12345;
    const goalAmount = 67890;
    const percentage = ((fundedAmount / goalAmount) * 100).toFixed(1);
    const investorCount = 42; // You can adjust this number

    return (
        <section id="funding" className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="mx-auto w-full md:w-[90%] lg:w-[90%] xl:w-[90%] px-4 md:px-0">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Funding</h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Support This Platform by Funding and Sharing</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left side - Visual Abstract Illustration */}
                    <div className="flex items-start justify-center md:justify-end">
                        <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-slate-100 to-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col p-6">
                            {/* Mock UI Header */}
                            <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                <div className="ml-auto px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-500">X Dashboard</div>
                            </div>

                            {/* Mock Grid */}
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="bg-brand-50/50 rounded-xl p-4 border border-brand-100 flex flex-col justify-between">
                                    <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center mb-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-800">98%</div>
                                        <div className="text-xs text-slate-500">Collection Rate</div>
                                    </div>
                                </div>
                                <div className="bg-green-50/50 rounded-xl p-4 border border-green-100 flex flex-col justify-between">
                                    <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-800">-50%</div>
                                        <div className="text-xs text-slate-500">Idle Stock</div>
                                    </div>
                                </div>
                                <div className="col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-sm font-semibold text-slate-700">Real-time Inventory</div>
                                        <div className="text-xs text-brand-600 bg-brand-50 px-2 py-1 rounded">Live Updates</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-500 w-3/4"></div>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500 w-1/2"></div>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-5/6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative floating elements */}
                            <div className="absolute -right-4 top-20 bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce duration-[3000ms]">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-xs font-medium text-slate-600">PE Certified</span>
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
                                    <span className="text-sm font-bold text-brand-600">{percentage}% funded</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-brand-500 to-brand-600 h-full rounded-full transition-all duration-500"
                                        style={{ width: `${percentage}%` }}
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
                                <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98]">
                                    FUND NOW
                                </button>
                                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    Share with friends
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Funding;
