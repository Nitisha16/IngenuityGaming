var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

today = dd+'/'+mm+'/'+yyyy;
console.log(today);
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

document.body.innerHTML="<h1> Today Date:</h1>"+today+"<h1> Today Day: </h1>"+day
// document.body.innerHTML="<h1> Today Day:</h1>"+Date.getDay