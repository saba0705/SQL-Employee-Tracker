const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'employee_db',
    password: "Ayaan12$",
    port: 5432,
});

module.exports = pool;