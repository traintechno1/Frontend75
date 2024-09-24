// function declaration
function printTable(tableOf, untill){
    console.log("Table of", tableOf);
    for(let i=1 ; i<=untill; i++){
        console.log( `${tableOf} * ${i} = `, tableOf * i);
    }
}

let a = 30;
let b;
// printTable(a);


function updateVariable(){
    return 40;
}

updateVariable();
updateVariable();
console.log(a);
console.log(b);

// printTable(2,10); // function call
// console.log("-------------------------");
// printTable(5, 6); // function call
// console.log("-------------------------");
// printTable(20, 8); // function call
// console.log("-------------------------");
// printTable(40, 5); // function call
// console.log("-------------------------");


// Arrow Function

let addition = (a, b)=>{
    a = 40;
    b = 100;
    return a + b;
}

let value1 = 10;
let value2 = 30;

console.log(addition(value1, value2)); // call by value
console.log(value1, value2); //here value1, value2 will get get changed as it is call by value in JS


let arr = [1,2,3,4,5];

const addDataToArray = (array) =>{ 
    array.push(10);
    console.log(array);
}
console.log(typeof arr);
addDataToArray(arr); //call by ref
console.log(arr); // here 10 gets added to the original arr array, because object in JS is call by ref


let calculator = (a, b, op)=>{
    let result = 0;
    switch(op){
        case '+': 
            result = a+b;
        break;
        case '-': 
            result = a-b;
        break;
        case '*': 
            result = a*b;
        break;
        case '/': 
            result = a/b;
        break;
        default:
            console.log("Invalid Operator")
        break;
    }
    return result;
}

let result = calculator(10, 50, '%');
console.log(result);




let fun = () => {
    console.log("test fun");
}

console.log(fun);
fun();

fun = 100;
console.log(fun);

function fun(){
    console.log("test fun");
}

fun = 200;
console.log(fun)

console.log(fun());

