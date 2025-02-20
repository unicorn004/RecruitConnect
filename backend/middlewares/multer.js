import multer from "multer";

const storage = multer.memoryStorage();

// Add a file filter to validate the file type
const fileFilter = (req, file, cb) => {
    // Accept PDF files
    if (file.mimetype === "application/pdf") {
        cb(null, true); // Accept the PDF file
    }
    // Accept image files (jpg, jpeg, png, gif, etc.)
    else if (file.mimetype.startsWith("image/")) {
        cb(null, true); // Accept the image file
    } else {
        cb(new Error("Only image and PDF files are allowed"), false); // Reject non-image and non-PDF files
    }
};

export const singleUpload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter, // Attach the file filter
}).single("file");
