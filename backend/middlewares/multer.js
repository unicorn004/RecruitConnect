import multer from "multer";

// Set storage to memory storage
const storage = multer.memoryStorage();

// Define the file filter to handle both image and pdf file types
const fileFilter = (req, file, cb) => {
    const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
    const allowedPdfTypes = ["application/pdf"];
    
    // Check if the file is either an image or a pdf
    if (allowedImageTypes.includes(file.mimetype) || allowedPdfTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error("Only image or PDF files are allowed"), false); // Reject the file
    }
};

// Define limits for file size (e.g., 5MB)
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter, // Attach the file filter
});

// Use a single file upload for both profile photo and resume
export const singleUpload = upload.single("file");