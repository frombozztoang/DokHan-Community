var checkedEmail = null;

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
        alert("올바른 이메일 형식입니다.")
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
        alert("회원가입을 축하합니다.")
        var newuserInfo = [checkedEmail.value, signUpPw.value, singUpName.value, singUpNic.value];
        user_singup(newuserInfo);
        location.href = "login.html";
        return true;
    }
}

function user_singup(newuserInfo){
    alert("test, "+newuserInfo[3]);
    var defaultpath = "C:\\Users\\zeki\\OneDrive\\문서\\GitHub\\DokHan-Community\\src";
    var fileObject = new ActiveXObject("Scripting.FileSystemObject");
    var fullpath = defaultpath+"\\"+newuserInfo[3];
    
    var contents = newuserInfo[0]+'\n'+newuserInfo[1]+'\n'+newuserInfo[2]+'\n'+newuserInfo[3]+'\n';
    var fWrite = fileObject.CreateTextFile(fullpath, false);
    fWrite.fWrite(contents);
    fWrite.close();
    alert("작성완료");
}