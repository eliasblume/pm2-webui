
const { createAdminUser } = require('../services/admin.service')
// const { hashPasswordSync, } = require('../utils/password.util')

// const { generateRandomString } = require('../utils/random.util')
// process.env.APP_PASSWORD = hashPasswordSync(process.env.RAW_APP_PASSWORD);
// process.env.APP_SESSION_SECRET = generateRandomString()
// console.log(process.env.APP_PASSWORD, process.env.APP_SESSION_SECRET);

createAdminUser(process.env.APP_USERNAME, process.env.RAW_APP_PASSWORD)

//require('../app')