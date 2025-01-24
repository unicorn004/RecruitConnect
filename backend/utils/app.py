from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS
import pickle
import numpy as np
from flask import Flask, request, jsonify

# Load the trained model and feature names
with open('salary_prediction_model.pkl', 'rb') as file:
    model_data = pickle.load(file)

model = model_data['model']
feature_names = model_data['feature_names']

# Initialize Flask app
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict_salary():
    try:
        # Parse input data
        data = request.get_json()
        age = data.get('age')
        gender = data.get('gender')  # 'Male' or 'Female'
        education_level = data.get('educationLevel')
        job_title = data.get('jobTitle')
        years_of_experience = data.get('yearsOfExperience')

        # Encode input data
        gender_encoded = 1 if gender == 'Male' else 0
        education_encoded = {"High School": 0, "Bachelor's": 1, "Master's": 2, "PhD": 3}[education_level]

        # Create input vector with all required features
        input_data = {
            'Age': age,
            'Gender': gender_encoded,
            'Education Level': education_encoded,
            'Years of Experience': years_of_experience,
        }

        # Add zeroes for one-hot encoded job titles
        for feature in feature_names:
            if feature.startswith('Job Title_'):
                input_data[feature] = 1 if feature == f'Job Title_{job_title}' else 0

        # Ensure input order matches feature names
        input_vector = np.array([input_data[feature] for feature in feature_names]).reshape(1, -1)

        # Predict the salary
        predicted_salary = model.predict(input_vector)[0]
        return jsonify({'predictedSalary': predicted_salary}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)