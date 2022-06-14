//1.입력받으면 입력값 초기화
//2. 입력값 댓글로들어가기
//3. 댓글 삭제, 수정기능
//4. 좋아요 투표기능
//5. 타임스템프기능
//6. 무작위 아이디  
//7. 댓글 삭제기능
//8. 댓글 수정기능
const resultElement = document.querySelector('#result');

 
const numString = "";
function newPageS()  {
  window.location.href = 'http://127.0.0.1:5500/%EA%B2%8C%EC%8B%9C%EA%B8%80%ED%99%94%EB%A9%B4.html'  
}

function newPageM()  {
  window.location.href = "http://127.0.0.1:5500/%EA%B2%8C%EC%8B%9C%EA%B8%80%ED%81%B4%EB%A6%AD.html"
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


//좋아요 수 세기
function count(type)  {
  let number = resultElement.innerText;
  if(type === 'plus') {
    number = number*1 + 1;
    
  }
  resultElement.innerHTML = number;
  window.localStorage.setItem("like", number);
}



const inputBar = document.querySelector("#comment-input");
const comments = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count'); //맨위 댓글 숫자 세는거.
var input = document.querySelector("#comment-input");



//타임스템프 만들기
function generateTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const wDate = date.getDate();
   
    const time = year+'-'+month+'-'+wDate;
    return time;

}

//유저이름 발생기
//유저이름은 8글자로 제한.  //유저 이름 넣기 위하 임시.. 로컬 스토리지 이용하면 삭제하기
function generateUserName(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var makeUsername = '';
    for(let i=0; i<4;i++){
        let index = Math.floor(Math.random(10) * alphabet.length);
        makeUsername += alphabet[index];        
    }
    for(let j=0;j<4;j++){
        makeUsername += "*";
    }
    return makeUsername;    
}

//댓글 삭제
function deleteComments(event){    
  const gArray = JSON.parse(window.localStorage.getItem("comment"));
  if(confirm("댓글을 정말 삭제하시겠습니까?")) {
    const btn = event.target; 
    const list = btn.parentNode.parentNode;//commentList
    comments.removeChild(list);
    alert(list);
    
    //alert(gArray[0][0]);
    //alert(JSON.stringify(gArray.pop()));
    // if(btn == JSON.stringify(gArray[0])) {
    //   alert("aa");
    // } else {
    //   alert("bb");
    // }
    
    //메인댓글 카운트 줄이기.
    if(mainCommentCount.innerHTML <='0'){
        mainCommentCount.innerHTML = 0;
    }else{
        mainCommentCount.innerHTML--;
    }
    alert("댓글이 정상적으로 삭제되었습니다.");
  } else 
  alert("댓글 삭제를 취소하셨습니다.");

}

//화면 전환 시 댓글 유지
function makeComment() {
  const gArray = JSON.parse(window.localStorage.getItem("comment"));
  
 for(var num in gArray) {
  mainCommentCount.innerHTML++;
  const gArrayA = gArray[num];
  var gName = gArrayA[0];
  var gContent = gArrayA[1];
  var gTime = gArrayA[2];

  const userName = document.createElement('div');
  const inputValue = document.createElement('span');
  const showTime = document.createElement('div');
  const voteDiv = document.createElement('div');


  const commentList = document.createElement('div');  //이놈이 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴.

  const delBtn = document.createElement('button');
  delBtn.className ="deleteComment";
  delBtn.innerHTML="삭제";
  commentList.className = "eachComment";
  userName.className="name";
  inputValue.className="inputValue";
  showTime.className="time";
  voteDiv.className="voteDiv";
  
  userName.innerHTML = gName; 
  inputValue.innerText = gContent;
  showTime.innerHTML = gTime;
  userName.appendChild(delBtn);  

  commentList.appendChild(userName);
  commentList.appendChild(inputValue);
  commentList.appendChild(showTime);
  comments.prepend(commentList);
  delBtn.addEventListener("click",deleteComments);
  console.dir(comments);
}

}

//댓글보여주기
function showComment(comment){
    const tArray = JSON.parse(window.localStorage.getItem("comment"));
    var array = new Array();
    const userName = document.createElement('div');
    const inputValue = document.createElement('span');
    const showTime = document.createElement('div');
    const voteDiv = document.createElement('div');
    const countSpan = document.createElement('span')
    
    const commentList = document.createElement('div');  //이놈이 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴.
    //삭제버튼 만들기
    const delBtn = document.createElement('button');
    delBtn.className ="deleteComment";
    delBtn.innerHTML="삭제";
    commentList.className = "eachComment";
    userName.className="name";
    inputValue.className="inputValue";
    showTime.className="time";
    voteDiv.className="voteDiv";
    //유저네임가져오기 
    var saveName = generateUserName(); 
     userName.innerHTML = saveName; 
    array.push(saveName);
    userName.appendChild(delBtn);  
    //입력값 넘기기
    inputValue.innerText = comment;
    array.push(comment);
    //타임스템프찍기
    var saveTime = generateTime();
    showTime.innerHTML = saveTime;
    array.push(saveTime);
    countSpan.innerHTML=0;
    //댓글뿌려주기       
    commentList.appendChild(userName);
    commentList.appendChild(inputValue);
    commentList.appendChild(showTime);
    commentList.appendChild(voteDiv);
    comments.prepend(commentList);
    tArray.push(array);
    delBtn.addEventListener("click",deleteComments);
    //console.dir(comments);

    window.localStorage.setItem("comment", JSON.stringify(tArray));
}



//버튼만들기+입력값 전달
function pressBtn(){ 
   const currentVal = inputBar.value;

   if(!currentVal.length) {
    alert("댓글을 입력해주세요.");
  } else  {
      showComment(currentVal);  
      mainCommentCount.innerHTML++;
      inputBar.value ='';
  }
}

//엔터로 댓글 입력

   input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      btn.click();
    }
  });
  



