const { Pool } = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password: "123r1xx@",
    host: "localhost",
    port: 5432,
    database: "launchstoredb"
})