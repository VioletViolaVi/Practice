let age = 2;
(age > 18) ?  console.log("You are soooo mature") : console.log("You are still a child");

let secondAge = 39;
(secondAge > 18) ?  console.log("You are soooo mature") : console.log("You are still a child");

if (secondAge > 104){console.log("You are soooo mature");
}else {console.log("You are still a child");}

var colour = "orange";
(colour === "orange") ? console.log("yes it is the same") : console.log("no it isn't the same");

var viv = "25YearsOld";
(viv === "25YearsOld") ? console.log("i am this") : console.log("not anymore");
(viv === "26YearsOld") ? console.log("this is what i am now") : console.log("i used to be 25 though :'(");

var gate = 60;
(gate <= 60) ? console.log("yes it is same or equals to") : console.log("you shouldn't see this");

//be careful, u need to add 3 ='s after 100 'cause u checkin' for true or false not an actual maths number :)
(90*100 === 800) ? console.log("no the answer isn't 800 you dum dum!") : console.log("yes the answer is 9,000");

(0.5-0.5=== "abc") ? console.log("should not see") : console.log("will see");

("cat" === "hat") ? console.log("can't see this") : console.log("i see this");

((3 === 3) && (2 === 5) ) ? console.log("okay") : console.log("not okay");

((10 === 3) || (8 === 8) ) ? console.log("okay") : console.log("not okay");

(2*6 === 500) ? console.log("eggs") : console.log("bacon");







// let fruit1 = "apple";
// let fruit2 = "peach";

// if (fruit1 === "apple" || fruit2 === "peach"){console.log("Yummy!");}

// if (fruit1 === "apple" && fruit2 === "banana"){console.log("Yummy");}

// if (fruit1 === "apple" && fruit2 === "banana"){console.log("Yummy");}
// else{console.log("not yummy i'm afraid");}


// if (fruit1 == "apple" && fruit2 == "cake"){console.log("not this one");}
// else if (2*2 == 3 || 5/5 == 46){console.log("not this either!");}
// else if (50-50 == 9 || "hands" == "hands"){console.log("this will be the one! :)");}
// else{console.log("long road just to end up at a place that wont be used!");}

// if (fruit1 == "apple" && fruit2 == "cake"){console.log("not this one");}
// else if (2*2 == 3 || 5/5 == 46){console.log("not this either!");}
// else if (50-50 == 9 || "hands" == (60-2 == 834) ){console.log("this will be the one! :)");}
// else{console.log("long road to get to but worth it as I am the one!");}

// if (fruit1 == "telephone" && fruit2 == "peach"){console.log("will it be A");}
// else if (2*2 == 40 || 5/5 == 46){console.log("will it be B");}
// else if (50-50 == 9 || !("hands" == (60-2 == 834) ) ){console.log("will it be C");}// ! negates the true and makes it false
// else{console.log("or will it be D!");}

// if (9*2 == 6){console.log("this shouldn't show as the answer is 18");}
// else if (9*2 == 18){console.log("this should show it has the CORRECT answer");}
// else {console.log("this also should NOT be seen as it is wrong")}

// if (78>400){console.log("yes it is");}
// else if (99<2){console.log("nope it isn't");}
// else {console.log("no way dude!");}

// if ("cat"=="waterBottle"){console.log("U funni if u tink dis correct :'D");}
// else if ("cat" == "pie"){console.log("NOOOOOOOOOOOO!");}
// else {console.log("I think I get this now! :)");}

// if ("cat"=="cat"){console.log("yeah");}
// else if ("cat" == "pie"){console.log("nope");}
// else {console.log("this will never show");}

// if ("dog"=="pizza"){console.log("haha");}
// else if ("pie" == "pie"){console.log("hoho");}
// else {console.log("hehe");}

// if ("dog"=="dog"){console.log("haha");}
// else if ("pie" == "1"){console.log("1a");}
// else if (3*3 == 8){console.log("2b");}
// else if (10>200){console.log("3c");}
// else if ("walking" == "balls"){console.log("4d");}
// else if ("hat" == "sofa bed that opens out"){console.log("5e");}
// else if ("5" == "5"){console.log("6f");}
// else {console.log("hehe");}


