const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API działa"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
