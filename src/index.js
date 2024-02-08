const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001;
app.use(cors())
app.get('/', (req, res) => {
    res.send('Diksha is dumbo');
});

app.listen(port);