// var num1 = 5;
// var  num2 = 10;

// // Define your result variables here:

// var result1 = num1>num2 && num2>10;
// var result2 = num1>5 || num2>5;
// var result3 = !(num1>5 || num2>5);
// console.log(result3);


// var num1 = 5;
// var  num2 = 10;

// // Define your result variables here:

// var result1 = (num1>num2)&&(num2>10);
// var result2 = (num1>5)||(num2>5);
// var result3 = !( (num1>5)||(num2>5) );
// console.log(result3);

// && needs everything to be true
// console.log((5 < 1) && (3 < 1)); //false,false = false
// console.log((5 * 5 == 25) && (33 / 11 == 2)); //true,false = false
// console.log((5 * 10 == 50) && (30 / 5 == 6)); //true,true = true
// console.log((36 / 6 == 6) && ("cat in a hat" == "cat in a hat") && ("car" == "laptop")); //true,true,false = false

// || only needs one to be true
// console.log((5 < 1) || (3 < 1)); //false,false = false
// console.log((5 * 5 == 25) || (33 / 11 == 2)); //true,false = true
// console.log((5 * 10 == 50) || (30 / 5 == 6)); //true,true = true
// console.log((36 / 6 == 6) || ("cat in a hat" == "cat in a hat") || ("car" == "laptop")); //true,true,false = true

// ! negates rusult and makes it opposite
// console.log( !( (5 < 1)||(3 < 1) ) ); //false,false = false NO MORE!! = true
// console.log( !( (5 * 5 == 25)||(33 / 11 == 2) ) ); //true,false = true NO MORE!! = false
// console.log( !( (5 * 10 == 50)||(30 / 5 == 6) ) ); //true,true = true NO MORE!! false,false = false
// console.log( !( (36 / 6 == 6)||("cat in a hat" == "cat in a hat")||("car" == "laptop") ) ); //true,true,false = true NO MORE!! = false

// let toyStory = "cartoon";
 
// if (toyStory == "cartoon") {
//   console.log("Toy Story is the best animated movie EVER!");
// } else {
//   console.log("This is NOT a cartoon. DUH!!!");
// }

// var cake = "food";

// if (cake != "food") {
//   console.log("This is not food!");
// } else {
//   console.log("This IS food!");
// }

// var math = "5 times 5 is 25";
// // var math = "cats eat fish";

// if (math == "5 times 5 is 25") {
//   console.log("yes indeed this was a math question");
// } else {
//   console.log("is u crazi! dis not maths bruh!");
// }

// let sam = "a fat boy";

// if (sam != "a fat boy") {
//     console.log("Sam needs to eat better foods")
// } else {
//     console.log("well done for being NOT fat")
// }

// let password = "correct password";

// if (password == "password"){
//     console.log("well done for recalling your password")
// } else {
//     console.log("haha you forgot your password didn't you?!!")
// }

// console.log(Boolean("0"));
// console.log(Boolean());
// console.log(Boolean(5785));
// console.log(Boolean(""));
// console.log(Boolean(0.468));
// console.log(Boolean());
// console.log(Boolean("that"));
// console.log(Boolean(""));

