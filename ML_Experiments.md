# ML Experiments

## Experiment 1: Baseline Model

### Model Used
Random Forest Classifier

### Why I Chose This Model
The TrafficQ project predicts traffic situations such as Low, Medium, High, or Heavy. Since this is a classification problem, Random Forest Classifier is a suitable choice. It is easy to implement, works well on structured datasets, handles both numerical and categorical features (after encoding), and is less prone to overfitting than a single Decision Tree.

### Evaluation Metrics
- Accuracy: ___1.0_______
- Precision: ____1.0______
- Recall: _____1.0_____
- F1-Score: ___1.0_______

*(Fill these values after running your evaluation code.)*

### Strengths
- Handles classification problems effectively.
- Works well with large datasets.
- Reduces overfitting by combining multiple decision trees.
- Can capture complex relationships between features.
- Requires very little feature scaling.

### Weaknesses
- Training can take longer than simpler models.
- Uses more memory because it builds many trees.
- Less interpretable than a single Decision Tree.
- The model size can become large.

### Conclusion
Random Forest Classifier is a good baseline model for the TrafficQ project. It provides strong performance on traffic classification tasks and serves as a reliable starting point before comparing it with other algorithms such as XGBoost.




## Experiment 2: Decision Tree Classifier

### Why I Chose This Model
Decision Tree Classifier is a simple classification algorithm that is easy to interpret. It serves as a good comparison with Random Forest because Random Forest is built from multiple decision trees.

### Evaluation Metrics
- Accuracy: 1.0
- Precision: 1.0
- Recall: 1.0
- F1-Score: 1.0

### Strengths
- Easy to understand and visualize.
- Fast to train.
- Works with both numerical and categorical data (after encoding).

### Weaknesses
- Can easily overfit the training data.
- Less accurate than Random Forest on many real-world datasets.

### Comparison with Random Forest
Random Forest generally performs better because it combines predictions from many decision trees, reducing overfitting and improving generalization.





# Model Comparison

| Metric | Random Forest Classifier | Decision Tree Classifier |
|--------|--------------------------|--------------------------|
| Accuracy | 1.00 | 1.00 |
| Precision | 1.00 | 1.00 |
| Recall | 1.00 | 1.00 |
| F1-Score | 1.00 | 1.00 |
| Training Time | Slightly Higher | Lower |
| Advantages | More robust, reduces overfitting, better generalization | Fast, simple, easy to understand |
| Disadvantages | More memory and computation required | More likely to overfit |

## Final Model Selection

I selected **Random Forest Classifier** for the TrafficQ project.

### Reason
Although both models achieved the same evaluation metrics on my dataset, Random Forest is generally more robust because it combines predictions from multiple decision trees. This reduces overfitting and usually performs better on unseen traffic data. Therefore, Random Forest is a more reliable choice for deployment in the TrafficQ application.