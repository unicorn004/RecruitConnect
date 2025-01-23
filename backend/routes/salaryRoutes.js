import express from "express";
import { PythonShell } from 'python-shell';
const router = express.Router();

// Endpoint to predict salary
router.post('/predict', (req, res) => {
    const { age, gender, educationLevel, jobTitle, yearsOfExperience } = req.body;

    // Prepare the data to be passed to Python script
    const options = {
        mode: 'text',
        pythonPath: '.env\\Scripts\\python.exe', // Update with your Python path if necessary
        pythonOptions: ['-u'],  // Ensure stdout/stderr is unbuffered
        scriptPath: 'backend/utils', // Directory where your predict_salary.py is located
        args: [age, gender, educationLevel, jobTitle, yearsOfExperience]  // Passing inputs as arguments
    };

    // Call the Python script
    PythonShell.run('predict_salary.py', options, (err, result) => {
        if (err) {
            console.error('Error running Python script:', err);
            return res.status(500).send('Error predicting salary');
        }
        
        // Send back the result from Python script (predicted salary)
        res.json({ predictedSalary: result[0] });
    });
});

export default router;