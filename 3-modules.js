// Modules
const names = require('./4-names')
const sayHi = require('./5-utils')
const dataObj = require('./6-alternativeSyntax')
require('./7-mind-grenade');

console.log(dataObj);

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);