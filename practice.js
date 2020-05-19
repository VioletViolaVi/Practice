function ask(question, good, bad) {
  if (confirm(question)) {
  	good();
  }
  else { 
  	bad();
  }
}

function yes() {
  console.log( "Glad to hear that!" );
}

function no() {
  console.log( "Sorry to hear that" );
}

// ask("Are you ok?", yes, no);


// remove comments and run each of these calls one by one
// ask("Are you ok?", no, no);
// ask("Are you ok?", yes, yes);
ask("Are you ok?", no, yes);



















// let result;

// if (true) {
// / a and b can only be accessed within the scope of this if statement but outside the if statement you cannot access them /
// let a = 100;
// const b = 200;
// var c =20;
// console.log(a);
// console.log(b);
// console.log(c);
// result = a + b + c;
// }

// console.log(result)
// console.log(a);
// console.log(b);
// console.log(c);


// const language = "javascript";
// var language = "ruby";
// let language = "star2";
// console.log(language);


// const language = "javascript";
// language = "ruby";
// console.log(language);
// var language = "ruby";
// let language = "ruby";

// let apple;
// function showApple() {
//   apple = 'An apple!'
//     console.log(apple);
    
// }showApple();

// function showBanana() {
//   banana = "A banana!";
// 	console.log(banana);
// 	var banana;
// }showBanana();

// var apple = console.log("apple");
// var apple = console.log("banana");


// let banana = console.log("banana");
//  banana = console.log("apple");


// function multiply(a, b){
// 	return a * b; // needed otherwise undefined becomes the reuslt
// }
// console.log(multiply(10, 2));


// function multiply(a, b = 10) {
// 	return a * b;
// }

// console.log(multiply(2));


// function dividing(a,b){ 
//     console.log(a/b);
//     console.log("a = " + a);
//     console.log("b = " + b);
// }dividing();


// function adding(a,b){
//     console.log(a + b);
//     console.log("a = " + a);
//     console.log("b = " + b);
// } adding(25,5);

// function subtracting(a,b){
//     console.log("a = "  + a);
//     console.log("b = "+ b);
//     console.log(a-b);    
// }subtracting(90,10);

// function dividing(a,b){ 
//     console.log(a/b);
//     console.log("a = " + a);
//     console.log("b = " + b);
// }dividing(49,7);

// function multiplying(a,b){
//     console.log(a*b);
//     console.log("a = " + a);
//     console.log("b = " + b);
// }multiplying(60,2)

// function dividing(biggerNumber, smallerNumber){
//     console.log( biggerNumber/smallerNumber);
// }dividing(36, 6);

// function multiplying(firstNumber, secondNumber){
//     console.log(firstNumber*secondNumber);    
// }multiplying(9,9);

// function adding(number1st, number2nd){
//     console.log(number2nd + number1st);    
// }adding(60, 20);

// function subtracting(largerNumber, smallNumber){
//     console.log(largerNumber - smallNumber);
// }subtracting(0, 50);

// function addingThenSubtracting(bigNos, biggerNos, smallNos){
//     console.log(bigNos + biggerNos - smallNos);    
// }addingThenSubtracting(6, 10, 3,);

// function addingAndSubtracting(bigNos, biggerNos, smallNos, smallerNos){
//     console.log(bigNos + biggerNos - smallNos + smallerNos);    
// }addingAndSubtracting(6, 10, 3, 1);


// function multiply(a, b){
//     console.log(a * b); 
// } multiply(6, 6); 

// function hello(){ // function keyword and the name of the function
// 	console.log("hello!"); // code block
// }hello();

// function sauce(){
//     console.log("hi");
    
// }sauce();

// function grass(){
//     console.log(2+3);
// }
// grass();

// function mat(){
//     console.log("this is from mat");
// }mat();

// function hair(){
//     console.log("this is hair");
// }hair();

// function tap(){
//     console.log("this is from tap");    
// }tap();

// function death(){
//     return 2+2;
// }death();


