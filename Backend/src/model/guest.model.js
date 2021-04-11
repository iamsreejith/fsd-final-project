const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/visitorslog');

const guestSchema = mongoose.Schema({
    firstName : String,
    guestId: String,
    lastName : String,
    emailAddress : String,
    phoneNumber : String,
    dob : String
});

const guestModel = mongoose.model('Guests', guestSchema);

module.exports = guestModel;