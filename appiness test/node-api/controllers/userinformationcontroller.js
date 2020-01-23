let router = require('express').Router();
const dbdriver = require('../utilities/singletondb');
const userInfoService = require('../services/usersinformationservice');
let userInfoServiceObj = null
let singleTonObj = null;
class userInformationController {
    constructor(db) {
        this.db = db
    }
    async registerUsers(req, res, next) {
        let result = null
        try {
            let userinfo = req.body;
            result = await userInfoServiceObj.registerUsers(userinfo);
            res.status(200).send(result);
        }
        catch (e) {
            console.log('e: ', e);
        }
    }
}
module.exports = async (db) => {
    try {
        if (!singleTonObj && !userInfoServiceObj) {
            if (!db) {
                db = await new dbdriver().Get();
            }
            userInfoServiceObj = await userInfoService(db);
            singleTonObj = new userInformationController(db);
        }
        router.post('/register', singleTonObj.registerUsers);
    }
    catch (e) {
        console.log('e: ', e);
    }
    return { path: '/api/users', router: router };
};