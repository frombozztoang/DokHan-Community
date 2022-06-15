const boardTableBody = document.querySelector("#board-body");

const contentsContainer = document.querySelector(".contents__container");

const editorForm = document.querySelector("#editor-form"); // wirte.html의 form
const titleInput = document.querySelector("#editor-title-input"); // wirte.html의 제목 적는 텍스트 칸
const contentInput = document.querySelector("#editor-content-input"); // wirte.html의 내용 적는 텍스트 칸

const BOARDLIST_LS = "boardLists"; // 글 목록 보여줄 리스트??
const boardListsObj = []; // ?
let nums = 0; // 글 목록에 표시할 게시글 번호
let author =  window.localStorage.getItem('current_user'); // 글 목록에 표시할 작성자 이름
let date = new Date(); // 글 목록에 표시할 날짜
let views = Math.floor(Math.random() * 99) + 1; // 글 목록에 표시할 조회 수


window.onload = function(){
	if(contentsContainer != null){
		showContents();
	}
}
// list.html에서 제목클릭시 수행하는 새로운 함수
function onTitleClick(e){
	const index = e.target.parentNode.id.replace(/[a-z|-]/gi, "");
	window.localStorage.setItem('list_index', index);
	location.href = "board.html";
}


function showContents() {// 글 목록에서 제목 클릭시
	/* Error 3 = Uncaught TypeError TypeError: Cannot set properties of null (setting 'textContent')
		: contentsContainer 변수가 게시글상세보기화면.html에서 값을 못가져옴. 즉, contentsContainer = null인 상태여서 오류
		: 못가져오는 이유 = 제목 클릭시 onTitleclick함수(지금은 showContents함수로 이름 변경)는 list.html에서 실행되기 때문에
		: contentsContainer 변수가 게시글상세보기화면.html에 접근을 할 수가 없음.
		-> 함수를 새로 만들어 제목클릭시 localstorage에 선택된 리스트를 저장하고 게시글상세보기화면.html으로 이동
		-> 그리고 게시글상세보기화면.html이 onload시 해당 showContents함수를 실행하여 내용을 뿌려서 해결
	*/
  contentsContainer.textContent = "";
  const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
  const index = window.localStorage.getItem('list_index')*1;

  const contentsTitles = document.createElement("div");
  contentsTitles.classList.add("contents__titles");

  const contentsColumnFirst = document.createElement("div");
  contentsColumnFirst.classList.add("contents__column");

  const contentsTitle = document.createElement("div");
  contentsTitle.classList.add("contents__title");
  contentsTitle.textContent = lists[index].title;

  // contents__titles > column >author, date, views
  const contentsColumnSecond = document.createElement("div");
  contentsColumnSecond.classList.add("contents__column");

  const contentsAuthor = document.createElement("div");
  contentsAuthor.classList.add("contents__author");
  contentsAuthor.textContent = lists[index].author;

  const contentsDate = document.createElement("div");
  contentsDate.classList.add("contents__date");
  contentsDate.textContent = lists[index].date;

  const contentsViews = document.createElement("div");
  contentsViews.classList.add("contents__views");
  contentsViews.textContent = lists[index].views;

  const contentsContent = document.createElement("div");
  contentsContent.classList.add("contents__content");
  contentsContent.textContent = lists[index].content;

  contentsColumnFirst.appendChild(contentsTitle);

  contentsColumnSecond.appendChild(contentsAuthor);
  contentsColumnSecond.appendChild(contentsDate);
  // contentsColumnSecond.appendChild(contentsViews);

  contentsTitles.appendChild(contentsColumnFirst);
  contentsTitles.appendChild(contentsColumnSecond);

  contentsContainer.appendChild(contentsTitles);
  contentsContainer.appendChild(contentsContent);

  makeComment(index)
}

function assignIndex() {
  // ?
  const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
  if (!lists) {
    nums = 0;
  } else {
    nums = parseInt(lists[lists.length - 1].num) + 1;
  }
}

function onEditorFormSubmit() { // 글 작성완료

  const title = titleInput.value;
  const content = contentInput.value;

  const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));

  if (!lists) {
    const objArr = [];
    objArr.push({
      num: `${nums++}`,
      title: `${title}`,
      author: `${author}`,
      date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.`,
      // views: `${views++}`,
      content: `${content}`,
    });

    localStorage.setItem(BOARDLIST_LS, JSON.stringify(objArr));
  } else {
    lists.push({
      num: `${nums++}`,
      title: `${title}`,
      author: `${author}`,
      date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.`,
      // views: `${views++}`,
      content: `${content}`,
    });

    localStorage.setItem(BOARDLIST_LS, JSON.stringify(lists));
  }

  titleInput.value = "";
  contentInput.value = "";
  titleInput.focus();
  return true;
}

