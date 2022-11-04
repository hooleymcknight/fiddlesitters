import mysql from 'mysql2/promise'

export default async function handler(req, res) {

  const db = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    socketPath: '/var/run/mysqld/mysqld.sock',
  })

  try {
    const query = req.body.query
    const values = []
    const [data] = await db.execute(query, values)
    db.end()
    res.status(200).json({ results: data })
  }
  catch(error) {
    res.status(500).json({ error: error.message})
  }
}