import pandas as pd

df= pd.read_csv('datasets/traffic.csv')

print("Shape:",df.shape)
print("\nColumns:",df.columns)
print("\nData Types:\n",df.dtypes)

print("\nMissing Values:\n",df.isnull().sum()) 

for col in df.select_dtypes(include=['number']).columns:
    df[col] =df[col].fillna(df[col].mean())

for col in df.select_dtypes(include=['object','string']).columns:
    df[col] =df[col].fillna(df[col].mode().iloc[0])



duplicates = df.duplicated().sum() 
print("\nDuplicate Rows:",duplicates)



if "Date" in df.columns:
    df["Date"] = pd.to_datetime(df["Date"], errors="coerce")

if "Time" in df.columns:
    df["Time"] = pd.to_datetime(df["Time"], errors="coerce")


columns_to_remove = []

for col in df.columns:
    if "id" == col.lower() or col.lower() == "unnamed: 0":
        columns_to_remove.append(col)

df = df.drop(columns=columns_to_remove, errors="ignore")


print("\nFinal Shape:", df.shape)

print("\nMissing Values After Cleaning:")
print(df.isnull().sum())

print("\nData Types After Cleaning:")
print(df.dtypes)


df.to_csv("datasets/traffic_cleaned.csv", index=False)

print("\nCleaned dataset saved as datasets/traffic_cleaned.csv")




##feature Engineering
df["Day_Number"] = df["Date"].dt.dayofweek


df["Weekend"] = (df["Date"].dt.dayofweek >= 5).astype(int)


df["Month"] = df["Date"].dt.month


df["Month_Name"] = df["Date"].dt.month_name()


df["Quarter"] = df["Date"].dt.quarter


df["Year"] = df["Date"].dt.year


df["Day"] = df["Date"].dt.day


df["Week_Number"] = df["Date"].dt.isocalendar().week.astype(int)


df["Is_Month_Start"] = df["Date"].dt.is_month_start.astype(int)


df["Is_Month_End"] = df["Date"].dt.is_month_end.astype(int)



df.to_csv("datasets/traffic_features.csv", index=False)

print("Feature engineering completed successfully!")
print("New dataset saved as: datasets/traffic_features.csv")

print("\nNew Features Added:")
print([
    "Day_of_Week",
    "Day_Number",
    "Weekend",
    "Month",
    "Month_Name",
    "Quarter",
    "Year",
    "Day",
    "Week_Number",
    "Is_Month_Start",
    "Is_Month_End"
])