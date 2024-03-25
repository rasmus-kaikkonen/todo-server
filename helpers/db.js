require('dotenv').config();
const { Pool } = require('pg');

const openDb = () => {
    const pool = new Pool({
        user: "root",
        host: "dpg-cntv5b0l5elc73cj1so0-a.oregon-postgres.render.com",
        database: "todo_r1ks",
        password: "hWx4LR2ppYdXmINiR7ROeVxmm0EXXxNg",
        port: 5432,
        ssl: true
    });
    return pool;
}

const query = async (sql, values = []) => {
    return new Promise(async(resolve, reject) => {
        try {
            const pool = openDb();
            const result = await pool.query(sql, values);
            resolve(result);
        } catch(error) {
            reject(error);
        }
    });
}

module.exports = {
    query
}
