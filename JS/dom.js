console.log("Accessig DOM here");

function changeHeading(){
    document.getElementsByTagName('h2')[0].innerText 
        = "New Text changed using JS";
}

function getUserDetails(){
    let person = {
        name : "Akash Lakabshetti",
        email: 'akash@gmail.com',
        mobile: 97216759823,
        gender: 'Male'
    }
    
    document.getElementById('name').innerText = person.name;
    document.getElementById('email').innerText = person.email;
    document.getElementById('mobile').innerText = person.mobile;
    document.getElementById('gender').innerText = person.gender;
}

let description;
function getDescription(value){
    description = value;
}

function showDescription(){
    // document.getElementById('description').innerText 
    //     = description;   

    const table = document.getElementById('descriptionTable')
    .getElementsByTagName('tbody')[0];

    const row = table.insertRow();

    const firstCell = row.insertCell(0);
    firstCell.textContent = description;

    document.getElementById('description').value = '';
}
