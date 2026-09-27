const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");

const app = express();
const PORT = 3000;

// Parse JSON request bodies
app.use(express.json());

// Global logger middleware - before routes
app.use(logger);

// Mount student router
app.use("/students", studentRoutes);

// Simple error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        error: "Internal server error"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});