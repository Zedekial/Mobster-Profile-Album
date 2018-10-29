const Mobster = require('../models/mobster.model.js');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

// POST
exports.create = (req, res) => {
    var form = new formidable.IncomingForm();
    var dir = path.resolve(__dirname, '..', '..','uploads');
    let filePath = ''
    
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    };

    form.maxFileSize = 20 * 1024 * 1024;
    
    form.on('fileBegin', function (name, file){
        file.path = path.resolve(dir, file.name);
        filePath = file.path;
    });
    
    form.on('error', function(error){
        res.json({
            message: error
        });
    })
    
    form.on('end', function(){
        res.json({message: 'File uploaded'});
    })
    
    form.parse(req);

    const mobster = new Mobster({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        role: req.body.role,
        picture: filePath
    });
    
    mobster.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// GET
exports.findAll = (req, res) => {
    Mobster.find()
    .then(mobsters => {
        res.send(mobsters);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// GET ONE
exports.findOne = (req, res) => {
    Mobster.findById(req.params.mobsterid)
    .then(mobster => {
        if(!mobster) {
            return res.status(404).send({
                message: "mobster not found with id " + req.params.mobsterid
            });
        }
        res.send(mobster);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "mobster not found with id " + req.params.mobsterid
            });
        }
        return res.status(500).send({
            message: "Error retrieving mobster with id " + req.params.mobsterid
        });
    });
};

// UPDATE a mobster
exports.update = (req, res) => {
    Mobster.findByIdAndUpdate(req.params.mobsterid, {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        role: req.body.role
    }, {new: true})
    .then(mobster => {
        if(!mobster) {
            return res.status(404).send({
                message: "mobster not found with id " + req.params.mobsterid
            });
        }
        res.send(mobster);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "mobster not found with id " + req.params.mobsterid
            });
        }
        return res.status(500).send({
            message: "Error updating mobster with id " + req.params.mobsterid
        });
    });
};

// DELETE a mobster
exports.delete = (req, res) => {
    Mobster.findByIdAndRemove(req.params.mobsterid)
    .then(mobster => {
        if(!mobster) {
            return res.status(404).send({
                message: "mobster not found with id " + req.params.mobsterid
            });
        }
        res.send({message: "mobster deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "mobster not found with id " + req.params.mobsterid
            });
        }
        return res.status(500).send({
            message: "Could not delete mobster with id " + req.params.mobsterid
        });
    });
};
