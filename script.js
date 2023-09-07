import {comparison} from "./comparison.js"; 
import {notes} from "./notes.js";
var V6,
    V5,
    V4,
    V7,
    plan


    document.getElementById("findPlan").addEventListener("click", planCalc);
    loadData();
    document.getElementById("copyPlan").addEventListener("click",copyPlan);
    document.getElementById("noteGen").addEventListener("click",notes);

  

async function loadData(){
    var res = await fetch('./data/V6-3.json')
    V6 = await res.json();
    res = await fetch('./data/V5-3.json')
    V5 = await res.json();
    res = await fetch('./data/V4-3.json')
    V4 = await res.json();
    res = await fetch('./data/V7-3.json')
    V7 = await res.json();
    
}
function planCalc(){
    var e = document.getElementById("plan");
    var value = e.value;
    console.log(value)
    var text = e.options[e.selectedIndex].text; 
    var count = document.getElementById("count").value;
    plan = comparison(count,value);
    
    document.getElementById("cost").innerText = plan.Cost
    document.getElementById("support").innerText = plan.Send
    document.getElementById("min").innerText = plan.Min
    document.getElementById("max").innerText = plan.Max
    //copyPlan()


}

function copyPlan(){
    console.log("Copying");
    var cost = plan.Cost.replace(",","")

    navigator.clipboard.writeText((cost.replace("$","")) + "00" + " " + plan.Max.replace(",","") + " " + plan.Send.replace(",","") )
}