// Country data to be used in your array construction:
// Fields are country name, population, area, population density
// let countryData = [
//     ["Afghanistan", 37209007, 652860, 57],
//     ["Albania", 2938428, 27400, 107],
//     ["Algeria", 42679018, 2381740, 18],
//     ["Andorra", 77072, 470, 164],
//     ["Angola", 31787566, 1246700, 25],
//     ["Antigua and Barbuda", 104084, 440, 237],
//     ["Argentina", 45101781, 2736690, 16],
//     ["Armenia", 2936706, 28470, 103],
//     ["Australia", 25088636, 7682300, 3],
//     ["Austria", 8766201, 82409, 106],
//     ["Azerbaijan", 10014575, 82658, 121],
//     ["Bahamas", 403095, 10010, 40],
//     ["Bahrain", 1637896, 760, 2155],
//     ["Bangladesh", 168065920, 130170, 1291],
//     ["Barbados", 287010, 430, 667],
//     ["Belarus", 9433874, 202910, 46],
//     ["Belgium", 11562784, 30280, 382],
//     ["Belize", 390231, 22810, 17],
//     ["Benin", 11801595, 112760, 105],
//     ["Bhutan", 826229, 38117, 22],
//     ["Bolivia", 11379861, 1083300, 11],
//     ["Bosnia and Herzegovina", 3501774, 51000, 69],
//     ["Botswana", 2374636, 566730, 4],
//     ["Brazil", 212392717, 8358140, 25],
//     ["Brunei", 439336, 5270, 83],
//     ["Bulgaria", 6988739, 108560, 64],
//     ["Burkina Faso", 20321560, 273600, 74],
//     ["Burundi", 11575964, 25680, 451],
//     ["Côte d'Ivoire", 25531083, 318000, 80],
//     ["Cabo Verde", 560349, 4030, 139],
//     ["Cambodia", 16482646, 176520, 93],
//     ["Cameroon", 25312993, 472710, 54],
//     ["Canada", 37279811, 9093510, 4],
//     ["Central African Republic", 4825711, 622980, 8],
//     ["Chad", 15814345, 1259200, 13],
//     ["Chile", 18336653, 743532, 25],
//     ["China", 1420062022, 9388211, 151],
//     ["Colombia", 49849818, 1109500, 45],
//     ["Comoros", 850910, 1861, 457],
//     ["Congo (Congo-Brazzaville)", 5542197, 341500, 16],
//     ["Costa Rica", 4999384, 51060, 98],
//     ["Croatia", 4140148, 55960, 74],
//     ["Cuba", 11492046, 106440, 108],
//     ["Cyprus", 1198427, 9240, 130],
//     ["Czech Republic", 10630589, 77240, 138],
//     ["Democratic Republic of the Congo", 86727573, 2267050, 38],
//     ["Denmark", 5775224, 42430, 136],
//     ["Djibouti", 985690, 23180, 43],
//     ["Dominica", 74679, 750, 100],
//     ["Dominican Republic", 10996774, 48320, 228]
// ];

// // Define your arrays here:

// let country1 = countryData[0][0];
// let country2 = countryData[13][0];
// let country3 = countryData[33][0];
// let country4 = countryData[44][0];
// let countries = [country1,country2,country3,country4];

// //P=popluation
// let country1P = countryData[0][1];
// let country2P = countryData[13][1];
// let country3P = countryData[33][1];
// let country4P = countryData[44][1];
// let populations = [country1P,country2P,country3P,country4P];

// //A=area
// let country1A = countryData[0][2];
// let country2A = countryData[13][2];
// let country3A = countryData[33][2];
// let country4A = countryData[44][2];
// let areas = [country1A,country2A,country3A,country4A];

// // D=density
// let country1D = countryData[0][3];
// let country2D = countryData[13][3];
// let country3D = countryData[33][3];
// let country4D = countryData[44][3];
// let densities = [country1D,country2D,country3D,country4D];

// let countriesPoulations = countries.concat(populations);
// let countriesPoulationsAreas = countriesPoulations.concat(areas);
// let countriesPoulationsAreasDensities = countriesPoulationsAreas.concat(densities);
// let flattened = countriesPoulationsAreasDensities;

// //faster way to do above - not mine!
// var countries = [countryData[0][0], countryData[13][0], countryData[33][0], countryData[44][0]];
// var populations = [countryData[0][1], countryData[13][1], countryData[33][1], countryData[44][1]];
// var areas = [countryData[0][2], countryData[13][2], countryData[33][2], countryData[44][2]];
// var densities = [countryData[0][3], countryData[13][3], countryData[33][3], countryData[44][3]];
// var flattened = countries.concat(populations).concat(areas).concat(densities);

