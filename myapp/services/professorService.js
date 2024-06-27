const ProfessorModel = require('../models/professor');

module.exports = {
    getAll: (req, res) => {
        ProfessorModel.find({})
            .populate('courses')
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    },
    add: async (req, res) => {
        try {
            const newProfessor = new ProfessorModel(req.body);
            const savedProfessor = await newProfessor.save();
            res.json(savedProfessor);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const professor = await ProfessorModel.findById(req.params.id)
            .populate('courses');
            res.json(professor);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            await ProfessorModel.deleteOne({ _id: req.params.id });
            res.json({ success: true });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const updatedProfessor = await ProfessorModel.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.json(updatedProfessor);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
