from sklearn.model_selection import train_test_split 
import pandas as pd
from sklearn.ensemble import RandomForestClassifier 
from sklearn.preprocessing import LabelEncoder 
import joblib

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

joblib.dump(model,"models/traffic_model.pkl")
joblib.dump(le,"models/label_encoder.pkl")

y_pred = model.predict(X_test)

print("Predictions:")
print(y_pred[:10])

print("Model Saved Successfully")