// let names = "Johana"
// "suzu"
// "eBa"
// "1)-"
// "WMY"
// "Deirdre Leah"
// "Susana"
// "**Kawaii FariRy**"
// "Kaomi"
// "2)-"
// "Itzayana"
// "Alma."
// "yuna"
// "3)-"
// "Zoey Fogbow"
// "Miss Popo"
// "4)-"
// "5)-"
// "Roxy"
// "Naw"
// "Iyi"
// "Nasu"
// "kristina" 
// "Dakota"
// "hactR"
// "6)-"
// "7)-"
// "Sarah"
// "8)-"
// "Eleonora"
// "Aimee"
// "Demon Aleena"
// "Kinan"
// "Katelyn"
// "chi"
// "9)-"
// "Skyla"
// "kaya"
// "Erika"
// "Claritta angela"
// "10)-"
// "11)-"
// "bille"
// "Nastya Jupiter"
// "U"
// "Calico"
// "12)-"
// "?"
// "zelle"
// "Alessia"
// "syoko"
// "Lau"
// "kenneth"
// "LISA"
// "Tad"
// "Elisha_ofc_"
// "13)-"
// "Lucia"
// "14)- "
// "kuncoroo"
// "Alinka"
// "Sofia"
// "PolinaSiz"
// "RHa"
// "chany"
// "Waffelkatze"
// "15)-"
// "miki"
// "16)-"
// "17)-"
// "FitriGirl"
// "18)-"
// "19)-"
// "Meg"
// "NOPE"
// "Awan"
// "Mom"
// "crystal heart"
// "Vi"
// "Didem"
// "Duda"
// "Rosy"
// "Ayu"
// "Hun"
// "shion"
// "yuuka"
// "@Chelsea Gloria_125"
// "JJ"
// "Tacca"
// "Johnsy"
// "haley:3c"
// "Vanessa"
// "20)-"
// "21)-"
// "22)-"
// "MoonZ_….leewall"
// "love you"
// "Dnyl [heart] A"
// "D r a"
// "23)-"
// "24)-"
// "rendras"
// "Azichi"
// "jessy"
// "25)-"
// "26)-"
// "Hana"
// "*~itsuki~*"
// "Sabilaaptr13"
// "Adam"
// "kiara"
// "Jay"
// "lili"
// "Karolina"
// "27)-"
// "Email"
// "cata"
// "28)-"
// "29)-"
// "Valery"
// "30)-"
// "catalina"
// "Sukura"
// "Elenalvarez25"
// "all A2"
// "xiaojia"
// "Bella"
// "Alexi"
// "Nisan"
// "Luuk"
// "Jojo"
// "Mio & Ryo"
// "Ellis"
// "lilibeth"
// "Nao"
// "31)-"
// "Prim" 
// "HELEN"
// "X-man"
// "STAR"
// "2B"
// "32)-"
// "Daria"
// "33)-"
// "Nana"
// "34)-"
// "35)-"
// "36)-"
// "37)-"
// "38)-"
// "Mini bec"
// "39)-"
// "Nene"
// "Lupi"
// "Swarnali"
// "40)-"
// "41)-"
// "42)-"
// "43)-"
// "Aaron"
// "44)-"
// "an"
// "alysxa"
// "lele"
// "45)-"
// "46)-"
// "Andrea"
// "Rachel"
// "Irpan"
// "Simal"
// "Nati"
// "47)-"
// "ZANDRA"
// "48)-"
// "Nira"
// "Isabela"
// "Bean"
// "Miriam"
// "Erina"
// "Alexander"
// "uma"
// "Camifg";

