/* 뷰어설정 */
const modal = ``;

//뷰어 상단 바 버튼 동작 
function clickBackBtn() {
    window.history.back();
    if(localStorage.getItem("book")){
        localStorage.removeItem("book");
    }
}

//뷰어 본문창 클릭 시 뷰어 제목창+세팅창 토글
function toggleViewerNavBar() {
    document.querySelector("header").classList.toggle("hidden");
    document.querySelector("footer").classList.toggle("hidden");
}

//스크롤 위치 계산
function getScrollPercent() {
    return Math.floor(( 
        $(".viewer_wrapper").scrollTop() /
        ($(".viewer_wrapper").prop("scrollHeight") 
        - $(".viewer_wrapper").prop("clientHeight"))
    ) * 100);
}

//뷰어 하단 바 버튼 동작
function clickViewerSetting() {
    console.log("뷰어 설정");
}

//스크롤 퍼센트 계산
function changeScrollPercent() {
    if(getScrollPercent() >= 0){
        document.querySelector(".nowScroll").innerText = getScrollPercent();
    }else{
        document.querySelector(".nowScroll").innerText = 100;
    }
}

//이벤트 리스너 연결
if (document.querySelector(".goBackBtn")) {
    document.querySelector(".goBackBtn").addEventListener("click", clickBackBtn);
}
if (document.querySelector(".viewer_wrapper")) {
    document.querySelector(".viewer_wrapper").addEventListener("click", toggleViewerNavBar);
}
if (document.querySelector(".viewerSettingBtn")) {
    document.querySelector(".viewerSettingBtn").addEventListener("click", clickViewerSetting);
}

if (document.querySelector(".bookScroll")) {
    document.querySelector(".viewer_wrapper").addEventListener("scroll", changeScrollPercent);
}