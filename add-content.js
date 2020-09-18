'use strict'

function askUserName(){
    var userName = prompt('Please enter your name?');
    document.write(userName.toLowerCase() + ',');
}

function timeOfDay(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18){
        greeting = 'Good Evening';
        } else if (hourNow > 12){
            greeting = 'Good Afternoon';
        } else if (hourNow  > 0){
            greeting = 'Good Morning';
        }else {greeting = 'Howdy';
        }document.write(greeting);
    }

function gbFan(){
    var trueBel = prompt('Do you believe in the paranormal?');
    var Paranormal;    
    
    if (trueBel === 'no'){Paranormal = 'This is not the site you are looking for';
    
    }else {Paranormal = 'We are here to serve all your supernatural elimination needs!'}
    document.write(Paranormal);
    }
    

//
//var greeting2;
