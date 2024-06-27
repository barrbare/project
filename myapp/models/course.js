const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor'}, 
}, {
    collection: 'course',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const CourseModel = mongoose.model('Course', courseSchema);
module.exports = CourseModel;
