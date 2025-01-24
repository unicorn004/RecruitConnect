import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error

# Load the dataset
df = pd.read_csv(r'C:\Users\TANMAY\jobportal-yt\Salary_Prediction-main\Salary_Data.csv')

# Drop null values
df.dropna(inplace=True)

# Encode categorical variables
df['Gender'] = df['Gender'].map({'Male': 1, 'Female': 0})
education_mapping = {"High School": 0, "Bachelor's": 1, "Master's": 2, "PhD": 3}
df['Education Level'] = df['Education Level'].map(education_mapping)

# One-hot encode Job Title
df = pd.get_dummies(df, columns=['Job Title'], drop_first=True)

# Separate features and target
X = df.drop('Salary', axis=1)
y = df['Salary']

# Split the data
x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

# Train a Random Forest model
rfr = RandomForestRegressor(n_estimators=100, random_state=42)
rfr.fit(x_train, y_train)

# Evaluate the model
y_pred = rfr.predict(x_test)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_test, y_pred)

print("Model Evaluation:")
print(f"R-squared Score: {rfr.score(x_test, y_test):.3f}")
print(f"Mean Squared Error: {mse:.2f}")
print(f"Root Mean Squared Error: {rmse:.2f}")
print(f"Mean Absolute Error: {mae:.2f}")

# Save the trained model and feature names
model_data = {
    "model": rfr,
    "feature_names": X.columns.tolist()
}
with open('salary_prediction_model.pkl', 'wb') as file:
    pickle.dump(model_data, file)

print("Model and feature names saved as 'salary_prediction_model.pkl'")
