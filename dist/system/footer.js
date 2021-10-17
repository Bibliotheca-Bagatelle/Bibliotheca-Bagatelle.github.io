/* 하단 바 동작 */
function clickLogo(){
    window.open("https://twitter.com/biblio_webiba");
}
function clickLobbyBtn(){
    location.href= "lobby.html";
}
function clickbookShelfBtn(){
    location.href= "bookshelf.html";
}
function clickBookRequestBtn() {
    window.open("https://docs.google.com/document/d/1HHGryuqd1zoyA2Th5SPAG35Wv3MBLmTONIOQIS6x_Jw/edit?usp=sharing");
}
function clickAskLibraryBtn() {
    window.open("https://twitter.com/messages/compose?recipient_id=1433503860891389968");
}

//이벤트 리스너 연결
if (document.querySelector(".lobbyBtn")) {
    document.querySelector(".lobbyBtn").addEventListener("click", clickLobbyBtn);
}
if (document.querySelector(".bookShelfBtn")) {
    document.querySelector(".bookShelfBtn").addEventListener("click", clickbookShelfBtn);
}
if (document.querySelector(".bookRequestBtn")) {
    document.querySelector(".bookRequestBtn").addEventListener("click", clickBookRequestBtn);
}
if (document.querySelector(".askLibraryBtn")) {
    document.querySelector(".askLibraryBtn").addEventListener("click", clickAskLibraryBtn);
}