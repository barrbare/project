const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    subjectsTaught: [{
        code: { type: String },
        name: { type: String }
    }]
}, {
    collection: 'professors',  
    timestamps: true,           
    read: 'nearest',            
    writeConcern: {             
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const Professor = mongoose.model('Professor', professorSchema);
module.exports = Professor;
