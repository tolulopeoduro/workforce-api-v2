exports.createPost = (req , res) => {
    const client = req.app.locals.db;
    client.db("workforce-v2").collection("posts").insertOne(req.body , (error) => {
        if (error) return ;
        res.status(201).json({
            status : 201,
                message : "post created"
            })
        })
    }   