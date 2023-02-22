import connection from "../configs/dbSettings.js";

// GET
export const homePage = (req, res) => {
    connection.connect((err) => {
        if (err) console.log(err);
    })

    connection.query(
        'select * from Users', (err, results, fields) => {
            let data = [];

            if (err) throw err;

            results.map((row) => {
                data.push({
                    _id: row._id,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    email: row.email,
                    address: row.address
                })
            })

            return res.render(`index.ejs`, { usersData: data });
        })
}
