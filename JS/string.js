let str1 = 'Test String 1';
let str2 = "Test String 2 with 'quotes '";
let str3 = `Test String 3`;

// console.log(str1);
// console.log(str2);
// console.log(str3);



let firstName = "   Bhavika";
let lastName = "Khairnar    ";
let fullName = `${firstName} ${lastName}`;
// console.log(firstName + ' ' + lastName + " " + getScore());

function getScore(){
    return 745;
}

// console.log(`${firstName} ${lastName} ${getScore()}`);

console.log(fullName);

console.log(fullName.charAt(5));
console.log(fullName.charCodeAt(5));
console.log(fullName.charCodeAt(0));
console.log(fullName.concat(getScore()));
console.log(firstName.concat(lastName));
console.log(fullName.endsWith('irnar'));
console.log(fullName.includes('Bhavika', 7));
console.log(fullName.indexOf('vik'));
console.log(fullName.lastIndexOf('a'));
console.log(fullName.length);
console.log(fullName.padEnd(25, '_'));
console.log(fullName.padStart(25, '*'));
console.log(fullName.repeat(3));
console.log(fullName.replace('a', 'z'));
console.log(fullName.replaceAll('a', 'z'));
console.log(fullName.search(/[A-Z][a-z]/));

console.log(fullName.slice(5,9));
console.log(fullName.split(' '));
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.toLocaleUpperCase());
console.log(fullName.trim());
console.log(fullName.trimStart());
console.log(fullName.trimEnd());

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);