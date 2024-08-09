
function updateTime(){
let date = new Date;


let hrs = document.getElementById("hr");
let mins = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");
let hr = date.getHours();

mins.innerHTML= padZero(date.getMinutes());
sec.innerHTML=padZero(date.getSeconds());

if (hr > 12 ) {
    hr -= 12;
    ampm.innerHTML="PM";
    if(hr < 10){
        hr='0'+hr;
    }
    hrs.innerHTML=hr;
}

}

setInterval(()=>updateTime(),1000);

function padZero(num){
    if (num < 10) {
        return num='0'+num;
    }else{
        return num;
    }
}
function updateDate(){

let dates = new Date;
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

month.innerHTML= padZero(dates.getMonth());
year.innerHTML=dates.getFullYear();
date.innerHTML=padZero(dates.getDate());
} 

setInterval(()=>updateDate(),500);