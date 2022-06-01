function checkLogin(){
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
    //비밀번호 입력란이 공백일 경우
   else if(pw.value == "") {
        alert("비밀번호를 입력해주세요.")
        return false;
    }
    //로그인 성공 
    else if(id.value == testId && pw.value == testPw){
        location.href = "testmain.html";
        return true;
    }
    // 아이디 혹은 비밀번호가 틀린 경우
    else{
        alert("아이디 혹은 비밀번호를 확인해주세요.")
        return false;
    }
}

function login(){
    var isLogin = checkLogin();
    if(isLogin == true){
        var file = new File("testuserinfo1.txt");
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");

        reader.onload = function(){
            alert(reader.result);
        }
    }
}

function testfile(){
   var file = new File("c:\Users\zeki\OneDrive\문서\GitHub\DokHan-Community\src\testuserinfo1.txt");
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");

        reader.onload = function(){
            alert(reader.result);
        }
}