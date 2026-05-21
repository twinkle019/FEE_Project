function selectSection(section){

localStorage.setItem("section", section);

let cards = document.querySelectorAll(".card");
cards.forEach(c => c.classList.remove("selected"));

event.currentTarget.classList.add("selected");

}

function calculate(){

let start = new Date(document.getElementById("start").value);
let end = new Date(document.getElementById("end").value);
let req = document.getElementById("req").value;

let section = localStorage.getItem("section");

if(!section){
alert("Please select a section first");
return;
}

const timetables = {

G1:{
1:["C","C","DM","FAA","OS"],
2:["DM","FEE","FEE","C","FAA","C"],
3:["OS","FAA","C","DM","C"],
4:["FAA","OS","FEE","C","C","FEE"],
5:["C","C","FEE","OS","OS","FEE"]
},

G2:{
1:["C","C","DM","FEE","FEE"],
2:["DM","OS","OS","C","FAA","C"],
3:["FEE","FAA","C","FEE","C"],
4:["FAA","OS","FEE","C","C","FEE"],
5:["C","C","FAA","OS","OS","DM"]
},

G3:{
1:["C","C","FEE","FEE","OS"],
2:["OS","FEE","FEE","C","OS","C"],
3:["DM","FAA","FAA","C","DM","C"],
4:["FAA","OS","OS","C","C"],
5:["C","C","FEE","DM","FAA","FEE"]
},

G4:{
1:["C","C","OS","FAA","OS"],
2:["FEE","FEE","C","FAA","C"],
3:["OS","FAA","C","DM","C","OS"],
4:["DM","OS","FEE","C","C","FEE"],
5:["C","C","FEE","DM","FAA","FEE"]
},

G5:{
1:["C","C","DM","OS"],
2:["DM","FEE","FEE","C","FAA","C"],
3:["OS","FEE","C","FEE","C","OS"],
4:["FAA","FAA","FEE","C","C","FEE"],
5:["C","C","FAA","OS","OS","DM"]
}

};

let timetable = timetables[section];

let subjectCount = {};

for(let d = new Date(start); d <= end; d.setDate(d.getDate()+1)){

let day = d.getDay();

if(timetable[day]){

timetable[day].forEach(sub => {

if(!subjectCount[sub]){
subjectCount[sub] = 0;
}

subjectCount[sub]++;

});

}

}

let resultHTML="";

for(let sub in subjectCount){

let total = subjectCount[sub];
let required = Math.ceil((req/100)*total);
let bunk = total-required;
let percent = ((required/total)*100).toFixed(1);

resultHTML+=`

<div class="card result-card">

<h2>${sub}</h2>

<p>Total Lectures: ${total}</p>

<p>Must Attend: ${required}</p>

<p>Can Bunk: ${bunk}</p>

<div class="progress">

<div class="bar" style="width:${percent}%"></div>

</div>

</div>

`;

}

document.getElementById("result").innerHTML=resultHTML;

}