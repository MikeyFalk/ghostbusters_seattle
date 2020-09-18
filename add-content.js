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
    
 
    var numbguess = '13'
    for(var i = 0; i<5; i++){
        var guessQuest = prompt('What number am I thinking of?: ');
        console.log(1);
    if (guessQuest === numbguess){
        alert('Dang, You are good!');
        break;
    }
if (i===4 && guessQuest != numbguess) {
    alert('You ran out of guesses! Try again later')
}

}
    
    






//
//var greeting2;
