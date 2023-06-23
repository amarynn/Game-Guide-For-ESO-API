const pg = require('pg')

const localDbName = 'game_guide_eso_database'
console.log(process.env.DATABASE_URL)

let db;
if (process.env.DATABASE_URL) {
    db = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
} else {
    if (process.env.DEV_DB_PASSWORD) {
        db = new pg.Pool({
            database: localDbName,
            password: process.env.DEV_DB_PASSWORD
        })
    } else {
        db = new pg.Pool({
            database: localDbName
        })
    }
}

module.exports = db