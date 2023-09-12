import { comparison } from "./comparison.js";

let plan,
    noteCount = 0

document.getElementById("findPlan").addEventListener("click", planCalc);
document.getElementById("copyPlan").addEventListener("click", copyPlan);
document.getElementById("noteGen").addEventListener("click", notes);




async function planCalc() {
    var e = document.getElementById("plan");
    var value = e.value;
    console.log(value)
    var text = e.options[e.selectedIndex].text;
    var count = document.getElementById("count").value;
    console.log("This is count" + count[0])
    plan = await comparison(count, value);
    console.log("this is the plan" + plan.Cost)

    document.getElementById("cost").innerText = plan.Cost
    document.getElementById("support").innerText = plan.Send
    document.getElementById("min").innerText = plan.Min
    document.getElementById("max").innerText = plan.Max
    //copyPlan()


}

function copyPlan() {
    console.log("Copying");
    var cost = plan.Cost.replace(",", "")

    navigator.clipboard.writeText((cost.replace("$", "")) + "00" + " " + plan.Max.replace(",", "") + " " + plan.Send.replace(",", ""))
}


export function notes() {
    if (noteCount == 1){
        return
    }
    var id = document.getElementById("ticketID").value;
    var total = document.getElementById("total").value;
    var reason = document.getElementById("reason").value;
    console.log(id + total + reason);


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    var src = "https://getdrip.zendesk.com/agent/tickets/" + id;
    var content = "<u>Refund/Credit Add</u> <br> <b>Refund/Credit Total:</b> $" + total + "<br><b>Reason for refund:</b> " + reason + "<br><b>Link to ticket:</b> <a href=" + src + ">" + id + "</a><br><b>Date:</b> " + today;
    var node = document.getElementById('node-id');
    var newNode = document.createElement('div');
    newNode.innerHTML = content;

    node.appendChild(newNode);


    console.log("Copying");

    navigator.clipboard.writeText((newNode.innerHTML))
    noteCount = 1

}