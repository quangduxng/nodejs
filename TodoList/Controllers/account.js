const Services = require('../Service/account')
async function createAccount(req, res) {
    try {
        console.log(req.body);
        const acc = await Services.createAccount({
            username: req.body.username,
            password: req.body.password,//nhầm chỗ này
            
        })
        console.log(acc);
        if (!acc) {
            return res.status(400).json({ status: 400, message: "Creating failed account!" })
        } else
            return res.status(200).json({ status: 200, data: acc, message: "Create account succesfully!" })
    } catch (error) {
        console.log(error)
    }
}
async function login(req, res) {
    try {
      
        const { username, password } = req.body
       console.log(req.body);
        const account = await Services.login(username, password)
      
        if (!account) {
            return res.status(400).json({ status: 400, message: "Login Fails!" })
        }
        return res.status(200).json({ status: 200, data:account , message: "Succesfully Login" })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    login,
    createAccount
}