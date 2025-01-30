let email = document.getElementById('email'); 
function onfun(){
    email.style.backgroundColor = 'red';
}
function offfun(){
    email.style.backgroundColor = 'yellow';
}
function funSubmit(){
    alert(`The form has been submitted with the email: ${email.value}`);
}

let name = document.getElementById('name');
function selected(){
    alert(`you selected ${name.value}`);
}