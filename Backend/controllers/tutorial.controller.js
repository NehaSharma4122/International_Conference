const db = require("../models");
const Tutorial = db.tutorials;

exports.create = (req,res) =>{
    if(!req.body.title){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    tutorial
    .save(tutorial)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured"
        });
    });
}
