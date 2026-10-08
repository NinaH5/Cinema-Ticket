results=document.getElementById("results")
submitting=document.getElementById("submitting")
fname=document.getElementById("fname")
age=document.getElementById("age")
tickets=document.getElementById("tickets")
let price=0
let totalp=0
function design(){
    function calculateTicket(){
        if (age.value<12){
            price=5;
        }
        else if (age.value>11 && age.value<18){
            price=7;
        }
        else{
            price=10;
        }
    }
    function totals(){
        totalp=eval(price+"*"+tickets.value)
    }
    calculateTicket();
    totals();
    results.innerHTML="<h2>"+fname.value+"'s Ticket</h2>"+"Single Ticket Price: "+price+"$"+"<br>Number Of Tickets:"+ tickets.value + "<br>Total:"+totalp+"$";
}
function clearings(){
    results.innerHTML="";
    fname.value="";
    age.value="";
    tickets.value="";
}