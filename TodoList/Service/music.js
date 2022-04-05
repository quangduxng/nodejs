const Repository = require('../Repository/music')

async function createMusic(params){
    try {
        const new_class = await Repository.createMusic(params)
        return new_class
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
   
    createMusic
}
 