const Repository = require('../Repository/account')

async function createAccount(params) {
    try {
        const acc = await Repository.createAccount(params)
        return acc
    } catch (error) {
        console.log(error)
    }
}
    
async function login(username, password) {
    try {
        const account = await Repository.login(username, password)      
        console.log(account);
        return account
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    login,
    createAccount
}