const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/save_file', function (req, res) {
    console.log('Запрос пришел')
    res.json({ respone: 'success' })
})


app.post('/save_file_post', upload.single('ited'), function (req, res) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log('Запрос post пришел')
    console.log(req.file)
    console.log(req.body)
    res.json({ respone: 'success' })
})

app.listen(5000, console.log('сервер запущен на порту 5000!!!'))