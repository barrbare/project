const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date },
    gpa: { type: Number },
    studentCode: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },  // New email field
    subjects: [{
        code: { type: String },
        name: { type: String }
    }]
}, {
    collection: 'students',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const StudentModel = mongoose.model('Student', studentSchema);
module.exports = StudentModel;