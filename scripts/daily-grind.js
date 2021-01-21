/* things we need to change for each coffee:
name - name of coffee
pic - image source
alt - alt tag
color - color
desc - description
day - day of the week */

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

function coffeeTemplate(coffee) {
    let myReturn = "";
    myReturn += `<p>
                    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee"/>
                    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong> ${coffee.desc}
                </p>`;
    return myReturn;
}

switch(myDay) {
    case 0:
        // alert("It's Sunday!");
        today = "Sunday";
        coffee = {
            name: "who knows yet",
            pic: "pic-src",
            alt: "alt",
            color: "color",
            desc: `desc`,
            day: "Sunday"
        };
        break;

    case 1:
        // alert("It's Monday!");
        today = "Monday";
        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spice latte.",
            color: "#FF7518",
            desc: `, which makes us wish it was always Fall, as this is one of our top sellers!`,
            day: "Monday"
        };
        break;

    case 2:
        // alert("It's Tuesday!");
        today = "Tuesday";
        coffee = {
            name: "who knows yet",
            pic: "pic-src",
            alt: "alt",
            color: "color",
            desc: `desc`,
            day: "Tuesday"
        };
        break;

    case 3:
        // alert("It's Wednesday!");
        today = "Wednesday";
        coffee = {
            name: "Drip Coffee",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee.",
            color: "burlywood",
            desc: `, aka coffee made by letting boiling water drip slowly through finely ground coffee. With a strong, bold flavor, we're sure you're going to love it!`,
            day: "Wednesday"
        };
        break;

    case 4:
        // alert("It's Thursday!");
        today = "Thursday";
        coffee = {
            name: "who knows yet",
            pic: "pic-src",
            alt: "alt",
            color: "color",
            desc: `desc`,
            day: "Thursday"
        };
        break;
    
    case 5:
        // alert("It's Friday!");
        today = "Friday";
        coffee = {
            name: "who knows yet",
            pic: "pic-src",
            alt: "alt",
            color: "color",
            desc: `desc`,
            day: "Friday"
        };
        break;

    case 6:
        // alert("It's Saturday!");
        today = "Saturday";
        coffee = {
            name: "who knows yet",
            pic: "pic-src",
            alt: "alt",
            color: "color",
            desc: `desc`,
            day: "Saturday"
        };
        break;
    
    default:
        alert("Something has gone terribly wrong. Please contact my maker.");
        today = "404 error day not found";
        coffee = {
            name: "Coffee unavailable, today does not exist.",
            pic: "images/missing-coffee.jpg",
            alt: "A wanted poster for a cup of coffee.",
            color: "firebrick",
            desc: `There cannot be a description for coffee that does not exist.`,
            day: "404 error day not found"
        };
        break;
}

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

// alert("I'm in a different folder and file now!");