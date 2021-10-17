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
];
const loanBooks = [];

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
            <li class="book" data-title="${item.title}">
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
            gotoViewer(book);
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

