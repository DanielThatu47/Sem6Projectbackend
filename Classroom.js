const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
// const Classroom = mongoose.model('Classroom', classroomSchema);
module.exports = mongoose.model('Classroom', classroomSchema);
