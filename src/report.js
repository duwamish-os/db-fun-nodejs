const { Client } = require('pg')

var config = {
  host: 'my.database-server.com',
  port: 5439,
  user: 'database-user',
  password: 'secretpassword!!',
  database: 'analytics'
}
const client = new Client(config)

client.connect((err) => {
  if (err) {
    console.error('postgres connection error', err.stack)
  } else {
    console.log('postgres connected')
  }
})

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

