const {Client} = require('pg')

const client = new Client({
    host: "chunee.db.elephantsql.com",
    user: "iwtixpcr",
    port: 5432,
    password: "7aMtNMPtL4FVYMdZhHenHYP8MEMXSStW",
    database: "iwtixpcr",
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