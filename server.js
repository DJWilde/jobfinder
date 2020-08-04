const express = require("express");
const connectDatabase = require("./config/database");

const app = express();

connectDatabase();

// Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API działa"));

// Routes
app.use("/api/users", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/employee", require("./routes/api/employee"));
app.use("/api/employer", require("./routes/api/employer"));
app.use("/api/offers", require("./routes/api/offer"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
