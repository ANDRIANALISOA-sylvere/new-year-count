
const days=document.getElementById("days");
const hours=document.getElementById("hours");
const mins=document.getElementById("mins");
const seconds=document.getElementById("seconds");

const currentyear=new Date().getFullYear() + 1;
const newyear=`1 Jan ${currentyear}`;

function count()
{
    const currentDate=new Date();
    const newyearDate=new Date(newyear);
    const totalSeconds=(newyearDate-currentDate) / 1000;

    const countdays=Math.floor(totalSeconds / 3600 / 24);
    const counthours=Math.floor(totalSeconds / 3600) % 24;
    const countmins=Math.floor(totalSeconds / 60) % 60;
    const countsec=Math.floor(totalSeconds) % 60;


    days.innerHTML=formatTime(countdays);
    hours.innerHTML=formatTime(counthours);
    mins.innerHTML=formatTime(countmins);
    seconds.innerHTML=formatTime(countsec);

    
}

function formatTime(time)
{
    return time < 10 ? (`0${time}`) : time ;
}

count();

setInterval(count,1000);

