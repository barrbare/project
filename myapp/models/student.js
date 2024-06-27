const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date },
    gpa: { type: Number },
    studentCode: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    subjects: [{
        code: { type: String },
        name: { type: String }
    }],
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
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
