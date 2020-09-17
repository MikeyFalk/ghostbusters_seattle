var userName = prompt('Please enter your name?');
var trueBel = prompt('Do you believe in the paranormal?');
var today = new Date();
var hourNow = today.getHours();
var greeting;
var greeting2;

if (trueBel == 'no') {
    document.write(`This is not the site you are looking for ${userName}`);
}


else if (hourNow > 18) {
    greeting = "Good Evening " + userName;
    }
    else if (hourNow > 12){
        greeting = "Good Afternoon " + userName;
    }
    else if (hourNow  > 0) {
        greeting = "Good Morning " + userName;
    }
    else {gretting = "Howdy " + userName;
    }



document.write(greeting);


