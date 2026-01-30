"use client";

import { useState } from "react";
import { UserPreferences, INITIAL_PREFS } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles, Clock, Target, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface WizardProps {
    onComplete: (prefs: UserPreferences) => void;
}

const STEPS = [
    { id: "intro", title: "Let's Get Started" },
    { id: "experience", title: "Your Experience" },
    { id: "role", title: "Target Role" },
    { id: "availability", title: "Weekly Time" },
    { id: "interests", title: "Specific Interests" },
];

export function Wizard({ onComplete }: WizardProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [prefs, setPrefs] = useState<UserPreferences>(INITIAL_PREFS);
    const [isGenerating, setIsGenerating] = useState(false);

    const progress = ((currentStep + 1) / STEPS.length) * 100;

    const nextStep = () => {
        if (currentStep < STEPS.length - 1) {
            setCurrentStep(c => c + 1);
        } else {
            generate();
        }
    };

    const generate = () => {
        setIsGenerating(true);
        // Simulate thinking
        setTimeout(() => {
            onComplete(prefs);
        }, 2000);
    };

    const updatePref = (key: keyof UserPreferences, value: any) => {
        setPrefs(prev => ({ ...prev, [key]: value }));
    };

    const toggleInterest = (interest: string) => {
        setPrefs(prev => {
            const interests = prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest];
            return { ...prev, interests };
        });
    };

    if (isGenerating) {
        return (
            <Card className="w-full text-center py-20 bg-background/50 border-white/5">
                <CardContent className="flex flex-col items-center gap-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse" />
                        <Sparkles className="w-16 h-16 text-blue-400 animate-spin-slow" />
                    </div>
                    <h2 className="text-2xl font-outfit font-bold">Curating Your Path...</h2>
                    <p className="text-muted-foreground text-sm max-w-xs">
                        Analyzing {prefs.weeklyHours}hrs/week availability for a {prefs.targetRole} role...
                    </p>
                </CardContent>
            </Card>
        );
    }

    const StepWrapper = ({ children, title }: { children: React.ReactNode, title: string }) => (
        <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-3xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {title}
                </h2>
                <p className="text-muted-foreground">Step {currentStep + 1} of {STEPS.length}</p>
            </div>
            {children}
        </div>
    );

    return (
        <div className="space-y-8">
            <Progress value={progress} className="h-1" />

            <Card className="min-h-[400px] border-white/5 bg-black/20 backdrop-blur-xl">
                <CardContent className="p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* STEP 1: INTRO */}
                            {currentStep === 0 && (
                                <StepWrapper title="Welcome to the Bootcamp">
                                    <div className="space-y-4">
                                        <p className="text-lg">What should we call you?</p>
                                        <Input
                                            placeholder="Enter your name"
                                            value={prefs.name}
                                            onChange={(e) => updatePref("name", e.target.value)}
                                            className="text-lg p-6 bg-white/5 border-white/10"
                                        />
                                        <Button onClick={nextStep} disabled={!prefs.name} className="w-full h-12 text-lg group" variant="premium">
                                            Start My Journey <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </StepWrapper>
                            )}

                            {/* STEP 2: EXPERIENCE */}
                            {currentStep === 1 && (
                                <StepWrapper title="What is your current level?">
                                    <div className="grid gap-4">
                                        {["Beginner", "Intermediate", "Advanced"].map((level) => (
                                            <div
                                                key={level}
                                                className={cn(
                                                    "p-4 rounded-xl border border-white/10 cursor-pointer transition-all hover:bg-white/5 flex items-center justify-between",
                                                    prefs.experienceLevel === level && "border-blue-500 bg-blue-500/10 ring-1 ring-blue-500"
                                                )}
                                                onClick={() => {
                                                    updatePref("experienceLevel", level as any);
                                                    setTimeout(nextStep, 300);
                                                }}
                                            >
                                                <div>
                                                    <h3 className="font-semibold text-lg">{level}</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {level === "Beginner" && "New to coding or data science."}
                                                        {level === "Intermediate" && "Familiar with Python/SQL basics."}
                                                        {level === "Advanced" && "Working professional looking to specialize."}
                                                    </p>
                                                </div>
                                                {prefs.experienceLevel === level && <Check className="text-blue-500" />}
                                            </div>
                                        ))}
                                    </div>
                                </StepWrapper>
                            )}

                            {/* STEP 3: ROLE */}
                            {currentStep === 2 && (
                                <StepWrapper title="What is your target goal?">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { id: "Data Scientist", icon: <Target />, desc: "Focus on Math, Stats, & ML Modeling" },
                                            { id: "AI Engineer", icon: <Rocket />, desc: "Focus on LLMs, RAG, & Deployment" },
                                            { id: "ML Ops", icon: <Clock />, desc: "Focus on Pipelines, Cloud & Infra" },
                                            { id: "Full Stack AI", icon: <Sparkles />, desc: "End-to-End Apps with GenAI" }
                                        ].map((role) => (
                                            <div
                                                key={role.id}
                                                className={cn(
                                                    "p-6 rounded-xl border border-white/10 cursor-pointer transition-all hover:bg-white/5 flex flex-col gap-3",
                                                    prefs.targetRole === role.id && "border-purple-500 bg-purple-500/10"
                                                )}
                                                onClick={() => {
                                                    updatePref("targetRole", role.id as any);
                                                }}
                                            >
                                                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center bg-white/5", prefs.targetRole === role.id && "bg-purple-500 text-white")}>
                                                    {role.icon}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">{role.id}</h3>
                                                    <p className="text-xs text-muted-foreground">{role.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button onClick={nextStep} className="w-full h-12 mt-4" variant="outline">
                                        Continue <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </StepWrapper>
                            )}

                            {/* STEP 4: AVAILABILITY */}
                            {currentStep === 3 && (
                                <StepWrapper title="Weekly Availability">
                                    <div className="space-y-8">
                                        <div className="text-center">
                                            <span className="text-6xl font-bold font-outfit text-blue-400">{prefs.weeklyHours}</span>
                                            <span className="text-xl text-muted-foreground"> hours/week</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="5"
                                            max="40"
                                            step="5"
                                            value={prefs.weeklyHours}
                                            onChange={(e) => updatePref("weeklyHours", parseInt(e.target.value))}
                                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                        />
                                        <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>Casual (5h)</span>
                                            <span>Part-time (20h)</span>
                                            <span>Full-time (40h)</span>
                                        </div>
                                        <Button onClick={nextStep} className="w-full h-12" variant="outline">
                                            Next Step
                                        </Button>
                                    </div>
                                </StepWrapper>
                            )}

                            {/* STEP 5: INTERESTS */}
                            {currentStep === 4 && (
                                <StepWrapper title="Specific Interests">
                                    <p className="text-sm text-muted-foreground mb-4">Select any specific topics you want to prioritize.</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Generative AI", "Computer Vision", "NLP", "Financial Data", "Healthcare AI", "Robotics", "Cloud Computing", "Web Scraping"].map((interest) => (
                                            <div
                                                key={interest}
                                                onClick={() => toggleInterest(interest)}
                                                className={cn(
                                                    "px-4 py-2 rounded-full border border-white/10 text-sm cursor-pointer transition-all",
                                                    prefs.interests.includes(interest) ? "bg-white text-black border-white" : "hover:bg-white/10"
                                                )}
                                            >
                                                {interest}
                                            </div>
                                        ))}
                                    </div>
                                    <Button onClick={nextStep} className="w-full h-12 mt-8" variant="premium">
                                        Generate My Plan
                                    </Button>
                                </StepWrapper>
                            )}

                        </motion.div>
                    </AnimatePresence>
                </CardContent>
            </Card>
        </div>
    );
}
