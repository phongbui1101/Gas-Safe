const express = require('express');
const { PORT } = require('./config/config');
const { rootRoute } = require('./Routes/rootRoute');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())

// app.options('*', cors());

app.use('/', rootRoute)
app.use('/', (err, req, res, next) => {
    const errCode = err.code || 500;
    const msg = err.msg || "Internal Server Error";
    console.log("bad request")
    res.status(errCode).send(msg);
})
app.listen(PORT, () => {
    console.log("Server has been started")
})