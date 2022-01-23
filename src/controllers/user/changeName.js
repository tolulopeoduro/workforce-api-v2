const { ObjectId } = require("bson");
const fs = require('fs')

exports.changeName = async (req, res, next) => {
    const client = req.app.locals.db;
    
    client.db("workforce-v2").collection("users").updateOne(
        {_id : ObjectId(req.body.userId)} ,
        {$set : {full_name : req.body.name}},
        {upsert : true}
        ).then(() => {
            return res.status(200).json({
                status : "successful"
        })
    })
  }