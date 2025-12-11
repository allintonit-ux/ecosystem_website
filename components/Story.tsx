import React, { useRef } from 'react';

const Story: React.FC = () => {
    const timelineRef = useRef<HTMLDivElement>(null);

    const scrollToNode = (index: number) => {
        if (timelineRef.current) {
            const cards = timelineRef.current.querySelectorAll('.timeline-card');
            if (cards[index]) {
                cards[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    };

    return (
        <section id="story" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The living-room blueprint: Roy and Wendy hand-design the platform's first IP architecture.
                    </p>
                </div>

                {/* Horizontal Scrollable Timeline */}
                <div className="relative mt-16 overflow-hidden">
                    <div
                        ref={timelineRef}
                        className="overflow-x-auto pb-8 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <div className="inline-flex items-start min-w-full justify-center px-8">
                            {/* First Timeline Item - Dec 4, 2025 */}
                            <div className="flex flex-col items-center timeline-card flex-shrink-0 mx-8">
                                {/* Timeline Node */}
                                <button
                                    onClick={() => scrollToNode(0)}
                                    className="bg-white border-4 border-brand-500 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer mb-8"
                                >
                                    <span className="text-base font-bold text-brand-600 whitespace-nowrap">Dec. 4, 2025</span>
                                </button>

                                {/* Vertical Line */}
                                <div className="w-1 h-8 bg-brand-500"></div>

                                {/* Card - Napkin MVP */}
                                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden w-80 mt-4">
                                    <img
                                        src="/napkin.jpeg"
                                        alt="Napkin MVP - December 4, 2025"
                                        className="w-full h-auto"
                                    />
                                    <div className="p-5 bg-gradient-to-br from-slate-50 to-white">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">Napkin MVP</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Horizontal Line */}
                            <div className="flex items-start pt-3 flex-shrink-0">
                                <div className="h-1 w-32 bg-slate-300 mt-3"></div>
                            </div>

                            {/* Second Timeline Item - Dec 10, 2025 */}
                            <div className="flex flex-col items-center timeline-card flex-shrink-0 mx-8">
                                {/* Timeline Node */}
                                <button
                                    onClick={() => scrollToNode(1)}
                                    className="bg-white border-4 border-brand-500 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer mb-8"
                                >
                                    <span className="text-base font-bold text-brand-600 whitespace-nowrap">Dec. 10, 2025</span>
                                </button>

                                {/* Vertical Line */}
                                <div className="w-1 h-8 bg-brand-500"></div>

                                {/* Card - AURA */}
                                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden w-80 mt-4">
                                    <div className="p-8 bg-gradient-to-br from-brand-50 to-white min-h-[300px] flex flex-col items-center justify-center">
                                        <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-6">
                                            <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Welcome AURA</h3>
                                        <p className="text-slate-600 text-center leading-relaxed">
                                            The day we welcomed our "first baby," AURA, built with a modest Gemini model.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Horizontal Line */}
                            <div className="flex items-start pt-3 flex-shrink-0">
                                <div className="h-1 w-32 bg-slate-300 mt-3"></div>
                            </div>

                            {/* End Node - To Be Continued */}
                            <div className="flex flex-col items-center flex-shrink-0 mx-8">
                                <div className="bg-slate-100 border-4 border-slate-300 rounded-full px-6 py-3 shadow-md">
                                    <span className="text-base font-bold text-slate-400 whitespace-nowrap">To Be Continued</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Story;
