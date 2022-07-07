const CreateCoachService = require('../services/CreateCoachService');
const ListCoachService = require('../services/ListCoachService');
const UpdateCoachService = require('../services/UpdateCoachService');
const DeleteCoachService = require('../services/DeleteCoachService');

const controllerCoach = {
    create: (req, res)=>{
        const { name, age, city } = req.body;
        try {
            if(!name || !age){
                res.status(404).json('Nome e idade são obrigatórios.');
                return;
            }
            const coach = CreateCoachService.createCoach(name, age, city);
            res.status(201).json(coach);
        } catch (error) {
            console.log(error);
            res.status(404).json(error); 
        }
    },
    list: (req, res)=>{
        const { id } = req.params
        let result = {};
        try {
            if(id){
                result = ListCoachService.listOneCoach(id);
                res.status(200).json(result);
                return;
            }
            result = ListCoachService.listCoach()
            res.status(200).json(result); 
        } catch (error) {
           console.log(error);
           res.status(404).json(error); 
        }
    },
    update: (req, res)=>{
        const { id } =  req.params;
        const { name, age, city } = req.body;
        if(!name || !age){
            res.status(404).json('Nome e idade são obrigatórios.');
        }
        try {
            const coach = {
                name,
                age,
                city
            }
            const result = UpdateCoachService.updateCoach(id, coach);
            res.status(200).json(result);
        } catch (error) {
           console.log(error);
           res.status(404).json(error); 
        }
    },
    delete: (req, res)=>{
        const { id } = req.params;
        try {
            const result = DeleteCoachService.deleteCoach(id);
            res.status(200).json(result);   
        } catch (error) {
            console.log(error);
            res.status(404).json(error);
        }
    }
}


module.exports = controllerCoach;