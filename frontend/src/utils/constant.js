const BASE_API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000"; // Default to localhost for development

export const USER_API_END_POINT = `${BASE_API_URL}/api/v1/user`;
export const JOB_API_END_POINT = `${BASE_API_URL}/api/v1/job`;
export const APPLICATION_API_END_POINT = `${BASE_API_URL}/api/v1/application`;
export const COMPANY_API_END_POINT = `${BASE_API_URL}/api/v1/company`;
export const GET_PDF_API_END_POINT = `${BASE_API_URL}/api/v1/getpdf`;