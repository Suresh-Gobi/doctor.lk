const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
require('dotenv').config();

// Use CORS middleware
app.use(cors({ origin: '*' }));

// Connect to MongoDB using URI from environment variables
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Body parser middleware
app.use(bodyParser.json());

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
