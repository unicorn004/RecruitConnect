import pickle
import sys
import json
import numpy as np

# Load the trained model from the .pkl file
with open('salary_prediction_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Function to make predictions
def predict_salary(features):
    prediction = model.predict([features])
    return prediction[0]

# Get input from command-line arguments (passed by Node.js)
if __name__ == "__main__":
    input_data = json.loads(sys.argv[1])  # Parse the input data (which will be JSON)
    features = np.array([input_data['Age'], input_data['Gender'], input_data['Education Level'],
                         input_data['Job Title'], input_data['Years of Experience']])

    salary = predict_salary(features)
    print(salary)  # Print the prediction (output to be captured by Node.js)
