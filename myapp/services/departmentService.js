const DepartmentModel = require('../models/department');

module.exports = {
    getAll: (req, res) => {
        DepartmentModel.find({})
        .populate('headOfDepartment professors')
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).json(error);
        })
    },
    add: async (req, res) => {
        try {
            const savedItem = await new DepartmentModel(req.body).save();
            res.json(savedItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const item = await DepartmentModel.findById(req.params.id)
            .populate('headOfDepartment professors');
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            await DepartmentModel.deleteOne({ _id: req.params.id });
            res.json({ success: true });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const item = await DepartmentModel.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                {
                    new: true
                }
            );
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}