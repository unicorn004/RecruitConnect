import express from "express";
import axios from "axios";

const router = express.Router();

// Endpoint to predict salary
router.post('/predict', async (req, res) => {
    const { age, gender, educationLevel, jobTitle, yearsOfExperience } = req.body;

    try {
        // Make a POST request to the Flask API
        const response = await axios.post("http://localhost:5000/predict", {
            age,
            gender,
            educationLevel,
            jobTitle,
            yearsOfExperience,
        });

        // Send the predicted salary back to the client
        res.status(200).json({ predictedSalary: response.data.predictedSalary });
    } catch (error) {
        console.error('Error calling Flask API:', error.response?.data || error.message);
        res.status(500).json({ error: "Error predicting salary" });
    }
});

export default router;