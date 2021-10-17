$(document).ready(function(){
    fadeOutScreen();
    // showSchedule();
});

//입장 시 페이드아웃 효과
function fadeOutScreen(){
    if(localStorage.getItem("fadeOut")){
        localStorage.setItem("fadeOut", false);
    }
}

//일정표
function showSchedule(){
    let today = new Date();
    let day = today.getDay();
    let scheduleArray = Array.prototype.slice.call(document.querySelector(".scheduleTable")
        .querySelectorAll("tr")).map((item)=>{
        return (item.dataset.time);
    });
    const lastScheduleNum = scheduleArray.length-1;
    let nowScheduleNum = 0;
        
    const timeArray = [
        today.getFullYear(), today.getMonth()+1, today.getDate(), today.getHours()
    ];

    scheduleArray.forEach((item, index)=>{
        item.split("/");
        new Date(item)
        if(item >= today){
            nowScheduleNum = index;
        }
    });

    console.log("schedule:", scheduleArray);
    console.log("time:", timeArray);
    console.log(scheduleArray[nowScheduleNum]);
}


