import express from "express"
import { userEditPage, editUser, deleteUser, createUser, detailsPage, homePage } from "../controllers/homeController.js"
import { aboutPage } from "../controllers/aboutController.js";
import path from "path";
import multer from "multer";
import appRoot from "app-root-path";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, appRoot + '/src/public/images/avatars/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: (req, file, cb) => {
        cb(null, `user_${req.body.id}_avatar` + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const initWebRoute = (app) => {
    router.get(`/`, homePage);
    router.get(`/about`, aboutPage);
    router.get('/details/user/:userId', detailsPage);
    router.get('/edit/user/:userId', userEditPage);

    router.post('/create-user', createUser);
    router.post('/edit-user', upload.single('avatar'), editUser);
    router.post(`/delete-user`, deleteUser);

    app.use(`/`, router);
}

export default initWebRoute;
