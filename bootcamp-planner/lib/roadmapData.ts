export type RoadmapModule = {
    id: string;
    title: string;
    category: "Foundation" | "Data Science" | "Machine Learning" | "Deep Learning" | "NLP" | "GenAI" | "Career" | "Project";
    topics: string[];
    durationWeeks: number;
    isProject: boolean;
    isAdvanced?: boolean;
};

export const ROADMAP_DATA: RoadmapModule[] = [
    // --- PYTHON FOUNDATIONS ---
    {
        id: "py-fundamentals",
        title: "Python Fundamentals",
        category: "Foundation",
        topics: ["Variables, Numeric Types, Strings", "Lists, Tuples, Dictionaries", "Loops & Conditions", "Functions & File Handling"],
        durationWeeks: 1,
        isProject: false
    },
    {
        id: "py-oop",
        title: "Object Oriented Python",
        category: "Foundation",
        topics: ["Classes & Objects", "Inheritance", "Exception Handling", "Modules & Pip"],
        durationWeeks: 1,
        isProject: false
    },
    {
        id: "numpy-pandas",
        title: "NumPy & Data Analysis",
        category: "Data Science",
        topics: ["NumPy Matrix Operations", "Pandas DataFrames", "Data Cleaning", "Matplotlib & Seaborn Visualization"],
        durationWeeks: 1,
        isProject: false
    },
    {
        id: "proj-1-eda",
        title: "Project 1: Exploratory Data Analysis (Hospitality)",
        category: "Project",
        topics: ["ETL Pipelines", "Data Warehousing Concepts", "Business Insights Generation"],
        durationWeeks: 1,
        isProject: true
    },

    // --- ADVANCED PYTHON & SQL ---
    {
        id: "py-advanced",
        title: "Advanced Python & APIs",
        category: "Foundation",
        topics: ["Generators & Decorators", "FastAPI Basics", "Automated Testing (Pytest)", "Pydantic Validation"],
        durationWeeks: 1,
        isProject: false,
        isAdvanced: true
    },
    {
        id: "proj-2-expense",
        title: "Project 2: Expense Tracking System",
        category: "Project",
        topics: ["Full Stack App", "FastAPI Backend", "Streamlit Frontend", "Database Integration"],
        durationWeeks: 1,
        isProject: true
    },
    {
        id: "sql-basics",
        title: "SQL Mastery",
        category: "Data Science",
        topics: ["Joins & Unions", "Aggregations", "Subqueries", "Window Functions"],
        durationWeeks: 1,
        isProject: false
    },

    // --- MATH & ML ---
    {
        id: "math-stats",
        title: "Math & Statistics for AI",
        category: "Data Science",
        topics: ["Probability Theory", "Hypothesis Testing (A/B Testing)", "Distributions", "Correlation vs Causation"],
        durationWeeks: 2,
        isProject: false
    },
    {
        id: "ml-basics",
        title: "Machine Learning: Regression & Classification",
        category: "Machine Learning",
        topics: ["Linear/Logistic Regression", "Decision Trees", "SVM", "Gradient Descent"],
        durationWeeks: 2,
        isProject: false
    },
    {
        id: "ml-advanced",
        title: "Ensemble & Unsupervised Learning",
        category: "Machine Learning",
        topics: ["Random Forests & XGBoost", "K-Means Clustering", "DBSCAN", "Dimensionality Reduction"],
        durationWeeks: 2,
        isProject: false
    },
    {
        id: "proj-3-health",
        title: "Project 3: Healthcare Premium Prediction",
        category: "Project",
        topics: ["End-to-End Regression Pipeline", "Feature Engineering", "Model Deployment"],
        durationWeeks: 1,
        isProject: true
    },
    {
        id: "proj-4-credit",
        title: "Project 4: Credit Risk Modeling",
        category: "Project",
        topics: ["Financial Classification", "Weight of Evidence (WoE)", "Scorecard Development"],
        durationWeeks: 1,
        isProject: true
    },
    {
        id: "mlops",
        title: "MLOps & Cloud Engineering",
        category: "Machine Learning",
        topics: ["MLflow Tracking", "AWS SageMaker", "Docker for ML", "Model Monitoring"],
        durationWeeks: 1,
        isProject: false,
        isAdvanced: true
    },

    // --- DEEP LEARNING ---
    {
        id: "dl-fundamentals",
        title: "Deep Learning Foundations (PyTorch)",
        category: "Deep Learning",
        topics: ["Neural Architectures (MLP)", "Backpropagation", "Optimizers (Adam, SGD)", "PyTorch Tensors"],
        durationWeeks: 1,
        isProject: false
    },
    {
        id: "cv-cnn",
        title: "Computer Vision & CNNs",
        category: "Deep Learning",
        topics: ["Convolutional Layers", "Transfer Learning", "Image Augmentation"],
        durationWeeks: 1,
        isProject: false
    },
    {
        id: "proj-5-car",
        title: "Project 5: Car Damage Detection",
        category: "Project",
        topics: ["Vision Model Training", "FastAPI Inference Server"],
        durationWeeks: 1,
        isProject: true
    },
    {
        id: "nlp-rnn",
        title: "Sequence Models & NLP Basics",
        category: "NLP",
        topics: ["RNNs & LSTMs", "Text Preprocessing (SpaCy)", "Word Embeddings", "N-Grams"],
        durationWeeks: 1,
        isProject: false
    },
    {
        id: "transformers",
        title: "Transformers & HuggingFace",
        category: "NLP",
        topics: ["Attention Mechanisms", "BERT/GPT Architectures", "HuggingFace Pipelines", "Fine-tuning"],
        durationWeeks: 1,
        isProject: false
    },

    // --- GEN AI & AGENTIC AI ---
    {
        id: "genai-foundations",
        title: "Generative AI Foundations",
        category: "GenAI",
        topics: ["LLM Architecture", "Prompt Engineering", "Temperature & Sampling", "Vector Databases (ChromaDB)"],
        durationWeeks: 1,
        isProject: false
    },
    {
        id: "rag-langchain",
        title: "RAG & LangChain",
        category: "GenAI",
        topics: ["Retrieval Augmented Generation", "LangChain Chains", "Text Splitters", "Embeddings"],
        durationWeeks: 1,
        isProject: false
    },
    {
        id: "proj-genai-1",
        title: "Project: Real Estate AI Assistant",
        category: "Project",
        topics: ["RAG Implementation", "Document QA", "Streamlit UI"],
        durationWeeks: 1,
        isProject: true
    },
    {
        id: "agentic-ai",
        title: "Agentic AI & Multi-Agent Systems",
        category: "GenAI",
        topics: ["Reasoning Agents", "CrewAI / AutoGen", "Tool Calling", "Looping & Memory"],
        durationWeeks: 2,
        isProject: false,
        isAdvanced: true
    },
    {
        id: "proj-agentic-hrms",
        title: "Project: Autonomous HR Agent Swarm",
        category: "Project",
        topics: ["Multi-Agent Orchestration", "Email Automation", "API Integration"],
        durationWeeks: 2,
        isProject: true
    },
    {
        id: "llm-ops",
        title: "LLM Fine-Tuning & Enterprise GenAI",
        category: "GenAI",
        topics: ["PEFT / LoRA", "Quantization", "Model Evaluation (Ragas)", "AI Ethics"],
        durationWeeks: 1,
        isProject: false,
        isAdvanced: true
    },

    // --- CAREER ---
    {
        id: "career-final",
        title: "Career Prep & Final Assessment",
        category: "Career",
        topics: ["Mock Interviews", "Resume Review", "Portfolio Building", "Virtual Internship"],
        durationWeeks: 2,
        isProject: false
    }
];
