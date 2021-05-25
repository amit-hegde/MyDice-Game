
var dice=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var n1,n2;
function takeName(){
    n1=prompt("Enter player-1 name:");
    n2=prompt("Enter player-2 name:");
    
    document.getElementById("p1").textContent=n1;
    document.getElementById("p2").textContent=n2;
}

function toss(){
var p1=Math.floor(Math.random()*6);    
var p2=Math.floor(Math.random()*6);  
var result=document.getElementsByTagName("h1")[0];
if (p1===p2) {
    
    result.textContent="Draw"
}  
else if (p1>p2) {
 
    result.textContent="🚩"+n1+" wins🏅"
}
else{    
        result.textContent="🚩"+n2+" wins🏅"
}
document.getElementsByClassName("img1")[0].setAttribute("src",dice[p1]);
document.getElementsByClassName("img2")[0].setAttribute("src",dice[p2]);
}