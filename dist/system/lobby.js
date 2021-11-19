$(document).ready(function(){
    showSchedule();

    document.querySelector(".readyText").addEventListener("click", function(){
        window.open("https://docs.google.com/document/d/1R9ZqH_DnaRyLOUxT31aHsbQ1FERLWvyKODoFnRgBlQc/edit");
    });
});

//일정표
function showSchedule(){
    let today = new Date();
    let nowScheduleNum = 0;

    //배열에 저장
    let scheduleArray = Array.prototype.slice.call(document.querySelector(".scheduleTable")
        .querySelectorAll("tr")).map((item)=>{
        return (item.dataset.time);
    });
    const lastScheduleNum = scheduleArray.length-1;


    //날짜로 변환
    scheduleArray.forEach((item, index)=>{
        const itemArray = item.split("/");
        item = new Date(itemArray[0], itemArray[1]-1, itemArray[2], itemArray[3]);

        if(item <= today){
            nowScheduleNum = index;
        }

        return item;
    });

    changeScheduleElemnt(nowScheduleNum);

}



function changeScheduleElemnt(scheduleNum){
    //움직이는 문구
    const marquee = document.querySelector("marquee");
    //일정표
    const scheduleTable = document.querySelector(".scheduleTable");
    
    //현재 시간 관련
    const today = new Date();
    const whichday = today.getDay(); 

    //일정표 강조
    scheduleTable.querySelectorAll("tr")[scheduleNum].classList.add("bold");

    //움직이는 문구 변경
    if(scheduleNum <= 1){
        //신간 준비: 0~1
        marquee.innerText = ("비블리오테카 바가텔에 어서오세요. 현재 신간 준비중입니다.");

    }else if(scheduleNum === 2){
        //신규작품 공개: 2
        marquee.innerText = ("비블리오테카 바가텔에 어서오세요. 현재 신간 비치중입니다.");

    }else if(scheduleNum === 3){
        //공개 종료: 3
        const dueDate = new Date(2021, 10-1, 25, 00);
        const dDay = Math.floor((dueDate - today)/1000/60/60/24);
        const dHour = Math.floor((dueDate - today)/1000/60/60%24);

        if(dDay > 0){
            marquee.innerText = (`비블리오테카 바가텔에 어서오세요. 도서 대출 신청까지 ${dDay}일 ${dHour}시간 남았습니다.`);
        }else if(dHour > 0){
            marquee.innerText = (`비블리오테카 바가텔에 어서오세요. 도서 대출 신청까지 ${dHour}시간 남았습니다.`);
        }else{
            marquee.innerText = (`비블리오테카 바가텔에 어서오세요. 도서 대출 신청이 곧 시작될 예정입니다.`);
        }

    }else if(scheduleNum === 4){
        //대출신청 시작: 4
        const dueDate = new Date(2021, 11-1, 01, 24);
        const dDay = Math.floor((dueDate - today)/1000/60/60/24);
        const dHour = Math.floor((dueDate - today)/1000/60/60%24);

        if(dDay > 0){
            marquee.innerText = (`비블리오테카 바가텔에 어서오세요. 현재 도서 대출 신청 기간입니다. 신청 마감까지 ${dDay}일 ${dHour}시간 남았습니다.`);
        }else if(dHour > 3){
            marquee.innerText = (`비블리오테카 바가텔에 어서오세요. 현재 도서 대출 신청 기간입니다. 신청 마감까지 ${dHour-3}시간 남았습니다.`);
        }else if(dHour == 3){
            marquee.innerText = (`비블리오테카 바가텔에 어서오세요. 현재 도서 대출 신청 기간입니다. 곧 연장 접수가 시작됩니다.`);
        }else if(dHour > 0){
            marquee.innerText = (`비블리오테카 바가텔에 어서오세요. 현재 도서 대출 신청 기간입니다. 연장 신청 마감까지 ${dHour}시간 남았습니다.`);
        }else{
            marquee.innerText = (`비블리오테카 바가텔에 어서오세요. 도서 대출 신청이 곧 마감될 예정입니다.`);
        }
        
    }else if(scheduleNum === 5){
        //대출신청 종료 : 5
        marquee.innerText = ("비블리오테카 바가텔에 어서오세요. 현재 대출 도서를 선정하고 있습니다.");

    }else if(scheduleNum === 6){
        //합격발표 이후 : 6
        marquee.innerText = ("비블리오테카 바가텔에 어서오세요. 현재 개관 준비중입니다.");

    }else if(scheduleNum === 7){
        //개관 : 7
        marquee.innerText = ("비블리오테카 바가텔에 어서오세요. 모든 책들이 당신을 환영합니다.");
        
        //휴관일: 화, 토
        if(whichday === 2 || whichday === 6){
            marquee.innerText = ("오늘은 도서관 휴관일입니다.");
        }

    }else if(scheduleNum >= 8){
        //엔딩 : 8
        //에필로그 보완기간 : 9
        //종료 : 10
        marquee.innerText = ("서버 점검이 종료되었습니다. 비블리오테카 바가텔의 여정에 함께해주신 모든 분들께 감사드립니다.");
    };
}




