const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    issues: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Issue',
        },
    ],
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;