const Project = require("../models/project");
const Issue = require("../models/issue");


module.exports.issue = async function(req, res){
    const project = await Project.findById(req.params.id).populate({path:"issues"})
    res.render('createissue',{
        project: project
    })
}

module.exports.create = async function(req, res){
    const project = await Project.findById(req.params.id);
    const issue = await Issue.create({
        title:req.body.title,
        description:req.body.description,
        labels:req.body.labels,
        author:req.body.author
    });
    // adding the issue in project model
    project.issues.push(issue)
    await project.save()
    await issue.save()
    return res.redirect("back")
}