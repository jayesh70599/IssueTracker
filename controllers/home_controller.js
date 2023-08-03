const Project = require('../models/project');

module.exports.home = function(req, res){
    
    Project.find({}, function(err, projects){
        return res.render('home', {
            projects: projects
        });
    })
}