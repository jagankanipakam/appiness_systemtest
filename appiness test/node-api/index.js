require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
const dbdriver = require('./utilities/singletondb');
let db = null;
class Start {
    constructor() { }
    async main() {
        try {
            app.use(cors())
            app.use(express.static('public'))
            app.use(express.json({ limit: '50mb' }))
            app.use(express.urlencoded({ extended: true, limit: '15mb' }));
            db = await new dbdriver().Get();
            let controllers = await require('./controllers')(db)
            for (const controller of controllers) {
                app.use(controller.path, controller.router)
            }
            app.use('*', (req, res, next) => {
                res.sendFile(path.join(__dirname, 'public/index.html'));
            });
            app.listen(process.env.port || 4785, () => {
                console.log('port ', process.env.port);
            })
        }
        catch (e) {
            console.log('e: ', e);
        }
    }
}
let objStart = new Start()
objStart.main()