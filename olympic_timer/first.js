//   first half

let first = document.getElementById("first");
first.style.display= "flex";
first.style.flexDirection= "column";
first.style.justifyContent= "start";
first.style.height= "40vh"
first.style.marginLeft= "5rem"
first.style.marginTop= "12vh"

let big = document.getElementById("big");
big.style.margin= "0rem";
big.style.fontSize= "5rem"

let one = document.getElementsByClassName("one")
one[0].style.margin= "0rem";

let place= document.getElementsByClassName("place")
place[0].style.margin= "0rem"

// second half

let days= document.getElementById("days")
days.style.marginLeft= "7rem"

let x= document.getElementById("x")
x.style.fontSize= "8rem"
x.style.margin= "0px"

let y=document.getElementById("y")
y.style.margin= "0px"
y.style.paddingLeft= "6rem"
y.style.fontSize= "1.5rem"

// let x= document.getElementById("x")
// let d1= new Date();
// let d2= new Date("21-07-2028T00:00:00")
// let d3= d2-d1
// x.innerHTML= Math.floor((d3)/1000*60*60*24)