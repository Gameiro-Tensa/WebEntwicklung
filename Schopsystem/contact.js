//Get All Value

let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

//Reset Btn bearbeitet

resetBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let nachricht = document.getElementById('nachricht');

    //
    name.value = '';
    email.value = '';
    nachricht.value = '';
});

//Send Btn bearbeiten

sendBtn.addEventListener('click', (e) =>{
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let nachricht = document.getElementById('nachricht');

    //daten setzen und LocalStorage
    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    nachricht = nachricht.value;
    localStorage.setItem('nachricht', nachricht);
});

//Bestätigung 
function getAlert(){
    let inputVal = document.getElementById("nachricht").value;
    alert(inputVal);
}