var signName = document.getElementById('signName');
var signEmail = document.getElementById('signEmail');
var signPassword = document.getElementById('signPassword');
var signUpBut = document.getElementById('signUpBut');
var signin = document.getElementById('signin');
var alert = document.getElementById('alert');

var signUp = document.getElementById('signUp');
var pageSignUp = document.getElementById('pageSignUp');
var pageLogIn = document.getElementById('pageLogIn');
var pageTwo = document.querySelector('pageTwo');


var logInEmail =   document.getElementById('logInEmail');
var logInPass =   document.getElementById('logInPass');
var logInBut =   document.getElementById('logInBut');
var logHome = document.querySelector(".logInBut a")

var nameShow = document.getElementById('nameShow');
var nameWlcome='';

var listUsers =[];
var sessionStorage = '';


if(localStorage.getItem('userskArray') != null)
{
    listUsers = JSON.parse(localStorage.getItem('userskArray'));
}
else
{
    localStorage.setItem('userskArray', JSON.stringify(listUsers));
}

console.log(listUsers)

signin.addEventListener('click', function(){
    pageSignUp.classList.replace('d-flex', 'd-none');
    pageLogIn.classList.replace('d-none', 'd-flex');
})

signUp.addEventListener('click', function(){
    pageLogIn.classList.replace('d-flex', 'd-none');
    pageSignUp.classList.replace('d-none', 'd-flex');
})

logInBut.addEventListener('click', function(){
    var  logIn = {
        email:logInEmail.value,
        pass:logInPass.value
    }
    if(checkLogIn() == true)
    {
        console.log('done');
        document.getElementById('pageTwo').innerHTML = "";
        console.log(nameWlcome);
        localStorage.setItem('sessionStorage', nameWlcome)
        console.log('storrage ' + localStorage.getItem('sessionStorage'));
        window.open('home.html', '_self');
    }
    else if( logInEmail.value == '' || logInPass.value == '' )
    {
        
        document.getElementById('pageTwo').innerHTML = "All inputs is required";
    }
    else if(!checkLogIn() == true) 
    {
        document.getElementById('pageTwo').innerHTML = "incorrect email or password";
    }
})


// sign up 


signUpBut.addEventListener('click', function addUser(){

    var sign = {
        name: signName.value,
        email: signEmail.value,
        password: signPassword.value 
    }
    if( sign.name == '' || sign.email == '' || sign.password == '')
    {
        document.getElementById('alert').innerHTML = "All inputs is required";
        alert.style.color = 'red';
    }
    else if(checkEmail() == true)
    {
        document.getElementById('alert').innerHTML = "email already exist";
        alert.style.color = 'red';
    }
    else
    {
        listUsers.push(sign);
        localStorage.setItem('userskArray',JSON.stringify(listUsers));
         document.getElementById('alert').innerHTML = "Success";
         alert.style.color = 'green';
        
    }
    

})



function checkEmail(){
        
        var check = false;
        for (var i = 0; i < listUsers.length; i++){
            if (listUsers[i].email == signEmail.value){
                check = true;
            }
        }
        return check;
}


function checkLogIn(){

    var check = false;
    for(var i = 0; i < listUsers.length; i++)
    {
        if(listUsers[i].email == logInEmail.value && listUsers[i].password == logInPass.value)
       { 
           check = true;
           nameWlcome = listUsers[i].name;
           console.log(nameWlcome);
       }
    }
    return check;
}

    