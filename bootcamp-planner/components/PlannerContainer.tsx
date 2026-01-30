"use client";

import { useState } from "react";
import { UserPreferences, INITIAL_PREFS } from "@/lib/types";
import { Wizard } from "@/components/wizard/Wizard";
import { RoadmapView } from "@/components/roadmap/RoadmapView";
import { AnimatePresence, motion } from "framer-motion";

export default function PlannerContainer() {
    const [hasPlan, setHasPlan] = useState(false);
    const [preferences, setPreferences] = useState<UserPreferences>(INITIAL_PREFS);

    const handlePlanGenerated = (prefs: UserPreferences) => {
        setPreferences(prefs);
        setHasPlan(true);
    };

    return (
        <main className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
            <header className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse" />
                    <h1 className="font-outfit font-bold text-xl tracking-tight">AI Career<span className="text-blue-400">Architect</span></h1>
                </div>
            </header>

            <AnimatePresence mode="wait">
                {!hasPlan ? (
                    <motion.div
                        key="wizard"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full"
                    >
                        <Wizard onComplete={handlePlanGenerated} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="roadmap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex-1"
                    >
                        <RoadmapView preferences={preferences} />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
