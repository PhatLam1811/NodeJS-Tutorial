import express from "express"

const router = express.Router();

const initWebRoute = (app) => {
    app.get(`/`, (req, res) => {
        res.render(`index.ejs`);
    })

    app.get(`/about`, (req, res) => {
        res.render(`about.ejs`);
    })

    app.use(`/`, router)
}

export default initWebRoute
