const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

const banksData = fs.readFileSync(path.join(__dirname, "./db/banks.json"));
const profileData = fs.readFileSync(path.join(__dirname, "./db/profile.json"));
const profile = JSON.parse(profileData);
const banks = JSON.parse(banksData);

app.get("/", (req, res) => {
    res.render("index", { banks, profile });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mod.exports = app;
