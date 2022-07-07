const data = require('../../../data/CoachData.json');
const CoachModel = require('../models/CoachModel');
const fs = require('fs')

const UpdateCoachService = {
    updateCoach: (id, { name, age, city })=>{
        const indexCoach = data.findIndex(item => item.id === id);
        if(indexCoach === -1){
            throw new Error('Treinador não encontrado.');
        }
        if(name.length < 5){
            throw new Error('Nome tem que ter pelo menos 5 caracteres.');
        }
        if(age > 14 && age < 40){
            throw new Error('Nome tem que ter pelo menos 5 caracteres.');
        }
        if(!city.toLowerCase() ==='pallet' || !city.toLowerCase() ==='vermelion'){
            throw new Error('As cidades permitidas são Pallet e Vermelion.');
        }
        const newCoach = new CoachModel(id, name, age, city);
        data.splice(indexCoach, 1, newCoach);
        fs.readFileSync(__dirname +'/../../../data/CoachData.json', JSON.stringify(data));
    }
}

module.exports = UpdateCoachService;