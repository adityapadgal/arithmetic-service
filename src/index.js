const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001;
app.use(cors())
app.get('/', (req, res) => {
    res.send('Arithmetic Service - Hello World!');
});
app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
});

app.get('/sub/:n/:m', (req, res) => {
    res.json(Number(req.params.n) - Number(req.params.m));
});

app.listen(port);