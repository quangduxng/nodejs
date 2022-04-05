const Services = require('../Service/music')
async function createMusic(req,res){
    try {
        const ms = await Services.createMusic({
            name:req.body.name,
            singer:req.body.singer,
            kind: req.body.kind,
            description: req.body.description
        })
     
        if(!ms){
            return res.status(400).json({ status: 400, message: "Creating failed songs!" }) 
        }
        else {
            return res.status(200).json({ status: 200, data: ms, message: "Create song succesfully!" })
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports={
    createMusic
}