const Pool = require("pg").Pool;
const pool = new Pool({
  user: "rpgxizkfksodhg",
  host: "ec2-54-243-128-95.compute-1.amazonaws.com",
  database: "dc0qksqj2uljur",
  password: "3bacf6740d5cb317c2b8801b432aa300d04c5d8905ea11039416a1489840ebc9",
  port: 5432,
  ssl: true
});

console.log("Connected to database");

const connect = () => {
  return pool
}

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
