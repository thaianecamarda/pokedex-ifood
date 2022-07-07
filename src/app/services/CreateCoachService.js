const CoachModel = require('../models/CoachModel');
const { v4 } = require('uuid');
const fs = require('fs');
const data =  require('../../../data/CoachData.json');

const CreateCoachService = {
    createCoach: (name, age, city)=>{
        const id = v4();
        if(name.length < 5){
            throw new Error('Nome tem que ter pelo menos 5 caracteres.');
        }
        if(age > 14 && age < 40){
            throw new Error('Nome tem que ter pelo menos 5 caracteres.');
        }
        if(!city.toLowerCase() ==='pallet' || !city.toLowerCase() ==='vermelion'){
            throw new Error('As cidades permitidas são Pallet e Vermelion.');
        }
        const coach = new CoachModel(id, name, age, city);
        data.push(coach);
        fs.readFileSync(__dirname +'/../../../data/CoachData.json', JSON.stringify(data));
        return coach;
    }
}

module.exports = CreateCoachService;