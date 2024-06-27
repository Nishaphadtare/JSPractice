var city = 'Mumbai';
var pincode = 400703;
var is_Married = true; 

var valueType;
valueType = typeof 'Mumbai';
console.log('city:- Mumbai', 'type:-', valueType);

var valueType;
valueType = typeof 400703;
console.log('Married:- true', 'type:-', valueType);

var valueType;
valueType = typeof true;
console.log('pincode: 400703', 'type:-', valueType);

console.log('-----Reversed string------');
var myName = 'Nisha Kate';
var lengthStr = myName.length - 1;
var reversedStr = ''
for (let index = lengthStr; index >= 0; index--) {
   console.log(myName.charAt(index));
   reversedStr = reversedStr + myName.charAt(index);
    
}
console.log(myName);
console.log(reversedStr);