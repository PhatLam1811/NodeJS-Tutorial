import connection from "../configs/dbSettings.js"

// GET
export const homePage = async (req, res) => {
    const [results, fields] = await connection.execute('select * from Users');

    return res.render(`index.ejs`, { usersData: results });
}

// GET
export const detailsPage = async (req, res) => {
    // get user id from request
    const userId = req.params.userId;

    // read from database
    const [results, fields] = await connection.execute(`select * from Users where _id = ${userId}`);

    return res.render(`details.ejs`, { user: results[0] });
}

// POST
export const createUser = async (req, res) => {
    console.log('post requested: ', req.body);

    let { firstName, lastName, email, address } = req.body;
    await connection.execute('insert into Users (firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    return res.redirect('/');
}
