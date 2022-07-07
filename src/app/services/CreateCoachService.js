const CoachModel = require('../models/CoachModel');
const { v4 } = require('uuid');
const fs = require('fs');
const data =  require('../../../data/CoachData.json');

const CreateCoachService = {
    createCoach: (name, age, city)=>{
        const id = v4();
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
        const coach = new CoachModel(id, name, age, city);
        data.push(coach);
        fs.writeFileSync(__dirname +'/../../../data/CoachData.json', JSON.stringify(data));
        return coach;
    }
}

module.exports = CreateCoachService;