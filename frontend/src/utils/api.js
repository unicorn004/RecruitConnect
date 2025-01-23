import axios from 'axios';

// API endpoint for salary prediction
export const PREDICT_SALARY_API = "http://localhost:8000/api/v1/salary/predict"; // Update this to the actual backend endpoint

// Function to get predicted salary
export const getPredictedSalary = async (age, gender, educationLevel, jobTitle, yearsOfExperience) => {
  try {
    // Making the POST request to the backend with user input
    const response = await axios.post(PREDICT_SALARY_API, {
      age,
      gender,
      educationLevel,
      jobTitle,
      yearsOfExperience,
    });
    
    // Return the predicted salary
    return response.data.predictedSalary;
  } catch (error) {
    console.error("Error in salary prediction:", error);
    throw error;  // You can handle this more gracefully in your UI (e.g., showing an error message to the user)
  }
};