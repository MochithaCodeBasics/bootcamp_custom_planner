export type RoadmapItem = {
    id: string;
    title: string;
    category: "Foundation" | "Data Science" | "Machine Learning" | "Deep Learning" | "NLP" | "GenAI" | "Career" | "Project";
    topics: string[];
    durationWeeks: number; // Estimated
    isProject?: boolean;
};

export const FULL_ROADMAP: RoadmapItem[] = [
    // 1. Python Fundamentals
    {
        id: "m1",
        title: "Python Fundamentals",
        category: "Foundation",
        durationWeeks: 2,
        topics: [
            "Introduction to Python & IDE Setup",
            "Variables, Numbers, Strings",
            "Lists, Conditions, Loops",
            "Functions, Dictionaries, Tuples, File Handling",
            "Classes & Exception Handling",
            "NumPy (Matrix Operations)",
            "EDA using Pandas, Matplotlib, Seaborn"
        ]
    },
    {
        id: "m2_cred",
        title: "Online Credibility (Personal Branding)",
        category: "Career",
        durationWeeks: 1,
        topics: [
            "LinkedIn Profile Optimization",
            "GitHub Portfolio Setup",
            "Kaggle Profile Building",
            "Resume Baseline Creation"
        ]
    },
    {
        id: "p1",
        title: "Project 1: EDA (Hospitality Domain)",
        category: "Project",
        durationWeeks: 1,
        isProject: true,
        topics: [
            "OLTP vs OLAP & ETL Concepts",
            "Star vs Snowflake Schema",
            "Data Cleaning & Transformation",
            "Insight Generation"
        ]
    },
    // 3. Python Advanced
    {
        id: "m3",
        title: "Python Advanced",
        category: "Foundation",
        durationWeeks: 2,
        topics: [
            "Comprehensions (List, Dict, Set)",
            "JSON, Generators, Decorators",
            "APIs (Requests, FastAPI basics)",
            "Logging, Pytest, Pydantic",
            "MySQL Integration with Python"
        ]
    },
    {
        id: "p2",
        title: "Project 2: Expense Tracking System",
        category: "Project",
        durationWeeks: 2,
        isProject: true,
        topics: [
            "Database CRUD Operations",
            "Backend with FastAPI",
            "Frontend with Streamlit",
            "Automated Testing & Deployment"
        ]
    },
    // 5. SQL Basics
    {
        id: "m5",
        title: "SQL Basics",
        category: "Data Science",
        durationWeeks: 2,
        topics: [
            "Single Table Queries (SELECT, WHERE, GROUP BY)",
            "Multiple Table Queries (Joins, Unions)",
            "Calculated Columns & Case Statements"
        ]
    },
    // 6. Math and Statistics
    {
        id: "m6",
        title: "Math and Statistics",
        category: "Data Science",
        durationWeeks: 3,
        topics: [
            "Data Visualization Types",
            "Measures of Central Tendency & Dispersion",
            "Probability Theory & Bayes Theorem",
            "Distributions (Normal, Z-score)",
            "Central Limit Theorem",
            "Hypothesis Testing (A/B Testing Project)"
        ]
    },
    // 7. Machine Learning
    {
        id: "m7",
        title: "Machine Learning",
        category: "Machine Learning",
        durationWeeks: 4,
        topics: [
            "Supervised vs Unsupervised",
            "Regression (Linear, Polynomial, Gradient Descent)",
            "Classification (Logistic, SVM, Decision Trees)",
            "Ensemble Learning (Random Forest, XGBoost)"
        ]
    },
    {
        id: "arena_ml",
        title: "ML Practice Arena: Competition",
        category: "Project",
        isProject: true,
        durationWeeks: 1,
        topics: [
            "Kaggle Competition Participation",
            "Hackathon Challenge",
            "Peer Code Review"
        ]
    },
    // 8. Unsupervised Learning
    {
        id: "m8",
        title: "Unsupervised Learning",
        category: "Machine Learning",
        durationWeeks: 1,
        topics: [
            "K-Means Clustering",
            "Hierarchical Clustering",
            "DBSCAN & Customer Segmentation"
        ]
    },
    {
        id: "p3",
        title: "Project 3: Healthcare Premium Prediction",
        category: "Project",
        durationWeeks: 2,
        isProject: true,
        topics: [
            "End-to-End Regression Pipeline",
            "Feature Engineering & Retraining",
            "Streamlit App Deployment"
        ]
    },
    {
        id: "p4",
        title: "Project 4: Credit Risk Modeling",
        category: "Project",
        durationWeeks: 2,
        isProject: true,
        topics: [
            "Classification for Finance (NBFC)",
            "WoE and IV",
            "Optuna Hyperparameter Tuning",
            "KS Statistic & Gini Coefficient"
        ]
    },
    // 11. MLOps
    {
        id: "m11",
        title: "MLOps and Cloud Tools",
        category: "Machine Learning",
        durationWeeks: 2,
        topics: [
            "MLflow Experiment Tracking",
            "DagsHub & Git Version Control",
            "AWS SageMaker",
            "Data Drift Detection (PSI/CSI)"
        ]
    },
    // Deep Learning
    {
        id: "m12",
        title: "Deep Learning Fundamentals",
        category: "Deep Learning",
        durationWeeks: 3,
        topics: [
            "Neural Networks (Perceptron, MLP)",
            "PyTorch (Tensors, Autograd)",
            "Backpropagation & Optimizers (Adam, RMSprop)",
            "Regularization (Dropout, Batch Norm)"
        ]
    },
    {
        id: "m17",
        title: "CNN & Vision",
        category: "Deep Learning",
        durationWeeks: 2,
        topics: [
            "CNN Architecture (Padding, Strides)",
            "Transfer Learning & Pretrained Models",
            "Image Classification"
        ]
    },
    {
        id: "m19",
        title: "RNNs & Transformers",
        category: "Deep Learning",
        durationWeeks: 2,
        topics: [
            "Sequence Models (RNN, LSTM, GRU)",
            "Transformers Architecture (Attention, BERT, GPT-2)"
        ]
    },
    {
        id: "p5",
        title: "DL Project: Car Damage Detection",
        category: "Project",
        durationWeeks: 2,
        isProject: true,
        topics: [
            "Custom CNN Model",
            "Transfer Learning",
            "FastAPI Inference Server"
        ]
    },
    // NLP
    {
        id: "m22",
        title: "Natural Language Processing",
        category: "NLP",
        durationWeeks: 3,
        topics: [
            "Text Preprocessing (SpaCy, Regex)",
            "Text Representation (TF-IDF, Embeddings)",
            "Hugging Face Pipelines (BERT, RoBERTa)",
            "News Classification"
        ]
    },
    // GenAI
    {
        id: "m26",
        title: "GenAI Foundations",
        category: "GenAI",
        durationWeeks: 2,
        topics: [
            "LLMs & Hallucinations",
            "RAG & Vector Databases (ChromaDB)",
            "LangChain (Chains, Prompts, Parsers)"
        ]
    },
    {
        id: "p6",
        title: "GenAI Business Projects",
        category: "Project",
        durationWeeks: 3,
        isProject: true,
        topics: [
            "Project 1: Real Estate Assistant (RAG)",
            "Project 2: E-Commerce Chatbot (SQL integration)"
        ]
    },
    {
        id: "m32",
        title: "Agentic AI & Multi-Agent Systems",
        category: "GenAI",
        durationWeeks: 3,
        topics: [
            "Building Agents (Llama, Agno)",
            "MCP Protocol & Servers",
            "CrewAI Multi-Agent Patterns"
        ]
    },
    {
        id: "p7",
        title: "Agentic AI Business Project (HRMS)",
        category: "Project",
        durationWeeks: 2,
        isProject: true,
        topics: [
            "HR Management APIs",
            "Email Automation",
            "Ticket Management with Agents"
        ]
    },
    {
        id: "m37",
        title: "Enterprise GenAI & Fine-Tuning",
        category: "GenAI",
        durationWeeks: 3,
        topics: [
            "Fine-Tuning (LoRA, QLoRA)",
            "Ethics (Bias, Privacy)",
            "Enterprise Deployment (Bedrock)",
            "LangGraph (Stateful Agents)"
        ]
    },
    // Final
    {
        id: "final",
        title: "Final Assessment & Career Support",
        category: "Career",
        durationWeeks: 2,
        topics: [
            "Final Evaluation Quiz",
            "Mock Interviews",
            "Virtual Internship 1",
            "Virtual Internship 2"
        ]
    }
];
