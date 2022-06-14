let checkedEmail = null;
let index;

window.onload = function(){
    const frist_key = window.localStorage.key(0);
    if(frist_key == null){
        window.localStorage.setItem('total_user_Index', 0);
    } 
    window.localStorage.setItem('current_user', null);
    index = window.localStorage.getItem('total_user_Index')*1;
}

function checkEmail(){
    var e = window.event;
    e.preventDefault();

    var signUpEmail = document.getElementById('signUpEmail');
        //이메일 중복 체크
        for(var i=1;i<=index;i++){
            var fileName = "user"+i;
            var user_info_String = window.localStorage.getItem(fileName);
            var user_info = JSON.parse(user_info_String);
            if(signUpEmail.value == user_info[0]){
                document.getElementById("emailError").setAttribute("style", "color: red;");
                document.getElementById("emailError").innerHTML="이미 사용중인 이메일입니다.";
                signUpEmail.focus();
                return false;
            }
        }
        document.getElementById("emailError").setAttribute("style", "color: green;");
        document.getElementById("emailError").innerHTML="사용가능한 이메일입니다.";
        checkedEmail = signUpEmail.value;
        return true;
    
}
function singUp(){

    var singUpName = document.getElementById('signUpName');
    var singUpNic = document.getElementById('signUpNic');
    var signUpPw = document.getElementById('signUpPw');

    if(checkedEmail == null){
        document.getElementById("emailError").innerHTML="이메일 확인을 먼저 해주세요.";
        return false;
    }
    else{
        //닉네임 중복 체크
        for(var i=1;i<=index;i++){
            var fileName = "user"+i;
            var user_info_String = window.localStorage.getItem(fileName);
            var user_info = JSON.parse(user_info_String);
            if(singUpNic.value == user_info[3]){
                checkNick = true;
                document.getElementById("nickError").innerHTML="이미 사용중인 닉네임입니다.";
                singUpNic.focus();
                return false;
            }
        }
        document.getElementById("nickError").setAttribute("style", "color: green;");
        document.getElementById("nickError").innerHTML="사용가능한 닉네임입니다.";
        const newuserInfo = [checkedEmail, signUpPw.value, singUpName.value, singUpNic.value];
        index = index+1;
        user_singup(newuserInfo);
        alert("회원가입을 축하합니다.")
        return true;
    }
}

function user_singup(newuserInfo){
    const userArr = JSON.stringify(newuserInfo);
    const fileName = 'user'+index;
    window.localStorage.setItem('total_user_Index', index);
    window.localStorage.setItem(fileName, userArr);
}