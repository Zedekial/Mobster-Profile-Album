const mobster = require('./models/mobster');
const  mobsters = require('./controllers/mobster.controller.js');

describe('Test the addMobster method', () => {
    let mobster;
    beforeAll(() => {
        mongoose.connect('mongodb://localhost:27017/mobsters-album');
    });
    beforeEach(() => {
        mobster = new Mobster();
        return mobsters.create();
    });
    afterEach(() => {
        return mobsters.delete();
    });
    afterAll((done) => {
        mongoose.disconnect(done);
    });
});