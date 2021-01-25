/* things we need to change for each coffee:
name - name of coffee
pic - image source
alt - alt tag
color - color
desc - description
day - day of the week */

let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')) {
    myDay = urlParams.get('day');
}
else {
    myDay = myDate.getDay();
}

myDay = parseInt(myDay);

function coffeeTemplate(coffee) {
    let myReturn = "";
    myReturn += `<p>
                    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee"/>
                    <strong class="feature">${coffee.day}'s Coffee Special:</strong><br> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>${coffee.desc}
                </p>`;
    return myReturn;
}

/* this function was how I first accomplished changing the HTML background color
but then I realized you can change it without needing a function
still, I wrote the function, so I've opted to leave it in
it contains useful comments
and maybe I'll want it later, who knows

function changeColor() {
    var doc = document.styleSheets[1].cssRules[0].style; 
    
    styleSheets[1] references the styles that are in the HTML document, because the default CSS file is [0]; cssRules[0] references the very first rule, which is in this case the background color of the HTML, which is the thing we're trying to change
    I accidentally referenced the wrong style sheet at first and I learned that you apparently can't change the default CSS file from here because you can't access 'cross-origin stylesheets'
    so that's a thing I might look into more at some point

    var setColor = doc.setProperty("background-color", coffee.color);
    return setColor;
} */

switch(myDay) {
    case 0:
        today = "Sunday";
        coffee = {
            name: "espresso con panna",
            pic: "images/panna.jpg",
            alt: "A picture of an espress topped with whipped cream and cinnamon in a white ceramic cup.",
            color: "plum",
            desc: `.<br>Brought to you from Italy, the espresso con panna is a simple but delicious drink. Consisting of espresso topped with a small mountain of whipped cream and a dusting of cinnamon, it's a truly decadent, and we know you're going to love it!`,
            day: "Sunday"
        };
        break;

    case 1:
        today = "Monday";
        coffee = {
            name: "pumpkin spice latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spice latte in an orange ceramic mug.",
            color: "#FF7518",
            desc: `.<br>Our pumpkin spice latte makes us wish it was always fall, as this is one of our top sellers! Made with cinnamon, nutmeg, ground clove, just a touch of pumpkin puree, and (of course) sugar, this is sure to be the best pumpkin spice latte you've ever tasted!`,
            day: "Monday"
        };
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "milky way cappuccino",
            pic: "images/milky-way.jpg",
            alt: "A milky way cappuccino in a white ceramic cup with an intricate flower-like design in caramel and chocolate on the top.",
            color: "cornflowerblue",
            desc: `.<br>Our milky way cappuccino is to die for. Made with milk chocolate, caramel, and topped with whipped cream and swirls of milk chocolate and caramel syrups in an intricate pattern, this drink is heaven in a cup!<br>The milky way is also available as a latte, if that's more your style.`,
            day: "Tuesday"
        };
        break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "drip coffee",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee.",
            color: "burlywood",
            desc: `.<br>Made with natural spring water boiled and then slowly poured over finely ground coffee beans. With a strong, bold flavor, we're sure you're going to love it!<br>Our drip coffee is usually made with dark roasted coffee beans, but medium roast and light roast are available on request!`,
            day: "Wednesday"
        };
        break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "mocha",
            pic: "images/mocha.png",
            alt: "A picture of a mocha in a white ceramic coffee cup.",
            color: "violet",
            desc: `.<br>Our mochas are made with the finest dark cocoa powder and topped with a dash of whipped cream and a milk chocolate drizzle that we make ourselves right here in the shop.<br>If you'd like to add a bit of a kick, ask for our Mexican mocha, which has chili powder added to it!`,
            day: "Thursday"
        };
        break;
    
    case 5:
        today = "Friday";
        coffee = {
            name: "caffè macchiato",
            pic: "images/macchiato.jpg",
            alt: "A picture of a macchiato, an espresso shot with steamed milk in a small glass cup.",
            color: "peachpuff",
            desc: `.<br>Our caffè macchiato is made with the finest dark roast ground coffee beans, for maximum flavor in your espresso. The steamed milk adds just a touch of sweetness to the shot--if you're an espresso lover, this is the drink for you!`,
            day: "Friday"
        };
        break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "lavender latte",
            pic: "images/lavender-latte.jpg",
            alt: "A lavender latte in a white ceramic cup, sprinkled with dried lavender.",
            color: "silver",
            desc: `.<br>We know, it's an unusual one! But we find the lavender latte to be a soothing and mellow cup of coffee--perfect for an afternoon drink on a weekend! Made with our homemade lavender simple syrup and sprinkled with a touch of dried lavender, this one's a shop favorite.`,
            day: "Saturday"
        };
        break;
    
    default:
        alert("Something has gone terribly wrong. Please contact my maker.");
        today = "404 error day not found";
        coffee = {
            name: "coffee unavailable, today does not exist.",
            pic: "images/missing-coffee.png",
            alt: "A wanted poster for a cup of coffee.",
            color:  "firebrick",
            desc: ` There cannot be a description for coffee that does not exist.`,
            day: "404 error day not found"
        };
        break;
}

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

// the following code is the way I found to change all the colored text and the HTML background color
// and it works so I'm sticking with it even though I know you demonstrated something else in class, Bill
document.getElementsByClassName("feature")[0].style.color = coffee.color;
document.getElementsByClassName("feature")[1].style.color = coffee.color;
document.styleSheets[1].cssRules[0].style.setProperty("background-color", coffee.color);