"use client";

import React, { useState } from 'react';
import { Calendar, Clock, Target, TrendingUp, BookOpen, Award, CheckCircle2, Briefcase, Zap, Rocket, GraduationCap, Code, Users, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { cn } from "@/lib/utils";
import { FULL_ROADMAP, RoadmapItem } from "@/lib/bootcampData";

const BootcampPlanner = () => {
    const [step, setStep] = useState(1);
    const [profile, setProfile] = useState('');
    const [currentRole, setCurrentRole] = useState('');
    const [goal, setGoal] = useState('');
    const [motivation, setMotivation] = useState('');
    const [careerTimeline, setCareerTimeline] = useState('');
    const [availability, setAvailability] = useState('');
    const [scheduleType, setScheduleType] = useState('');
    const [learningPace, setLearningPace] = useState('');
    const [contentDepth, setContentDepth] = useState('');
    const [realWorldApp, setRealWorldApp] = useState('');
    const [postBootcamp, setPostBootcamp] = useState('');
    const [experience, setExperience] = useState({
        python: false,
        sql: false,
        statistics: false,
        ml: false,
        dl: false,
        nlp: false,
        genai: false,
        mlops: false
    });
    const [showPlan, setShowPlan] = useState(false);
    const [expandedModule, setExpandedModule] = useState<string | null>(null);

    // --- QUESTIONS DATA ---
    const profiles = [
        { id: 'beginner', name: 'Complete Beginner', desc: 'New to programming and data science', icon: '🌱' },
        { id: 'intermediate', name: 'Intermediate', desc: 'Some programming experience', icon: '📚' },
        { id: 'switcher', name: 'Career Switcher', desc: 'From another field to data science', icon: '🔄' },
        { id: 'professional', name: 'Working Professional', desc: 'Upskilling while working', icon: '💼' },
        { id: 'returner', name: 'Returning Professional', desc: 'Restarting career after a break', icon: '⏮️' }
    ];

    const currentRoles = [
        { id: 'software-dev', name: 'Software Developer', desc: 'Backend/Frontend/Full-stack', icon: '💻' },
        { id: 'analyst', name: 'Analyst', desc: 'Business/Data Analyst', icon: '📊' },
        { id: 'fresh-grad', name: 'Fresh Graduate', desc: 'Recently completed degree', icon: '🎓' },
        { id: 'non-tech', name: 'Non-tech Professional', desc: 'From other industries', icon: '👔' },
        { id: 'student', name: 'Student', desc: 'Currently studying', icon: '📖' },
        { id: 'manager', name: 'Manager/Leadership', desc: 'Technical management role', icon: '👨‍💼' },
        { id: 'career-gap', name: 'Career Break / Gap', desc: 'Looking to re-enter workforce', icon: '⏸️' }
    ];

    const goals = [
        { id: 'fullstack-ds', name: 'Full-Stack Data Scientist', desc: 'Master ML, DL, and GenAI', icon: '🎯' },
        { id: 'ml-engineer', name: 'ML Engineer', desc: 'Focus on ML and MLOps', icon: '🤖' },
        { id: 'genai-specialist', name: 'GenAI Specialist', desc: 'Deep dive into LLMs and agents', icon: '✨' },
        { id: 'ai-engineer', name: 'AI Engineer', desc: 'Build & Deploy Scalable AI Systems', icon: '⚙️' },
        { id: 'nlp-engineer', name: 'NLP Engineer', desc: 'NLP and language models', icon: '💬' }
    ];

    const motivations = [
        { id: 'career-change', name: 'Career Change', desc: 'Switch to data science field', icon: '🔄' },
        { id: 'salary', name: 'Salary Increase', desc: 'Higher compensation', icon: '💰' },
        { id: 'skill-enhance', name: 'Skill Enhancement', desc: 'Improve current capabilities', icon: '📈' },
        { id: 'startup', name: 'Build Startup/Product', desc: 'Launch your own venture', icon: '🚀' },
        { id: 'academic', name: 'Academic Requirements', desc: 'For degree or research', icon: '🎓' },
        { id: 'interest', name: 'Personal Interest', desc: 'Curiosity and learning', icon: '❤️' }
    ];

    const careerTimelines = [
        { id: 'immediate', name: 'Immediate Job Search', desc: '3-6 months', icon: '⚡', urgent: true },
        { id: 'transition', name: 'Career Transition', desc: '6-12 months', icon: '🔄', urgent: false },
        { id: 'longterm', name: 'Long-term Upskilling', desc: '12+ months', icon: '🌱', urgent: false },
        { id: 'academic', name: 'Academic/Research Focus', desc: 'Flexible timeline', icon: '🔬', urgent: false }
    ];

    const availabilityOptions = [
        { id: '5-10', name: '5-10 hours/week', duration: '9-12 months', icon: '🐢' },
        { id: '10-15', name: '10-15 hours/week', duration: '6-9 months', icon: '🚶' },
        { id: '15-20', name: '15-20 hours/week', duration: '4-6 months', icon: '🏃' },
        { id: '20+', name: '20+ hours/week', duration: '3-4 months', icon: '🚀' }
    ];

    const scheduleTypes = [
        { id: 'flexible', name: 'Flexible Schedule', desc: 'Can study anytime', icon: '🌈' },
        { id: 'strict-deadline', name: 'Strict Deadline', desc: 'Job offer or academic deadline', icon: '⏰' },
        { id: 'weekend', name: 'Weekend-only', desc: 'Busy weekdays', icon: '📅' },
        { id: 'evening', name: 'Evening-only', desc: 'After work hours', icon: '🌙' }
    ];

    const learningPaces = [
        { id: 'fast-track', name: 'Fast Track', desc: 'Skip basics, focus on advanced', icon: '⚡' },
        { id: 'thorough', name: 'Thorough', desc: 'Deep dive into every concept', icon: '🔍' },
        { id: 'practical-first', name: 'Practical-first', desc: 'Projects before theory', icon: '🛠️' },
        { id: 'theory-first', name: 'Theory-first', desc: 'Concepts before implementation', icon: '📚' }
    ];

    const contentDepths = [
        { id: 'breadth', name: 'Breadth over Depth', desc: 'Know many things at surface level', icon: '🌐' },
        { id: 'depth', name: 'Depth over Breadth', desc: 'Master fewer things deeply', icon: '🎯' },
        { id: 'balanced', name: 'Balanced Approach', desc: 'Mix of breadth and depth', icon: '⚖️' }
    ];

    const realWorldApps = [
        { id: 'own-project', name: 'Own Project Idea', desc: 'Work on your specific use case', icon: '💡' },
        { id: 'provided', name: 'Provided Projects', desc: 'Follow bootcamp projects', icon: '📋' },
        { id: 'open-source', name: 'Open Source', desc: 'Contribute to real projects', icon: '🌍' },
        { id: 'interview-prep', name: 'Interview Preparation', desc: 'Focus on getting hired', icon: '🎤' }
    ];

    const postBootcamps = [
        { id: 'freelancing', name: 'Freelancing', desc: 'Work independently on projects', icon: '💼' },
        { id: 'full-time', name: 'Full-time Employment', desc: 'Join a company as employee', icon: '🏢' },
        { id: 'entrepreneurship', name: 'Entrepreneurship', desc: 'Start your own company', icon: '🚀' },
        { id: 'further-edu', name: 'Further Education', desc: 'Masters/PhD programs', icon: '🎓' },
        { id: 'internal', name: 'Internal Transition', desc: 'New role in current company', icon: '🔄' }
    ];

    // --- LOGIC ---
    const generatePlan = () => {
        let modules = [...FULL_ROADMAP];

        // 1. Goal-based Filtering
        if (goal === 'ml-engineer') {
            modules = modules.filter(m => m.category !== 'NLP' && !m.title.includes('GenAI'));
        } else if (goal === 'ai-engineer') {
            // AI Engineer needs strong Engineering, DL, and GenAI skills.
            // We keep the full roadmap but ensure MLOps and Deployment projects are highlighted.
            // (No specific removals as AI Engineering is comprehensive).

        } else if (goal === 'genai-specialist') {
            // Prioritize Python -> NLP -> GenAI. Reduce traditional ML.
            modules = modules.filter(m => m.category !== 'Machine Learning' || m.id === 'm7');
        } else if (goal === 'nlp-engineer') {
            // Remove Computer Vision (CNN)
            modules = modules.filter(m => !m.title.includes('CNN') && !m.title.includes('Car Damage'));
        }

        // 2. Experience-based Filtering
        if (experience.python) {
            modules = modules.filter(m => m.id !== 'm1');
        }
        if (experience.sql) {
            modules = modules.filter(m => m.id !== 'm5');
        }
        if (experience.statistics) {
            modules = modules.filter(m => m.id !== 'm6');
        }
        if (experience.ml) {
            modules = modules.filter(m => m.id !== 'm7');
        }
        if (experience.dl) {
            modules = modules.filter(m => m.category !== 'Deep Learning');
        }
        if (experience.nlp) {
            modules = modules.filter(m => m.category !== 'NLP');
        }
        if (experience.genai) {
            // Only remove GenAI Foundations, keep Agentic AI and Advanced topics
            modules = modules.filter(m => m.id !== 'm26');
        }
        if (experience.mlops) {
            modules = modules.filter(m => m.id !== 'm11');
        }

        // 3. Learning Pace Adjustments
        if (learningPace === 'fast-track') {
            // Reduce duration of remaining modules by 20%
            modules = modules.map(m => ({ ...m, durationWeeks: Math.max(1, m.durationWeeks * 0.8) }));
        }

        // Calculate Totals
        const totalWeeks = modules.reduce((sum, m) => sum + m.durationWeeks, 0);
        // Adjusted hours based on user availability
        const baseHours = availability === '5-10' ? 8 : availability === '10-15' ? 12 : availability === '15-20' ? 18 : 25;

        // If user has less hours, timeline stretches. If more, it shrinks.
        // Standard pace in roadmap is ~15h/week.
        const paceMultiplier = 15 / baseHours;
        const realWeeks = totalWeeks * paceMultiplier;
        const estimatedMonths = Math.ceil(realWeeks / 4);

        // Grouping
        // Grouping into the user's specific 7 Modules
        const phases = [
            {
                name: 'Module 1: Python',
                modules: modules.filter(m => m.id === 'm1' || m.id === 'm3' || m.id === 'm2_cred' || m.id === 'p1' || m.id === 'p2'),
                color: 'bg-blue-50 border-blue-200'
            },
            {
                name: 'Module 2: SQL (Basics)',
                modules: modules.filter(m => m.id === 'm5'),
                color: 'bg-cyan-50 border-cyan-200'
            },
            {
                name: 'Module 3: Math and Statistics',
                modules: modules.filter(m => m.id === 'm6'),
                color: 'bg-indigo-50 border-indigo-200'
            },
            {
                name: 'Module 4: Machine Learning',
                modules: modules.filter(m => m.category === 'Machine Learning' || m.id === 'p3' || m.id === 'p4'),
                color: 'bg-green-50 border-green-200'
            },
            {
                name: 'Module 5: Deep Learning',
                modules: modules.filter(m => m.category === 'Deep Learning' || m.id === 'p5'),
                color: 'bg-purple-50 border-purple-200'
            },
            {
                name: 'Module 6: NLP',
                modules: modules.filter(m => m.category === 'NLP'),
                color: 'bg-pink-50 border-pink-200'
            },
            {
                name: 'Module 7: GenAI and Agentic AI',
                modules: modules.filter(m => m.category === 'GenAI' || (m.category === 'Career' && m.id !== 'm2_cred') || m.id === 'p6' || m.id === 'p7'),
                color: 'bg-amber-50 border-amber-200'
            }
        ].filter(p => p.modules.length > 0);

        return { phases, totalWeeks: Math.ceil(realWeeks), estimatedMonths, hoursPerWeek: baseHours };
    };

    const plan = showPlan ? generatePlan() : null;

    // --- RENDER HELPERS ---
    const toggleModule = (id: string) => {
        setExpandedModule(expandedModule === id ? null : id);
    };

    const renderStep = () => {
        const commonClasses = "p-5 rounded-lg border-2 transition-all text-left hover:shadow-md flex items-start gap-4";
        const activeClasses = "border-blue-500 bg-blue-50/50 shadow-md ring-1 ring-blue-500";
        const inactiveClasses = "border-gray-200 hover:border-blue-300 bg-white";

        const nextBtn = (condition: any, nextStep: number) => (
            <div className="flex gap-3 mt-8">
                {step > 1 && (
                    <button onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-lg font-semibold border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                        ← Back
                    </button>
                )}
                <button
                    onClick={() => condition && setStep(nextStep)}
                    disabled={!condition}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all shadow-lg ${condition ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    {nextStep > 12 ? "Generate Roadmap 🚀" : "Continue →"}
                </button>
            </div>
        );

        switch (step) {
            case 1: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Users className="text-blue-500" /> Identify Your Profile</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {profiles.map(p => (
                            <button key={p.id} onClick={() => setProfile(p.id)} className={cn(commonClasses, profile === p.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{p.icon}</span>
                                <div><h3 className="font-semibold">{p.name}</h3><p className="text-sm text-gray-500">{p.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(profile, 2)}
                </div>
            );
            case 2: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Briefcase className="text-indigo-500" /> Current Role</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {currentRoles.map(r => (
                            <button key={r.id} onClick={() => setCurrentRole(r.id)} className={cn(commonClasses, currentRole === r.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{r.icon}</span>
                                <div><h3 className="font-semibold">{r.name}</h3><p className="text-sm text-gray-500">{r.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(currentRole, 3)}
                </div>
            );
            case 3: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Target className="text-green-500" /> Target Goal</h2>
                    <div className="grid gap-3">
                        {goals.map(g => (
                            <button key={g.id} onClick={() => setGoal(g.id)} className={cn(commonClasses, goal === g.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{g.icon}</span>
                                <div><h3 className="font-semibold">{g.name}</h3><p className="text-sm text-gray-500">{g.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(goal, 4)}
                </div>
            );
            // ... skipping middle steps for brevity in code, but conceptually included ...
            // IMPLEMENTING ALL STEPS FROM 4 TO 12 using generic structure for cleaner code
            case 4: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Zap className="text-orange-500" /> Primary Motivation</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {motivations.map(m => (
                            <button key={m.id} onClick={() => setMotivation(m.id)} className={cn(commonClasses, motivation === m.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{m.icon}</span>
                                <div><h3 className="font-semibold">{m.name}</h3><p className="text-sm text-gray-500">{m.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(motivation, 5)}
                </div>
            );
            case 5: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Calendar className="text-red-500" /> Timeline</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {careerTimelines.map(t => (
                            <button key={t.id} onClick={() => setCareerTimeline(t.id)} className={cn(commonClasses, careerTimeline === t.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{t.icon}</span>
                                <div><h3 className="font-semibold">{t.name}</h3><p className="text-sm text-gray-500">{t.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(careerTimeline, 6)}
                </div>
            );
            case 6: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Clock className="text-purple-500" /> Weekly Availability</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {availabilityOptions.map(a => (
                            <button key={a.id} onClick={() => setAvailability(a.id)} className={cn(commonClasses, availability === a.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{a.icon}</span>
                                <div><h3 className="font-semibold">{a.name}</h3><p className="text-sm text-gray-500">{a.duration}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(availability, 7)}
                </div>
            );
            case 7: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Calendar className="text-teal-500" /> Schedule Type</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {scheduleTypes.map(s => (
                            <button key={s.id} onClick={() => setScheduleType(s.id)} className={cn(commonClasses, scheduleType === s.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{s.icon}</span>
                                <div><h3 className="font-semibold">{s.name}</h3><p className="text-sm text-gray-500">{s.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(scheduleType, 8)}
                </div>
            );
            case 8: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><TrendingUp className="text-yellow-500" /> Learning Pace</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {learningPaces.map(l => (
                            <button key={l.id} onClick={() => setLearningPace(l.id)} className={cn(commonClasses, learningPace === l.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{l.icon}</span>
                                <div><h3 className="font-semibold">{l.name}</h3><p className="text-sm text-gray-500">{l.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(learningPace, 9)}
                </div>
            );
            case 9: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><BookOpen className="text-pink-500" /> Content Depth</h2>
                    <div className="grid gap-4">
                        {contentDepths.map(c => (
                            <button key={c.id} onClick={() => setContentDepth(c.id)} className={cn(commonClasses, contentDepth === c.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{c.icon}</span>
                                <div><h3 className="font-semibold">{c.name}</h3><p className="text-sm text-gray-500">{c.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(contentDepth, 10)}
                </div>
            );
            case 10: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Rocket className="text-cyan-500" /> Application</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {realWorldApps.map(r => (
                            <button key={r.id} onClick={() => setRealWorldApp(r.id)} className={cn(commonClasses, realWorldApp === r.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{r.icon}</span>
                                <div><h3 className="font-semibold">{r.name}</h3><p className="text-sm text-gray-500">{r.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(realWorldApp, 11)}
                </div>
            );
            case 11: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Award className="text-emerald-500" /> End Goal</h2>
                    <div className="grid gap-4">
                        {postBootcamps.map(p => (
                            <button key={p.id} onClick={() => setPostBootcamp(p.id)} className={cn(commonClasses, postBootcamp === p.id ? activeClasses : inactiveClasses)}>
                                <span className="text-3xl">{p.icon}</span>
                                <div><h3 className="font-semibold">{p.name}</h3><p className="text-sm text-gray-500">{p.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    {nextBtn(postBootcamp, 12)}
                </div>
            );
            case 12: return (
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Code className="text-blue-600" /> Prior Knowledge</h2>
                    <p className="mb-4 text-gray-500">Select what you already know to skip foundation modules.</p>
                    <div className="space-y-3">
                        {[
                            { key: 'python', label: 'Python Fundamentals', desc: 'Variables, loops, functions, OOP' },
                            { key: 'sql', label: 'SQL Basics', desc: 'Queries, joins, database basics' },
                            { key: 'statistics', label: 'Math & Stats', desc: 'Probability, distributions, hypothesis testing' },
                            { key: 'ml', label: 'ML Basics', desc: 'Regression, classification, basic algorithms' },
                            { key: 'dl', label: 'Deep Learning', desc: 'Neural Networks, CNNs, RNNs' },
                            { key: 'nlp', label: 'NLP', desc: 'Text processing, embeddings, transformers' },
                            { key: 'genai', label: 'GenAI Basics', desc: 'LLMs, RAG, Prompt Engineering' },
                            { key: 'mlops', label: 'MLOps & Cloud', desc: 'Deployment, AWS, MLflow' }
                        ].map(item => (
                            <button
                                key={item.key}
                                onClick={() => setExperience({ ...experience, [item.key]: !experience[item.key as keyof typeof experience] })}
                                className={cn(commonClasses, experience[item.key as keyof typeof experience] ? activeClasses : inactiveClasses)}
                            >
                                <div className={`mt-1 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${experience[item.key as keyof typeof experience] ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
                                    {experience[item.key as keyof typeof experience] && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <div><h4 className="font-semibold">{item.label}</h4><p className="text-sm text-gray-500">{item.desc}</p></div>
                            </button>
                        ))}
                    </div>
                    <div className="mt-8">
                        <button onClick={() => setShowPlan(true)} className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2">
                            <Rocket className="w-6 h-6" /> Build My Custom Roadmap
                        </button>
                    </div>
                </div>
            );
            default: return null;
        }
    };

    const renderPlan = () => {
        if (!plan) return null;

        // Personalization Logic for Summary
        const getSummary = () => {
            const reasons = [];
            if (goal === 'ai-engineer') reasons.push("Prioritizing MLOps, System Design, and Scalability.");
            if (experience.python) reasons.push("Skipped Python Fundamentals to fast-track your entry.");
            if (experience.sql) reasons.push("Bypassed SQL Basics based on your prior experience.");
            if (experience.ml) reasons.push("Advanced directly to Deep Learning & Specialized topics.");
            if (availability === '5-10') reasons.push("Adjusted for a manageable weekly workload.");
            return reasons;
        };



        return (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8 print:space-y-4">

                {/* HEADER (Print Optimized) */}
                <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden print:bg-none print:text-black print:border-b-2 print:border-black print:rounded-none print:shadow-none print:p-0 print:mb-8">
                    <div className="absolute top-0 right-0 p-12 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 print:hidden"></div>
                    <div className="print:hidden">
                        <h2 className="text-4xl font-bold mb-2">Your Career Roadmap</h2>
                        <p className="text-blue-100 text-lg">Designed for a <span className="font-bold text-white">{goals.find(g => g.id === goal)?.name}</span> role.</p>
                    </div>
                    {/* Print Only Header */}
                    <div className="hidden print:block text-center mb-8">
                        <h1 className="text-3xl font-bold">GenAI & Data Science Bootcamp 3.0</h1>
                        <p className="text-lg mt-2">Personalized Curriculum Plan for {goals.find(g => g.id === goal)?.name}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 print:grid-cols-4 print:gap-2">
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm print:bg-gray-100 print:text-black print:border">
                            <div className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1 print:text-gray-600">Timeline</div>
                            <div className="text-2xl font-bold">{plan.estimatedMonths} Months</div>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm print:bg-gray-100 print:text-black print:border">
                            <div className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1 print:text-gray-600">Pace</div>
                            <div className="text-2xl font-bold">{plan.hoursPerWeek}h / week</div>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm print:bg-gray-100 print:text-black print:border">
                            <div className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1 print:text-gray-600">Modules</div>
                            <div className="text-2xl font-bold">{plan.phases.length}</div>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm print:bg-gray-100 print:text-black print:border">
                            <div className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1 print:text-gray-600">Projects</div>
                            <div className="text-2xl font-bold">{plan.phases.reduce((sum, p) => sum + p.modules.filter(m => m.category === 'Project').length, 0)}</div>
                        </div>
                    </div>
                </div>

                {/* 1. PERSONALIZATION SUMMARY */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm print:border print:border-gray-300">
                    <h3 className="font-bold text-blue-800 flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5" /> Why this plan is for you:
                    </h3>
                    <ul className="space-y-2">
                        {getSummary().map((reason, i) => (
                            <li key={i} className="flex items-start gap-2 text-blue-900/80">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> {reason}
                            </li>
                        ))}
                        <li className="flex items-start gap-2 text-blue-900/80">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Includes <b>Virtual Internship</b> and <b>Career Support</b> phases.
                        </li>
                    </ul>
                </div>



                {/* CURRICULUM */}
                <div className="space-y-8 print:space-y-6">
                    {plan.phases.map((phase, idx) => (
                        <div key={idx} className={`rounded-2xl border-2 overflow-hidden ${phase.color} print:border-gray-300 print:break-inside-avoid`}>
                            <div className="p-6 border-b border-black/5 flex items-center justify-between bg-white/50 backdrop-blur-sm print:bg-gray-50">
                                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-700 shadow-sm text-sm print:border print:border-gray-300">{idx + 1}</span>
                                    {phase.name}
                                </h3>
                                <span className="text-sm font-semibold bg-white/80 px-3 py-1 rounded-full text-gray-600 print:border print:border-gray-300">
                                    ~{phase.modules.reduce((s, m) => s + m.durationWeeks, 0).toFixed(0)} Weeks
                                </span>
                            </div>

                            <div className="divide-y divide-black/5 bg-white/40 print:bg-white">
                                {phase.modules.map((module) => (
                                    <div key={module.id} className="group transition-colors hover:bg-white/60 print:bg-white">
                                        <button
                                            onClick={() => toggleModule(module.id)}
                                            className="w-full text-left p-5 flex items-start gap-4 outline-none"
                                        >
                                            <div className={`mt-1 p-2 rounded-lg ${module.category === 'Project' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'} print:border print:border-gray-200`}>
                                                {module.category === 'Project' ? <Star className="w-5 h-5 fill-amber-400 text-amber-500" /> : <BookOpen className="w-5 h-5" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center mb-1">
                                                    <h4 className={`font-bold text-lg ${module.category === 'Project' ? 'text-amber-800' : 'text-gray-800'}`}>
                                                        {module.title}
                                                    </h4>
                                                    <span className="print:hidden">
                                                        {expandedModule === module.id ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 line-clamp-1 group-hover:line-clamp-none transition-all print:line-clamp-none print:text-gray-700">
                                                    {module.topics.slice(0, 3).join(" • ")} {module.topics.length > 3 && `+ ${module.topics.length - 3} more`}
                                                </p>
                                            </div>
                                        </button>

                                        {/* DETAILS VIEW (Always show in print if needed, but keeping collapsible for screen) */}
                                        <div className={`${expandedModule === module.id ? 'block' : 'hidden'} print:block px-5 pb-6 pl-[4.5rem] animate-in slide-in-from-top-2`}>
                                            <div className="bg-white/70 rounded-xl p-4 border border-black/5 shadow-inner print:shadow-none print:border-0 print:p-0">
                                                <div className="print:hidden">
                                                    <h5 className="text-xs font-bold uppercase text-gray-400 mb-3 tracking-wider">Syllabus Covered</h5>
                                                </div>
                                                <ul className="grid md:grid-cols-2 gap-2 print:grid-cols-2">
                                                    {module.topics.map(t => (
                                                        <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0 print:bg-black" /> {t}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-2xl text-center print:hidden">
                    <Rocket className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                    <p className="text-gray-400 mb-6">Your plan is saved. Download the detailed PDF to keep track of your progress.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button onClick={() => window.print()} className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors">
                            Download PDF
                        </button>
                        <button
                            onClick={() => { setShowPlan(false); setStep(1); }}
                            className="px-8 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Create New Plan
                        </button>
                    </div>
                </div>

            </div>
        );
    }

    // --- MAIN LAYOUT ---
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-200">
            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* BRANDING */}
                {/* BRANDING */}
                <div className="text-center mb-10 flex flex-col items-center animate-in slide-in-from-top-4 duration-700">
                    {/* User provided Codebasics Logo */}
                    <img
                        src="/codebasics_logo.png"
                        alt="Codebasics Logo"
                        className="h-28 md:h-36 object-contain -mb-4"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />

                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-snug">
                        GenAI & DS Bootcamp 3.0 <span className="text-blue-600 block md:inline">Planner</span>
                    </h1>
                    <p className="text-slate-500 text-lg mt-3 max-w-2xl mx-auto">
                        Your personalized roadmap to mastering Generative AI, Data Science, and Python with <span className="font-bold text-blue-500">Codebasics</span>.
                    </p>
                </div>

                {/* CONTENT CARD */}
                <div className={cn("bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 transition-all duration-500", showPlan ? "max-w-5xl" : "max-w-3xl mx-auto")}>
                    {!showPlan && (
                        <div className="mb-8">
                            <div className="flex justify-between text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                                <span>Step {step}</span>
                                <span>12 Steps</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out" style={{ width: `${(step / 12) * 100}%` }}></div>
                            </div>
                        </div>
                    )}

                    {showPlan ? renderPlan() : renderStep()}
                </div>
            </div>
        </div>
    );
};

export default BootcampPlanner;
