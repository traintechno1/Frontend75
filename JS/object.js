let arr = [];// array declaration

let person = {
    firstName: 'Akash',
    lastName: 'Lakabshetti',
    email: 'akash.l@gmail.com',
    mobile: [9827217912, 8973625412],
    // nested Object
    address: {
        line1: 'Near Gaikwad Petrol Pump',
        line2: 'ABC Society',
        city: 'Pune',
        state: 'MH',
        pinCode: 411004,
        landmark: 'Near Westend Mall',
        country: 'IN'
    },

    // array of object inside object
    orders: [
        {
            orderId: 1,
            productName: 'Iphone 16 Pro Max',
            price: 127000,
            discount: 17000,
            quantity: 1
        },
        {
            orderId: 3,
            productName: 'Charger',
            price: 1699,
            discount: 400,
            quantity: 1
        },
        {
            orderId: 1,
            productName: 'Macbook Air M3 Pro',
            price: 115000,
            discount: 25000,
            quantity: 1
        }
    ]
}

// array of object
let orders = [
    {
        orderId: 1,
        productName: 'Iphone 16 Pro Max',
        price: 127000,
        discount: 17000,
        quantity: 1
    },
    {
        orderId: 3,
        productName: 'Charger',
        price: 1699,
        discount: 400,
        quantity: 1
    },
    {
        orderId: 1,
        productName: 'Macbook Air M3 Pro',
        price: 115000,
        discount: 25000,
        quantity: 1
    }
]

person.address.line2 = 'New Address';

console.log(person.firstName +  " " + person.lastName);

//to access object property value
// using (.) operator
// console.log(person.email);
// console.log(person.mobile);
// second way using square bracket and giving property name in it
// console.log(person['firstName']);
// console.log(person['lastName']);

// to change specific property value

// person.mobile = 8976218122;
// person['email'] = 'Akash.l1@gmail.com';

// how to add a new property in an object

// person['gender'] = "Male";
// person.address = "Pune";

// To delete specific key value pair

// delete person.email; 

console.log(person);

// person.orders.forEach(o=>{
//     console.log(o);
// })