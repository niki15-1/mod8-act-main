var name = prompt('Please enter your full name:');
var urname = prompt('Please enter your username:');
var gender = confirm("What is your gender? \\ Press OKAY if you are male \\ Cancel if Female");
if(gender==true){
    var gnd = 'M';
    alert('Your profile gender is set to MALE');
    document.getElementById("gender").innerHTML =gnd;
}
else{
    var gnd = 'F';
    alert('Your profile gender is set to FEMALE');
    document.getElementById("gender").innerHTML =gnd;
   
}
var describe = prompt("Describe yourself: ");
var born = prompt("What year were you born? ");
var old = prompt("How old are you? ");
var pfp = prompt("Put a link of your picture here: ");




    document.getElementById("fname").innerHTML = name;
    document.getElementById("username").innerHTML =urname;
    document.getElementById("desc").innerHTML = describe;
    document.getElementById("year").innerHTML =born;
    document.getElementById("age").innerHTML =old;
    document.getElementById("ppic").src = pfp;
    
