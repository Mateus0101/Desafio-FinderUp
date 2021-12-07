const express = require('express')
const cors = require('cors')

const router = require('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const port = 3000

app.listen(port, () => {
    console.log("Aplicação rodando na porta", port);
})

app.get('/', (request, response) => {
    response.send("API em execução!")
})