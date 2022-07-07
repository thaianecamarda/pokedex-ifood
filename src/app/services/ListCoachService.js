const data = require('../../../data/CoachData.json');

const ListCoachService = {
    listCoach: ()=>{
        return data;
    },
    listOneCoach: (id)=>{
        const coach = data.find(item => item.id === id);
        if(!coach){
            throw new Error('Treinador pokemon não existe.');
        }
        return coach;
    }
}

module.exports = ListCoachService;