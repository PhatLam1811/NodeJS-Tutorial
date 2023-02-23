import express from "express"
import bodyParser from "body-parser"
import { createUser, detailsPage, homePage } from "../controllers/homeController.js"
import { aboutPage } from "../controllers/aboutController.js";

const router = express.Router();

const initWebRoute = (app) => {
    const parser = bodyParser.urlencoded({ extended: true });

    router.get(`/`, homePage);
    router.get(`/about`, aboutPage);
    router.get('/details/user/:userId', detailsPage);

    router.post('/user/create', parser, createUser);

    app.use(`/`, router);
}

export default initWebRoute;
