
// module.exports.details = function(req, res){
//     return res.render('details');
// }

const Project = require('../models/project');

module.exports.details = async function(req, res){
    const project = await Project.findById(req.params.id).populate({path:"issues"})
    res.render('details',{
        project: project
    })
}