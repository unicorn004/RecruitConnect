import axios from "axios";

export const getPdf = async (req, res) => {
    try {
        const { fileUrl } = req.query;

        // Fetch the file from Cloudinary
        const response = await axios.get(fileUrl, { responseType: "arraybuffer" });

        // Set headers to force download the file
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=Resume.pdf");  // Changed to force download
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching PDF:", error);
        res.status(500).send("Unable to fetch PDF");
    }
};