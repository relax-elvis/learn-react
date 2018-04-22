let words = require('./output');
let string = "Well, it's one for the money, Two for the show, Three to get ready";
let word = new words.Breakdown();
let result = word(string);
console.log(result);