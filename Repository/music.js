const Music = require('../Models/Music')

async function createMusic(params){
    try {
        const ms =  await new Music(params)
        await ms.save()
        return ms
    } catch (error) {
        console.log(error);
    }
   

}
module.exports={
    createMusic
}