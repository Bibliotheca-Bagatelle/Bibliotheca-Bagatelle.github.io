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
        id:"H813_1409",
        title:"완결내지 못한 죄로 목숨을 위협받고 있습니다.",
        writer:"화자",
        cover: "../img/mpc_narrator.jpg",
        link:"https://url.kr/oa9cpg",
    },
    {
        id:"E813_0210",
        title:"한낮의 종",
        writer:"나챠",
        cover: "../img/E813_0210.jpg",
        link:"https://docs.google.com/document/d/1KrHH6GNAL9MS39WyMyojl5OwztyRnj8Q/edit?usp=sharing&ouid=100881038145566589867&rtpof=true&sd=true",
    },
    {
        id:"E813_030407",
        title:"백 한 번의 웨딩마치",
        writer:"달리샤 카라바예프",
        cover: "../img/E813_030407.jpg",
        link:"https://docs.google.com/document/d/1v0_rNtjkHt2nvFFP6-25oTdqgQfVjsE7OBD-vTmJJyg/edit?usp=sharing",
    },
    {
        id:"P813_040804",
        title:"먼치킨 영애의 첫사랑 관찰일기",
        writer:"라일락",
        cover: "../img/P813_040804.jpg",
        link:"https://docs.google.com/document/d/1hwPLhsMLsVhWPxOINHNNu7fDuTyM-xrWJk0a6_NyQWg/edit?usp=sharing",
    },
    {
        id:"S813_44864811",
        title:"안드로이드 피그말리온",
        writer:"레리아 블레이크",
        cover: "../img/S813_44864811.jpg",
        link:"https://docs.google.com/document/d/1HRY60nA2dkPRakfmrS3duTqXsO22KixFHT-FNoWy2_A/edit?usp=sharing",
    },
    {
        id:"E813_0508",
        title:"■■시켜주세요!",
        writer:"무요",
        cover: "../img/E813_0508.jpg",
        link:"https://docs.google.com/document/d/1ixn8Bp8LRTxv_VNHEMih5xxzN3XdDRjEUxjm3LKGioQ/edit?usp=sharing",
    },
    {
        id:"E813_52812",
        title:"이 전쟁, 제가 끝내도록 하겠습니다",
        writer:"미니어핀",
        cover: "../img/E813_52812.jpg",
        link:"https://docs.google.com/document/d/1jhE4XKXczPiGGTLdXZ7mpVdB0db_QB2c6-4Z7FSqlLo/edit?usp=sharing",
    },
    {
        id:"E813_6146",
        title:"오벨라흐의 만물",
        writer:"빨간 리본",
        cover: "../img/E813_6146.jpg",
        link:"https://docs.google.com/document/d/1eHAkkpprJtxud7pzSH1odPEqOXBzd8JV0DfqQ38myn8/edit?usp=sharing",
    },
    {
        id:"H813_0702",
        title:"손님이 ■이라는 가게 방침에 따라, ■■ 사칭죄로 잡혀온 손님입니다.",
        writer:"손님",
        cover: "../img/H813_0702.jpg",
        link:"https://docs.google.com/document/d/1_qHRQA8kfqiNgHQ2x-roj9Abnl4FFLNVag7yw8EihcE/edit?usp=sharing",
    },
    {
        id:"H813_88217",
        title:"『탐정학교 패닉 로맨스!』 시리즈",
        writer:"아오나기사 아바키",
        cover: "../img/H813_88217.jpg",
        link:"https://docs.google.com/document/d/1jKEoQVcIIUIRxJrzMmVSRKIgiTqk8C56Bri-cs2-ly4/edit?usp=sharing",
    },
    {
        id:"E813_0812",
        title:"환상절계 참천성곡 ~비애의 마법사와 ■의 아이~",
        writer:"알파",
        cover: "../img/E813_0812.jpg",
        link:"https://docs.google.com/document/d/18jWEqpYo8vlIDl2CF_i4sd_ziJ_UGS5K5CK4ZP7PxXw/edit?usp=sharing",
    },
    {
        id:"E813_0804",
        title:"여행길",
        writer:"우리",
        cover: "../img/E813_0804.jpg",
        link:"https://docs.google.com/document/d/1jWkVLWhXY36wVGoR_e_hb79kJDkI3uuX-r0-CROqKog/edit?usp=sharing",
    },
    {
        id:"P813_881444",
        title:"검은 서약",
        writer:"에인헤랴르",
        cover: "../img/P813_881444.jpg",
        link:"https://docs.google.com/document/d/1uEY_8S5SGaropKubCL0Rd8FDsoo6qP-e3tnITg_PSUE/edit?usp=sharing",
    },
    {
        id:"E813_8487",
        title:"이세계 수사 보고서",
        writer:"일레이션",
        cover: "../img/E813_8487.jpg",
        link:"https://docs.google.com/document/d/1TDVDuhQROAsQ5GmK96-E85VA26h-YQfyFiTDYByWhiY/edit?usp=sharing",
    },
    {
        id:"E813_1145137",
        title:"마른 클레마티스 덩굴에서 피는 꽃",
        writer:"클레마티스",
        cover: "../img/E813_1145137.jpg",
        link:"https://docs.google.com/document/d/16wG0JWCZ_Abg0t15a1UBXDkpCi9-huRLbiXX51W7-a8/edit?usp=sharing",
    },
    {
        id:"E813_1212",
        title:"눈 덮인 침엽수 아래",
        writer:"페페",
        cover: "../img/E813_1212.jpg",
        link:"https://docs.google.com/document/d/1YPoxpOVPTztWDtgiaG_o4JWUs93jyw4j52JBar6WaeI/edit?usp=sharing",
    },
    {
        id:"H813_14823",
        title:"■러브 컴플릭트!■: 하얀 늑대와 칠흑의 왕자님",
        writer:"하얀 늑대",
        cover: "../img/H813_14823.jpg",
        link:"https://docs.google.com/document/d/11OD02vVJnarxiLliFov6_QOVPs8gJrOX5nNYMaIk4ak/edit?usp=sharing",
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

