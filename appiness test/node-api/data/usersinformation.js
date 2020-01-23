const dbdriver = require('../utilities/singletondb');
let singleTonObj = null;
class UsersInfomation {
    constructor(db) {
        this.db = db
    }
    async registerUsers(userInfo) {
        let result = null;
        try {
            let roleData = {};
            let usersFlag = await this.db.collection('users').find().toArray();
            let role = usersFlag.length == 0 ? 'Admin' : (usersFlag.length == 1 ? 'normalUser' : 'guestUser')
            roleData = await this.db.collection('userRoles').insertOne({ role });
            userInfo.userRole = roleData.insertedId;
            let response = await this.db.collection('users').insertOne( userInfo )
            result = response.insertedCount == 1 ? 'user registered succefully' : 'failed to register';
        }
        catch (e) {
            console.log('e: ', e);
        }
        return result;
    }
}
module.exports = async (db) => {
    try {
        if (!singleTonObj) {
            if (!db) {
                db = await new dbdriver().Get();
            }
            singleTonObj = new UsersInfomation(db);
        }
    } catch (error) {
        console.log('error: ', error);
    }
    return singleTonObj;
};