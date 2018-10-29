module.exports = function(app) {

    var mobsters = require('../controllers/mobster.controller.js');

    // Create a new mobster
    app.post('/mobsters', mobsters.create);

    // Retrieve all Mobster
    app.get('/mobsters', mobsters.findAll);

    // Retrieve a single Mobster by Id
    app.get('/mobsters/:mobsterid', mobsters.findOne);

    // Update a Mobster with Id
    app.put('/mobsters/:mobsterid', mobsters.update);

    // Delete a Mobster with Id
    app.delete('/mobsters/:mobsterid', mobsters.delete);
}