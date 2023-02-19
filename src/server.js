import express from "express";
import configurate from "./configs/viewEngine.js";
import { config } from "dotenv";
import initWebRoute from "./routes/web.js";

config();

const app = express();
const port = process.env.port || 3000;

configurate(app);
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})