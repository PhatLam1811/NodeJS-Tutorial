import express from "express";
import configurate from "./configs/viewEngine.js";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.port || 3000;

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