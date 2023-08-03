// const { title } = require('process');
const Project = require('../models/project');

module.exports.projectp = function(req, res){
    return res.render('createpost');
}

module.exports.create = function(req, res){

    Project.findOne({title: req.body.title}, function(err, project){
        if(err){console.log('error in finding project in for creating it'); return}

        if(!project){
            Project.create(req.body, function(err, project){
                if(err){console.log('error in creating project'); return}

                return res.redirect('/project');
            })
        }
        else{
            return res.redirect('back');
        }
    });
}