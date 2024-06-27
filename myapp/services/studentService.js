const StudentModel = require('../models/student');
const CourseModel = require('../models/course');

module.exports = {
    getAll: (req, res) => {
        StudentModel.find({})
            .populate('courses')
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                res.status(500).json(error);
            })
    },
    add: async (req, res) => {
        try {
            const savedItem = await new StudentModel(req.body).save();
            res.json(savedItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const item = await StudentModel.findById(req.params.id).populate('courses');;
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            await StudentModel.deleteOne({ _id: req.params.id });
            res.json({ success: true });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const item = await StudentModel.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                {
                    new: true
                }
            );
            res.json(item);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    enrollStudentInCourse: async (req, res) => {
        const { studentId, courseId } = req.body;
        try {
            const student = await StudentModel.findById(studentId);
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }
            
            const course = await CourseModel.findById(courseId);
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            student.courses.push(courseId);
            await student.save();
            
            course.students.push(studentId);
            await course.save();
            
            res.json({ success: true, student, course });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}