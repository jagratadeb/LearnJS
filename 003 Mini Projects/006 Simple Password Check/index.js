let userPass = null;
let passwordDB = "sigma";
let attempt = 1;

alert("Enter Password");

while (attempt <= 5) {  
    userPass = prompt("Enter your password: ");
    if (userPass == passwordDB) {
        alert("Password Matched!");
        attempt++;
        break;
    }
    else {
        alert(`Wrong password! Attempt Remaining: ${5 - attempt}`);
        attempt++;
    }
}