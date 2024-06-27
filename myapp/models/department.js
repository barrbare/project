const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    headOfDepartment: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
    description: { type: String },
}, {
    collection: 'departments',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const DepartmentModel = mongoose.model('Department', departmentSchema);
module.exports = DepartmentModel;
