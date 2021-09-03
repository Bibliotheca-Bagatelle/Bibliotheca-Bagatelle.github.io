//-------책장 창
function makeIntroPage() {

}
//json으로 데이터 받아와서 넣기...
function gotoViewer(book) {
    let bookName = book.innerText;
    console.log(bookName);
    location.href = "viewer.html";
}

if (document.querySelectorAll(".book")) {
    document.querySelectorAll(".book").forEach((book) => {
        book.addEventListener("click", function () {
            gotoViewer(book);
        });
    });
}


//-------뷰어 창
function clickBackBtn() {
    window.history.back();
}
function clickViewerAction() {

}
//뷰어 본문창 클릭 시 뷰어 제목창+세팅창 토글
function toggleViewerSetting() {

}
function changePageColor() {

}

if (document.querySelector(".goBackBtn")) {
    document.querySelector(".goBackBtn").addEventListener("click", clickBackBtn);
}
//구글 api 연동해서 받아오기 되나...