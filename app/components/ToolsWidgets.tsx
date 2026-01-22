"use client";

import { useEffect, useState } from "react";
import { SquarePen, Link as LinkIcon, ExternalLink } from "lucide-react";
import BentoBox from "./BentoBox";

export function ScratchpadWidget() {
    const [note, setNote] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("studentScratchpad");
        if (saved) setNote(saved);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(e.target.value);
        localStorage.setItem("studentScratchpad", e.target.value);
    };

    return (
        <BentoBox delay={4}>
            <div className="flex items-center gap-2 text-[var(--text-secondary)] font-semibold mb-2">
                <SquarePen size={18} />
                <span>Scratchpad</span>
            </div>
            <textarea
                value={note}
                onChange={handleChange}
                placeholder="Jot down quick thoughts..."
                className="w-full h-full min-h-[100px] bg-transparent resize-none focus:outline-none text-[var(--text-primary)] placeholder-white/20"
            />
        </BentoBox>
    );
}

export function LinksWidget() {
    return (
        <BentoBox delay={5}>
            <div className="flex items-center gap-2 text-[var(--text-secondary)] font-semibold mb-3">
                <LinkIcon size={18} />
                <span>Quick Links</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <a
                    href="https://classroom.google.com"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-3 bg-black/20 rounded-xl hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-colors group"
                >
                    <ExternalLink size={20} className="mb-1" />
                    <span className="text-xs font-semibold">Classroom</span>
                </a>
                <a
                    href="https://chatgpt.com"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-3 bg-black/20 rounded-xl hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-colors group"
                >
                    <ExternalLink size={20} className="mb-1" />
                    <span className="text-xs font-semibold">ChatGPT</span>
                </a>
                <a
                    href="https://youtube.com/watch?v=MVeeRCRw5kM&feature=youtu.be"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-3 bg-black/20 rounded-xl hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-colors group"
                >
                    <ExternalLink size={20} className="mb-1" />
                    <span className="text-xs font-semibold">Lofi Beats</span>
                </a>
            </div>
        </BentoBox>
    );
}
