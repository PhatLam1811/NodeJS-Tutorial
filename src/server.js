import express from "express";
import configurate from "./configs/viewEngine.js";
import { config } from "dotenv";
import initWebRoute from "./routes/webRoutes.js";
import connection from "./configs/dbSettings.js";

config();

const app = express();
const port = process.env.port || 3000;

configurate(app);
initWebRoute(app);
connection.connect((err) => {
    if (err)
        console.log(err);
    else
        console.log('connected!');
})

connection.query(
    'select * from Users', (err, res, fields) => {
        console.log(res)
    }
)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})