function showBoardLists() {// 글 목록 5개 보여주기
  const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
  if (lists != null) {
	/* Error 2 = Uncaught TypeError TypeError: Cannot read properties of null (reading 'forEach')
	 	: 게시물이 아무것도 없을 때는 lists가 null이 되어 에러
		-> if문 추가로 lists가 null이 아닐 경우에만 수행하는 것으로 해결
	*/
    lists.forEach((list, index) => {
      if (index < 8) {
        const tr = document.createElement("tr");
        tr.classList.add("board__content");

        const tdNum = document.createElement("td");
        // tdNum.classList.add("board__content-column");
        // tdNum.textContent = list.num;

        const aTitle = document.createElement("a");
        aTitle.href = "#";
        aTitle.id = `link-to-content${index}`;
        const tdTitle = document.createElement("td");
        tdTitle.classList.add("board__content-column");
        tdTitle.textContent = list.title;

        aTitle.appendChild(tdTitle);



        const tdContent = document.createElement("td");
        tdContent.classList.add("board__content-column");
        tdContent.textContent = list.content;

        const tdDate = document.createElement("td");
        tdDate.classList.add("board__content-column");
        tdDate.textContent = list.date;

        const tdAuthor = document.createElement("td");
        tdAuthor.classList.add("board__content-column");
        tdAuthor.textContent = list.author;



        // const tdViews = document.createElement("td");
        // tdViews.classList.add("board__content-column");
        // tdViews.textContent = list.views;


        tr.appendChild(aTitle);

        tr.appendChild(tdContent);
        tr.appendChild(tdDate);
        tr.appendChild(tdAuthor);




        boardTableBody.appendChild(tr);
        const linkToContent = document.querySelector(
          `#link-to-content${index}`
        );
        linkToContent.addEventListener("click", onTitleClick);
      } else if (index === 8) {
        const boardIndexMax = Math.ceil(lists.length / 8);
        for (let i = 0; i < boardIndexMax; i++) {
          const indexContainer = document.querySelector("#index-container");
          const aIndex = document.createElement("a");
          aIndex.classList.add("board__index-link");

          const spanIndexText = document.createElement("span");
          spanIndexText.classList.add("board__index");
          spanIndexText.textContent = i + 1;

          aIndex.appendChild(spanIndexText);
          indexContainer.appendChild(aIndex);

          aIndex.addEventListener("click", () => {
            showBoardListsNewPage(i);
          });
        }
      }

    });


  }
}

function showBoardListsNewPage(pageIndex) {
  // 글 목록 다음페이지 5개 보여주기
  boardTableBody.textContent = "";
  const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
  const limitPage = pageIndex * 8;

  lists.forEach((list, index) => {
    if (index >= limitPage && index < limitPage + 8) {
      const tr = document.createElement("tr");
      tr.classList.add("board__content");



      const aTitle = document.createElement("a");
      aTitle.href = "#";
      aTitle.id = `link-to-content${index}`;

      const tdTitle = document.createElement("td");
      tdTitle.classList.add("board__content-column");
      tdTitle.textContent = list.title;

      aTitle.appendChild(tdTitle);

      const tdAuthor = document.createElement("td");
      tdAuthor.classList.add("board__content-column");
      tdAuthor.textContent = list.author;

      const tdDate = document.createElement("td");
      tdDate.classList.add("board__content-column");
      tdDate.textContent = list.date;




      tr.appendChild(aTitle);
      tr.appendChild(tdAuthor);
      tr.appendChild(tdDate);



      boardTableBody.appendChild(tr);
      const linkToContent = document.querySelector(`#link-to-content${index}`);
      linkToContent.addEventListener("click", onTitleClick);
    }
  });
}
/* Error 1 = write.html -> list.html 연결오류
	editorForm.addEventListener('submit', onEditorFormSubmit);
	: write.html외의 다른 html을 실행시 editorForm이 없으니 에러
	-> 위의 코드처럼 js에서 이벤트리스너 추가 대신 write.html에서 onsubmit으로 함수호출하여 해결
*/
if (boardTableBody) {
  assignIndex();
  showBoardLists();
}




function tagsClick() {
  const tag = document.querySelector('.editor__container-tag');


  if (tag.style.backgroundColor == 'rgba(0, 0, 0, 0.25)') {
    tag.style.backgroundColor = '#DE3639';
    tag.style.color = 'white';


  } else {
    tag.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    tag.style.color = 'black';
  }


}

function tagsClick2() {
  const tag2 = document.querySelector('.editor__container-tag2');



  if (tag2.style.backgroundColor == 'rgba(0, 0, 0, 0.25)') {
    tag2.style.backgroundColor = '#DE3639';
    tag2.style.color = 'white';


  } else {
    tag2.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    tag2.style.color = 'black';
  }


  }


