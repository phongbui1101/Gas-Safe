const { Router } = require('express');
const { authenticate, authorize } = require('../db/middleware/verify-token');
const sendSMS = Router();
const client = require('twilio')('', '');
sendSMS.get('/', authenticate, authorize("user"), async (req, res,next) => {
    console.log("send sms")
    client.messages.create({
        body:'Gas leak detected !',
        from:'+12078172392',
        to:'+12099216581'
    }).then(messages=>{
        console.log("messages: ",messages);
        res.status(200).send("ok");
    }).catch(error => res.status(400).send(error))
    // Hàm next có tham số là hàm handle error

})
module.exports = {
    sendSMS
}