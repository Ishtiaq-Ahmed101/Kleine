const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db")

// Load env vars
dotenv.config({path: "./config/config.env"});

// Connection to Database
connectDB();

// Route files
const users = require("./routes/user")

// Initializing the App
const app = express();

// Body parser
app.use(express.json())

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"))
}

// Mount Routes
app.use("/api/users", users)


const PORT = process.env.PORT || 5000;

const server =  app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${process.env.PORT}`))

// Handle unhandle promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1))
})