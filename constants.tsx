import { Project, Experience, Photo, Certificate } from './types';

export const PERSONAL_INFO = {
  name: "Jinghua He",
  title: "Master of Quantitative Management Candidate @ Duke University",
  email: "Jinghua.he@duke.edu",
  phone: "+1 857-265-5324",
  linkedin: "https://www.linkedin.com/in/jinghuahe",
  website: "https://jinghuahe1.wixsite.com/jinghuahe",
  location: "Durham, NC",
  bio: "Currently pursuing an MS in Quantitative Management (Business Analytics) at Duke Fuqua School of Business. Passionate about leveraging data science and machine learning to drive business impact. Experienced in digital transformation, risk management, and predictive modeling.",
  profileImage: "https://i.postimg.cc/sDwXKrs1/552297685-1131597578379162-6667045546460442758-n.png" 
};

export const PROJECTS: Project[] = [
  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    description: [
      "Extreme Class Imbalance Requires Risk Ranking: With fraud accounting for only 0.17% of transactions, the problem is framed as risk prioritization under limited review capacity, rather than binary classification.",
      "Fraud Risk Shows Clear Structural Patterns: EDA reveals that fraud transactions cluster in extreme regions of several PCA features (notably V10, V14, V16, and V12), indicating strong non-random risk signals.",
      "Logistic Regression Is a Strong but Limited Baseline: The logistic baseline achieves AUPRC ≈ 0.71, confirming meaningful signal in the data, but its linear structure limits further ranking improvements.",
      "Boosting Models Improve High-Risk Ranking: Tree-based models significantly outperform the baseline (AUPRC ≈ 0.83), with LightGBM achieving the highest Precision@1% and selected as the primary model.",
      "Expected Loss Alignment: Transactions are prioritized using Expected Loss = P(fraud) × Amount, combining risk likelihood and loss severity for business-aligned decisions.",
      "Loss Capture Curves: Expected Loss Capture Curves show that reviewing a small fraction of transactions captures a disproportionate share of total fraud loss, outperforming probability-only ranking."
    ],
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/pT8X5yD6/Screenshot-2026-02-03-at-1-30-40-AM.png",
      "https://i.postimg.cc/qBsvkhBG/Screenshot-2026-02-03-at-1-30-52-AM.png",
      "https://i.postimg.cc/cLHxMFRF/Screenshot-2026-02-03-at-1-31-35-AM.png",
      "https://i.postimg.cc/nrpZs2Vm/Screenshot-2026-02-03-at-1-32-07-AM.png",
      "https://i.postimg.cc/8cKdFydr/Screenshot-2026-02-03-at-1-26-17-AM.png",
      "https://i.postimg.cc/bJHfjn0q/Screenshot-2026-02-03-at-1-26-29-AM.png"
    ],
    tags: ["Risk Analytics", "Finance", "Machine Learning", "Python"],
    githubUrl: "https://github.com/HHJJHHW/credit_card_fraud_analysis/tree/main"
  },
  {
    id: "zillow-house",
    title: "Zillow House Price Prediction",
    description: [
      "Architecture: Optimized 4-layer PyTorch MLP achieving a final Validation MER of 0.0524.",
      "Business Intelligence: Identified that model over-prediction bias is significantly correlated with loss-making deals.",
      "Profitability Simulation: Found that homeowner selection behavior shifts mean profit from 15.1% to -6.1%.",
      "Regularization: Analyzed Dropout and L2 impact on preventing overfitting across deep linear models."
    ],
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=100&w=2560", 
    images: [
      "https://i.postimg.cc/qqvS8KB8/Screenshot-2026-01-08-at-11-39-36-PM.png",
      "https://i.postimg.cc/hGRY26PP/Screenshot-2026-01-08-at-11-39-46-PM.png",
      "https://i.postimg.cc/3wZtnwcc/Screenshot-2026-01-08-at-11-39-59-PM.png"
    ],
    tags: ["Pricing", "Machine Learning", "PyTorch"],
    githubUrl: "https://github.com/HHJJHHW/House_Price_Prediction"
  },
  {
    id: "recommender-system",
    title: "Movie Recommendation System",
    description: [
      "Model Framework: Architected a Collaborative Filtering model using PyTorch with learned latent User/Movie embeddings.",
      "Latent Analysis: Projected high-dimensional embeddings into 2D to validate the model's ability to cluster movies by genre.",
      "Optimization: Achieved a validated RMSE of 0.8569 through hyperparameter tuning and L2 regularization.",
      "Business Value: Engineered a decision engine that converts predictions into strategic content valuations."
    ],
    coverImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/TY7sG9v2/Screenshot-2026-01-09-at-12-07-53-AM.png",
      "https://i.postimg.cc/ncRWZkfc/Screenshot-2026-01-09-at-12-08-08-AM.png"
    ],
    tags: ["Machine Learning", "PyTorch", "Analytics"],
    githubUrl: "https://github.com/HHJJHHW/Recommender_System"
  },
  {
    id: "car-detection",
    title: "Car Object Detection using Deep Learning",
    description: [
      "Architecture: Fine-tuned Faster R-CNN using PyTorch for high-precision vehicle localization.",
      "Performance: Achieved 0.92+ IoU@0.5, outperforming YOLO8 benchmarks in low-light scenarios.",
      "Robustness: Implemented 5-fold cross-validation reaching a stable training loss of 0.0503.",
      "Scale: Developed a solution for smart-city infrastructure and real-time traffic monitoring."
    ],
    coverImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=100&w=2560", 
    images: [
      "https://i.postimg.cc/NjXZ4HZN/Screenshot-2026-01-09-at-12-26-58-AM.png",
      "https://i.postimg.cc/0QjftgrF/Screenshot-2026-01-09-at-12-26-30-AM.png"
    ],
    tags: ["Machine Learning", "Computer Vision", "PyTorch"],
    githubUrl: "https://github.com/HHJJHHW/Deep_Learning_in_Car_Object_Detection"
  },
  {
    id: "barcelona-re",
    title: "Barcelona Real Estate Estimation",
    description: [
      "Predictive Modeling: Architected a log-linear regression pricing engine in R to estimate property valuations.",
      "Iterative Selection: systematically purged non-significant variables based on p-value thresholds.",
      "Key Drivers: Identified Property Size, Room Count, and Elevator status as primary price determinants.",
      "Strategic Inference: Executed predictions in log-space to minimize squared errors."
    ],
    coverImage: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/sXc00FYb/output-(9).png",
      "https://i.postimg.cc/ZRcDDkPt/output-(10).png"
    ],
    tags: ["Pricing", "R", "Linear Regression"],
    githubUrl: "https://github.com/HHJJHHW/Barcelona_Real_Estate"
  },
  {
    id: "voting-analytics",
    title: "Voting Data Analytics",
    description: [
      "Predictive Benchmarking: Conducted 16-fold Cross-Validation identifying Random Forest as top performer (RMSE: 15.64).",
      "Feature Engineering: Engineered normalized margin targets to account for county-size variance.",
      "Segmentation: Performed K-Means clustering and PCA to map latent dimensions of voter archetypes.",
      "Statistical Inference: Addressed omitted-variable bias to isolate marginal ethnic shift impact."
    ],
    coverImage: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/YCB2HYKc/Screenshot-2026-01-09-at-1-45-59-AM.png",
      "https://i.postimg.cc/MpJZSV2z/Screenshot-2026-01-09-at-1-46-13-AM.png"
    ],
    tags: ["Machine Learning", "R", "Random Forest"],
    githubUrl: "https://github.com/HHJJHHW/ObamaClintonVoteDataAnalytics"
  },
  {
    id: "commodity-risk",
    title: "Commodity Risk Management",
    description: [
      "Expert Audit: Evaluated coffee price predictions from multiple consultants using high-dimensional diagnostics.",
      "Error Analysis: Quantified model performance by computing MAE, MSE, and Standard Errors.",
      "Combined Forecast: Developed a composite model weighting expert inputs by their predictive power.",
      "Risk Mitigation: Leveraged visual insights to diagnose volatility across consultants."
    ],
    coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/y6XW8LjJ/Screenshot-2026-01-09-at-2-01-37-AM.png"
    ],
    tags: ["Risk Analytics", "Finance", "R", "Analytics"],
    githubUrl: "https://github.com/HHJJHHW/Commodity_Risk_Management"
  },
  {
    id: "online-shopper",
    title: "Online Shoppers Intention",
    description: [
      "Behavioral Analytics: Identified PageValues as the strongest driver of purchase intent.",
      "Advanced Modeling: Architected a hybrid Random Forest model trained on compact PCA components.",
      "Performance: Attained test Accuracy of 97.4% effectively solving the class imbalance problem.",
      "Strategic Deployment: Designed a real-time intervention framework to trigger targeted incentives."
    ],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/Jng2Z3R1/Screenshot-2026-01-09-at-1-03-26-AM.png"
    ],
    tags: ["Consumer Behavior", "R", "PCA", "Random Forest"],
    githubUrl: "https://github.com/HHJJHHW/Online_Shoppers_Intention"
  },
  {
    id: "insurance-optimization",
    title: "Insurance Pricing & Revenue Optimization",
    description: [
      "Modeling: Built a GLM incorporating pairwise interactions to capture complex insurance bundle effects.",
      "Strategy: Developed a competitive pricing engine using Quantile Regression to model market distributions.",
      "Optimization: Formulated a revenue optimization strategy balancing competitiveness with profitability.",
      "Insights: Validated car age as a primary driver of premium sensitivity."
    ],
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/KzmnW6j2/Screenshot-2026-01-09-at-12-51-39-AM.png"
    ],
    tags: ["Pricing", "Finance", "GLM", "R"],
    githubUrl: "https://github.com/HHJJHHW/Allstate_Insurance_Quote"
  },
  {
    id: "personalized-healthcare",
    title: "Personalized Healthcare Analytics",
    description: [
      "Analytics: Conducted Pearson chi-square independence tests across 198,000 natal records.",
      "Actionable Findings: Quantified that early prenatal visits increase birthweight by up to 0.22kg.",
      "Modeling: Constructed simultaneous confidence intervals to robustly quantify risk factors.",
      "Strategy: Engineered a regression-based screening framework for low-resource clinics."
    ],
    coverImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/BQWqGHHH/Screenshot-2026-01-09-at-1-14-01-AM.png"
    ],
    tags: ["Consumer Behavior", "R", "Healthcare", "Analytics"],
    githubUrl: "https://github.com/HHJJHHW/PersonalizedHealthcareAnalytics"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Pfizer, GE (Geographical Expansion)",
    role: "PMO & Digital Transformation Analyst",
    location: "Shanghai, China",
    duration: "May 2024 − Aug 2024",
    logo: "https://i.postimg.cc/5HPKYGVf/Pfizer-(2021)-svg.png",
    achievements: [
      "Led data-driven initiative for the ASCO Annual Meeting, including health care professionals and sales representatives via newsletters, and comprehensive HCP analysis to support new medicine.",
      "Drove key performance of Go-To-Market initiative improvements by coordinating with 12 district managers and 295 sales representatives, achieving over 90% HCP interaction rate, boosting customer coverage rate from 28% to 37%."
    ]
  },
  {
    company: "Commonwealth Financial Network",
    role: "Business Resiliency and Incident Management Analyst",
    location: "Waltham, MA",
    duration: "Jul 2023 − Dec 2023",
    logo: "https://i.postimg.cc/Y4XDGVws/IMG-6681-2.jpg",
    achievements: [
      "Built company’s business risk database using MySQL by collaborating with cross-functional business units to identify table elements such as root causes and control measures.",
      "Developed risk management team’s automated risk tracker and reporting system by mining from historic risk data from 2013 to 2023, holding 8 critical business units accountable, and boosting entire team’s efficiency by ~50%."
    ]
  },
  {
    company: "State Street Corporation",
    role: "Shared Services Analyst (Data Analyst)",
    location: "Boston, MA",
    duration: "Jul 2022 − Dec 2022",
    logo: "https://i.postimg.cc/LqyQY7Mx/IMG-6680-2.jpg",
    achievements: [
      "Mitigated continuity risk across all critical services by analyzing group service-level agreements and facilitated submission of Recovery and Resolution Plan to Federal Reserve Board of Boston for review, ensuring regulatory compliance.",
      "Delivered over 50% of critical data tables in the Resolution Plan by implementing SQL to query for relevant critical service data from company database, to increase credibility and readability of the 2022 Recovery and Resolution regulatory plan."
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Securities Industry Essentials (SIE)",
    issuer: "FINRA",
    date: "2025",
    logo: "https://i.postimg.cc/jqyyhVP1/finra-cropped-cec706e511713c50f0d41c88050d0e28879a7023.png",
    url: "https://i.postimg.cc/G80G25FK/Screenshot-2026-01-09-at-12-19-04-AM.png"
  },
  {
    title: "120-hour TESOL/TEFL Certificate",
    issuer: "World TESOL Academy",
    date: "2024",
    logo: "https://i.postimg.cc/02qFtq38/Screenshot-2026-01-07-at-1-40-44-AM.png",
    url: "https://www.worldtesolacademy.com/accreditation/"
  }
];

export const HOBBIES = {
  music: {
    title: "Tuba Section Leader",
    description: "Formerly the Tuba section leader for Northeastern University Pep Band and Boston College Marching Band. Music has always been a way to lead and harmonize within a large team.",
    images: [
      "https://i.postimg.cc/VLC966md/IMG-7730.avif",
      "https://i.postimg.cc/dV95s1jG/IMG-8877.jpg"
    ]
  },
  photography: [
    { url: "https://i.postimg.cc/CZwdBnxf/IMG-1824-copy.jpg", caption: "Visual Narrative I" },
    { url: "https://i.postimg.cc/dkx0xWm2/IMG-2055-copy.jpg", caption: "Urban Perspectives" },
    { url: "https://i.postimg.cc/231yZDrK/IMG-2215.jpg", caption: "Light & Shadow" },
    { url: "https://i.postimg.cc/Cd91CQKy/IMG-4094.jpg", caption: "Moments in Time" }
  ],
  photographyPortfolio: "https://hejingh.myportfolio.com"
};