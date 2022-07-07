const data = require('../../../data/CoachData.json');

const ListCoachService = {
    listCoach: ()=>{
        return data;
    },
    listOneCoach: (id)=>{
        const coach = data.find(item => item.id === id);
        if(!coach){
            const error = 'Treinador pokemon não existe.'
            return {error: error}
        }
        return coach;
    }
}

module.exports = ListCoachService;