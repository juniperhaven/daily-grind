/* things we need to change for each coffee:
- image source
- alt tag
- day of the week
- name of coffee
- color
- description */

let myDate = new Date();
let myDay = myDate.getDay();

switch(myDay) {
    case 0:
        alert("It's Sunday!");
        break;

    case 1:
        alert("It's Monday!");
        break;

    case 2:
        alert("It's Tuesday!");
        break;

    case 3:
        alert("It's Wednesday!");
        break;

    case 4:
        alert("It's Thursday!");
        break;
    
    case 5:
        alert("It's Friday!");
        break;

    case 6:
        alert("It's Saturday!");
        break;
    
    default:
        alert("Something has gone terribly wrong. Please contact my maker.");
        break;
}

alert("I'm in a different folder and file now!");