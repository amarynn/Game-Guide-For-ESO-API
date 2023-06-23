const db = require("../db/db.js")

const Comments = {
    findByGuideId: (guideId) => {
        const sql = `SELECT * FROM comments WHERE guide_id = $1`
        console.log(guideId)
        return db
            .query(sql, [guideId])
            .then(dbRes => dbRes.rows)
    },
    create: (guideId, commentText) => {
        const sql = `INSERT INTO comments(guide_id, comment) Values($1, $2) RETURNING *`

        return db
            .query(sql, [guideId, commentText])
            .then(dbRes => dbRes.rows[0])
    }
}

module.exports = Comments