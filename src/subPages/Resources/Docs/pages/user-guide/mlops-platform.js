const doc = {
  title: "MLOps Platform",

  description:
    "Train, evaluate, deploy, and monitor machine learning models directly inside Seg Forge.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge includes a complete MLOps platform that manages the entire machine learning lifecycle—from feature engineering and model training to deployment and monitoring.

Everything runs inside the same workspace as your pipelines, catalog, and notebooks.
      `,
    },

    {
      heading: "Capabilities",
      code: `Stage                     Features
--------------------------------------------------------------
Feature Engineering      Scaler, Encoder, Selector, Binning
Training                 XGBoost, Random Forest, Logistic Regression
Experiment Tracking      MLflow integration
Evaluation               Accuracy, AUC, RMSE, F1, Confusion Matrix
Hyperparameter Tuning    Grid Search, Random Search
Explainability           SHAP values, Feature Importance
Batch Scoring            Score new datasets
Drift Detection          Monitor prediction quality over time`,
      language: "text",
    },

    {
      heading: "Machine Learning Workflow",
      code: `Prepare Features
        ↓
Train Model
        ↓
Evaluate
        ↓
Register Model
        ↓
Score New Data
        ↓
Monitor & Retrain`,
      language: "text",
    },

    {
      heading: "Feature Engineering",
      content: `
Seg Forge includes visual feature engineering nodes that can be added directly to pipelines.
      `,
    },

    {
      heading: "Available Feature Nodes",
      code: `Scaler
Encoder
Feature Selector
Binning
Imputer
Feature Cross
Train/Test Split`,
      language: "text",
    },

    {
      heading: "Preparing Features",
      content: `
Typical feature engineering workflow:

• Clean missing values

• Encode categorical features

• Normalize numerical features

• Generate interaction features

• Split data into training and testing datasets
      `,
    },

    {
      heading: "Training Models",
      content: `
Models can be trained directly from pipelines or through the MLOps Hub.
      `,
    },

    {
      heading: "Training Using Pipelines",
      content: `
1. Add a Train Model node.

2. Connect it to your prepared dataset.

3. Select the algorithm.

4. Configure target and feature columns.

5. Run the pipeline.
      `,
    },

    {
      heading: "Training Using the MLOps Hub",
      content: `
1. Open MLOps Platform.

2. Select a dataset.

3. Choose an algorithm.

4. Configure parameters.

5. Launch training.
      `,
    },

    {
      heading: "Training Configuration",
      code: `Algorithm
Target Column
Feature Columns
Hyperparameters
Validation Method
Train/Test Ratio`,
      language: "text",
    },

    {
      heading: "Supported Algorithms",
      code: `Algorithm                 Type
----------------------------------------------------
Logistic Regression       Classification
Random Forest             Classification / Regression
XGBoost                   Classification / Regression
Neural Network            Classification / Regression`,
      language: "text",
    },

    {
      heading: "Algorithm Use Cases",
      code: `Logistic Regression   → Churn, Fraud, Binary Outcomes
Random Forest         → General Purpose Modeling
XGBoost               → High Accuracy Tabular Data
Neural Network        → Complex Patterns & Relationships`,
      language: "text",
    },

    {
      heading: "Model Evaluation",
      content: `
After training completes, Seg Forge automatically generates evaluation metrics and visualizations.
      `,
    },

    {
      heading: "Evaluation Metrics",
      code: `Accuracy
Precision
Recall
F1 Score
AUC
RMSE
MAE
Confusion Matrix`,
      language: "text",
    },

    {
      heading: "Model Explainability",
      content: `
Seg Forge includes explainability tooling to understand model behavior.
      `,
    },

    {
      heading: "Explainability Features",
      code: `Feature Importance
SHAP Values
Prediction Contributions
Feature Correlation Analysis`,
      language: "text",
    },

    {
      heading: "Hyperparameter Tuning",
      content: `
Models can be optimized automatically using built-in search strategies.
      `,
    },

    {
      heading: "Tuning Strategies",
      code: `Grid Search
Random Search`,
      language: "text",
    },

    {
      heading: "MLflow Integration",
      content: `
Every training run is automatically tracked in MLflow.
      `,
    },

    {
      heading: "Tracked Information",
      code: `Parameters
Metrics
Artifacts
Datasets
Model Versions
Execution Logs`,
      language: "text",
    },

    {
      heading: "MLflow Components",
      code: `Experiments
Runs
Artifacts
Model Registry`,
      language: "text",
    },

    {
      heading: "Model Registry",
      content: `
Trained models are stored in the Model Registry with versioning support.

Each model version stores:

• Parameters

• Metrics

• Artifacts

• Training data metadata

• Deployment history
      `,
    },

    {
      heading: "Batch Scoring",
      content: `
Use the Predict / Score node to apply trained models to new datasets.
      `,
    },

    {
      heading: "Scoring Workflow",
      code: `Source Data
      ↓
Predict Node
      ↓
Trained Model
      ↓
Predictions
      ↓
Iceberg Table`,
      language: "text",
    },

    {
      heading: "Monitoring Models",
      content: `
Seg Forge continuously monitors model performance and prediction quality.
      `,
    },

    {
      heading: "Monitoring Metrics",
      code: `Prediction Volume
Prediction Drift
Feature Drift
Model Accuracy
Inference Latency`,
      language: "text",
    },

    {
      heading: "Drift Detection",
      content: `
Drift monitoring helps identify when model performance begins to degrade.

Alerts can be configured when:

• Feature distributions change

• Prediction distributions shift

• Accuracy drops below thresholds
      `,
    },

    {
      heading: "Automatic Retraining",
      content: `
Models can be retrained automatically when drift thresholds are exceeded.
      `,
    },

    {
      heading: "Pre-Built Templates",
      content: `
Seg Forge includes ready-to-use machine learning templates for common use cases.
      `,
    },

    {
      heading: "Available Templates",
      code: `Churn Prediction
Credit Risk (PD)
Demand Forecasting
Anomaly Detection`,
      language: "text",
    },

    {
      heading: "Template Contents",
      content: `
Templates include:

• Feature engineering pipelines

• Model configuration

• Evaluation metrics

• Dashboards

• Monitoring rules
      `,
    },

    {
      heading: "Deployment Workflow",
      code: `Feature Engineering
        ↓
Model Training
        ↓
Evaluation
        ↓
Model Registry
        ↓
Scoring Pipeline
        ↓
Monitoring`,
      language: "text",
    },

    {
      heading: "Best Practices",
      content: `
• Start with simple models before complex architectures.

• Track every experiment using MLflow.

• Use feature engineering pipelines for reproducibility.

• Monitor drift continuously.

• Retrain models regularly.

• Version datasets and models together.

• Store predictions in Iceberg tables for auditing and analysis.
      `,
    },
  ],
};

export default doc;