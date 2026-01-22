"use client";

import { useEffect, useState } from "react";
import { Hourglass } from "lucide-react";
import BentoBox from "./BentoBox";

export default function TimerWidget() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState<"focus" | "break">("focus");

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
            alert("Timer Finished!");
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };

    const setTimerMode = (newMode: "focus" | "break") => {
        setMode(newMode);
        setIsRunning(false);
        setTimeLeft(newMode === "focus" ? 25 * 60 : 5 * 60);
    };

    const toggleTimer = () => setIsRunning(!isRunning);

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(mode === "focus" ? 25 * 60 : 5 * 60);
    };

    return (
        <BentoBox className="items-center text-center justify-between row-span-2" delay={3}>
            <div className="flex items-center gap-2 text-[var(--text-secondary)] font-semibold">
                <Hourglass size={18} />
                <span>Focus Timer</span>
            </div>

            <div className="text-6xl font-bold my-4 tabular-nums">
                {formatTime(timeLeft)}
            </div>

            <div className="flex gap-2 w-full justify-center mb-4">
                <button className="btn-primary flex-1" onClick={toggleTimer}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button className="btn-secondary" onClick={resetTimer}>
                    Reset
                </button>
            </div>

            <div className="flex gap-1 bg-black/20 p-1 rounded-xl w-full">
                <button
                    onClick={() => setTimerMode("focus")}
                    className={`flex-1 py-1 rounded-lg text-sm transition-colors ${mode === "focus"
                            ? "bg-[var(--card-hover)] text-[var(--text-primary)]"
                            : "text-[var(--text-secondary)]"
                        }`}
                >
                    Focus
                </button>
                <button
                    onClick={() => setTimerMode("break")}
                    className={`flex-1 py-1 rounded-lg text-sm transition-colors ${mode === "break"
                            ? "bg-[var(--card-hover)] text-[var(--text-primary)]"
                            : "text-[var(--text-secondary)]"
                        }`}
                >
                    Break
                </button>
            </div>
        </BentoBox>
    );
}