// "Johana,
// suzu,
// eBa,
// 1)-,
// WMY,
// Deirdre Leah,
// Susana,
// **Kawaii FariRy**,
// Kaomi,
// 2)-,
// Itzayana,
// Alma.,
// yuna,
// 3)-,
// Zoey Fogbow,
// Miss Popo,
// 4)-,
// 5)-,
// Roxy,
// Naw,
// Iyi,
// Nasu,
// kristina,
// Dakota,
// hactR,
// 6)-,
// 7)-,
// Sarah,
// 8)-,
// Eleonora,
// Aimee,
// Demon Aleena,
// Kinan,
// Katelyn,
// chi,
// 9)-,
// Skyla,
// kaya,
// Erika,
// Claritta angela,
// 10)-,
// 11)-,
// bille,
// Nastya Jupiter,
// U,
// Calico,
// 12)-,
// ?,
// zelle,
// Alessia,
// syoko,
// Lau,
// kenneth,
// LISA,
// Tad,
// Elisha_ofc_,
// 13)-,
// Lucia,
// 14)- ,
// kuncoroo,
// Alinka,
// Sofia,
// PolinaSiz,
// RHa,
// chany,
// Waffelkatze,
// 15)-,
// miki,
// 16)-,
// 17)-,
// FitriGirl,
// 18)-,
// 19)-,
// Meg,
// NOPE,
// Awan,
// Mom,
// crystal heart,
// Vi,
// Didem,
// Duda,
// Rosy,
// Ayu,
// Hun,
// shion,
// yuuka,
// @Chelsea Gloria_125,
// JJ,
// Tacca,
// Johnsy,
// haley:3c,
// Vanessa,
// 20)-,
// 21)-,
// 22)-,
// MoonZ_….leewall,
// love you,
// Dnyl [heart] A,
// D r a,
// 23)-,
// 24)-,
// rendras,
// Azichi,
// jessy,
// 25)-,
// 26)-,
// Hana,
// *~itsuki~*,
// Sabilaaptr13,
// Adam,
// kiara,
// Jay,
// lili,
// Karolina,
// 27)-,
// Email,
// cata,
// 28)-,
// 29)-,
// Valery,
// 30)-,
// catalina,
// Sukura,
// Elenalvarez25,
// allA2,
// xiaojia,
// Bella,
// Alexi,
// Nisan,
// Luuk,
// Jojo,
// Mio&Ryo,
// Ellis,
// lilibeth,
// Nao,
// 31)-,
// Prim ,
// HELEN,
// X-man,
// STAR,
// 2B,
// 32)-,
// Daria,
// 33)-,
// Nana,
// 34)-,
// 35)-,
// 36)-,
// 37)-,
// 38)-,
// Mini bec,
// 39)-,
// Nene,
// Lupi,
// Swarnali,
// 40)-,
// 41)-,
// 42)-,
// 43)-,
// Aaron,
// 44)-,
// an,
// alysxa,
// lele,
// 45)-,
// 46)-,
// Andrea,
// Rachel,
// Irpan,
// Simal,
// Nati,
// 47)-,
// ZANDRA,
// 48)-,
// Nira,
// Isabela,
// Bean,
// Miriam,
// Erina,
// Alexander,
// uma,
// camifg, "

// let zepeto = names.split("");
// console.log(zepeto);

// for (i=0; i>200; i--){
//   for (j=0; j>countryData[i].length; j--){
//     console.log([i],[j]);
//   }

// for (i=0; i<20; i++){
//     if (i === 5){
//         continue;
//     }
//     console.log("phone " + i)
// }

// for (i=0; i<30; i++){
//     if (i === 23){
//         continue;
//     }
//     console.log("water "+ i);
    
// }

// for (i=0; i<45;i++){
//     if (i === 40){
//         continue;
//     }
//     console.log("spoon " + i);
    
// }

// for (i=0; i<900; i++){
//     if (i === 850){
//         continue;
//     }
//     console.log("pen " + i);
    
// }

// for (i=0; i<900; i++){
//     if (i === 850){
//         continue;
//     }
//     console.log("pen " + i);
    
// }


// for (i=0; i<100; i++){
//     if (i === 6){
//         break;
//     }
//     console.log("hello world! " + i)
// }

// for (i=0; i<100; i++){
//     if(i === 59){
//         break;
//     }
//     console.log("supper! " + i);
// }

// for (i=0; i<100; i++){
//     if (i === 20){
//         break;
//     }
//     console.log("hidden ya'll "+ i);
// }

// for (i=0; i<100; i++){
//     if (i === 2){
//       break;  
//     }
//     console.log("tired " + i);
    
// }

// for (i=0; i<100; i++){
//     if (i === 7){
//         break;
//     }
//     console.log("noooo! " + i);
    
// }

// for (i=0; i<50; i++){
//     if (i === 40){
//         break;
//     }
//     console.log("cake please " + i);
    
// }

// for (i=0; i<400; i++){
//     if (i===399){
//         break;
//     }
//     console.log("last one... it gonna be loooonnnnggggg! " + i);    
// }



// let tickersString = tickers.join(" ");


// let i = usernames[199];  //MINE

// do{
//   console.log("<p>" + i + "</p>");
//   i++;
// }while(i<usernames);


// let i = usernames.length-1; // not mine

// do{
//   console.log("<p>" + usernames[i] + "</p>");
//   i++;
// }while(i<usernames);


// let tv = 90;

// do{
//     console.log(tv);
//     tv++;   
// }while (tv<100);

// let i = 10;

// do{
//     console.log(i);
//     i++;   
// }while (i<100);

// let i = 201;

// do{
//     console.log(i); // to produced in console as it was still read, just not looped 'cause 201 is bigger than 20!!!
//     i++;   
// }while (i<20);


// let i = 35;

// do{
//     console.log(i);
//     i++;   
// }while (i<50);

// for(i = 0; i < usernames.length; i++){
//     console.log("<p>" + usernames[i] + "</p>");
//OR

// for(let i in usernames){
//     console.log("<p>" + usernames[i] + "</p>");
// }
//OR

// for(let name in usernames){
//     console.log("<p>" + usernames[name] + "</p>");
// }
//OR

