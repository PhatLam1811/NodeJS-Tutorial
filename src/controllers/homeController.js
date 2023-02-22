import connection from "../configs/dbSettings.js";

// GET
export const homePage = async (req, res) => {
    const [results, fields] = await connection.execute('select * from Users')

    return res.render(`index.ejs`, { usersData: results });
}

// GET
export const detailsPage = async (req, res) => {
    // get user id from request
    const userId = req.params.userId;

    // read from database
    const [results, fields] = await connection.execute(`select * from Users where _id = ${userId}`);

    return res.render(`details.ejs`, { user: results[0] })
}
