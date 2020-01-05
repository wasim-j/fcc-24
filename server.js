const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')

const connect_to_db = require('./db/connect')
const routes = require('./routes/routes.js')

let db = connect_to_db();

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'))
routes(app);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
