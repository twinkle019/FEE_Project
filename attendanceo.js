let selectedSection = "";

/* SECTION SELECT */

function selectSection(section, element){

    selectedSection = section;

    let cards = document.querySelectorAll(".card");

    cards.forEach(card=>{
        card.classList.remove("active");
    });

    element.classList.add("active");

}

/* TIMETABLE */
const timetable = {

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
/* CALCULATE */

function calculate(){

    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let req = parseInt(document.getElementById("req").value);

    if(start==="" || end===""){
        alert("Please select dates");
        return;
    }

    if(selectedSection===""){
        alert("Please select section");
        return;
    }

    let startDate = new Date(start);
    let endDate = new Date(end);

    let subjects = {};

    let current = new Date(startDate);

    while(current <= endDate){

        let day = current.getDay(); // 0–6 (Sunday–Saturday)
        if(day === 0) { 
            current.setDate(current.getDate()+1);
            continue;
}

        if(timetable[selectedSection] && timetable[selectedSection][day]){

            timetable[selectedSection][day].forEach(sub=>{

                if(!subjects[sub]){
                    subjects[sub] = 0;
                }

                subjects[sub]++;

            });

        }

        current.setDate(current.getDate()+1);

    }

    let output = "";

    for(let sub in subjects){

        let total = subjects[sub];

        // RANDOM CURRENT ATTENDANCE
        let attended = Math.floor(total * (Math.random()*0.4 + 0.5));

        let percentage = ((attended/total)*100).toFixed(1);

        let required = Math.ceil((req/100)*total);

        let bunk = attended - required;

        if(bunk < 0){
            bunk = 0;
        }
        let needed = required - attended;
        if(needed < 0){
            needed = 0;
        }

        let status = "";
        let statusClass = "";

        if(percentage >= req){

            status = `You can bunk ${bunk} more lectures.`;
            statusClass = "status-good";

        }
        else{

            status = `Attend ${needed} more lectures to maintain ${req}% attendance.`;
            statusClass = "status-bad";

        }

        output += `

        <div class="subject-card">

            <div class="subject-name">${sub}</div>

            <div class="row">
                <span>Total Lectures</span>
                <span>${total}</span>
            </div>

            <div class="row">
                <span>Lectures Attended</span>
                <span>${attended}</span>
            </div>

            <div class="row">
                <span>Current Attendance</span>
                <span>${percentage}%</span>
            </div>

            <div class="row">
                <span>Required Criteria</span>
                <span>${req}%</span>
            </div>

            <div class="progress-bar">
                <div class="progress" style="width:${percentage}%"></div>
            </div>

            <div class="${statusClass}">
                ${status}
            </div>

        </div>

        `;

    }

    document.getElementById("result").innerHTML = output;

}