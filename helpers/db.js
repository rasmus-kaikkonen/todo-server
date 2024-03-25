require('dotenv').config();
const { Pool } = require('pg');

const openDb = () => {
    const pool = new Pool({
        user: "root",
        host: 5432,
        database: "todo_r1ks",
        password: "hWx4LR2ppYdXmINiR7ROeVxmm0EXXxNg",
        port: 10000,
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
