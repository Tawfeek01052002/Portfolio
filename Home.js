const firebaseConfig = {
    apiKey: "AIzaSyDStam0zKi6hq7EA77OwpmAjGGosrObG0w",
    authDomain: "contactform-tawfeekkhan.firebaseapp.com",
    databaseURL: "https://contactform-tawfeekkhan-default-rtdb.firebaseio.com",
    projectId: "contactform-tawfeekkhan",
    storageBucket: "contactform-tawfeekkhan.appspot.com",
    messagingSenderId: "292544258669",
    appId: "1:292544258669:web:27a048306049414ead1564",
    measurementId: "G-K14C9E05BZ"
};

firebase.initializeApp(firebaseConfig);


var contactFormdb = firebase.database().ref('contactform-tawfeekkhan');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    if (!ValidateNo()) {
        return;
    }
    else {
        var name = getElementVal('Name');
        var phone = getElementVal('Phone');
        var email = getElementVal('Email');
        var message = getElementVal('Message');
        saveMeassage(name, email, phone, message);
        alert("Form Submitted Successsfully");
    }
}

const saveMeassage = (name, phone, email, message) => {
    var newContactForm = contactFormdb.push();
    newContactForm.set({
        name: name,
        emailID: email,
        phoneNumber: phone,
        messageContent: message,
    });

};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

var myNav = document.getElementById('nav');
var mylogo = document.querySelector('.logo_1');
window.onscroll = function () {
    // console.log(document.documentElement.scrollTop);
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        myNav.classList.add("nav-colored");
        mylogo.classList.add("logo_1_color");
        myNav.classList.remove("nav-transparent");
    }
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        mylogo.classList.remove("logo_1_color");
    }
};


// Phone Number Validate
function ValidateNo() {
    var phoneNo = document.getElementById('Phone').value;
    if (document.getElementById('Name').value == null || document.getElementById('Name').value == "") {
        alert("Enter your Name");
    }
    // console.log(phoneNo);
    else if (phoneNo == "" || phoneNo == null) {
        alert("Please enter your Mobile No.");
        return false;
    }
    else if (phoneNo.length < 10 || phoneNo.length > 10) {
        alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
        return false;
    }
    else if (!validateEmail()) {
        return false;
    }
    else if(document.getElementById('Message').value == null || document.getElementById('Message').value == ""){
        alert("Enter your message");
        return false;
    }
    else{
        return true;
    }
}


// Email Validate
function validateEmail() {

    var email = document.getElementById('Email');
    var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email.value == "") {
        alert("  Please enter your Email Id  ");
        return false;
    }
    else if (!mailFormat.test(email.value)) {
        alert("  Email Address is not valid, Please provide a valid Email ");
        return false;
    }
    else {
        return true;
    }
    

}