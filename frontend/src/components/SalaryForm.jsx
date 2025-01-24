import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { PREDICT_SALARY_API } from '../utils/api'; // If needed, update the endpoint in constants.js

const SalaryForm = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [predictedSalary, setPredictedSalary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/api/v1/salary/predict', {
        age,
        gender,
        educationLevel,
        jobTitle,
        yearsOfExperience
      });

      setPredictedSalary(response.data.predictedSalary);
    } catch (err) {
      setError('Failed to predict salary');
      console.error('Error predicting salary:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-600 to-blue-500 min-h-screen py-10">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">Salary Prediction</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">Education Level:</label>
            <select
              id="educationLevel"
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Education Level</option>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title:</label>
            <input
              id="jobTitle"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700">Years of Experience:</label>
            <input
              id="yearsOfExperience"
              type="number"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full py-3 text-white font-medium rounded-lg transition duration-200 ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500'
            }`}
          >
            {loading ? 'Predicting...' : 'Predict Salary'}
          </button>
        </form>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        {predictedSalary !== null && !loading && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-blue-700">Predicted Salary:</h3>
            <p className="text-2xl text-gray-800">${predictedSalary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryForm;