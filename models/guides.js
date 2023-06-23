const db = require("../db/db.js")

const Guides = {
    findAll: () => {
        const sql = `SELECT * FROM guides order by likes`

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Guides