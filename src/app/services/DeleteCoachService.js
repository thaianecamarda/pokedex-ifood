const fs = require('fs');
const data = require('../../../data/CoachData.json');

const DeleteCoachService = {
    deleteCoach: (id)=>{
        const indexCoach = data.findIndex(item => item.id === id);
        if(id === -1){
            throw new Error('Treinador pokemon não existe.')
        }
        data.slice(indexCoach, 1);
        fs.readFileSync(__dirname + '/../../../data/CoachData.json', JSON.stringify(data));
    }
}

module.exports = DeleteCoachService;