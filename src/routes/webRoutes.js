import express from "express"
import { editUser, deleteUser, createUser, detailsPage, homePage } from "../controllers/homeController.js"
import { aboutPage } from "../controllers/aboutController.js";

const router = express.Router();

const initWebRoute = (app) => {
    router.get(`/`, homePage);
    router.get(`/about`, aboutPage);
    router.get('/details/user/:userId', detailsPage);

    router.post('/create-user', createUser);
    router.post('/edit-user', editUser);
    router.post(`/delete-user`, deleteUser);

    app.use(`/`, router);
}

export default initWebRoute;
