var myName = function(num1, num2, num3){
var result =  num1* num2;
return result
}
var res = myName(25, 25, "pune")
console.log(res);

var firstName = 'Mohit';
var lastName = 'Sharma';
var res = firstName + lastName;
console.log('concaination using + operator:= ', res);
var res=  firstName.concat(lastName);
console.log('concaination using concat method:= ', res);


var greet = 'good Morning'
var indexof = greet.indexOf('M');
console.log(indexof);

var indexOf = greet.indexOf('nin')
console.log(indexOf);

var include = greet.includes('o');
console.log(include);

console.log("==========trim()===========");

var greet = '   good Morning   '
console.log(greet.length);
var res1 = greet.trim();
console.log(res1, res1.length);

console.log("==========slice()===========");
var greet = 'good Morning';
var sliceres = greet.slice(0, 4)
console.log(sliceres);










