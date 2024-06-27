const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date },
    email: { type: String, required: true, unique: true },
}, {
    collection: 'staff',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const StaffModel = mongoose.model('Staff', staffSchema);
module.exports = StaffModel;