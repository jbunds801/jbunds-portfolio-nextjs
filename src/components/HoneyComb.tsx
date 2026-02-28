'use client';

import React from 'react';

// ====================================
// TYPE DEFINITIONS
// ====================================

/**
 * Animation types available for honeycomb cells
 * - 'none': No animation
 * - 'shimmer': Shimmering/glowing effect
 * - 'pulse': Pulsing scale animation
 * - 'colorShift': Smooth color transition
 * - 'float': Floating up and down
 */
type AnimationType = 'none' | 'shimmer' | 'pulse' | 'colorShift' | 'float';

/**
 * Configuration for a single row in the honeycomb grid
 */
interface RowConfig {
    /** Number of honeycombs in this row */
    count: number;
    /** Optional: which column indices to skip (0-based). Example: [0, 2] skips first and third positions */
    skip?: number[];
    /** Optional: horizontal offset for centering/positioning (in pixels or percentage) */
    offset?: string;
}

/**
 * Props for the main HoneyComb component
 */
interface HoneyCombProps {
    /** Configuration for each row. Array length determines number of rows */
    rows: RowConfig[];
    /** Size of each honeycomb in pixels */
    size?: number;
    /** Base color for honeycombs (can use hex, rgb, or Tailwind color classes) */
    color?: string;
    /** Optional secondary color for gradients/color shifts */
    secondaryColor?: string;
    /** Gap between honeycombs in pixels */
    gap?: number;
    /** Animation to apply to all honeycombs */
    animation?: AnimationType;
    /** Animation duration in seconds */
    animationDuration?: number;
    /** Optional: custom class name for the container */
    className?: string;
}

// ====================================
// MAIN COMPONENT
// ====================================

/**
 * HoneyComb Component
 * 
 * Creates a customizable grid of hexagonal (honeycomb) shapes with animations.
 * You can configure how many honeycombs appear in each row, skip positions,
 * and apply various animations and colors.
 * 
 * Example usage:
 * <HoneyComb 
 *   rows={[
 *     { count: 5 },
 *     { count: 6, skip: [0, 5] },
 *     { count: 5, offset: '30px' }
 *   ]}
 *   color="#fbbf24"
 *   animation="shimmer"
 * />
 */
export default function HoneyComb({
    rows,
    size = 80,
    color = '#fbbf24', // Default: amber/honey color
    secondaryColor = '#f59e0b',
    gap = 8,
    animation = 'none',
    animationDuration = 2,
    className = '',
}: HoneyCombProps) {

    return (
        <div className={`honeycomb-container ${className}`}>
            {/* Loop through each row configuration */}
            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="honeycomb-row"
                    style={{
                        // Apply custom offset if specified, otherwise center the row
                        marginLeft: row.offset || '0',
                        marginBottom: `${gap}px`,
                        display: 'flex',
                        gap: `${gap}px`,
                        justifyContent: row.offset ? 'flex-start' : 'center',
                    }}
                >
                    {/* Create an array with 'count' elements and map over it */}
                    {Array.from({ length: row.count }).map((_, colIndex) => {
                        // Check if this position should be skipped
                        const shouldSkip = row.skip?.includes(colIndex);

                        // If skipped, render an invisible placeholder to maintain spacing
                        if (shouldSkip) {
                            return (
                                <div
                                    key={colIndex}
                                    style={{ width: size, height: size }}
                                    className="honeycomb-placeholder"
                                />
                            );
                        }

                        // Render the actual honeycomb hexagon
                        return (
                            <Hexagon
                                key={colIndex}
                                size={size}
                                color={color}
                                secondaryColor={secondaryColor}
                                animation={animation}
                                animationDuration={animationDuration}
                                // Add slight delay to each cell for staggered animation effect
                                animationDelay={rowIndex * 0.1 + colIndex * 0.05}
                            />
                        );
                    })}
                </div>
            ))}

            {/* Embedded styles for animations */}
            <style jsx>{`
        .honeycomb-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
      `}</style>
        </div>
    );
}

// ====================================
// HEXAGON SUB-COMPONENT
// ====================================

/**
 * Individual hexagon cell component
 * This creates a single honeycomb hexagon shape using CSS clip-path
 */
interface HexagonProps {
    size: number;
    color: string;
    secondaryColor: string;
    animation: AnimationType;
    animationDuration: number;
    animationDelay: number;
}

function Hexagon({
    size,
    color,
    secondaryColor,
    animation,
    animationDuration,
    animationDelay,
}: HexagonProps) {

    // Generate the appropriate CSS class for the animation
    const animationClass = animation !== 'none' ? `animate-${animation}` : '';

    return (
        <>
            <div
                className={`hexagon ${animationClass}`}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    // Hexagon shape using CSS clip-path
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                    backgroundColor: color,
                    // Animation properties
                    animationDuration: `${animationDuration}s`,
                    animationDelay: `${animationDelay}s`,
                    // Store secondary color for animations that need it
                    ['--secondary-color' as any]: secondaryColor,
                    ['--primary-color' as any]: color,
                }}
            />

            {/* CSS Animations */}
            <style jsx>{`
        .hexagon {
          position: relative;
        }
        
        /* SHIMMER ANIMATION - Creates a shimmering light effect */
        @keyframes shimmer {
          0%, 100% {
            filter: brightness(1);
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
          50% {
            filter: brightness(1.3);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          }
        }
        
        .animate-shimmer {
          animation: shimmer infinite ease-in-out;
        }
        
        /* PULSE ANIMATION - Scales the hexagon in and out */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        
        .animate-pulse {
          animation: pulse infinite ease-in-out;
        }
        
        /* COLOR SHIFT ANIMATION - Transitions between two colors */
        @keyframes colorShift {
          0%, 100% {
            background-color: var(--primary-color);
          }
          50% {
            background-color: var(--secondary-color);
          }
        }
        
        .animate-colorShift {
          animation: colorShift infinite ease-in-out;
        }
        
        /* FLOAT ANIMATION - Makes the hexagon float up and down */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
        </>
    );
}

// ====================================
// HELPER FUNCTIONS (for future use)
// ====================================

/**
 * Helper function to create a centered honeycomb pattern
 * Creates rows with alternating counts for a natural honeycomb look
 * 
 * @param rows - Number of rows
 * @param maxPerRow - Maximum honeycombs per row
 * @returns Array of RowConfig objects
 */
export function createHoneycombPattern(rows: number, maxPerRow: number): RowConfig[] {
    return Array.from({ length: rows }).map((_, index) => {
        // Alternate between max and max-1 for natural honeycomb offset
        const isEvenRow = index % 2 === 0;
        return {
            count: isEvenRow ? maxPerRow : maxPerRow - 1,
            offset: isEvenRow ? '0' : `${40}px`, // Offset odd rows for honeycomb pattern
        };
    });
}

/**
 * Helper function to create a diamond/rhombus pattern
 * 
 * @param size - How many rows (will create size*2-1 total rows)
 * @returns Array of RowConfig objects forming a diamond
 */
export function createDiamondPattern(size: number): RowConfig[] {
    const rows: RowConfig[] = [];

    // Expanding part (top half)
    for (let i = 1; i <= size; i++) {
        rows.push({ count: i });
    }

    // Contracting part (bottom half)
    for (let i = size - 1; i >= 1; i--) {
        rows.push({ count: i });
    }

    return rows;
}
