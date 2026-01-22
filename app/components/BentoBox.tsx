"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoBoxProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function BentoBox({ children, className = "", delay = 0 }: BentoBoxProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            className={`bg-[var(--card-bg)] rounded-[20px] p-6 shadow-lg flex flex-col transition-colors duration-200 hover:transform hover:-translate-y-[5px] hover:bg-[var(--card-hover)] ${className}`}
        >
            {children}
        </motion.div>
    );
}
