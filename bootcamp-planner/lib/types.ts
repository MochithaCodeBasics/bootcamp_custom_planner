export type UserPreferences = {
    name: string;
    experienceLevel: "Beginner" | "Intermediate" | "Advanced";
    primaryGoal: "Job Switch" | "Upskilling" | "Freelancing" | "Research";
    weeklyHours: number; // 5, 10, 20, 40
    interests: string[]; // ["Python", "ML", "GenAI", "Deployment"]
    targetRole: "Data Scientist" | "AI Engineer" | "ML Ops" | "Full Stack AI";
    timeline: "3 Months" | "6 Months" | "Flexible";
};

export const INITIAL_PREFS: UserPreferences = {
    name: "",
    experienceLevel: "Beginner",
    primaryGoal: "Job Switch",
    weeklyHours: 10,
    interests: [],
    targetRole: "AI Engineer",
    timeline: "6 Months"
};
