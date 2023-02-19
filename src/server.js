import express from "express";
import configurate from "./configs/viewEngine.js";

const app = express();
const port = 6130;

configurate(app);

app.get(`/`, (req, res) => {
    res.render(`index.ejs`);
})

app.get(`/about`, (req, res) => {
    res.render(`about.ejs`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})