// for(let name of usernames){
//     console.log("<p>" + name + "</p>");
// }
//OR

// for(let i of usernames){
//     console.log("<p>" + i + "</p>");
// }



// let i =5;

// while (i<15){
//     console.log("this is " + i + " and it's less than 15!");
//     i++;
// }

// let i = 8;

// while (i<90){
//     console.log("this is gonna be loooong.... And " + " is still less than 90 haha!!!");
//     i++;
// }


// let i = 0;

// while (i<9){
//     console.log("yes!!!");
//     i++;    
// }


// let cake = 0;

// while (cake<11){
//     console.log("singing");
//     cake++
// }

// let i =3;

// while(i<10){
//     console.log("lalala");
//     i++
// }

// let i=6;

// while(i<10){
//     console.log("no way!");
//     i++;    
// }

// let i = 8;
// while(i<10){
//     console.log("supper!");
//     i++;
// }


// let i = 0;

// while ( i < 10) {
// 	console.log("I am happy");
//   i++;
// }

// while (i<40){
//     console.log("hiya");
//     i++;
// }

// while (i<25){
//     console.log("bye");
//     i++;
// }


// let colours = ["red", "black", "green", "orange", "blue"];

// for (let shade of colours){
//     console.log(shade);
    
// }

// for (let blob of colours){
//     console.log(blob);
    
// }

// for (let drop of colours){
//     console.log(drop);
    
// }

// let tv = ["that's so raven", "the suite life", "arrow", "htgawm", "rhoa", "tweenies", "the weekenders", "6teen", "ozzy and drix"];

// for (let shows of tv){
//     console.log(shows);
// }

// for(let episodes of tv){
//     console.log(episodes);
    
// }

// for(let rain of tv){
//     console.log(rain);  
// }

// for (let eggs of tv){
//     console.log(eggs);
    
// }

// let toys = ["sims", "teddy", "ball", "doll", "doll house", "marbles"];

// toys = toys.sort();
// console.log(toys);

// for (let toy of toys){
//     console.log(toy);
    
// }


// let toys = ["sims", "teddy", "ball", "doll", "doll house", "marbles"];

// for (let i in toys){ 
//     console.log(toys[i]);
// }

// let list = ["red", "black", "green", "orange", "blue"];

// for (let i in list){
//     console.log(list[i]);    
// }

// let sports = ["basketball", "football", "tennis", "chess"];

// for(let i in sports){
//     console.log(sports[i]+" "+ i);
// }

// let tv = ["that's so raven", "the suite life", "arrow", "htgawm", "rhoa", "tweenies", "the weekenders", "6teen", "ozzy and drix"];

// for(let i in tv){
//     console.log(tv[i]+" "+i);
// }

//  let bread = ["sugar", "flour", "eggs","baking-soda","milk","vanilla"];

//  for(let d of bread){
//     console.log(d); 
// }

// for (let slice of bread){
//     console.log(slice);    
// }


// for(let i in bread){
//     console.log(bread[i]+" "+i);
    
// }


// let list = ["red", "black", "green", "orange", "blue"];

// for (i=0; i<list.length; i++){
//     console.log(list[i]);
// }

// for (i=0; i<list.length; i++){
//     console.log(list[i] + i);
// }

// let toys = ["sims", "teddy", "ball", "doll", "doll house", "marbles"];

// console.log(toys.length);

// for (i=2; i<toys.length; i++){
//     console.log(toys[i] +" " + i);
// }

// for (i=0; i<toys.length; i++){
//     console.log(toys[i] +" " + i);
// }

// for (i=1; i<toys.length; i++){
//     console.log(toys[i]);  
// }

// for (i=1; i<toys.length; i++){
//     console.log(toys[i] + " " + i);  
// }

// for(i=3; i<toys.length; i++){
//     console.log(toys[i] + " " + i);
    
// }

// for(i=1; i<toys.length; i++){
//     console.log(toys[i] + " " + i);
    
// }


// for (let i = 0; i < 10; i = i + 2 ) { 
// 	console.log("I am happy");
// }

// for (let i = 0; i < 20; i = i + 2 ) { 
// 	console.log("I am happy");
// }

// for (let i = 10; i > 0; i--) { 
// 	console.log("I am happy " + i);
// }

// for (let i = 0; i < 10; i++) { 
// 	console.log("I am sad " + i);
// }

// for (i=60; i>=10; i--){
//     console.log("down " + i);
// }

// for (i=60; i>10; i--){
//     console.log("down " + i);
// }

// for (i=30; i>20; i--){
//     console.log("yo! " + i);
// }

