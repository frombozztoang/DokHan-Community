var email = false;
function checkEmail(){
    var signUpEmail = document.getElementById('signUpEmail');

    var blank_pattern = /[\s]/g;
    var special_pattern = /[`~!#$%^&*|\\\'\";:\/?]/gi;
    var email_pattern = /['@']/gi;

    if(blank_pattern.test(signUpEmail.value) == true) {
        alert("공백은 사용할 수 없습니다.");
        email = false;
        return false;
    }
    else if(special_pattern.test(signUpEmail.value) == true || email_pattern.test(signUpEmail.value) == false){
        alert("이메일 형식을 확인해주세요. ('@'를 제외한 특수문자는 사용할 수 없습니다.)");
        email = false;
        return false;
    }
    else {
        alert("올바른 이메일 형식입니다.")
        email = true;
        return true;
    }
}

function singUp(){
    var singUpName = document.getElementById('signUpName');
    var singUpNic = document.getElementById('signUpNic');
    var signUpPw = document.getElementById('signUpPw');

    var blank_pattern = /[\s]/g;
    var special_pattern = /[`~!#$%^&*|\\\'\";:\/?]/gi;

    if(singUpName.value=="" || blank_pattern.test(singUpName.value) == true || special_pattern.test(singUpName.value) == true){
        alert("공백 또는 특수문자는 사용할 수 없습니다.");
        //빨간색 같이 강조표시하면서 해당 칸으로 이동해서 보여주기
        return false;
    }
    else if(singUpNic.value=="" || blank_pattern.test(singUpNic.value) == true || special_pattern.test(singUpNic.value) == true){
        alert("공백 또는 특수문자는 사용할 수 없습니다.");
        //빨간색 같이 강조표시하면서 해당 칸으로 이동해서 보여주기
        return false;
    }
    else if(signUpPw.value=="" || blank_pattern.test(signUpPw.value) == true || special_pattern.test(signUpPw.value) == true){
        alert("공백 또는 특수문자는 사용할 수 없습니다.");
        //빨간색 같이 강조표시하면서 해당 칸으로 이동해서 보여주기
        return false;
    }
    else if(email == false){
        alert("이메일을 확인을 먼저 해주세요.")
        return false;
    }
    else{
        alert("회원가입을 축하합니다.")
        location.href = "login.html";
        return true;
    }
}