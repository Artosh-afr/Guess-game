document.querySelector("#retry").onclick=function(){
    location.reload();
        
    }

let userNum=document.querySelector("#guesser");
var min=document.querySelector("#min");
var max=document.querySelector("#max");
let randomNum;
let limit=10;
let limitcounter=0;

document.querySelector("#rangebtn").onclick=function(){
   
min=Math.round(min.value)
max=Math.round(max.value)
if(isNaN(min)||min==""){
    min=1;
    alert("You entered min either incorrect or left it empty so it defaulted to 1")
}
 if(isNaN(max) ||max==""){
     max=100;
     alert("You entered max either incorrect or left it empty so it defaulted to 100")
 }
 

if(max > min){
randomNum=Math.round(Math.random()*(max-min)+min);
document.querySelector("#retry").innerHTML="Start Over";
    document.querySelector("#game").style.display="block";
    document.querySelector("#rangecontainer").style.display="none";
    document.querySelector("#title").innerHTML=`Guess the number between ${min} and ${max}`;
    document.querySelector("#guesser").placeholder=`${min}-${max}`
    console.log(randomNum);
}else{alert("Please enter the minimum and maximum correctly!")
location.reload();}
    
}


//win lose

function lost(){
    document.querySelector("#result").innerHTML="You lost. Want to go again?";
    document.querySelector("#Score").innerHTML=0+"/100";
    document.querySelector("#guessbtn").style.display="none";
    document.querySelector("#retry").innerHTML="Play again?"
}

function won(){
    let winner=100;
   
    for(let i=1;i<limitcounter;i++){
       winner-=10;
    }
    document.querySelector("#result").innerHTML="You won with "+limitcounter +" atempt(s) ";
    document.querySelector("#Score").innerHTML=winner+"/100";
    document.querySelector("#guessbtn").style.display="none";
    document.querySelector("#retry").innerHTML="Play again?"
}

//guess number

function guess(){
var min=Math.round(document.querySelector("#min").value);
var max=Math.round(document.querySelector("#max").value);
limitcounter++;
//ends on limit if the answ is not correct
if(limitcounter<limit || userNum.value==randomNum){
        if(userNum.value==randomNum){
            won()  
        }else if(userNum.value<randomNum && userNum.value >(min-1)){
            document.querySelector("#result").innerHTML=`Too low you have ${limit-limitcounter} atempt(s) left`;
        }else if(userNum.value>randomNum && userNum.value <(max+1)){
            document.querySelector("#result").innerHTML=`Too high you have ${limit-limitcounter} atempt(s) left`;
        }else{document.querySelector("#result").innerHTML=`Error. Please choose between ${min} and ${max} you have ${limit-limitcounter} atempt(s) left`}
}else{lost()}


}
