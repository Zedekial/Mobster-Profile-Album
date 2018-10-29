const mongoose = require('mongoose');

// Configuring the database
const mongodbUrl = 'mongodb://localhost:27017/mobsters-album';

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
            required: 'Please give your firstname',
            trim: true
        },
        phone: {
            type: String,
            required: 'Please give your phone number',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address'],
            required: 'Please give your address'
        },
        role: {
            type: String,
            required: 'Please give your role name',
            trim: true
        },
        picture: {
            data: Buffer,
            contentType: String
        }
    })
module.exports = mongoose.model('Mobster', MobsterSchema);
