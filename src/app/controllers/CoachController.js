const CreateCoachService = require('../services/CreateCoachService');
const ListCoachService = require('../services/ListCoachService');
const UpdateCoachService = require('../services/UpdateCoachService');
const DeleteCoachService = require('../services/DeleteCoachService');

const controllerCoach = {
    create: (req, res)=>{
        const { name, age, city } = req.body;
        if(!name || !age){
            res.status(404).json('Nome e idade são obrigatórios.');
            return;
        }
        const coach = CreateCoachService.createCoach(name, age, city);
        if(coach.error){
            res.status(404).json(coach);
            return;
        }
        res.status(201).json(coach);
    },
    list: (req, res)=>{
        const { id } = req.body;
        let result = {};
        if(id){
            result = ListCoachService.listOneCoach(id);
            if(result.error){
                res.status(404).json(result);
                return;
            }
            res.status(200).json(result);
            return;
        }
        result = ListCoachService.listCoach()
        res.status(200).json(result); 
    },
    update: (req, res)=>{
        const { id } =  req.params;
        const params = req.body;
        if(!params.name || !params.age){
            res.status(404).json('Nome e idade são obrigatórios.');
        }
        const result = UpdateCoachService.updateCoach(id, params);
        if(result.error){
            res.status(404).json(result);
            return;
        }
        res.status(200).json(result); 
    },
    delete: (req, res)=>{
        const { id } = req.params;
        const result = DeleteCoachService.deleteCoach(id);
        if(result.error){
            res.status(404).json(result);
            return;
        }
        res.status(200).json(result);
    }
}


module.exports = controllerCoach;