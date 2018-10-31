const mongoose = require('mongoose');
var linkJSON = require('./link.json')

// Configuring the database
const mongodbUrl = linkJSON.link;

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(mongodbUrl, { useNewUrlParser: true })
.then(() => {
    console.log("Successfully connected to MongoDB.");
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});

const MobsterSchema = mongoose.Schema({
        name: {
            type: String,
            required: 'Please give your name',
            trim: true
        },
        phone: {
            type: String,
            required: 'Please give your phone number',
            trim: true
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address'],
            required: 'Please give your email address'
        },
        role: {
            type: String,
            required: 'Please give your role',
            trim: true
        },
        src: {
            type: String
        }
    })
module.exports = mongoose.model('Mobster', MobsterSchema);
