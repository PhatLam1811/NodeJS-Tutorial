import connection from "../configs/dbSettings.js"

// GET
export const homePage = async (req, res) => {
    const [results, fields] = await connection.execute('select * from Users');

    return res.render(`index.ejs`, { usersData: results });
}

// GET
export const detailsPage = async (req, res) => {
    // console.log(userId);

    // get user id from request
    const userId = req.params.userId;

    // read from database
    const [results, fields] = await connection.execute(`select * from Users where _id = ${userId}`);

    return res.render(`details.ejs`, { user: results[0] });
}

// POST
export const createUser = async (req, res) => {
    // console.log('create user request body: ', req.body);

    let { firstName, lastName, email, address } = req.body;
    await connection.execute('insert into Users (firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    return res.redirect('/');
}

// POST
export const deleteUser = async (req, res) => {
    console.log('delete user request body: ', req.body);

    let userId = req.body.userId;
    await connection.execute(`delete from Users where _id=${userId}`);

    return res.redirect('/');
}

// POST
export const editUser = async (req, res) => {
    console.log('edit user request body: ', req.body);

    return res.redirect('/');
}