// for (i=70; i>=50; i--){
//     console.log("ho ho ho! " + i);
// }

// for (i=70; i>50; i--){
//     console.log("no! " + i);
// }


// for (i=0; i<8; i++){
//     console.log("hello");
// }

// for (i=2; i<=6; i++){
//     console.log("hiya");
// }

// for (i=4; i<10; i++){
//     console.log("bye")
// }

// for(i=7; i<=14; i++){
//     console.log("hey!")
// }
// for(i=9; i<=9; i++){
//     console.log("hee");
// }


// let sports = ["basketball", "football", "tennis", "chess"];

// for (i = 0; i < sports.length; i++) {
// 	console.log(sports[i]);
// }

// let tv = ["that's so raven", "the suite life", "arrow", "htgawm", "rhoa", "tweenies", "the weekenders", "6teen", "ozzy and drix"];

// for (i=0; tv.length; i++){
//     console.log(tv[i]);
    
// }

// for(i= 2; i<=8; i++){
//     console.log("started @ 2 ended @ 8 correct? " + i);
    
// }

// for(i= 2; i<8; i++){
//     console.log("started @ 2 ended @ 8 correct? " + i);
    
// }



// for (i=0; i<7; i++){
//     console.log("how many i's do u see? " + i);
    
// }

// for (let i = 10; i > 0; i--){
//     console.log("what happens now?1");
//     console.log("what happens now?2");
// }

// for (i=0; i <6; i++){
//          console.log("this is be repeated 6 times... no?");        
//      }

// for (i=0; i<5; i++){
//     console.log("this got looped 5 times!")
// }

// for (i=0; i<9; i++){
//     console.log("this 9 times!")
// }

// for (i=0; i<3; i++){
//     console.log("3 times!");    
// }

// for  (i=0; i<101; i++){
//     console.log("101 times! wow dat's a lot!");
    
// }

// for (i=0; i<5; i++){
//     console.log("what happend here?");
    
// }



// console.log(true + true);

// let i = Number(true); console.log(i);
// Number(false);

// let pie = "5607.35";

// let i = parseInt(pie);
// let sweets = parseFloat(pie);
// let bacon = Number(pie);

// console.log(i);
// console.log(sweets);
// console.log(bacon);


// let red = "56";

// let blue = parseInt(red);
// let yellow = parseFloat(red);
// let black = Number(red);

// console.log(blue);
// console.log(yellow);
// console.log(black);

// let rain = parseInt(360.512);
// console.log(rain);

// let wet = parseFloat(360.512);
// console.log(wet);

// let dry =Number(360.512);
// console.log(dry);


// let string1 = "34.96";

// /* It is going to be the same result, number 12 */
// let number1 = parseInt(string1);
// let number2 = Number(string1);

// let string2 = "34.96";
// let number3 = parseFloat(string2);

// console.log(number1, number2, number3);
// console.log(typeof(number1));
// console.log(typeof(number2));
// console.log(typeof(number3));


// let xmas = "holly tree presents star i santa carols";

// let long = Array.from(xmas);
// console.log(long);

// let tv = "ti'ssoraven,.and thesuiiife,.and arrow,.and htgawm,.and rhoa,.and tweenies,.and theweekenders,.and 6teen,.and ozzy&drix";

// let itsTooLong = Array.from(tv);
// console.log(itsTooLong);



// let tv = "ti'ssoraven,.and thesuiiife,.and arrow,.and htgawm,.and rhoa,.and tweenies,.and theweekenders,.and 6teen,.and ozzy&drix";

// let quotationAfterspace1 = tv.split(" ");
// console.log(quotationAfterspace1);

// let quotationAfterspace2 = tv.split("");
// console.log(quotationAfterspace2);

// let quotationAfterspace3 = tv.split(".");
// console.log(quotationAfterspace3);

// let quotationAfterspace4 = tv.split(",");
// console.log(quotationAfterspace4);

// let quotationAfterspace5 = tv.split("and");
// console.log(quotationAfterspace5);


// let xmas = "hollytreepresentsstarisantacarols";

// let spaceAfterEverySpace = xmas.split("");
// console.log(spaceAfterEverySpace);


// let xmas2 = "holly tree presents star i santa carols";

// let spaceAfterEverySpace2 = xmas2.split(" ");
// console.log(spaceAfterEverySpace2);


// let xmas3 = "holly,tree,presents,star,i,santa,carols";

// let spaceAfterEverySpace3 = xmas3.split(",");
// console.log(spaceAfterEverySpace3);


