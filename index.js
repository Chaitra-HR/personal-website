const express = require('express')
const app = express();
const port = 80;

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})