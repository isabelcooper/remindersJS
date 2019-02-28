const { port, user, host, database, password } = require('.././config');
const Pool = require("pg").Pool;

const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: port
  // ssl: true
});

console.log(`Connected to database ${database}`);
//
// const connect = () => {
//   return pool
// }

const getNotes = (request, response) => {
  pool.query('SELECT * FROM notes', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


module.exports = {
  getNotes
}
