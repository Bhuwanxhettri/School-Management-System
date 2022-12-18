const {createGroup,getGroup} = require('../../DB/queries/group');

const CreateGroup = async(req,res)=>{
    try{
        const result = createGroup(req.body);
        res.send(result);
    }
    catch(err){

    }
}
const GetGroup = async(req,res)=>{
    try{
    const result = await getGroup(req.params.id);
         res.json(result);
    }
    catch(err){

    }
}

const groupController = {CreateGroup,GetGroup};
module.exports = groupController;