console.log('hello world');
console.log(3-4);
// alert("what's up y'all!");
console.error("oh no it's an error");
console.warn("so this is how a warning works?");

let a = 11;
console.log(a);

a = 10;
/* First a was 10.*/
console.log("A is: " + a);

/* then it was 15 */
a = 15;
console.log("A is: " + a);

a = 10; b = 15; c = 20;

console.log(a,b,c)

let banana = 10; apple = 20; grapes = 30; pear = 40; orange = 50;
console.log (banana,apple,grapes,pear,orange);

banana = "yellow"; apple = "red"; grapes = "purple"; pear = "green"; orange = "orange";
console.log (banana,apple,grapes,pear,orange);

let theExes = "3 people";
console.log(theExes);

let theNanny = "the lady named Fran!";
console.log (theNanny);

x = 42;
console.log(x); // however, this is bad practice 'cause u didn't use a keyword for a brand new variable!!!!

let myAge;
console.log(myAge);

let myDateOfBirth = "18th May 1994";
console.log(myDateOfBirth);

var Happy = "capital letter for the word Happy";
var happy = "smallcase letter for the word happy";
var weAreAllHappy = "this used camelCase to say everyone is happy!";
console.log("this one has the capital H:" + Happy);
console.log("this one has the smallcase h:" + happy);
console.log(weAreAllHappy);

var e = 1; f = 2; g = 3; h = 4;
console.log("e means: " + e);
console.log("f means: " + f);
console.log("g means: " + g);
console.log("h means: " + h);

let zay = 60;
zay ++ ;
console.log(zay);

let pie = 50;
let iceCream = -pie;
console.log(iceCream);

var now  = 2;
var later = +2;
console.log(later);

console.log(1/+0);
console.log(+1/0);
console.log(1/-0);
console.log(-1/0);

console.log(+0/1);
console.log(0/+1);
console.log(-0/1);
console.log(0/-1);

console.log
   (Number.isFinite(123)
);

console.log(
    Number.isNaN(0 / 0)
);

console.log(
   Number.isNaN("a" * 3)
);

console.log(
   Number.isInteger(1)
);

console.log(
   Number.isInteger("banana")
);

console.log(
   Number.isInteger("56") // not true 'cause "56" is a string not a whole number, due to quotations
);

console.log(
   Number.isInteger(56) // true 'cause 56 is a whole number
);

var o = 5; // you need to declare the letter as a number 1st if u want to use the letter in the method area "()"
console.log(
   Number.isNaN(o * 3)
);

