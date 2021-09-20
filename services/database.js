const {Client} = require('pg');
const env = process.env;

const client = new Client({
    host: env.DATABASE_HOST,
    user: env.DATABASE_USER,
    port: env.DATABASE_PORT,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    query_timeout: 10000
})



client.connect()
  .then(() => console.log('Conectado a Database ✅'))
  .catch(() => {
console.error('Ha ocurrido un error al conectar a Database ❌')
//servidor.close()
}
)

module.exports = {
  database: client
}