// let xmas4 = "holly.tree.presents.star.i.santa.carols";

// let spaceAfterEverySpace4 = xmas4.split(".");
// console.log(spaceAfterEverySpace4);


// let xmas5 = "hollyandtreeandpresentsandstarandiandsantaandcarols";

// let spaceAfterEverySpace5 = xmas5.split("and");
// console.log(spaceAfterEverySpace5);



// let xmas = ["holly", "tree", "presents", "star", "i", "santa", "carols"];

// let withComma = xmas.join(",");
// console.log(withComma); /*OR*/console.log(xmas.join(",")); 

// let withSpace = xmas.join(" ");
// console.log(withSpace); /*OR*/console.log(xmas.join(" "));

// let withNothing = xmas.join("");
// console.log(withNothing); /*OR*/console.log(xmas.join(""));

// let withAnd = xmas.join(" and "); // putting spaces adds to the "and"
// console.log(withAnd); /*OR*/console.log(xmas.join(" and ")); // putting spaces adds to the "and"

// let with58 = xmas.join(" 58 ");
// console.log(with58); /*OR*/console.log(xmas.join(" 58 "));


// let viv = ["fun", "nice", "smart"];
// let newViv = viv.toString();
// console.log(newViv);
// console.log(typeof(newViv));
// console.log(typeof(viv));

// let arthur = ["childhood", " DW", " Mary Moo Cow"];
// let cbbc = arthur.toString();
// console.log(cbbc);
// console.log(typeof(cbbc));
// console.log(typeof(arthur));

// let smile = ["yellow", " red", " orange"];
// let colours = smile.toString();
// console.log(colours);
// console.log(typeof(colours));
// console.log(typeof(smile));


// let i = "nice"
// console.log(typeof(i));

// let pie = 6
// console.log(typeof(pie));

// let ice = ["happy birthday!"]
// console.log(typeof(ice));

// let teeth = (9*9)
// console.log(typeof(teeth));

// let sheep = "hair"
// console.log(typeof(sheep));


// switch(Boolean(40>2)){
//     case (true) : console.log("u should c dis"); break;
//     case (false) : console.log("u shouldn't c dis"); break;
//     default : console.log("shown if all not correct");
// }

// let word = ("iceCube");

// switch(word){
//     case ("iceCube") : console.log("correct"); break;
//     case (word === "dog") : console.log("wrong"); break;
//     case (word > "bottle") : console.log("wrong2"); break;
//     default : console.log("see if all not there");
// }

// switch("swimming"){
//     case "basketball" : console.log("no"); break;
//     case "baseball" : console.log("nope"); break;
//     case "swimming" : console.log("YEAH!"); break;
//     default :console.log("seen if all fails");
// }


// let dOb = 18;

// switch (dOb){
//     case (3+1) : console.log("not 18"); break;
//     case (10>200): console.log("still not 18"); break;    
//     case (20-2) : console.log("i correct"); break;
//     default : console.log("to be seen if all are wrong"); 
// }


// switch(3*3) {
//     case (2) : console.log("nope"); break;
//     case (91) : console.log("i"); break;
//     case (10) : console.log("nope"); break; 
//     case (6) : console.log("nope"); break;
//     default : console.log("seen if no values match");    
// }

// let sweets = "haribo"

// switch(sweets){
//     case "chocolate" : console.log("this isn't haribo!"); break;
//     case "i" : console.log("nope not right either"); break;
//     case "haribo" : console.log("yeeeeeeaaaaaaahhhhhh maaaaaaannnnnnn!"); break;
//     default : console.log("will show if the above-s don't-s got-s it-s XD")
// }

// let age = 2;
// (age > 18) ?  console.log("You are soooo mature") : console.log("You are still a child");

// let secondAge = 39;
// (secondAge > 18) ?  console.log("You are soooo mature") : console.log("You are still a child");

// if (secondAge > 104){console.log("You are soooo mature");
// }else {console.log("You are still a child");}

// var colour = "orange";
// (colour === "orange") ? console.log("i it is the same") : console.log("no it isn't the same");

// var viv = "25YearsOld";
// (viv === "25YearsOld") ? console.log("i am this") : console.log("not anymore");
// (viv === "26YearsOld") ? console.log("this is wi i am now") : console.log("i used to be 25 though :'(");

// var gate = 60;
// (gate <= 60) ? console.log("i it is same or equals to") : console.log("you shouldn't see this");

// //be careful, u need to add 3 ='s after 100 'cause u checkin' for true or false not an actual maths number :)
// (90*100 === 800) ? console.log("no the answer isn't 800 you dum dum!") : console.log("i the answer is 9,000");

