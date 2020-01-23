let fs = require('fs')
let controllers = []
module.exports =  async(db) => {
    /*
     * Iterates through routes directory
     * Returns array of route objects to
     * be registered by router in app.js
     */
    let subdirs = fs.readdirSync(__dirname)
    for (const dir of subdirs) {
        if (dir !== 'index.js') {
            let controller =await require(__dirname + '/' + dir)(db)
            controllers = [...controllers,controller]
            // controllers = [controller,...controllers]            
            // controllers = controllers.concat(controller)
        }
    }

    return controllers
}
