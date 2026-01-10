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
    id: "airbnb-la",
    title: "Airbnb Price Prediction in LA",
    description: [
      "Data Cleaning & Stability: Applied z-score filtering (|z|>3) and log-transformations to stabilize pricing distributions, validating outlier removal through measurable improvements in model R² and t-statistics.",
      "Feature-Group EDA: Performed high-dimensional EDA across Location, Property, Host, and Demand signal clusters to isolate dominant pricing drivers vs. occupancy proxies.",
      "Modeling & Validation: Benchmarked Linear Regression, Random Forest, and XGBoost with cross-validation to optimize pricing and revenue targets, addressing non-linear market behaviors.",
      "Core Finding (Pricing Power): Discovered that host characteristics (e.g., Superhost status) explain <1% of price variance (R² ≈ 0.008), confirming that pricing is driven primarily by property fundamentals.",
      "Valuation & Optimization: Engineered a valuation engine to identify mispriced listings and developed counterfactual simulations to quantify the expected revenue impact of specific amenity upgrades.",
      "Customer Value Analysis: Modeled overall ratings to discover that cleanliness, accuracy, and value—not host portfolio size—are the primary determinants of perceived customer value and experience quality."
    ],
    images: [
      "https://i.postimg.cc/85dWDNsG/Screenshot-2026-01-09-at-2-11-48-AM.png",
      "https://i.postimg.cc/1t06Ps4s/Screenshot-2026-01-09-at-2-12-13-AM.png"
    ],
    coverImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=100&w=2560",
    tags: ["Python", "XGBoost", "Random Forest", "EDA", "Pricing Analytics"],
    githubUrl: "https://github.com/HHJJHHW/Airbnb_Price_Prediction_in_LA"
  },
  {
    id: "zillow-house",
    title: "Zillow House Price Prediction",
    description: [
      "Architecture & Pipeline: Compared Linear Baselines (MER: 0.132) against Deep MLPs. The optimized 4-layer architecture with Dropout and L2 regularization achieved a final Validation MER of 0.0524.",
      "Technical Method: Built a full PyTorch training loop with Adam optimizer and mini-batch loading. Developed robust data preprocessing to handle mixed categorical/numerical types with zero row loss.",
      "Performance Dynamics: Analyzed the impact of regularization and dropout on preventing overfitting across 300 epochs, visualizing the learning stability of deep vs. linear models.",
      "Adverse Selection Simulation: Modeled iBuyer profitability under realistic owner-acceptance rules. Found that mean profit drops from 15.1% to -6.1% due to homeowners selectively accepting high-bias offers.",
      "Business Intelligence: Identified that model over-prediction bias (0.24) is significantly correlated with xloss-making deals, providing actionable insights for Zestimate risk mitigation strategies."
    ],
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=100&w=2560", 
    images: [
      "https://i.postimg.cc/qqvS8KB8/Screenshot-2026-01-08-at-11-39-36-PM.png",
      "https://i.postimg.cc/hGRY26PP/Screenshot-2026-01-08-at-11-39-46-PM.png",
      "https://i.postimg.cc/3wZtnwcc/Screenshot-2026-01-08-at-11-39-59-PM.png",
      "https://i.postimg.cc/RVnG2dY6/Screenshot-2026-01-08-at-11-40-10-PM.png",
      "https://i.postimg.cc/02mF79PY/Screenshot-2026-01-08-at-11-43-31-PM.png",
      "https://i.postimg.cc/3wbnPq3Y/Screenshot-2026-01-09-at-11-44-07-PM.png",
      "https://i.postimg.cc/ZKFjTnTY/Screenshot-2026-01-08-at-11-44-18-PM.png",
      "https://i.postimg.cc/NMH7ZfJw/Screenshot-2026-01-08-at-11-44-31-PM.png"
    ],
    tags: ["Python", "PyTorch", "Business Analytics", "MLP"],
    githubUrl: "https://github.com/HHJJHHW/House_Price_Prediction"
  },
  {
    id: "recommender-system",
    title: "Movie Recommendation System",
    description: [
      "EDA & Diagnostics: Performed detailed analysis on user-item interactions, identifying long-tail behavior and sparse-rating reliability issues (Figure 1-3). Corrected the 'popularity bias' where many high-rated films had misleadingly few ratings.",
      "Model Framework: Architected a Collaborative Filtering model (Matrix Factorization) using PyTorch, learning latent User/Movie embeddings and learned bias terms for personalized predictions.",
      "Performance Optimization: Achieved a validated RMSE of 0.8569 and MAE of 0.6719 through hyperparameter tuning (embedding dim=40, learning rate=1e-3) and L2 regularization to prevent overfitting.",
      "Latent Space Analysis: Leveraged PCA to project high-dimensional embeddings into 2D, successfully validating the model's ability to cluster movies by genre and release era (e.g., Sci-Fi vs. Classic Drama).",
      "Business Value Tool: Engineered a business decision engine that converts predictions into 'Movie Value' rankings (estimating engagement, e.g., Toy Story valued at 5.2M), shifting focus from raw popularity to strategic content worth."
    ],
    coverImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/TY7sG9v2/Screenshot-2026-01-09-at-12-07-53-AM.png",
      "https://i.postimg.cc/ncRWZkfc/Screenshot-2026-01-09-at-12-08-08-AM.png",
      "https://i.postimg.cc/9F8kVpHf/Screenshot-2026-01-09-at-12-08-25-AM.png",
      "https://i.postimg.cc/9F8kVpHM/Screenshot-2026-01-09-at-12-09-00-AM.png",
      "https://i.postimg.cc/FsW6mZXz/Screenshot-2026-01-09-at-12-09-18-AM.png"
    ],
    tags: ["Python", "PyTorch", "Collaborative Filtering", "PCA"],
    githubUrl: "https://github.com/HHJJHHW/Recommender_System"
  },
  {
    id: "car-detection",
    title: "Car Object Detection using Deep Learning",
    description: [
      "Architecture: Fine-tuned Faster R-CNN (ResNet50-FPN) using PyTorch, engineering a custom pipeline for high-precision vehicle localization.",
      "Data Integrity: Audited Kaggle datasets to fix duplicate and invalid annotations, ensuring reliability for safety-critical detection tasks.",
      "Performance: Achieved 0.92+ IoU@0.5, significantly outperforming YOLO8 benchmarks in low-light and long-distance scenarios.",
      "Robustness: Implemented 5-fold cross-validation and early stopping to prevent overfitting, reaching a stable training loss of 0.0503.",
      "Business Value: Scalable solution for smart-city infrastructure, supporting real-time traffic monitoring and autonomous vehicle perception."
    ],
    coverImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=100&w=2560", 
    images: [
      "https://i.postimg.cc/NjXZ4HZN/Screenshot-2026-01-09-at-12-26-58-AM.png",
      "https://i.postimg.cc/0QjftgrF/Screenshot-2026-01-09-at-12-26-30-AM.png",
      "https://i.postimg.cc/LX5TydnK/Screenshot-2026-01-09-at-12-31-18-AM.png",
      "https://i.postimg.cc/fLyKH4J4/Screenshot-2026-01-09-at-12-31-25-AM.png"
    ],
    tags: ["Python", "PyTorch", "Faster R-CNN", "Computer Vision"],
    githubUrl: "https://github.com/HHJJHHW/Deep_Learning_in_Car_Object_Detection"
  },
  {
    id: "barcelona-re",
    title: "Barcelona Real Estate Estimation",
    description: [
      "Predictive Modeling: Architected a log-linear regression pricing engine in R to estimate the valuation of 200 'mystery' properties based on a training set of 413 benchmark listings.",
      "Data Engineering: Applied log-transformations to target prices to mitigate right-skewness and convert multiplicative market relationships into an additive linear framework, enabling coefficients to be interpreted as percentage impacts.",
      "Iterative Refinement: Employed a trial-and-error feature selection strategy, systematically purging non-significant variables based on p-value thresholds to achieve a parsimonious model that prioritizes accuracy over complexity.",
      "Categorical Optimization: Refined the 'City Zone' factor by consolidating non-significant location levels, focusing the model's predictive power on geographically relevant price drivers while minimizing noise.",
      "Key Drivers: Identified Property Size (m2), Room Count, and specific amenities (Elevator, Terrace) as the primary determinants of price premiums across Barcelona's real estate districts.",
      "Inference Strategy: Executed predictions in log-space to minimize average squared errors, successfully back-transforming results using exp() to deliver final market valuations in absolute Euro terms."
    ],
    coverImage: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/sXc00FYb/output-(9).png",
      "https://i.postimg.cc/ZRcDDkPt/output-(10).png",
      "https://i.postimg.cc/DZgYYVQV/output-(11).png",
      "https://i.postimg.cc/G2QSS0FW/output-(12).png"
    ],
    tags: ["R", "Linear Regression", "Real Estate Economics"],
    githubUrl: "https://github.com/HHJJHHW/Barcelona_Real_Estate"
  },
  {
    id: "voting-analytics",
    title: "Voting Data Analytics",
    description: [
      "Methods & Pipeline: Developed a robust data pipeline in R featuring mean-imputation for 30+ demographic predictors and a time-based train/test split (threshold 2/19/2008) to simulate realistic electoral forecasting.",
      "Feature Engineering: Engineered 'Obama Margin %' as a normalized regression target to account for county-size variance, alongside binary win-indicators for classification-style diagnostics.",
      "Predictive Benchmarking: Conducted 16-fold Cross-Validation (RMSE) across a hierarchy of models: Null baseline, OLS, Lasso (inner-CV for λ selection), and Random Forest (500 trees; mtry=1/3), identifying Random Forest as the top performer (RMSE: 15.64).",
      "Unsupervised Segmentation: Performed K-Means clustering (k=4) on standardized socio-economic features; utilized PCA projections to map latent dimensions of education and income, revealing distinct voter archetypes.",
      "Main Findings: Discovered a strong positive correlation between Black population density and Obama support, while Clinton exhibited significant strength in counties with higher White and Hispanic compositions.",
      "Statistical Inference: Addressed omitted-variable bias by specifying 'controls-heavy' regression designs, isolating the true marginal impact of ethnic shifts on candidate vote share for targeted campaign resource allocation."
    ],
    coverImage: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/YCB2HYKc/Screenshot-2026-01-09-at-1-45-59-AM.png",
      "https://i.postimg.cc/MpJZSV2z/Screenshot-2026-01-09-at-1-46-13-AM.png",
      "https://i.postimg.cc/vZw8sfFs/Screenshot-2026-01-09-at-1-46-21-AM.png",
      "https://i.postimg.cc/jSYqbP0T/Screenshot-2026-01-09-at-1-48-57-AM.png",
      "https://i.postimg.cc/fRQWNmnw/Screenshot-2026-01-09-at-1-49-02-AM.png"
    ],
    tags: ["R", "Election Analytics", "Random Forest", "Lasso"],
    githubUrl: "https://github.com/HHJJHHW/ObamaClintonVoteDataAnalytics"
  },
  {
    id: "commodity-risk",
    title: "Commodity Risk Management",
    description: [
      "Expert Forecast Audit: Evaluated coffee price predictions from multiple consultants using R, benchmarking accuracy through correlation, covariance, and high-dimensional regression diagnostics.",
      "Regression Diagnostics: Built individual linear models (Price ~ Forecast) to assess predictive strength (R²), bias (via 95% confidence intervals), and residual behavior (normality and constant variance).",
      "Comprehensive Error Analysis: Quantified model performance by computing Mean Absolute Error (MAE), Mean Squared Error (MSE), and Standard Errors to holistically rank expert reliability.",
      "Main Finding (Consultant Performance): Identified Mario Illy as a significant underperformer with high inconsistency (R²: 0.78) and a systematic tendency to under-forecast, while Neil Stevens provided the most reliable, unbiased predictions.",
      "Optimal Combined Forecast: Developed a composite forecasting model using Multiple Linear Regression, weighting expert inputs by their predictive power (β_Stevens ≈ 0.79 vs. β_Illy ≈ 0.16) to achieve a more robust price estimate (214.78).",
      "Visual Insights: Leveraged scatter plots and residual boxplots to diagnose volatility across consultants, providing actionable intelligence for expert selection and procurement risk mitigation."
    ],
    coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/y6XW8LjJ/Screenshot-2026-01-09-at-2-01-37-AM.png",
      "https://i.postimg.cc/HW4jk6zH/Screenshot-2026-01-09-at-2-01-46-AM.png"
    ],
    tags: ["R", "Risk Management", "Regression Analysis", "Forecasting"],
    githubUrl: "https://github.com/HHJJHHW/Commodity_Risk_Management"
  },
  {
    id: "online-shopper",
    title: "Online Shoppers Intention",
    description: [
      "End-to-End Pipeline: Engineered a full conversion prediction workflow in R, transforming clickstream data through PCA (Principal Component Analysis) to de-noise behavioral signals and K-Means clustering (k=4) to define high-intent session archetypes.",
      "Behavioral Analytics: Identified PageValues as the strongest positive driver of purchase, while diagnosing high Bounce and Exit rates as primary friction points. Discovered that New Visitors exhibit significantly higher conversion propensity despite lower session volume.",
      "Advanced Modeling: Architected a hybrid Random Forest model trained on compact PCA components (PC1-PC4) and segment clusters, achieving a superior balance between non-linear capture and model stability compared to GLM baselines.",
      "Performance Metrics: Attained a validated test Accuracy of 97.4% and an exceptional Recall of 97.6% (0.91 F1), effectively solving the class imbalance problem where typical purchasing sessions represent only a small minority of traffic.",
      "Strategic Deployment: Designed a real-time intervention framework to trigger targeted incentives (e.g., personalized discounts, bundle deals) for high-propensity sessions, optimized via A/B testing at specific probability thresholds.",
    ],
    coverImage: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/Jng2Z3R1/Screenshot-2026-01-09-at-1-03-26-AM.png",
      "https://i.postimg.cc/6qv107Qx/Screenshot-2026-01-09-at-1-03-34-AM.png",
      "https://i.postimg.cc/J0kdqyh8/Screenshot-2026-01-09-at-1-03-39-AM.png",
      "https://i.postimg.cc/J0kdqyh1/Screenshot-2026-01-09-at-1-03-46-AM.png",
      "https://i.postimg.cc/KjMsNKYF/Screenshot-2026-01-09-at-1-03-51-AM.png",
      "https://i.postimg.cc/mkH6wcrL/Screenshot-2026-01-09-at-1-03-59-AM.png",
      "https://i.postimg.cc/8c6nHFCz/Screenshot-2026-01-09-at-1-04-06-AM.png",
      "https://i.postimg.cc/6qv107Q3/Screenshot-2026-01-09-at-1-04-12-AM.png"
    ],
    tags: ["R", "Unsupervised Learning", "PCA", "Random Forest"],
    githubUrl: "https://github.com/HHJJHHW/Online_Shoppers_Intention"
  },
  {
    id: "insurance-optimization",
    title: "Insurance Pricing & Revenue Optimization",
    description: [
      "Methods: Preprocessed high-dimensional insurance data by feature-engineering key categoricals (car_value, state, homeowner) into factor models and handling missingness as informative NA flags to preserve data signals.",
      "Modeling: Built a Generalized Linear Model (GLM) incorporating rich pairwise interactions across coverage options (A–G) to capture complex, non-linear bundle effects in insurance pricing.",
      "Strategy: Developed a competitive pricing engine using Quantile Regression to model the full distribution of market quotes, moving beyond mean-based estimation to capture risk-adjusted pricing tiers.",
      "Optimization: Formulated a revenue optimization strategy by maximizing Expected Revenue per customer: ER(τ) = qτ(x) · (1 − τ), integrating a strategic price floor to balance competitiveness with profitability.",
      "Finding: Visualualized and validated business intuition showing car age as a primary driver of premium sensitivity, enabling targeted discount strategies for lower-risk demographic segments."
    ],
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/KzmnW6j2/Screenshot-2026-01-09-at-12-51-39-AM.png",
      "https://i.postimg.cc/rmqSHBsF/Screenshot-2026-01-09-at-12-51-53-AM.png"
    ],
    tags: ["R", "GLM", "Quantile Regression", "Revenue Optimization"],
    githubUrl: "https://github.com/HHJJHHW/Allstate_Insurance_Quote"
  },
  {
    id: "personalized-healthcare",
    title: "Personalized Healthcare Analytics",
    description: [
      "Data Preparation: Cleaned and streamlined a 198,000-record natality dataset by filtering out redundant variables and non-informative IDs, ensuring a robust, modeling-ready baseline.",
      "Exploratory Visualization: Developed boxplot analyses to examine the relationship between prenatal care timing (Trimester 1–3 vs. No Visit) and infant birthweight, revealing critical early-intervention signals.",
      "Statistical Rigor: Conducted Pearson chi-square independence tests across 45 risk factor pairs and applied the Bonferroni correction (α = 0.05/45) to minimize Type I errors under multiple testing conditions.",
      "Multivariate Modeling: Architected a Multiple Linear Regression model with 14 clinical and demographic predictors; constructed simultaneous confidence intervals to robustly quantify factor influence on healthcare outcomes.",
      "Actionable Findings: Quantified that early prenatal visits (Trimester 1) increase birthweight by up to 0.22kg, while identifying poverty (-0.2kg) and smoking (-0.19kg) as the most significant negative risk drivers.",
      "Business Case Strategy: Engineered an inexpensive, regression-based screening framework for low-resource rural clinics, prioritizing actionable maternal indicators to flag high-risk pregnancies at the end of the first trimester."
    ],
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=100&w=2560",
    images: [
      "https://i.postimg.cc/BQWqGHHH/Screenshot-2026-01-09-at-1-14-01-AM.png",
      "https://i.postimg.cc/HsGpCXXt/Screenshot-2026-01-09-at-1-14-13-AM.png",
      "https://i.postimg.cc/yYqVzccy/Screenshot-2026-01-09-at-1-14-23-AM.png",
      "https://i.postimg.cc/rF68LxxC/Screenshot-2026-01-09-at-1-15-47-AM.png"
    ],
    tags: ["R", "Biostatistics", "Regression", "Hypothesis Testing"],
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