const btn = document.getElementById('btn');
const form = document.getElementById('myForm')
const toggler = document.getElementById('toggler');
const full_Name = document.getElementById('fName');
const full_Name_Error = document.querySelector('.error');
const email_Error = document.querySelector('.error2');
const password_Error = document.querySelector('.error3');
const confirmPass_Error = document.querySelector('.error4');
const emailAddress = document.getElementById('Email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('Cpass');
const submitBtn = document.getElementById('btn');
const dob = document.getElementById('dob');
const date = new Date();
const year = date.getFullYear();
let counter = [false,false,false,false]
dob.addEventListener('input',(()=>{
    
    const getYear = dob.value.split("-")[0];
    
    const presentYear = year - getYear;
    console.log(presentYear);
    if(presentYear < 18){
        submitBtn.disabled = true;
        submitBtn.classList.add('btn-disabled')
    }else{
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-disabled')
    }

}))

// Validation of Password Both are same and Password Security using REGEX
password.addEventListener('input',(()=>{
    if(!isValidPassword(password.value)){
        password_Error.hidden = false;
        password_Error.textContent = 'Must be at least 8 characters long and contain a mix of letters and numbers'
        counter[0] = false
    }else{

        counter[0] = true
        password_Error.textContent = '√ Strong Password'
    }
}))

// Checking confirmPassword isValid compare to enteredPassword
confirmPassword.addEventListener('input',(()=>{
    console.log(password.value);
    if(password.value !== confirmPassword.value){
        confirmPass_Error.hidden = false;
        confirmPass_Error.textContent = 'Enter Same password as Entered Password';
        counter[1] = false
    }else{
        counter[1] = true
        console.log(counter);
        confirmPass_Error.textContent = '√ password matching with password';
    }
}))

// Checking Validity of Password
function isValidPassword(Password_Value){
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(Password_Value);
}
// Validation of email using Regex
emailAddress.addEventListener('input',(()=>{
    if(!isValidEmail(emailAddress.value)){
        email_Error.hidden = false;
        email_Error.textContent = 'Should be a valid email format (e.g., "user@example.com").'
        counter[2] = false
    }else{
        counter[2] = true
        console.log(counter);
        email_Error.hidden = true;
        email_Error.textContent = '';
    }
}))

function isValidEmail(Email_Value){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(Email_Value);
}

full_Name.addEventListener('input',()=>{
    if(!isValidFullName(full_Name.value)){
        full_Name_Error.hidden = false;
        full_Name_Error.textContent = 'Accepts alphabetic characters and spaces only, with a minimum length of 3 characters'
        counter[3] = false
    }else{
        counter[3] = true
        full_Name_Error.hidden = true;
        full_Name_Error.textContent = ' '
    }
})
// Validation of Full Name using Regex
function isValidFullName(full_Name){
    // Regular expression to validate the full name
    const fullNameRegex = /^[a-zA-Z ]{3,}$/;
    return fullNameRegex.test(full_Name);
}

const showHidePassword = () =>{
    toggler.classList.toggle('fa-eye-slash')
}
function checkValidation(isValid){

}
form.addEventListener('submit',(event)=>{
    let isValid = 0
    for(i = 0 ; i < counter.length ; i++){
        if(counter[i] == true){
            isValid++;
        }
   }
   if(isValid != 4){
     event.preventDefault()
   }    
})


