var {readFileSync,writeFileSync} = require('fs');
module.exports = path => {
if(!path) throw Error('Please enter path')
var data = readFileSync(path).toString()
writeFileSync(path,data.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,''))
}