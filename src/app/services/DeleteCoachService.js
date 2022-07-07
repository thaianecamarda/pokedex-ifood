const fs = require('fs');
const data = require('../../../data/CoachData.json');

const DeleteCoachService = {
    deleteCoach: (id)=>{
        const indexCoach = data.findIndex(item => item.id === id);
        if(indexCoach === -1){
            const error = 'Treinador pokemon não existe.'
            return {error: error}
        }
        data.splice(indexCoach, 1);
        fs.writeFileSync(__dirname + '/../../../data/CoachData.json', JSON.stringify(data));
        return {status: 'sucess'}
    }
}

module.exports = DeleteCoachService;