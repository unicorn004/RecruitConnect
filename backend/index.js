import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import fileRoutes from "./routes/fileRoutes.js";
import salaryRoutes from "./routes/salaryRoutes.js";
dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin: function (origin, callback) {
      const allowedOrigins = [
        'https://recruit-connect.vercel.app' // Deployed frontend
      ];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error('Not allowed by CORS')); // Reject the request
      }
    },
    credentials: true, // Allow credentials (cookies, authorization headers)
  };

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/getpdf", fileRoutes);
app.use("/api/v1/salary", salaryRoutes);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})