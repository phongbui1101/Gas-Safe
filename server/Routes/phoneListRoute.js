const { Router } = require('express')
const phoneListRoute = Router();
phoneListRoute.get('/', (req, res) => {
    res.status(200).send("OK1");
})
module.exports = {
    phoneListRoute
}