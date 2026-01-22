"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import BentoBox from "./BentoBox";

const QUOTES = [
    "The best way to predict the future is to create it.",
    "Your time is limited, don't waste it living someone else's life.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do something today that your future self will thank you for."
];

export default function QuoteWidget() {
    const [quoteIndex, setQuoteIndex] = useState(0);

    const nextQuote = () => {
        setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    };

    return (
        <BentoBox className="col-span-2 flex-row items-center justify-between min-h-[100px]">
            <div className="flex-1">
                <p className="text-[var(--text-secondary)] italic font-medium text-lg">
                    "{QUOTES[quoteIndex]}"
                </p>
            </div>
            <button
                onClick={nextQuote}
                className="ml-4 p-2 text-[var(--accent-color)] hover:bg-white/5 rounded-full transition-colors"
                title="New Quote"
            >
                <RefreshCw size={20} />
            </button>
        </BentoBox>
    );
}
