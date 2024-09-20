let age = 23;
let citizenship = "USA";

if(age>18){
    console.log("Not a Minor");
}else{
    console.log('A Minor');
}

if(age<0){
    console.log('Invalid Age');
}
else if(age> 0 && age < 10){
    console.log('age is in 0-10 years range');
}else if(age >10 && age < 20){
    console.log('age is in 10-20 years range');
}else if(age >20 && age < 30){
    console.log('age is in 20-30 years range');
}else{
    console.log('age is above 30');
}

if(age> 18){
    if(citizenship === 'IN'){
        console.log("Allowed to Vote in India");
    }
    else{
        console.log("Not an Indian Citizen");
    }
}else{
    console.log("Not Allowed to Vote in India");
}


let num = 'B';

switch(num){
    case 1: 
        console.log("Number is One");
    break;
    case 2:
        console.log("Number is Two");
    break;
    case 3:
        console.log("Number is Three");
    break;
    case 4:
        console.log("Number is Four");
    break;
    case 5:
        console.log("Number is Five");
    break;
    case 'A':
        console.log("Character is A");
    break;
    default:
        console.log("No Case matched");
    break;
}