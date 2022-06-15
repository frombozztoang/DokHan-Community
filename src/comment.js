
const resultElement = document.querySelector('#result');


const numString = "";
function newPageS()  {
  window.location.href = 'board.html';

}

function newPageM()  {
  window.location.href = "board.html";
}

window.onload = function() {
  getData();
}

function getData() {
  if(window.localStorage.getItem("like") == null) {
    window.localStorage.setItem("like", 0);
  }
  const rNum = window.localStorage.getItem("like")*1;
  resultElement.innerHTML = rNum;
  makeComment();
}


//좋아요 수 세기, 수정 필요할듯..?
var click = false
function count()  {

  let number = resultElement.innerText;
  if(click === false) {
    // const currentUsera = {
    //   name : "sangs",
    //   post : 0,
    //   like : 1
    // }
    // window.localStorage.setItem("current_user", JSON.stringify(currentUsera))
    number = number*1 + 1;
    click = true
    const html
    = '<div style="color:red"> ❤ </div>';
    btnElement.innerHTML = html;
  }
 else if(click === true) {
   // currentUser = no
    number = number*1 - 1;
    click = false;
    const html
  = '<div style="color:gray"> ❤ </div>';
  btnElement.innerHTML = html;
  }
  resultElement.innerHTML = number;
  window.localStorage.setItem("like", number);
}

//타임스템프 만들기
// function generateTime(){
//     const date = new Date();
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const wDate = date.getDate();

//     const time = year+'-'+(month+1)+'-'+wDate;
//     return time;

// }

// //유저이름 발생기
// //유저이름은 8글자로 제한.  //유저 이름 넣기 위하 임시.. 로컬 스토리지 이용하면 삭제하기
// function generateUserName(){
// let name = window.localStorage.getItem("current_user")
// return name;
// }

// //댓글 삭제
// function deleteComments(event){
//   if(confirm("댓글을 정말 삭제하시겠습니까?")) {
//   const bt3n = event.target;
//     const list = bt3n.parentNode.parentNode;//commentList
//     comments.removeChild(list);
//     const cleanComment = Comments.filter(function(index) {
//       return index.id !== parseInt(list.id);
//     })
//     Comments = cleanComment
//     localStorage.setItem("comment2", JSON.stringify(Comments));

//     //메인댓글 카운트 줄이기.
//     if(mainCommentCount.innerHTML <='0'){
//         mainCommentCount.innerHTML = 0;
//     }else{
//         mainCommentCount.innerHTML--;
//     }
//     alert("댓글이 정상적으로 삭제되었습니다.");
//   }
// }

// const inputBar = document.querySelector("#comment-input");
// const comments = document.querySelector("#comments");
// const btn = document.querySelector("#submit");
// const mainCommentCount = document.querySelector('#count'); //맨위 댓글 숫자 세는거.
// var input = document.querySelector("#comment-input");


// const tArray = ["comment", "comment2", "comment3"]
// //alert(JSON.stringify(tArray[1]))
// //화면 전환 시 댓글 유지
// function makeComment() {
// const loadedComment = localStorage.getItem(JSON.stringify(tArray[1]))
// if(loadedComment !== null) {
//   const parsedComment = JSON.parse(loadedComment)
//   parsedComment.forEach(function(index) {
//     showComment(index.comment, index.name, 1)
//     mainCommentCount.innerHTML = Comments.length
//   })
// }
// }



// //댓글보여주기

// //alert(JSON.stringify(tArray[0]))
// let Comments = []
// function showComment(comment, currentUser, pIndex){

//     const userName = document.createElement('div');
//     const inputValue = document.createElement('span');
//     const showTime = document.createElement('div');
//     const voteDiv = document.createElement('div');
//     const countSpan = document.createElement('span')
//     const newId = Comments.length + 1

//     const commentList = document.createElement('div');  //이놈이 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴.
//     //삭제버튼 만들기



//     commentList.className = "eachComment";
//     userName.className="name";
//     showTime.className="time";
//     inputValue.className="inputValue";

//     voteDiv.className="voteDiv";


//     //유저네임가져오기 어떻게 고정할까?
//     var saveName = currentUser;
//      userName.innerHTML = saveName;

//      if(generateUserName() == saveName) {
//        const delBtn = document.createElement('button');
//        delBtn.className ="deleteComment";
//        delBtn.innerHTML="삭제";
//        delBtn.addEventListener('click', deleteComments)
//        userName.appendChild(delBtn);
//      }

//     //입력값 넘기기
//     inputValue.innerText = comment;
//     //타임스템프찍기
//     var saveTime = generateTime();
//     showTime.innerHTML = saveTime;
//     countSpan.innerHTML=0;
//     //댓글뿌려주기
//     commentList.appendChild(userName);
//     commentList.appendChild(showTime);
//     commentList.appendChild(inputValue);

//     commentList.appendChild(voteDiv);
//     commentList.id = newId

//     comments.prepend(commentList);
//     const commentObj = {
//       name : saveName,
//       comment : comment,
//       time : saveTime,
//       id : newId
//     }
//     Comments.push(commentObj);
//     window.localStorage.setItem(tArray[pIndex], JSON.stringify(Comments));
// }


// //버튼만들기+입력값 전달
// function pressBtn(){
//    const currentVal = inputBar.value;
//    let currentUser = window.localStorage.getItem("current_user")

//    if(!currentVal.length) {
//     alert("댓글을 입력해주세요.");
//   } else  {
//       showComment(currentVal, currentUser, 1);
//       mainCommentCount.innerHTML++;
//       inputBar.value ='';
//   }
// }

// //엔터로 댓글 입력
// inputBar.addEventListener("keyup", function (event) {
//     if (event.keyCode === 13) {
//       event.preventDefault();
//       btn.click();
//     }
//   });

  // function init() {
  // makeComment
  // }
  // init()





