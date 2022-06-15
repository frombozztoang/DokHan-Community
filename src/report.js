function showReportScreen() {
  var rptScreen = document.getElementById('report');
  rptScreen.style.display = "block";
}
function cancel() {
  var rptScreen = document.getElementById('report');
  rptScreen.style.display = "none";
}
function changeColor(buttonObj) {
  // 클릭 시 색 변환
  var buttons = document.querySelectorAll('.input > button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = '#FFFFFF';
    buttons[i].style.color = 'gray';
  }

  buttonObj.style.backgroundColor = '#DC2024';
  buttonObj.style.color = '#FFFFFF';
}
var isClicked = [false, false, false, false, false, false];
function initIsClicked(clicked) {
  for (var i = 0; i < isClicked.length; i++) {
    if (i != clicked) isClicked[i] = false;
  }
}
var inputValue = '';
var elseInput = '';
function btClick(i) {
  // 클릭시 이벤트 정의
  var buttons = document.querySelectorAll('.input > button');
  changeColor(buttons[i]);
  elseInput = document.querySelector('#otherReportReason > input');
  if (i == 5) {
    if (elseInput.getAttribute('disabled') == 'disabled') elseInput.removeAttribute('disabled');
    else {
      elseInput.setAttribute('disabled', 'disabled');
      elseInput.value = '';
    }
  } else {
    elseInput.setAttribute('disabled', 'disabled');
    elseInput.value = '';
  }
  if (!isClicked[i]) inputValue = buttons[i].textContent;
  else inputValue = '';
}
function btEnter(i) {
  // 마우스 들어오면 이벤트 정의
  var button = document.querySelectorAll('.input > button')[i];
  button.style.backgroundColor = '#DC2024';
  button.style.color = '#FFFFFF';
}
function btLeave(i) {
  // 마우스 나가면 이벤트 정의
  var button = document.querySelectorAll('.input > button')[i];
  if (!isClicked[i]) {
    button.style.backgroundColor = '#FFFFFF';
    button.style.color = 'gray';
  }
}
window.onload = function () {
  var buttons = document.querySelectorAll('.input > button');
  buttons[0].onclick = function () {
    btClick(0);
    initIsClicked(0);
    isClicked[0] = !isClicked[0];
  }
  buttons[0].onmouseenter = function () {
    btEnter(0);
  }
  buttons[0].onmouseleave = function () {
    btLeave(0);
  }
  //------------------------------------------------
  buttons[1].onclick = function () {
    btClick(1);
    initIsClicked(1);
    isClicked[1] = !isClicked[1];
  }
  buttons[1].onmouseenter = function () {
    btEnter(1);
  }
  buttons[1].onmouseleave = function () {
    btLeave(1);
  }
  //------------------------------------------------
  buttons[2].onclick = function () {
    btClick(2);
    initIsClicked(2);
    isClicked[2] = !isClicked[2];
  }
  buttons[2].onmouseenter = function () {
    btEnter(2);
  }
  buttons[2].onmouseleave = function () {
    btLeave(2);
  }
  //------------------------------------------------
  buttons[3].onclick = function () {
    btClick(3);
    initIsClicked(3);
    isClicked[3] = !isClicked[3];
  }
  buttons[3].onmouseenter = function () {
    btEnter(3);
  }
  buttons[3].onmouseleave = function () {
    btLeave(3);
  }
  //------------------------------------------------
  buttons[4].onclick = function () {
    btClick(4);
    initIsClicked(4);
    isClicked[4] = !isClicked[4];
  }
  buttons[4].onmouseenter = function () {
    btEnter(4);
  }
  buttons[4].onmouseleave = function () {
    btLeave(4);
  }
  //------------------------------------------------
  buttons[5].onclick = function () {
    btClick(5);
    initIsClicked(5);
    isClicked[5] = !isClicked[5];
  }
  buttons[5].onmouseenter = function () {
    btEnter(5);
  }
  buttons[5].onmouseleave = function () {
    btLeave(5);
  }
}
function report() {
  var temp = '';
  var reportObj = document.querySelector('#selReportContinput > input').value;
  if (reportObj.length == 0) {
    alert('신고 대상을 입력해 주세요');
    return;
  }
  if (inputValue.length == 0) {
    alert('버튼을 클릭해 주세요');
    return;
  }
  if (inputValue == '기타') {
    if (elseInput.value.length == 0) {
      alert('기타 사유를 입력해 주세요');
      return;
    }
    temp = '신고 대상 : ' + reportObj + "\n" + '신고 사유 : ' + elseInput.value;
    alert(temp);
  }
  else {
    temp = '신고 대상 : ' + reportObj + "\n" + '신고 사유 : ' + inputValue;
    alert(temp);
  }

  localStorage.setItem('reportWho', reportObj);
  localStorage.setItem('reportReason', inputValue);
  alert('로컬스토리지 저장 완료' + '\n' + localStorage.getItem('reportWho') + ', ' + localStorage.getItem('reportReason'));
}
