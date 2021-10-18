$(document).ready(function(){
    //방문 확인
    const visitNumber = localStorage.getItem("visitNumber");
    
    if(visitNumber === null ){
        firstVisitIntro();
    }else{
        // console.log(localStorage.getItem("visitNumber"));
        multipleVisitIntro();
    }
});


//첫 방문
function firstVisitIntro(){
    //인트로 연출
    let sceneCount = 0;
    let textCount = 0;

    const textArray = [
        document.querySelector(".introBox").querySelectorAll(".s1"),
        document.querySelector(".introBox").querySelectorAll(".s2")
    ];
    const sceneTextLength = textArray.map((item)=>{
        return item.length;
    });
    const sceneMax = textArray.length;
    // console.log("sceneTextLength:",sceneTextLength);

    //화면에서 일괄 안보이게
    document.querySelectorAll(".introText").forEach((item)=>{
        item.classList.add("hidden");
    });

    //이벤트 트리거: 화면 클릭
    document.querySelector(".intro").addEventListener("click", ()=> {

        if(!document.querySelector(".descText").classList.contains("hidden")){
            document.querySelector(".descText").classList.add("hidden");
        }
        if(textCount === 0 && sceneCount<sceneMax){
            addIntroText(sceneCount);
        }
        if(sceneCount !== 1 && sceneCount<sceneMax){
            
            if(sceneTextLength[sceneCount] > textCount){
                fadeInText(textArray[sceneCount][textCount]);
                textCount ++; 
            }else if(sceneTextLength[sceneCount] <= textCount){
                fadeOutText(textArray[sceneCount]);
                textCount = 0;
                sceneCount ++;
            }
        }else if(sceneCount === 1){
        
            //특수효과용
            if(sceneTextLength[sceneCount]-1 === textCount){
                const outText = document.querySelectorAll(".showWordinBox");
                animeOutText(outText);
                disableClick();
                setTimeout(function(){
                    //애니메이션 끝난 후 작동
                    showText(textArray[sceneCount][textCount]);
                    // console.log(textCount);
                    textCount = 0;
                    sceneCount ++;
                    ableClick();
                }, 5000);
            }else if(sceneTextLength[sceneCount] <= textCount){
                fadeOutText(textArray[sceneCount]);
                textCount = 0;
                sceneCount ++;
            }else{
                //다음 텍스트 보이기
                showText(textArray[sceneCount][textCount]);
                textCount ++; 
            }

        }else if(sceneCount>=sceneMax){
            fadeOutText(document.querySelectorAll(".popupEmp"));
            document.querySelector(".intro").classList.add("blinkIn");
            setTimeout(function(){
                document.querySelector(".intro").classList.remove("blinkIn");
                document.querySelector(".intro").classList.add("blinkOut");
                document.querySelector(".IntroSection").classList.add("hidden");
                document.querySelector(".entranceSection").classList.remove("hidden");
                
                setTimeout(function(){
                    document.querySelector(".intro").classList.add("blinkIn");
                    fadeOutText(document.querySelectorAll(".entranceText"));
                    
                    setTimeout(function(){
                        gotoLobby();
                    }, 1000)
                }, 5000)
                
            }, 1000);          
        }
    });  


    //다음 텍스트들 배치
    function addIntroText(sceneNum){
        textArray[sceneNum].forEach((item)=>{
            item.classList.remove("hidden");
        });

        if(sceneNum>0){
            textArray[sceneNum-1].forEach((item)=>{
                item.classList.add("hidden");
            });
        }
    }
}
    //텍스트 보여주기
    function fadeInText(textItem){
        //1: 페이드인
        textItem.classList.add("fadeinBox");
    }
    function showText(textItem){
        //2: 한글자씩 등장 
        disableClick();

        let typingBool = false;
        let typingIndex = 0;
        let typingContinue;
        const typingText = textItem.innerText.split(""); 

        textItem.innerText = "";
        textItem.classList.add("showWordinBox");

        if(!typingBool){
            typingBool = true;
            typingContinue = setInterval(typing, 75);
        }

        function typing(){
            if(typingIndex < typingText.length){
                textItem.append(typingText[typingIndex]);
                typingIndex++;
            }else{
                clearInterval(typingContinue);
                ableClick();
            }
        }
    }
    //일괄 페이드아웃
    function fadeOutText(array){
        array.forEach((item)=>{
                item.classList.remove("fadeinBox");
                item.classList.add("fadeoutBox");
            }
        )
    }

    //글자 흩어짐
    function animeOutText(animeText){

        animeText.forEach((t) => {
            t.innerHTML = t.textContent.replace(/\S/g,"<span>$&</span>");
        });
    
        const animation = anime.timeline({
            targets : '.showWordinBox span',
            easeing : 'easeInOutExpo',
            loop : false,
        });
    
        animation
        .add({
            rotate : function(){
                return anime.random(-360, 360)
            },
            translateX : function(){
                return anime.random(-550, 550)
            },
            translateY : function(){
                return anime.random(-500, 500)
            },
            duration : 5000,
            delay: anime.stagger(20),
        })

    }

    //클릭이벤트 비활성화
    function disableClick(){
        document.querySelector(".intro").classList.add("noclick");
    }
    //클릭이벤트 활성화
    function ableClick(){
        document.querySelector(".intro").classList.remove("noclick");
    }
    //로비로 이동
    function gotoLobby(){
        // localStorage.setItem("fadeOut", true);

        if(localStorage.getItem("visitNumber")){
            localStorage.setItem("visitNumber", parseInt(localStorage.getItem("visitNumber"))+1);
        }else{
            localStorage.setItem("visitNumber",1);   
        }

        location.href = "dist/library/lobby.html";
    }

// ==============================================================

//다회 방문
function multipleVisitIntro(){
    //텍스트 연출 후 로비로
    document.querySelector(".IntroSection").classList.add("hidden");

    document.querySelector(".entranceSection").classList.add("multi");
    document.querySelector(".entranceSection").classList.remove("hidden");
    document.querySelectorAll(".entranceText")[0].innerText = "어서 오세요.";
    document.querySelectorAll(".entranceText")[1].innerText = "비블리오테카 바가텔에 다시 오신 것을 환영합니다.";

    fadeInText(document.querySelectorAll(".entranceText")[0]);
    fadeInText(document.querySelectorAll(".entranceText")[1]);

    setTimeout(function(){
        document.querySelector(".intro").classList.add("blinkIn");
        fadeOutText(document.querySelectorAll(".entranceText"));
        
        setTimeout(function(){
            gotoLobby();
        }, 1000)
    }, 1500);
}




