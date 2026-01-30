"use client";

import { useMemo } from "react";
import { UserPreferences } from "@/lib/types";
import { generateRoadmap, PlannedModule } from "@/lib/plannerEngine";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Need to create Badge
import { Button } from "@/components/ui/button";
import { Download, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface RoadmapViewProps {
    preferences: UserPreferences;
}

export function RoadmapView({ preferences }: RoadmapViewProps) {
    const roadmap = useMemo(() => generateRoadmap(preferences), [preferences]);

    const totalWeeks = roadmap[roadmap.length - 1]?.endWeek || 0;

    return (
        <div className="space-y-8 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-6 gap-4">
                <div>
                    <h2 className="text-3xl font-outfit font-bold mb-2">Your Personalized Roadmap</h2>
                    <p className="text-muted-foreground max-w-xl">
                        Based on your goal to become a <span className="text-blue-400 font-semibold">{preferences.targetRole}</span>,
                        we've designed a <span className="text-white font-bold">{Math.ceil(totalWeeks)} week</span> curriculum.
                    </p>
                </div>
                <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" /> Export PDF
                </Button>
            </div>

            <div className="relative space-y-8 pl-8 md:pl-0">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

                {roadmap.map((module, index) => (
                    <motion.div
                        key={module.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline node */}
                        <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-[11px] h-[11px] rounded-full bg-blue-500 border-2 border-background z-10 top-6 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                        {/* Content Slot */}
                        <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                            {/* Time Label (Show on empty side in desktop? Or inline?) */}
                            <div className="md:hidden text-xs text-blue-400 font-mono mb-2">
                                Week {Math.floor(module.startWeek)} - {Math.ceil(module.endWeek)}
                            </div>
                        </div>

                        <div className="flex-1">
                            <Card className="hover:border-blue-500/50 transition-colors group relative overflow-hidden">
                                {module.isProject && (
                                    <div className="absolute top-0 right-0 p-2">
                                        <span className="bg-purple-500/20 text-purple-300 text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold">Project</span>
                                    </div>
                                )}
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <CardTitle className="text-lg group-hover:text-blue-400 transition-colors">
                                                {module.title}
                                            </CardTitle>
                                            <CardDescription className="text-xs font-mono text-blue-300/70">
                                                {module.durationWeeks} Weeks • {module.category}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-1">
                                        {module.topics.slice(0, 3).map(topic => (
                                            <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-white/30" /> {topic}
                                            </li>
                                        ))}
                                        {module.topics.length > 3 && (
                                            <li className="text-xs text-muted-foreground/50 italic">
                                                + {module.topics.length - 3} more topics
                                            </li>
                                        )}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
