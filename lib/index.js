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
    
    if(opt.normalize){
        pathname = path.join(folder, path.normalize(pathname).replace(/^(\.\.[\/\\])+/, ''));
    }

    fs.exists(pathname, function (exist) {
        if(!exist) {
            callback(null)
        }
        if (fs.statSync(pathname).isDirectory()) {
            pathname += '/index.html';
        }
        fs.readFile(pathname, function(err, data){
            if(!err){
                callback(data)
            } 
            else{
                callback(null)
            }
        })
    })
}