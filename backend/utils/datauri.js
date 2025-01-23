import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
    if (!file || !file.buffer) {
        throw new Error("File or file buffer is missing");
    }

    const parser = new DataUriParser();
    return parser.format('.pdf', file.buffer); // Force the file to be treated as a PDF
};

export default getDataUri;