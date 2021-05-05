/* explicit vs implicit */
var x = 87;
var x = String(x);
console.log(typeof x);
// string

var y = 87;
var y = 87 + "";
console.log(typeof y);
// string

/* == vs === */

console.log(87 == "87");
// true

console.log(87 === "87");
// false

/*
https://dorey.github.io/JavaScript-Equality-Table/
== 會回傳什麼boolean的表格
*/
