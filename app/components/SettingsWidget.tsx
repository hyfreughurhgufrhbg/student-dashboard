"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { Github, Users } from "lucide-react";
import BentoBox from "./BentoBox";

export default function SettingsWidget() {
    const { setTheme } = useTheme();
    const [visitors, setVisitors] = useState(1240);

    useEffect(() => {
        setVisitors(Math.floor(Math.random() * (1500 - 800) + 800));

        const interval = setInterval(() => {
            setVisitors((v) => v + Math.floor(Math.random() * 3) - 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <BentoBox className="col-span-2 flex-row items-center justify-between" delay={6}>
            <div className="flex items-center gap-4">
                <span className="font-semibold text-[var(--text-secondary)]">Theme:</span>
                <div className="flex gap-2">
                    <button
                        onClick={() => setTheme("mauve")}
                        className="w-6 h-6 rounded-full bg-[#cba6f7] hover:scale-110 transition-transform ring-2 ring-transparent focus:ring-white"
                    />
                    <button
                        onClick={() => setTheme("blue")}
                        className="w-6 h-6 rounded-full bg-[#89b4fa] hover:scale-110 transition-transform ring-2 ring-transparent focus:ring-white"
                    />
                    <button
                        onClick={() => setTheme("green")}
                        className="w-6 h-6 rounded-full bg-[#a6e3a1] hover:scale-110 transition-transform ring-2 ring-transparent focus:ring-white"
                    />
                    <button
                        onClick={() => setTheme("peach")}
                        className="w-6 h-6 rounded-full bg-[#fab387] hover:scale-110 transition-transform ring-2 ring-transparent focus:ring-white"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                    <Users size={16} />
                    <span>{visitors.toLocaleString()} Online</span>
                </div>

                <a href="https://github.com/piyushkadam96k" target="_blank" className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors">
                    <Github size={20} />
                    <span className="font-semibold hidden sm:inline">My Profile</span>
                </a>
            </div>
        </BentoBox>
    );
}