console.log(
   Number.isFinite(123.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
);

console.log(
   Number.isNaN(3)
);

console.log(
   Number.isInteger(0.5)
);

console.log(
Math.floor(4.9), // rounds down the number
Math.ceil(7.4), // rounds up the number
Math.round(1.5), // rounds to the nearest integer
Math.trunc(3.952), // removes the decimal part 
Math.sqrt(49), // returns 9 because 7 * 7 is 49
Math.cbrt(125) // returns 4 because 5 * 5 * 5 is 125
)

console.log(
   1.1.toFixed(10)
);


// This variable will be evaluated by your code:
let myValue = 15/1.27;

// Define your variables here:
let finite = Number.isFinite(myValue);
let notANumber = Number.isNaN(myValue);
let integer = Number.isInteger(myValue);
let twoDecs = parseFloat (myValue.toFixed(2));


console.log(finite, notANumber, integer, twoDecs)


let a1 = "I am string";
let b1 = "3"; // If there were no quotes here, it would be a number
let c1 = "false"; // If there were no quotes here, it would be a boolean
let n1 = "Alan";
n1 = b1 + c1;
m1 = n1 + a1 + b1;
console.log("My name is " + "Paul");
console.log("My name is " + n1);
console.log('Hello World');
console.log("what's up ya'll" + a1);
console.log("what's up ya'll" + b1);
console.log("what did you just do? :|" + m1);
console.log("what's \nup \nya'll" + c1);
console.log("Made it up on the spot \nHa! I think not \nWhy you tellin' them lies \nyo boi you need to stop \nI'm hotter than summer! \nHa yo boi your rap is a bummer \nAnd where did you get the nerve to tell RayDizzal to take a NUMBER!!");
console.log("Made it up on the spot\rHa! I think not \rWhy you tellin' them lies \ryo boi you need to stop \rI'm hotter than summer! \rHa yo boi your rap is a bummer \rAnd where did you get the nerve to tell RayDizzal to take a NUMBER!!");
console.log("Made it up on the spot\r Ha! I think not\r Why you tellin' them lies\r yo boi you need to stop\r I'm hotter than summer!\r Ha yo boi your rap is a bummer\r And where did you get the nerve to tell RayDizzal to take a NUMBER!!");

console.log("\tWelcome \tto \tthe \tworld \tof\tJavascript!");
console.log("You\tcan\tcheck\tout\tanytime\tyou\twant,\tbut\tyou\ncan\tnever\tleave");

console.log(`I'm in the shower and I'm singing a song "Stop me if you've heard it!"      
                 long space and a new line now.         'long space again annnnnnnnnnnnnnnnnnnndddddddddddddddddd
   we've blured it :)'`);

   let myString = "I'm a cool string";
console.log(myString.indexOf("I"));
console.log(myString.indexOf("'"));
console.log(myString.indexOf("m"));
console.log(myString.indexOf(" "));
console.log(myString.indexOf("a"));
console.log(myString.indexOf("c"));
console.log(myString.indexOf("o"));
console.log(myString.lastIndexOf("o")); // is the other "o" so, how to make these different? - answer: use "last" in front of indexOf
console.log(myString.indexOf("l"));
console.log(myString.lastIndexOf(" ")); // is the other space so, how to make these different? - answer: use "last" in front of indexOf
console.log(myString.indexOf("s"));
console.log(myString.indexOf("t"));
console.log(myString.indexOf("r"));
console.log(myString.indexOf("i"));
console.log(myString.indexOf("n"));
console.log(myString.indexOf("g"));

let wind = "Take your sweet sweet "; 
let fire = "time. Let the world un"; 
let earth = "wind. Let's do our growing up n"; 
let air = "aturally! Oh Yeah! You gotta have rain & sunshine blossom on a vine. That's nature's grand design!"; 
let eggs = " Take your sweet sweet time!"; 
let song = wind + fire + earth + air + eggs; 
let complete = song + " and you'll be just fine! Take your sweet sweet time! "
let over = "And this jungle will be MINE!!! :) "
console.log(complete + over);

let str1 = "Hello ";
let str2 = "there!";
let str3 = " What a beautiful day to learn Javascript concatenation, right?";
console.log (str1.concat(str2, str3));
console.log (str2.concat(str1, str3));
console.log (str3.concat(str1, str2));

let str12 = "Hello ";
let str22 = "there!";
let str32 = " What a beautiful day to learn Javascript concatenation, right?";
console.log(str12.concat(str22, str32));

let apple1 = "oh na na"; 
let cake = " what's my name?"; 
let runner = " oh na na what's"; 
let grapes1 = " my name?"; 
console.log(apple1.concat(cake + runner + grapes1));
console.log(cake.concat(runner + grapes1 + apple1));
console.log(grapes1.concat(apple1 + cake + runner));

console.log(`${cake + eggs}`);
console.log(`${banana + a1 + wind + fire + str1}`);

let quote = "Whatever the mind can conceive and believe, it can achieve.";
let conceive = quote.slice(22,30);
let believe = quote.slice(35,42);
let achieve = quote.slice(51,58);
console.log(conceive, believe, achieve);


let fullName = 'Andrew Martin';
let domainName = 'gmail';
let tld = 'com';

// BOTH THESE WORK BUT 1 OR THE OTHER
let firstLetter = fullName.slice(0,1);
let smallA = firstLetter.toLowerCase();
let restOfFullName = fullName.slice(1,6);
let firstLetter2 = fullName.slice(7,8);
let smallM = firstLetter2.toLowerCase();
let restOfFullName2 = fullName.slice(8,13);
let emailAddress = smallA + restOfFullName + "." + smallM + restOfFullName2 + "@" + domainName + "." + tld;
console.log(emailAddress);

// BOTH THESE WORK BUT 1 OR THE OTHER
let smallFullName = fullName.toLowerCase();
let name1 = smallFullName.slice(0,6);
let name2 = smallFullName.slice(7,13);
let emailAddress = name1 + "." + name2 + "@" + domainName + "." + tld;
console.log(emailAddress);