// // The following lines will log your variables to the console:
// console.log(countries);
// console.log(populations);
// console.log(areas);
// console.log(densities);
// console.log(flattened);

// Access the value 15 from this multiDimensional array!
// var multiDimensionalArray = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, [15]]]]]];

// // Define the variable 'fifteen' here

// let fifteen = multiDimensionalArray[4] ;
// // Define the variable 'indexArray' here:

// // This will log your variables to the console
// console.log(fifteen);
// console.log(indexArray);

// let arraySets = [["a", "b", "c", "d"], ["e", "f", "g", "h"]];
// console.log(arraySets[1][2]);

// let arraySets = [["a", "b", "c", "d"], ["e", "f", "g", "h"]];
// let targetedE = arraySets[1][0];
// console.log(targetedE);

// let countries = ["Papua New Guinea", "Lebanon", "Suriname", "Cyprus", "India", "Turkmenistan", "Oman", "Bhutan", "Honduras", "Botswana", "Kiribati", "Maldives", "Burundi", "Venezuela", "Guatemala", "Micronesia", "Samoa", "Canada", "Comoros", "Palestine State", "Bangladesh", "South Sudan", "Georgia", "Mauritius", "Hungary", "Brunei", "Iraq", "Antigua and Barbuda", "Switzerland", "Malaysia", "Ireland", "France", "San Marino", "Palau", "Tuvalu", "Kuwait", "China", "Togo", "Cameroon", "Lithuania", "Solomon Islands", "Armenia", "Bulgaria", "Guyana", "Jamaica", "Israel", "Tunisia", "Malawi", "Monaco", "Romania", "Sweden", "Holy See", "Tanzania", "Estonia", "Belize", "South Korea", "Singapore", "Guinea-Bissau", "Yemen", "Spain", "Tonga", "Namibia", "Seychelles", "Bolivia", "Congo (Congo-Brazzaville)", "North Korea", "Haiti", "Cuba", "Greece", "Ecuador", "Libya", "Bahamas", "Cabo Verde", "Germany", "Liberia", "Australia", "Italy", "Angola", "Central African Republic", "Paraguay", "Saudi Arabia", "Fiji", "United States of America", "Somalia", "Philippines", "Ghana", "New Zealand", "Portugal", "Algeria", "United Arab Emirates", "Peru", "Finland", "Serbia", "Andorra", "Belgium", "Azerbaijan", "Sri Lanka", "Tajikistan", "Dominica", "Nepal", "Morocco", "Marshall Islands", "Rwanda", "Mali", "Czech Republic", "Poland", "Iran", "Bosnia and Herzegovina", "Vanuatu", "Gabon", "Argentina", "Equatorial Guinea", "Montenegro", "Denmark", "Niger", "Qatar", "Madagascar", "Cambodia", "Liechtenstein", "Moldova", "Benin", "Slovenia", "Malta", "Indonesia", "Colombia", "Mexico", "Albania", "South Africa", "Kenya", "Japan", "Grenada", "Burkina Faso", "Belarus", "Pakistan", "Barbados", "Afghanistan", "Uruguay", "Uzbekistan", "Côte d'Ivoire", "Viet Nam", "Mauritania", "Swaziland", "Lesotho", "Zambia", "Ethiopia", "Laos", "Sierra Leone", "Nauru", "Guinea", "Croatia", "Mongolia", "Thailand", "Sao Tome and Principe", "El Salvador", "Jordan", "Gambia", "Chad", "Saint Kitts and Nevis", "Syria", "Mozambique", "Brazil", "Austria", "Saint Vincent and the Grenadines", "Eritrea", "Iceland", "Timor-Leste", "Dominican Republic", "Saint Lucia", "United Kingdom", "Nigeria", "Uganda", "Trinidad and Tobago", "Myanmar (formerly Burma)", "Latvia", "Luxembourg", "Senegal", "Costa Rica", "Kazakhstan", "Turkey", "Slovakia", "Democratic Republic of the Congo", "Egypt", "Norway", "Nicaragua", "Macedonia (FYROM)", "Bahrain", "Chile", "Russia", "Panama", "Zimbabwe", "Sudan", "Netherlands", "Ukraine", "Djibouti", "Kyrgyzstan"];

