function login(){
    const testId = "admin@naver.com";
    const testPw = "1234";
    var id = document.getElementById('userId');
    var pw = document.getElementById('userPw');

    var blank_pattern = /[\s]/g;
    var special_pattern = /[`~!#$%^&*|\\\'\";:\/?]/gi;
    var email_pattern = /['@']/gi;
    //공백 혹은 특수문자 입력 시
    if( blank_pattern.test(id.value) == true || special_pattern.test(id.value) == true){
        alert("아이디를 확인해주세요.");
        return false;
    }
    //이메일 형식이 아닐 시
    if(email_pattern.test(id.value)==false){
        alert("아이디 형식을 확인해주세요")
        return false;
    }
    if(id.value == "") {//아이디 입력란이 공백일 경우
        alert("아이디를 입력해주세요.")
        return false;
    } else if(pw.value == "") {//비밀번호 입력란이 공백일 경우
        alert("비밀번호를 입력해주세요.")
        return false;
    } else if(id.value == testId && pw.value == testPw){//로그인 성공
        location.href = "testmain.html";
        return true;
    } else{// 아이디 혹은 비밀번호가 틀린 경우
        alert("아이디 혹은 비밀번호를 확인해주세요.")
        return false;
    }
}