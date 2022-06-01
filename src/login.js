let login_info = null;

window.onload = function(){
    const frist_key = window.localStorage.key(0);
    if(frist_key == null){
        window.localStorage.setItem('index', 0);
    } 
    window.localStorage.setItem('current_user', null);
}

function checkLogin(){

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
    //올바른 입력일 시
    else{
        login_info = [id.value, pw.value+""];
        return true;
    }
}

function login(){
    var isLogin = checkLogin();
    if(isLogin == true){
        var index = window.localStorage.getItem('index')*1;
        for(var i=1;i<=index;i++){
            var fileName = "user"+i;
            var user_info_String = window.localStorage.getItem(fileName);
            var user_info = JSON.parse(user_info_String);
            if(login_info[0] == user_info[0] && login_info[1] == user_info[1]){
                window.localStorage.setItem('current_user', user_info[3]);
                location.href = "testmain.html";
                return;
            }
        }
        alert("아이디 혹은 비밀번호를 확인해주세요.")
    }
}

function unlogin_around(){
    location.href = "testmain.html";
}