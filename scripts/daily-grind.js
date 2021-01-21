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
                    <strong class="feature">${coffee.day}'s Coffee Special:</strong><br> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>${coffee.desc}
                </p>`;
    return myReturn;
}

function changeColor() {
    var declaration = document.styleSheets[1].cssRules[0].style;
    var setProp = declaration.setProperty("background-color", coffee.color);
    return setProp;
}

switch(myDay) {
    case 0:
        today = "Sunday";
        coffee = {
            name: "espresso con panna",
            pic: "panna.jpg",
            alt: "A picture of an espress topped with whipped cream and cinnamon in a white ceramic cup.",
            color: "plum",
            desc: `. Brought to you from Italy, the espresso con panna is a simple but delicious drink. Consisting of espresso topped with a small mountain of whipped cream and a dusting of cinnamon, it's a truly decadent, and we know you're going to love it!`,
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
            desc: `, which makes us wish it was always fall, as this is one of our top sellers!<br>Made with cinnamon, nutmeg, ground clove, just a touch of pumpkin puree, and (of course) sugar, this is sure to be the best pumpkin spice latte you've ever tasted!`,
            day: "Monday"
        };
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "milky way cappuccino",
            pic: "milky-way.jpg",
            alt: "A milky way cappuccino in a white ceramic cup with an intricate flower-like design in caramel and chocolate on the top.",
            color: "cornflowerblue",
            desc: `. Our milky way cappuccino is to die for. Made with milk chocolate, caramel, and topped with whipped cream and swirls of milk chocolate and caramel syrups in an intricate pattern, this drink is heaven in a cup!<br>The milky way is also available as a latte, if that's more your style.`,
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
            desc: `, made with natural spring water boiled and then slowly poured over finely ground coffee beans. With a strong, bold flavor, we're sure you're going to love it!<br>Our drip coffee is usually made with dark roasted coffee beans, but medium roast and light roast are available on request!`,
            day: "Wednesday"
        };
        break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha in a white ceramic coffee cup.",
            color: "violet",
            desc: `. Our mochas are made with the finest dark cocoa powder and topped with a milk chocolate drizzle.<br>If you'd like to add a bit of a kick, ask for our Mexican mocha, which has chili powder added to it!`,
            day: "Thursday"
        };
        break;
    
    case 5:
        today = "Friday";
        coffee = {
            name: "caffè macchiato",
            pic: "macchiato.jpg",
            alt: "A picture of a macchiato, an espresso shot with steamed milk in a small glass cup.",
            color: "peachpuff",
            desc: `. Our caffè macchiato is made with the finest dark roast ground coffee beans, for maximum flavor in your espresso. The steamed milk adds just a touch of sweetness to the shot--if you're an espresso lover, this is the drink for you!`,
            day: "Friday"
        };
        break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "lavender latte",
            pic: "lavender-latte.jpg",
            alt: "A lavender latte in a white ceramic cup, sprinkled with dried lavender.",
            color: "silver",
            desc: `. We know, it's an unusual one! But we find the lavender latte to be a soothing and mellow cup of coffee--perfect for an afternoon drink on a weekend! Made with our homemade lavender simple syrup and sprinkled with a touch of dried lavender, this one's a shop favorite.`,
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
document.getElementsByClassName("feature")[0].style.color = coffee.color;
document.getElementsByClassName("feature")[1].style.color = coffee.color;
changeColor();