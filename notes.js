export function notes() {
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
    var content = "<u>Refund/Credit Add</u> <br> <b>Refund/Credit Total:</b> $" + total + "<br><b>Reason for refund:</b> " + reason + "<br><b>Link to ticket:</b> <a href=" + src + ">" + id + "</a><br><b>Date:</b> " + today ;
    var node = document.getElementById('node-id');
    var newNode = document.createElement('div');
    newNode.innerHTML = content;

    node.appendChild(newNode);


}