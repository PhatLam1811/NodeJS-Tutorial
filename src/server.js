import express from "express";
import bodyParser from "body-parser";
import configurate from "./configs/viewEngine.js";
import { config } from "dotenv";
import initWebRoute from "./routes/webRoutes.js";

config();

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

configurate(app);
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})