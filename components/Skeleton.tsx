
import React from 'react';

export const SectionSkeleton: React.FC = () => {
    return (
        <div className="py-20 md:py-32 bg-[#262626] w-full min-h-[500px] animate-pulse">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="h-4 w-32 bg-white/5 rounded mb-6"></div>
                <div className="h-12 w-64 bg-white/10 rounded mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-4">
                            <div className="aspect-video bg-white/5 rounded-2xl w-full"></div>
                            <div className="h-4 w-24 bg-white/5 rounded"></div>
                            <div className="h-6 w-48 bg-white/10 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