// (0.5-0.5=== "abc") ? console.log("should not see") : console.log("will see");

// ("i" === "i") ? console.log("can't see this") : console.log("i see this");

// ((3 === 3) && (2 === 5) ) ? console.log("okay") : console.log("not okay");

// ((10 === 3) || (8 === 8) ) ? console.log("okay") : console.log("not okay");

// (2*6 === 500) ? console.log("eggs") : console.log("bacon");


// let fruit1 = "apple";
// let fruit2 = "peach";

// if (fruit1 === "apple" || fruit2 === "peach"){console.log("Yummy!");}

// if (fruit1 === "apple" && fruit2 === "banana"){console.log("Yummy");}

// if (fruit1 === "apple" && fruit2 === "banana"){console.log("Yummy");}
// else{console.log("not yummy i'm afraid");}


// if (fruit1 == "apple" && fruit2 == "i"){console.log("not this one");}
// else if (2*2 == 3 || 5/5 == 46){console.log("not this either!");}
// else if (50-50 == 9 || "hands" == "hands"){console.log("this will be the one! :)");}
// else{console.log("long road just to end up at a place ti wont be used!");}

// if (fruit1 == "apple" && fruit2 == "i"){console.log("not this one");}
// else if (2*2 == 3 || 5/5 == 46){console.log("not this either!");}
// else if (50-50 == 9 || "hands" == (60-2 == 834) ){console.log("this will be the one! :)");}
// else{console.log("long road to get to but worth it as I am the one!");}

// if (fruit1 == "iephone" && fruit2 == "peach"){console.log("will it be A");}
// else if (2*2 == 40 || 5/5 == 46){console.log("will it be B");}
// else if (50-50 == 9 || !("hands" == (60-2 == 834) ) ){console.log("will it be C");}// ! negates the true and makes it false
// else{console.log("or will it be D!");}

// if (9*2 == 6){console.log("this shouldn't show as the answer is 18");}
// else if (9*2 == 18){console.log("this should show it has the CORRECT answer");}
// else {console.log("this also should NOT be seen as it is wrong")}

// if (78>400){console.log("i it is");}
// else if (99<2){console.log("nope it isn't");}
// else {console.log("no way dude!");}

// if ("i"=="waterBottle"){console.log("U funni if u tink dis correct :'D");}
// else if ("i" == "pie"){console.log("NOOOOOOOOOOOO!");}
// else {console.log("I think I get this now! :)");}

// if ("i"=="i"){console.log("yeah");}
// else if ("i" == "pie"){console.log("nope");}
// else {console.log("this will never show");}

// if ("dog"=="pizza"){console.log("haha");}
// else if ("pie" == "pie"){console.log("hoho");}
// else {console.log("hehe");}

// if ("dog"=="dog"){console.log("haha");}
// else if ("pie" == "1"){console.log("1a");}
// else if (3*3 == 8){console.log("2b");}
// else if (10>200){console.log("3c");}
// else if ("walking" == "balls"){console.log("4d");}
// else if ("i" == "sofa bed ti opens out"){console.log("5e");}
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
// console.log((36 / 6 == 6) && ("i in a i" == "i in a i") && ("car" == "laptop")); //true,true,false = false

// || only needs one to be true
// console.log((5 < 1) || (3 < 1)); //false,false = false
// console.log((5 * 5 == 25) || (33 / 11 == 2)); //true,false = true
// console.log((5 * 10 == 50) || (30 / 5 == 6)); //true,true = true
// console.log((36 / 6 == 6) || ("i in a i" == "i in a i") || ("car" == "laptop")); //true,true,false = true

// ! negates rusult and makes it opposite
// console.log( !( (5 < 1)||(3 < 1) ) ); //false,false = false NO MORE!! = true
// console.log( !( (5 * 5 == 25)||(33 / 11 == 2) ) ); //true,false = true NO MORE!! = false
// console.log( !( (5 * 10 == 50)||(30 / 5 == 6) ) ); //true,true = true NO MORE!! false,false = false
// console.log( !( (36 / 6 == 6)||("i in a i" == "i in a i")||("car" == "laptop") ) ); //true,true,false = true NO MORE!! = false

// let toyStory = "cartoon";
 
// if (toyStory == "cartoon") {
//   console.log("Toy Story is the best animated movie EVER!");
// } else {
//   console.log("This is NOT a cartoon. DUH!!!");
// }

// var i = "food";

// if (i != "food") {
//   console.log("This is not food!");
// } else {
//   console.log("This IS food!");
// }

