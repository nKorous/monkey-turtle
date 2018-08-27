let express = require('express')
let cors = require('cors')
let moment = require('moment')
let dateFormat = require('dateformat')
let bodyParser = require('body-parser')

let app = express()


//app.use declarations

app.use(cors())
app.use(bodyParser.json())

//local vars
let PORT = env.process.PORT || 9000


//App listens on ENV.PORT or 9000
app.listens(PORT, () => {
	console.log(`Listening on ${PORT}.`)
})

app.get('/helloWorld', async (req, res) => {
	res.status(200).send({"MSG":"Hello World"})
})

