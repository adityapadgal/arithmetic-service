const express = require('express')
const app = express()
const cors = require('cors')
const { add } = require("./arithmetica")
const port = 3001;
app.use(cors())
app.get('/', (req, res) => {
    res.send('Arithmetic Service - last updated ');
});
// app.get('/add/:n/:m', (req, res) => {

//     res.json(Number(req.params.n) + Number(req.params.m));?
// });

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum  = add(n,m);
        res.json(sum);
});

app.get('/sub/:n/:m', (req, res) => {
    res.json(Number(req.params.n) - Number(req.params.m));
});

app.listen(port);
