const BASE_API_URL = import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:8000";

export const USER_API_END_POINT = `${BASE_API_URL}/api/v1/user`;
export const JOB_API_END_POINT = `${BASE_API_URL}/api/v1/job`;
export const APPLICATION_API_END_POINT = `${BASE_API_URL}/api/v1/application`;
export const COMPANY_API_END_POINT = `${BASE_API_URL}/api/v1/company`;
export const GET_PDF_API_END_POINT = `${BASE_API_URL}/api/v1/getpdf`;

console.log(import.meta.env); // Check all Vite environment variables
console.log(import.meta.env.VITE_REACT_APP_API_URL); // Check your specific API URL