// let fiftyFromFifty = countries.slice(50,101);
// let fiftyFromSeventyFive = countries.slice(75,126);
// let fiftyFromOneHundred = countries.slice(100,151);

// let sortedFromFifty = fiftyFromFifty.slice().sort();
// let sortedFromOneHundred = fiftyFromOneHundred.slice().sort();

// let sortedFromSeventyFive = fiftyFromSeventyFive.slice().reverse.sort;

// console.log(fiftyFromFifty);
// console.log(fiftyFromSeventyFive);
// console.log(fiftyFromOneHundred);
// console.log(sortedFromFifty);
// console.log(sortedFromSeventyFive);
// console.log(sortedFromOneHundred);

// let shows = ["that's so raven", "the suite life", "arrow", "htgawm", "rhoa", "tweenies", "the weekenders", "6teen", "ozzy and drix"];

// shows.fill("nice");
// console.log(shows);

// let missingShows = shows.fill("bad", 4, 7);
// console.log(missingShows);

// shows[0] = "chair";
// shows[1] = "sofa";
// shows[2] = "table";
// shows[3] = "pillow";
// shows[4] = "tv";
// shows[5] = "plate";
// console.log(shows);

// let alphabeticalOrder = shows.slice().sort();
// console.log(alphabeticalOrder);
// console.log(shows);

// let slicedShowes = shows.slice(0,3);
// console.log(slicedShowes);
// console.log(shows);

// shows.reverse();
// console.log(shows);
// let reversedAgain = shows.reverse();
// console.log(shows); /*the same as each other*/ console.log(reversedAgain);

// shows.shift();
// console.log(shows);

// shows.unshift("hellcats");
// console.log(shows);

// let faves = shows.shift();
// console.log(faves);
// console.log(shows);

// let numberOfShows = shows.unshift("bfv");
// console.log(shows);
// console.log(numberOfShows);

// let bread = ["sugar", "flour", "eggs","baking-soda","milk","vanilla"];

// let whatsLeft = bread.pop();
// whatsLeft = bread.pop();
// whatsLeft = bread.pop();
// console.log(bread);

// let leftOvers = bread.pop();
// console.log(bread);
// console.log(leftOvers);

// bread.pop();
// console.log(bread);

// leftOvers = bread.pop();
// console.log(bread);
// console.log(leftOvers);

// let cake1 = ["sugar", "flour", "eggs"];
// cake1.push("baking-soda", "milk");
// console.log(cake1);

// cake1.push("vanilla");
// console.log(cake1);

// let iceCreamCake12 = cake1.push("mint");
// console.log(cake1);

// let iceCreamCake1 = cake1.push();
// console.log(iceCreamCake1);

// console.log('hello world');
// console.log(3-4);
// // alert("what's up y'all!");
// console.error("oh no it's an error");
// console.warn("so this is how a warning works?");

// let a = 11;
// console.log(a);

// a = 10;
// /* First a was 10.*/
// console.log("A is: " + a);

// /* then it was 15 */
// a = 15;
// console.log("A is: " + a);

// a = 10; b = 15; c = 20;

// console.log(a,b,c)

// let banana = 10; apple = 20; grapes = 30; pear = 40; orange = 50;
// console.log (banana,apple,grapes,pear,orange);

// banana = "yellow"; apple = "red"; grapes = "purple"; pear = "green"; orange = "orange";
// console.log (banana,apple,grapes,pear,orange);

// let theExes = "3 people";
// console.log(theExes);

// let theNanny = "the lady named Fran!";
// console.log (theNanny);

// x = 42;
// console.log(x); // however, this is bad practice 'cause u didn't use a keyword for a brand new variable!!!!

// let myAge;
// console.log(myAge);

