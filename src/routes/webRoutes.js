import express from "express"
import { homePage } from "../controllers/homeController.js"
import { aboutPage } from "../controllers/aboutController.js";

const router = express.Router();

const initWebRoute = (app) => {

    router.get(`/`, homePage);
    router.get(`/about`, aboutPage);

    app.use(`/`, router);
}

export default initWebRoute;
