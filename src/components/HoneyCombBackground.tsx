'use client';

import HoneyComb from './HoneyComb';

/**
 * HoneyComb Background Component
 * 
 * A fixed/absolute positioned honeycomb pattern that sits behind page content
 * Use this in your layout to have honeycombs appear on all pages
 */
export default function HoneyCombBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
            {/* You can customize this honeycomb pattern */}
            <HoneyComb
                rows={[
                    { count: 8 },
                    { count: 9, offset: '40px' },
                    { count: 8 },
                    { count: 9, offset: '40px' },
                    { count: 8 },
                    { count: 9, offset: '40px' },
                    { count: 8 },
                ]}
                size={100}
                color="#fbbf24"
                secondaryColor="#f59e0b"
                animation="shimmer"
                animationDuration={4}
                gap={10}
            />
        </div>
    );
}
