import { RoadmapModule, ROADMAP_DATA } from "@/lib/roadmapData";
import { UserPreferences } from "@/lib/types";

export type PlannedModule = RoadmapModule & {
    realDurationWeeks: number;
    startWeek: number;
    endWeek: number;
    status: "locked" | "current" | "completed";
};

export function generateRoadmap(prefs: UserPreferences): PlannedModule[] {
    let modules = [...ROADMAP_DATA];

    // 1. Filter by Experience
    if (prefs.experienceLevel === "Intermediate") {
        // Skip absolute basics
        modules = modules.filter(m => !["py-fundamentals", "py-oop"].includes(m.id));
    } else if (prefs.experienceLevel === "Advanced") {
        // Skip all foundations and standard ML
        modules = modules.filter(m => m.category !== "Foundation" && m.category !== "Machine Learning");
    }

    // 2. Filter by Role/Goal
    if (prefs.targetRole === "Data Scientist") {
        // Deprioritize heavy engineering/GenAI apps, focus on Math/Stats/ML
        // Keep everything but maybe mark some DL/GenAI as optional (not implemented in MVP)
    } else if (prefs.targetRole === "AI Engineer") {
        // Focus on Deployment, DL, GenAI
    }

    // 3. Calculate Pace
    // Standard pace assumes ~10h/week. 
    // If user has 20h, they go 2x faster.
    const speedFactor = prefs.weeklyHours / 10;

    let currentWeek = 0;

    return modules.map((mod, index) => {
        // Calculate adjusted duration (min 0.5 weeks)
        const adjustedDuration = Math.max(0.5, mod.durationWeeks / speedFactor);

        const planned: PlannedModule = {
            ...mod,
            realDurationWeeks: parseFloat(adjustedDuration.toFixed(1)),
            startWeek: parseFloat(currentWeek.toFixed(1)),
            endWeek: parseFloat((currentWeek + adjustedDuration).toFixed(1)),
            status: index === 0 ? "current" : "locked"
        };

        currentWeek += adjustedDuration;
        return planned;
    });
}
