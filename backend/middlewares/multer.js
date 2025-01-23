import multer from "multer";

const storage = multer.memoryStorage();

// Add a file filter to validate the file type
const fileFilter = (req, file, cb) => {
    // Check the file's MIME type
    if (file.mimetype === "application/pdf") {
        cb(null, true); // Accept the file
    } else {
        cb(new Error("Only PDF files are allowed"), false); // Reject the file
    }
};

export const singleUpload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter, // Attach the file filter
}).single("file");