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

const getNoteById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM notes WHERE id = ${id}', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addNote = (request, response) => {
  const {header, body, date, userid} = request.body
  pool.query('INSERT INTO notes (header, body, date, userid) VALUES()', (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Note added with ID: ${result.insertId}`)
  })
}


module.exports = {
  getNotes,
  getNoteById,
  addNote
}