// let myDateOfBirth = "18th May 1994";
// console.log(myDateOfBirth);

// var Happy = "capital letter for the word Happy";
// var happy = "smallcase letter for the word happy";
// var weAreAllHappy = "this used camelCase to say everyone is happy!";
// console.log("this one has the capital H:" + Happy);
// console.log("this one has the smallcase h:" + happy);
// console.log(weAreAllHappy);

// var e = 1; f = 2; g = 3; h = 4;
// console.log("e means: " + e);
// console.log("f means: " + f);
// console.log("g means: " + g);
// console.log("h means: " + h);

// let zay = 60;
// zay ++ ;
// console.log(zay);

// let pie = 50;
// let iceCream = -pie;
// console.log(iceCream);

// var now  = 2;
// var later = +2;
// console.log(later);

// console.log(1/+0);
// console.log(+1/0);
// console.log(1/-0);
// console.log(-1/0);

// console.log(+0/1);
// console.log(0/+1);
// console.log(-0/1);
// console.log(0/-1);

// console.log
//    (Number.isFinite(123)
// );

// console.log(
//     Number.isNaN(0 / 0)
// );

// console.log(
//    Number.isNaN("a" * 3)
// );

// console.log(
//    Number.isInteger(1)
// );

// console.log(
//    Number.isInteger("banana")
// );

// console.log(
//    Number.isInteger("56") // not true 'cause "56" is a string not a whole number, due to quotations
// );

// console.log(
//    Number.isInteger(56) // true 'cause 56 is a whole number
// );

// var o = 5; // you need to declare the letter as a number 1st if u want to use the letter in the method area "()"
// console.log(
//    Number.isNaN(o * 3)
// );

// console.log(
//    Number.isFinite(123.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
// );

// console.log(
//    Number.isNaN(3)
// );

// console.log(
//    Number.isInteger(0.5)
// );

// console.log(
// Math.floor(4.9), // rounds down the number
// Math.ceil(7.4), // rounds up the number
// Math.round(1.5), // rounds to the nearest integer
// Math.trunc(3.952), // removes the decimal part
// Math.sqrt(49), // returns 9 because 7 * 7 is 49
// Math.cbrt(125) // returns 4 because 5 * 5 * 5 is 125
// )

// console.log(
//    1.1.toFixed(10)
// );

// // This variable will be evaluated by your code:
// let myValue = 15/1.27;

// // Define your variables here:
// let finite = Number.isFinite(myValue);
// let notANumber = Number.isNaN(myValue);
// let integer = Number.isInteger(myValue);
// let twoDecs = parseFloat (myValue.toFixed(2));

// console.log(finite, notANumber, integer, twoDecs)

// let a1 = "I am string";
// let b1 = "3"; // If there were no quotes here, it would be a number
// let c1 = "false"; // If there were no quotes here, it would be a boolean
// let n1 = "Alan";
// n1 = b1 + c1;
// m1 = n1 + a1 + b1;
// console.log("My name is " + "Paul");
// console.log("My name is " + n1);
// console.log('Hello World');
// console.log("what's up ya'll" + a1);
// console.log("what's up ya'll" + b1);
// console.log("what did you just do? :|" + m1);
// console.log("what's \nup \nya'll" + c1);
// console.log("Made it up on the spot \nHa! I think not \nWhy you tellin' them lies \nyo boi you need to stop \nI'm hotter than summer! \nHa yo boi your rap is a bummer \nAnd where did you get the nerve to tell RayDizzal to take a NUMBER!!");
// console.log("Made it up on the spot\rHa! I think not \rWhy you tellin' them lies \ryo boi you need to stop \rI'm hotter than summer! \rHa yo boi your rap is a bummer \rAnd where did you get the nerve to tell RayDizzal to take a NUMBER!!");
// console.log("Made it up on the spot\r Ha! I think not\r Why you tellin' them lies\r yo boi you need to stop\r I'm hotter than summer!\r Ha yo boi your rap is a bummer\r And where did you get the nerve to tell RayDizzal to take a NUMBER!!");

