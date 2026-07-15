from sklearn.model_selection import train_test_split 
import pandas as pd
from sklearn.ensemble import RandomForestClassifier 
from sklearn.preprocessing import LabelEncoder 
import joblib
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

df = pd.read_csv('datasets/traffic_features.csv')
print("shape:",df.shape)
print(df.head())
print(df.info())


print(df.isnull().sum())

print(df.dtypes)
le=LabelEncoder()
df['TrafficSituation'] = le.fit_transform(df["TrafficSituation"])

df= pd.get_dummies(
    df, columns=[
        "Area Name",
        "Road/Intersection Name",
        "Congestion Level",
        "Weather Conditions",
        "Roadwork and Construction Activity",
        "TimeBlock",
        "Month_Name"
    ],dtype=int
)
X=df.drop(['TrafficSituation','Date'], axis=1)  # Replace 'target_column' with the actual name of your target column
print(X.head)
print(X.shape)


y=df['TrafficSituation']
print(y.head)
print(y.shape)



X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,random_state=42)


model=RandomForestClassifier(n_estimators=100,random_state=42) 

model.fit(X_train,y_train)

y_pred = model.predict(X_test)



print("Accuracy:", accuracy_score(y_test, y_pred))
print("Precision:", precision_score(y_test, y_pred, average="weighted"))
print("Recall:", recall_score(y_test, y_pred, average="weighted"))
print("F1 Score:", f1_score(y_test, y_pred, average="weighted"))

print(X.columns.tolist())


import pandas as pd

feature_importance = pd.DataFrame({
    "Feature": X.columns,
    "Importance": model.feature_importances_
})

feature_importance = feature_importance.sort_values(
    by="Importance",
    ascending=False
)

print(feature_importance.head(10))

feature_columns = X.columns.tolist() 
joblib.dump(feature_columns, "app/ml/feature_columns.pkl")


import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report



model = DecisionTreeClassifier(random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))
print("Precision:", precision_score(y_test, y_pred, average="weighted"))
print("Recall:", recall_score(y_test, y_pred, average="weighted"))
print("F1 Score:", f1_score(y_test, y_pred, average="weighted"))
