const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/visitorslog');


const appoinmentSchema = mongoose.Schema({
    guestName: String,
    guestId: String,
    appoinmentID: String,
    officerName : String,
    purpose : String,
    appoinmentDate : String,
    status : String
});

const appoinmentModel = mongoose.model('Appoinments', appoinmentSchema);

module.exports = appoinmentModel;