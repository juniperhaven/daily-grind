/* things we need to change for each coffee:
- image source
- alt tag
- day of the week
- name of coffee
- color
- description */

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

switch(myDay) {
    case 0:
        alert("It's Sunday!");
        today = "Sunday";
        break;

    case 1:
        alert("It's Monday!");
        today = "Monday";
        break;

    case 2:
        alert("It's Tuesday!");
        today = "Tuesday";
        break;

    case 3:
        alert("It's Wednesday!");
        today = "Wednesday";
        break;

    case 4:
        alert("It's Thursday!");
        today = "Thursday";
        break;
    
    case 5:
        alert("It's Friday!");
        today = "Friday";
        break;

    case 6:
        alert("It's Saturday!");
        today = "Saturday";
        break;
    
    default:
        alert("Something has gone terribly wrong. Please contact my maker.");
        today = "404 error today not found";
        break;
}

// alert("I'm in a different folder and file now!");