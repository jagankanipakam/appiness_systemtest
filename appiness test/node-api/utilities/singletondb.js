const MongoClient = require('mongodb').MongoClient;
let db = null;
let instance = 0;
class DbConnection {
    constructor() {
    }
    async  DbConnect() {
        try {
            let host = process.env.host,
                database = process.env.database,
                port = process.env.dbport;

            let dbURL = 'mongodb://' +  host + ':' + port + '/' + database
            let _db = await MongoClient.connect(dbURL, { useUnifiedTopology: true })
            return _db.db(database);
        } catch (e) {
            console.log('e: ', e);
        }
    }
    async  Get() {
        try {
            instance++;     // this is just to count how many times our singleton is called.
            console.log(`DbConnection called ${instance} times`);
            if (db != null) {
                console.log(`db connection is already alive`);
                return db;
            } else {
                console.log(`getting new db connection`);
                db = await this.DbConnect();
                return db;
            }
        } catch (e) {
            console.log('e: ', e);
        }
    }
}
module.exports = DbConnection;