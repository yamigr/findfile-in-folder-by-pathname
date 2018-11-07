const fs = require('fs')
const path = require('path')

/**
 * Function to find a file in a defined folder and a pathname
 * @param {string} folder like __dirname
 * @param {string} pathname like /my/path/index. the pathname schould exis in the folder.
 * @param {function} callback 
 */

module.exports.byPathname =  function(folder, pathname, opt, callback){

    if(typeof callback !== 'function'){
        throw new Error('callback is not a function')
    }
    let pn = pathname

    if(opt.normalize){
        pn = path.join(folder, path.normalize(pathname).replace(/^(\.\.[\/\\])+/, ''));
    }

    fs.exists(pn, function (exist) {
        if(!exist) {
            callback(null)
        }
        if (fs.statSync(pn).isDirectory()) {
            pn += '/index.html';
        }
        fs.readFile(pn, function(err, data){
            if(!err){
                callback(data)
            } 
            else{
                callback(null)
            }
        })
    })
}