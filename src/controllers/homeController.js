import connection from "../configs/dbSettings.js";

// GET
export const homePage = async (req, res) => {
    const [results, fields] = await connection.execute('select * from Users')

    return res.render(`index.ejs`, { usersData: results });
}
