"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingStarsProps {
    color?: "white" | "pink";
    count?: number;
    className?: string;
}

const FloatingStars = ({
                           color = "white",
                           count = 30,
                           className = ""
                       }: FloatingStarsProps) => {
    // 1. Add a mounted state
    const [isMounted, setIsMounted] = useState(false);

    // 2. Set mounted to true after the first render
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const stars = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 3 + 3,
            delay: Math.random() * 2
        }));
    }, [count]);

    // 3. Don't render anything on the server.
    // This prevents the mismatch because the server will render 'null'
    // and the client will start with 'null' then update to show stars.
    if (!isMounted) return null;

    const bgClass = color === "pink" ? "bg-[#e51990]" : "bg-white";
    const baseOpacity = color === "pink" ? 0.4 : 0.2;
    const peakOpacity = color === "pink" ? 0.8 : 0.7;

    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className={`absolute rounded-full ${bgClass}`}
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        opacity: baseOpacity
                    } as React.CSSProperties}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [baseOpacity, peakOpacity, baseOpacity],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: 'easeInOut'
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingStars;