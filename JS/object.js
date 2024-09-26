let arr = [];// array declaration

let person = {
    firstName: 'Akash',
    lastName: 'Lakabshetti',
    email: 'akash.l@gmail.com',
    mobile: 9827217912
}

//to access object property value
// using (.) operator
console.log(person.email);
console.log(person.mobile);
// second way using square bracket and giving property name in it
console.log(person['firstName']);
console.log(person['lastName']);

// to change specific property value

person.mobile = 8976218122;
person['email'] = 'Akash.l1@gmail.com';

// how to add a new property in an object

person['gender'] = "Male";
person.address = "Pune";

// To delete specific key value pair

delete person.email; 

console.log(person);