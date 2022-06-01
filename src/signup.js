let checkedEmail = null;
let index;

window.onload = function(){
    const frist_key = window.localStorage.key(0);
    if(frist_key == null){
        window.localStorage.setItem('index', 0);
    } 
    index = window.localStorage.getItem('index')*1;
}
function checkEmail(){
    var signUpEmail = document.getElementById('signUpEmail');

    var blank_pattern = /[\s]/g;
    var special_pattern = /[`~!#$%^&*|\\\'\";:\/?]/gi;
    var email_pattern = /['@']/gi;

    if(blank_pattern.test(signUpEmail.value) == true) {
        alert("공백은 사용할 수 없습니다.");
        return false;
    }
    else if(special_pattern.test(signUpEmail.value) == true || email_pattern.test(signUpEmail.value) == false){
        alert("이메일 형식을 확인해주세요. ('@'를 제외한 특수문자는 사용할 수 없습니다.)");
        return false;
    }
    else {
        //이메일 중복 체크
        for(var i=1;i<=index;i++){
            var fileName = "user"+i;
            var user_info_String = window.localStorage.getItem(fileName);
            var user_info = JSON.parse(user_info_String);
            if(signUpEmail.value == user_info[0]){
                alert("이미 사용중인 이메일입니다.")
                return false;
            }
        }
        alert("사용가능한 이메일 입니다.")
        checkedEmail = signUpEmail.value;
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
    else if(checkedEmail == null){
        alert("이메일을 확인을 먼저 해주세요.")
        return false;
    }
    else{
        //닉네임 중복 체크
        for(var i=1;i<=index;i++){
            var fileName = "user"+i;
            var user_info_String = window.localStorage.getItem(fileName);
            var user_info = JSON.parse(user_info_String);
            if(singUpNic.value == user_info[3]){
                alert("이미 사용중인 닉네임입니다.")
                return false;
            }
        }
        alert("회원가입을 축하합니다.")
        const newuserInfo = [checkedEmail, signUpPw.value, singUpName.value, singUpNic.value];
        index = index+1;
        user_singup(newuserInfo);
        location.href = "login.html";
        return true;
    }
}

function user_singup(newuserInfo){
    const userArr = JSON.stringify(newuserInfo);
    const fileName = 'user'+index;
    window.localStorage.setItem('index', index);
    window.localStorage.setItem(fileName, userArr);
}