// console.log("\tWelcome \tto \tthe \tworld \tof\tJavascript!");
// console.log("You\tcan\tcheck\tout\tanytime\tyou\twant,\tbut\tyou\ncan\tnever\tleave");

// console.log(`I'm in the shower and I'm singing a song "Stop me if you've heard it!"
//                  long space and a new line now.         'long space again annnnnnnnnnnnnnnnnnnndddddddddddddddddd
//    we've blured it :)'`);

//    let myString = "I'm a cool string";
// console.log(myString.indexOf("I"));
// console.log(myString.indexOf("'"));
// console.log(myString.indexOf("m"));
// console.log(myString.indexOf(" "));
// console.log(myString.indexOf("a"));
// console.log(myString.indexOf("c"));
// console.log(myString.indexOf("o"));
// console.log(myString.lastIndexOf("o")); // is the other "o" so, how to make these different? - answer: use "last" in front of indexOf
// console.log(myString.indexOf("l"));
// console.log(myString.lastIndexOf(" ")); // is the other space so, how to make these different? - answer: use "last" in front of indexOf
// console.log(myString.indexOf("s"));
// console.log(myString.indexOf("t"));
// console.log(myString.indexOf("r"));
// console.log(myString.indexOf("i"));
// console.log(myString.indexOf("n"));
// console.log(myString.indexOf("g"));

// let wind = "Take your sweet sweet ";
// let fire = "time. Let the world un";
// let earth = "wind. Let's do our growing up n";
// let air = "aturally! Oh Yeah! You gotta have rain & sunshine blossom on a vine. That's nature's grand design!";
// let eggs = " Take your sweet sweet time!";
// let song = wind + fire + earth + air + eggs;
// let complete = song + " and you'll be just fine! Take your sweet sweet time! "
// let over = "And this jungle will be MINE!!! :) "
// console.log(complete + over);

// let str1 = "Hello ";
// let str2 = "there!";
// let str3 = " What a beautiful day to learn Javascript concatenation, right?";
// console.log (str1.concat(str2, str3));
// console.log (str2.concat(str1, str3));
// console.log (str3.concat(str1, str2));

// let str12 = "Hello ";
// let str22 = "there!";
// let str32 = " What a beautiful day to learn Javascript concatenation, right?";
// console.log(str12.concat(str22, str32));

// let apple1 = "oh na na";
// let cake = " what's my name?";
// let runner = " oh na na what's";
// let grapes1 = " my name?";
// console.log(apple1.concat(cake + runner + grapes1));
// console.log(cake.concat(runner + grapes1 + apple1));
// console.log(grapes1.concat(apple1 + cake + runner));

// console.log(`${cake + eggs}`);
// console.log(`${banana + a1 + wind + fire + str1}`);

// let quote = "Whatever the mind can conceive and believe, it can achieve.";
// let conceive = quote.slice(22,30);
// let believe = quote.slice(35,42);
// let achieve = quote.slice(51,58);
// console.log(conceive, believe, achieve);

// let fullName = 'Andrew Martin';
// let domainName = 'gmail';
// let tld = 'com';

// // BOTH THESE WORK BUT 1 OR THE OTHER
// let firstLetter = fullName.slice(0,1);
// let smallA = firstLetter.toLowerCase();
// let restOfFullName = fullName.slice(1,6);
// let firstLetter2 = fullName.slice(7,8);
// let smallM = firstLetter2.toLowerCase();
// let restOfFullName2 = fullName.slice(8,13);
// let emailAddress = smallA + restOfFullName + "." + smallM + restOfFullName2 + "@" + domainName + "." + tld;
// console.log(emailAddress);

// // BOTH THESE WORK BUT 1 OR THE OTHER
// let smallFullName = fullName.toLowerCase();
// let name1 = smallFullName.slice(0,6);
// let name2 = smallFullName.slice(7,13);
// let emailAddress1 = name1 + "." + name2 + "@" + domainName + "." + tld;
// console.log(emailAddress1);
