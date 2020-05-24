function myButton(){
    let change = document.getElementById("buttonChange");
    if(change.innerText === "click the button to change this text please"){
        change.innerText  = "yay it worked";
    }else{
        change.innerText ="look it changed again 'cause the last one wasn't the same!";
    }
}
function paraText(){
    let para = document.getElementById("text");
    if(para.innerText === "change this text by itself"){
        para.innerText = "hello i'm sleepy!";
    }else{
        para.innerText = "nooooo";
    }
}


function mDown(obj) {
  obj.innerHTML = "Release Me";
}
function mUp(obj) {
  obj.innerHTML="Thank You";
}


function mOver(obj){
    obj.innerHTML = "hey you came :)"
}
function mOut(obj){
    obj.innerHTML = "don't go :("
}


function zep2(){
    document.getElementById("photos").src = "/images/Zepeto2.png";
}
function zep1(){
    document.getElementById("photos").src = "/images/Zepeto1.png";
}


function zep4(){
    document.getElementById("photos2").src = "/images/Zepeto4.png";
}
function zep3(){
    document.getElementById("photos2").src = "/images/Zepeto3.png";
}



function myFunction() {
return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();


let person = {
    name : "vivian",
    age : 26,
    dob : "18-05-1994",
    favFood : "pizza",
    profile : function(){
        // console.log(`${name} is ${age} years old and was born ${dob}. Her favourite food is ${favFood}.`);
        console.log(this.name + " is " + this.age + " years old and was born " + this.dob + ". Her favourite food is " +  this.favFood);      
    },
};
person.profile();