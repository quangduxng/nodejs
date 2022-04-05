const Account = require('../Models/account')

async function createAccount(params) {
  try {
    const acc = await new Account(params)
    await acc.save()
    await acc.generateAuthToken()
    return acc
  } catch (error) {
    console.log(error)
  }
}


async function login(username, password) {
  try {
    const acc = await Account.findByCredentials(username, password)
    console.log(acc);
    //   const token = await account.generateAuthToken(username, password)
    if (!acc) {
      return new Error("Login Fails!")
    }
     return acc 
  }
  catch (error) {
    console.log(error)
  }
}
module.exports = { createAccount, login };