const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const getTasks = (request, response) => {
  pool.query("SELECT * FROM todo.tasks", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addTask = (request, response) => {
  const { description } = request.body;

  pool.query(
    "INSERT INTO todo.tasks (description) VALUES ($1) RETURNING *",
    [description],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Task added with ID: ${results.rows[0].id}`);
    }
  );
};

module.exports = {
  addTask,
  getTasks,
};