function tagsClick3() {

  const tag3 = document.querySelector('.editor__container-tag3');

  if (tag3.style.backgroundColor == 'rgba(0, 0, 0, 0.25)') {
    tag3.style.backgroundColor = '#DE3639';
    tag3.style.color = 'white';


  } else {
    tag3.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    tag3.style.color = 'black';
  }


}

function plusClick(){
  const gotoEditor = document.querySelector('.plus-bar__contents');

  if(gotoEditor.style.display == 'none'){
    gotoEditor.style.display = 'block';

  } else {
    gotoEditor.style.display = 'none';
  }

}






function generateTime(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const wDate = date.getDate();

  const time = year+'-'+(month+1)+'-'+wDate;
  return time;

}

//유저이름 발생기
//유저이름은 8글자로 제한.  //유저 이름 넣기 위하 임시.. 로컬 스토리지 이용하면 삭제하기
function generateUserName(){
let name = window.localStorage.getItem("current_user")
return name;
}

//댓글 삭제
function deleteComments(event){
if(confirm("댓글을 정말 삭제하시겠습니까?")) {
const bt3n = event.target;
  const list = bt3n.parentNode.parentNode;//commentList
  comments.removeChild(list);
  const cleanComment = Comments.filter(function(index) {
    return index.id !== parseInt(list.id);
  })
  Comments = cleanComment
  localStorage.setItem(tArray[index], JSON.stringify(Comments));

  //메인댓글 카운트 줄이기.
  if(mainCommentCount.innerHTML <='0'){
      mainCommentCount.innerHTML = 0;
  }else{
      mainCommentCount.innerHTML--;
  }
  alert("댓글이 정상적으로 삭제되었습니다.");
}
}

const inputBar = document.querySelector("#comment-input");
const comments = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count'); //맨위 댓글 숫자 세는거.
var input = document.querySelector("#comment-input");


const tArray = ["comment", "comment2", "comment3", "comment4", "comment5", "comment6", "comment7"]
//alert(JSON.stringify(tArray[1]))
//화면 전환 시 댓글 유지
function makeComment(pIndex) {
const loadedComment = localStorage.getItem(tArray[pIndex])
if(loadedComment !== null) {
const parsedComment = JSON.parse(loadedComment)
parsedComment.forEach(function(index) {
  showComment(index.comment, index.name, pIndex)
  mainCommentCount.innerHTML = Comments.length
})
}
}



//댓글보여주기

//alert(JSON.stringify(tArray[0]))
let Comments = []
function showComment(comment, currentUser, pIndex){

  const userName = document.createElement('div');
  const inputValue = document.createElement('span');
  const showTime = document.createElement('div');
  const voteDiv = document.createElement('div');
  const countSpan = document.createElement('span')
  const newId = Comments.length + 1

  const commentList = document.createElement('div');  //이놈이 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴.
  //삭제버튼 만들기



  commentList.className = "eachComment";
  userName.className="name";
  showTime.className="time";
  inputValue.className="inputValue";

  voteDiv.className="voteDiv";


  //유저네임가져오기 어떻게 고정할까?
  var saveName = currentUser;
   userName.innerHTML = saveName;

   if(generateUserName() == saveName) {
     const delBtn = document.createElement('button');
     delBtn.className ="deleteComment";
     delBtn.innerHTML="삭제";
     delBtn.addEventListener('click', deleteComments)
     userName.appendChild(delBtn);
   }

  //입력값 넘기기
  inputValue.innerText = comment;
  //타임스템프찍기
  var saveTime = generateTime();
  showTime.innerHTML = saveTime;
  countSpan.innerHTML=0;
  //댓글뿌려주기
  commentList.appendChild(userName);
  commentList.appendChild(showTime);
  commentList.appendChild(inputValue);

  commentList.appendChild(voteDiv);
  commentList.id = newId

  comments.prepend(commentList);
  const commentObj = {
    name : saveName,
    comment : comment,
    time : saveTime,
    id : newId
  }
  Comments.push(commentObj);
  window.localStorage.setItem(tArray[pIndex], JSON.stringify(Comments));
}

const index = window.localStorage.getItem('list_index')*1;
//버튼만들기+입력값 전달
function pressBtn(){

 const currentVal = inputBar.value;
 let currentUser = window.localStorage.getItem("current_user")

 if(!currentVal.length) {
  alert("댓글을 입력해주세요.");
} else  {
    showComment(currentVal, currentUser, index);
    mainCommentCount.innerHTML++;
    inputBar.value ='';
}
}

// //엔터로 댓글 입력
// inputBar.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     btn.click();
//   }
// });

