
document.addEventListener('DOMContentLoaded', function () {



var newNavItem = document.createElement("li");
newNavItem.className = "nav-item";



var products = document.getElementById('products');

if (products){
document.getElementById("products").innerHTML = "Interests";


    var newNavLink = document.createElement("a");
    newNavLink.className = "nav-link";
    newNavLink.href = "humanresources.html";
    newNavLink.textContent = "Human Resources";

    newNavItem.appendChild(newNavLink);

    var contactUsNavItem = document.querySelector(".navbar .nav-item:last-child");

    contactUsNavItem.parentNode.insertBefore(newNavItem, contactUsNavItem);



}


const currentDate = new Date();
console.log(currentDate.toLocaleString());
const h2 = document.getElementById("page");
let html = '<nav id="footer" class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light" ><li class="nav-item"> </li></nav>';
h2.insertAdjacentHTML("afterend", html);

var footer = document.getElementById('footer');
footer.innerHTML = (currentDate.toLocaleString() + "Copyright 2024 Jaskeerat Randhawa");


    document.getElementById('submitButton').addEventListener('click', SubmitForm);
    
function SubmitForm() {
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phone);
    console.log(message);
    setTimeout(function () {
        window.location.replace("index.html");
    }, 3000);

    return false; 
}



})