// var math = "5 times 5 is 25";
// // var math = "is eat fish";

// if (math == "5 times 5 is 25") {
//   console.log("i indeed this was a math question");
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
// console.log(Boolean("ti"));
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

// let countriesPoulations = countries.coni(populations);
// let countriesPoulationsAreas = countriesPoulations.coni(areas);
// let countriesPoulationsAreasDensities = countriesPoulationsAreas.coni(densities);
// let flattened = countriesPoulationsAreasDensities;

// //faster way to do above - not mine!
// var countries = [countryData[0][0], countryData[13][0], countryData[33][0], countryData[44][0]];
// var populations = [countryData[0][1], countryData[13][1], countryData[33][1], countryData[44][1]];
// var areas = [countryData[0][2], countryData[13][2], countryData[33][2], countryData[44][2]];
// var densities = [countryData[0][3], countryData[13][3], countryData[33][3], countryData[44][3]];
// var flattened = countries.coni(populations).coni(areas).coni(densities);

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

// let shows = ["ti's so raven", "the suite life", "arrow", "htgawm", "rhoa", "tweenies", "the weekenders", "6teen", "ozzy and drix"];

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

// shows.unshift("hellis");
// console.log(shows);

// let faves = shows.shift();
// console.log(faves);
// console.log(shows);

// let numberOfShows = shows.unshift("bfv");
// console.log(shows);
// console.log(numberOfShows);

// let bread = ["sugar", "flour", "eggs","baking-soda","milk","vanilla"];

// let wisLeft = bread.pop();
// wisLeft = bread.pop();
// wisLeft = bread.pop();
// console.log(bread);

// let leftOvers = bread.pop();
// console.log(bread);
// console.log(leftOvers);

// bread.pop();
// console.log(bread);

// leftOvers = bread.pop();
// console.log(bread);
// console.log(leftOvers);

// let i1 = ["sugar", "flour", "eggs"];
// i1.push("baking-soda", "milk");
// console.log(i1);

// i1.push("vanilla");
// console.log(i1);

// let iceCreami12 = i1.push("mint");
// console.log(i1);

// let iceCreami1 = i1.push();
// console.log(iceCreami1);

// console.log('hello world');
// console.log(3-4);
// // alert("wi's up y'all!");
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
// console.log("wi's up ya'll" + a1);
// console.log("wi's up ya'll" + b1);
// console.log("wi did you just do? :|" + m1);
// console.log("wi's \nup \nya'll" + c1);
// console.log("Made it up on the spot \nHa! I think not \nWhy you ilin' them lies \nyo boi you need to stop \nI'm hotter than summer! \nHa yo boi your rap is a bummer \nAnd where did you get the nerve to il RayDizzal to take a NUMBER!!");
// console.log("Made it up on the spot\rHa! I think not \rWhy you ilin' them lies \ryo boi you need to stop \rI'm hotter than summer! \rHa yo boi your rap is a bummer \rAnd where did you get the nerve to il RayDizzal to take a NUMBER!!");
// console.log("Made it up on the spot\r Ha! I think not\r Why you ilin' them lies\r yo boi you need to stop\r I'm hotter than summer!\r Ha yo boi your rap is a bummer\r And where did you get the nerve to il RayDizzal to take a NUMBER!!");

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
// let air = "aturally! Oh Yeah! You gotta have rain & sunshine blossom on a vine. Ti's nature's grand design!";
// let eggs = " Take your sweet sweet time!";
// let song = wind + fire + earth + air + eggs;
// let complete = song + " and you'll be just fine! Take your sweet sweet time! "
// let over = "And this jungle will be MINE!!! :) "
// console.log(complete + over);

// let str1 = "Hello ";
// let str2 = "there!";
// let str3 = " Wi a beautiful day to learn Javascript conienation, right?";
// console.log (str1.coni(str2, str3));
// console.log (str2.coni(str1, str3));
// console.log (str3.coni(str1, str2));

// let str12 = "Hello ";
// let str22 = "there!";
// let str32 = " Wi a beautiful day to learn Javascript conienation, right?";
// console.log(str12.coni(str22, str32));

// let apple1 = "oh na na";
// let i = " wi's my name?";
// let runner = " oh na na wi's";
// let grapes1 = " my name?";
// console.log(apple1.coni(i + runner + grapes1));
// console.log(i.coni(runner + grapes1 + apple1));
// console.log(grapes1.coni(apple1 + i + runner));

// console.log(`${i + eggs}`);
// console.log(`${banana + a1 + wind + fire + str1}`);

// let quote = "Wiever the mind can conceive and believe, it can achieve.";
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
