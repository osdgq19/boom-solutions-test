const http = require('express')()
const cors = require('cors')
const port = 3000
const data = require('./articles.json')

http.use(cors())


http.listen( port, ()=> console.log(`Alive on http://localhost:${port}`))

http.get('/prueba', (req, res)=> {

    res.status(200).send(data)

})

