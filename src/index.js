const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001;
app.use(cors())
app.get('/', (req, res) => {
    res.send('Error 404');
});

app.listen(port);