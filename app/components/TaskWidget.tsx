"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import BentoBox from "./BentoBox";

interface Task {
    text: string;
    completed: boolean;
}

export default function TaskWidget() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("studentTasks");
        if (saved) setTasks(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("studentTasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!input.trim()) return;
        setTasks([...tasks, { text: input, completed: false }]);
        setInput("");
    };

    const toggleTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index: number) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <BentoBox className="col-span-2 row-span-2 overflow-hidden" delay={2}>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">Priority Tasks</h3>
                    <span className="bg-[var(--accent-secondary)] text-[var(--bg-color)] px-2 py-0.5 rounded-full text-xs font-bold">
                        {tasks.length}
                    </span>
                </div>
            </div>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                    placeholder="Add a new task..."
                    className="flex-1 bg-black/20 border-none p-3 rounded-xl text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                />
                <button
                    onClick={addTask}
                    className="bg-[var(--success-color)] text-[var(--card-bg)] p-3 rounded-xl hover:opacity-90"
                >
                    <Plus size={20} />
                </button>
            </div>

            <ul className="flex-1 overflow-y-auto space-y-2 pr-1 max-h-[300px]">
                {tasks.map((task, i) => (
                    <li
                        key={i}
                        className={`flex items-center justify-between bg-black/10 p-3 rounded-xl ${task.completed ? "opacity-50" : ""
                            }`}
                    >
                        <span
                            onClick={() => toggleTask(i)}
                            className={`cursor-pointer select-none flex-1 ${task.completed ? "line-through text-[var(--text-secondary)]" : ""
                                }`}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => deleteTask(i)}
                            className="text-[var(--danger-color)] p-1 hover:bg-white/5 rounded"
                        >
                            <Trash2 size={18} />
                        </button>
                    </li>
                ))}
            </ul>
        </BentoBox>
    );
}
