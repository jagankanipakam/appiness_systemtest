const dbdriver = require('../utilities/singletondb');
const usersinfoData = require('../data/usersinformation');
let singleTonObj = null;
let usersinfoDataObj = null;
class UserInformationService {
    constructor(db) {
        this.db = db

    }
    async registerUsers(userInfo) {
        let data = null
        try {
            data = await usersinfoDataObj.registerUsers(userInfo)
        }
        catch (e) {
            console.log('e: ', e);
        }
        return data;
    }

}
module.exports = async (db) => {
    try {
        if (!singleTonObj) {
            if (!db) {
                db = await new dbdriver().Get();
            }
            usersinfoDataObj = await usersinfoData(db);
            singleTonObj = new UserInformationService(db);
        }

    } catch (error) {
        console.log('error: ', error);

    }
    return singleTonObj;

};