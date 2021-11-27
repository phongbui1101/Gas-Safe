const { FieldValue } = require('@google-cloud/firestore');
const { Router } = require('express');
const { db, db_connected } = require('../db/database');
const settingRoute = Router();
settingRoute.get('/', async (req, res) => {
    // db
    
    // let data = await result.get()
    // let data = await result.where('email', '==', 'trunganh@gmail.com').get();
    let data = await db_connected.where('email', '==', 'trunganh@gmail.com').limit(1).get()
    // let data = await result.where('phonelist', "array-contains", {name:'newItem23'}).limit(1).get()
    // tìm trong collection user xem thằng nào có mảng phonelist và trong mảng phonelist có 'newItem23' , chấm where để thêm nhiều điều kiện
    if(!data.empty){
        data.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            return res.status(200).send(doc.data().email);
        });
    }else{
        res.status(200).send("Fail");
    }

    // result.doc('C6KpdU3nm5oL5rxt9lwL').update({email:"trunganh222@gmail.com"});
    // Update filed email 
    result.doc('C6KpdU3nm5oL5rxt9lwL').update({phonelist:FieldValue.arrayUnion({name: 'newItem2'} )});
    //thêm vào mảng phoneList
    result.doc('C6KpdU3nm5oL5rxt9lwL').update({phonelist:FieldValue.arrayRemove({name: 'newItem2'} )});
    // Xóa phần tử trong mảng phonelist

    // res.status(200).send("fail");
})
module.exports = {
    settingRoute
}