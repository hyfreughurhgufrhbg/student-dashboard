"use client";

import { useEffect, useState } from "react";
import BentoBox from "./BentoBox";

export default function ClockWidget() {
    const [time, setTime] = useState("00:00");
    const [date, setDate] = useState("Loading...");
    const [greeting, setGreeting] = useState("Good Morning.");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                })
            );
            setDate(
                now.toLocaleDateString("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                })
            );

            const hour = now.getHours();
            if (hour < 12) setGreeting("Good Morning.");
            else if (hour < 17) setGreeting("Good Afternoon.");
            else setGreeting("Good Evening.");
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <BentoBox className="col-span-2 justify-center bg-gradient-to-br from-white/5 to-[var(--card-bg)] border-l-4 border-[var(--accent-color)]" delay={0}>
                <h1 className="text-4xl font-bold mb-1">{greeting}</h1>
                <p className="text-[var(--text-secondary)] text-lg">{date}</p>
            </BentoBox>

            <BentoBox className="justify-center items-center" delay={1}>
                <div className="text-5xl font-bold text-[var(--accent-secondary)] tabular-nums">
                    {time}
                </div>
            </BentoBox>
        </>
    );
}
