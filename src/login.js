let login_info = null;

window.onload = function(){
    const frist_key = window.localStorage.key(0);
    if(frist_key == null){
        window.localStorage.setItem('total_user_Index', 0);
    } 
    window.localStorage.setItem('current_user', null);
}

function checkLogin(){

    var id = document.getElementById("username");
    var pw = document.getElementById("password");

    //올바른 입력일 시
    login_info = [id.value, pw.value+""];
    return true;
}

function login(){
    var e = window.event;
    e.preventDefault();

    var isLogin = checkLogin();
    if(isLogin == true){
        var index = window.localStorage.getItem('total_user_Index')*1;
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

function test(){
    location.href = "testmain.html";
}