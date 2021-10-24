const publicBooks = [
    {
        id:"notice",
        title:"공지사항",
        writer:"작가",
        cover: "../img/book_notice.jpg",
    },
    {
        id:"world",
        title:"세계관: 웹소설 범람 사건!",
        writer:"작가",
        cover: "../img/book_world.jpg",
    },
    {
        id:"system",
        title:"시스템",
        writer:"작가",
        cover: "../img/book_system.jpg",
    },
    
    {
        id:"serverAdmin",
        title:"서버관리자",
        writer:"서버관리자",
        cover: "../img/mpc_serverAdmin.jpg",
        link:"https://url.kr/y9iht3",
    },
    {
        id:"platform",
        title:"플랫폼",
        writer:"편집 시스템",
        cover: "../img/mpc_platform.jpg",
        link:"https://url.kr/mkouce",
    },
    {
        id:"surffer",
        title:"도서검색대 서퍼: 제품 사용 설명서",
        writer:"도서검색대 서퍼",
        cover: "../img/mpc_bookSearchDevice.jpg",
        link:"https://url.kr/mps7wt",
    },
    {
        id:"writer",
        title:"[소장]작가",
        writer:"작가",
        cover: "../img/npc_writer_and_librarian.jpg",
        link:"https://url.kr/ldea49",
    },
    {
        id:"librarian",
        title:"[소장]사서",
        writer:"사서",
        cover: "../img/npc_writer_and_librarian.jpg",
        link:"https://url.kr/kuzmyh",
    },
    
];
const loanBooks = [
    {
        id:"narrator",
        title:"완결내지 못한 죄로 목숨을 위협받고 있습니다.",
        writer:"화자",
        cover: "../img/mpc_narrator.jpg",
        link:"https://url.kr/oa9cpg",
    },
];

getBooks(publicBooks);

//탭박스 서가 이동
function tapBookshelf(){
    if(this.classList.contains("publicBooks")){
        getBooks(publicBooks);
        
    }else if(this.classList.contains("loanBooks")){
        getBooks(loanBooks);
    }
} 

function getBooks(bookArray){
    const bookshelf = document.querySelector(".bookshelf");
    let listItem = "";

    if(bookArray.length > 0){
        bookArray.forEach((item)=>{
            listItem += 
            `
            <li class="book" data-title="${item.title}" data-link="${item.link}">
                  <div>
                    <img
                      class="book_cover"
                      src="${item.cover}"
                    />
                  </div>
                  <div class="bookInfoBox">
                    <p class="book_title">${item.title}</p>
                    <p class="book_writer">${item.writer}</p>
                  </div>
                </li>
            `;
    
        });
    }else{
        listItem = `
        <p class="emptyText">현재 서가가 비어있습니다.</p>
        `
    }
    
    bookshelf.innerHTML = listItem;
    
    document.querySelectorAll(".book").forEach((book) => {
        book.addEventListener("click", function () {
            if(book.dataset.link === "undefined"){
                gotoViewer(book);
            }else{
                window.open(book.dataset.link);
            }
        });
    });
}

//서재=>뷰어 이동 
function gotoViewer(book) {
    const bookName = book.dataset.title;
    localStorage.setItem("book", bookName);
    console.log(bookName);
    location.href = "viewer.html";
}

//이벤트 리스너
if(document.querySelector(".bookshelf_tap")){
    document.querySelector(".publicBooks").addEventListener("click", tapBookshelf);
    document.querySelector(".loanBooks").addEventListener("click", tapBookshelf);
}

