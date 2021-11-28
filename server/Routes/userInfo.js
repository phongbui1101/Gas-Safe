const { Router } = require('express');
const { db, db_connected } = require('../db/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');
const { authorize, authenticate } = require('../db/middleware/verify-token');
const userInfoRouter = Router();

userInfoRouter.get('/', authenticate, authorize("user"), async (req, res) => {
    console.log(req.decodeToken);
    let data = await db_connected.where('email', '==', `${req.decodeToken.email}`).limit(1).get();
    if (!data.empty) {
        data.forEach(doc => {
            let { email, phone, name, address } = doc.data();
            res.status(200).send({ email, phone, name, address });
        })
    } else {
        next({ code: 500 })
    }

})
userInfoRouter.put('/', authenticate, authorize("user"), async (req,res) => {
        let docID = req.decodeToken.id;
        
})
module.exports = {
    userInfoRouter
}