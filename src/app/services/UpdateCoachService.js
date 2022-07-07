const data = require('../../../data/CoachData.json');
const CoachModel = require('../models/CoachModel');
const fs = require('fs')

const UpdateCoachService = {
    updateCoach: (id, { name, age, city })=>{
        const indexCoach = data.findIndex(item => item.id === id);
        if(indexCoach === -1){
            const error = 'Treinador não encontrado.'
            return {error: error}
        }
        if(name.length < 5){
            const error = 'Nome tem que ter pelo menos 5 caracteres.'
            return {error: error}
        }
        if(age < 15 || age >= 40){
            const error = 'Idade não permitida.'
            return {error: error}
        }
        if(city.toLowerCase() !== 'pallet' && city.toLowerCase() !== 'vermelion'){
            const error = 'As cidades permitidas são Pallet e Vermelion.'
            return {error: error}
        }
        const newCoach = new CoachModel(id, name, age, city);
        data.splice(indexCoach, 1, newCoach);
        fs.writeFileSync(__dirname +'/../../../data/CoachData.json', JSON.stringify(data));
        return newCoach;
    }
}

module.exports = UpdateCoachService;