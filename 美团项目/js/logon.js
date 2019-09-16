var page = 1;

function jumppage() {
    if(page == 3){
        window.location.href = "../index.html"
    }
    if (page == 2) {
        document.getElementsByClassName("logon-head-setpwd")[0].style.color = "#222";
        document.getElementsByClassName("logon-InputPhoneNumber")[0].placeholder = "    请输入密码";
        document.getElementsByClassName("logon-InputPhoneNumber2")[0].style.display = "block";
        document.getElementsByClassName("logon-button")[0].innerHTML = "确认";
        document.getElementsByClassName("registe2")[0].style.display = "none";
        document.getElementsByClassName("pull-password2")[0].style.display = "none";
        page=3;
    }
    if (page == 1) {
        document.getElementsByClassName("logon-head-code")[0].style.color = "black";
        document.getElementsByClassName("logon-InputPhoneNumber")[0].placeholder = "    请输入短信中的验证码";
        document.getElementsByClassName("checkbox")[0].style.display = "none";
        document.getElementsByClassName("i_have_read")[0].style.display = "none";
        document.getElementsByClassName("logon-button")[0].innerHTML = "提交验证码";
        document.getElementsByClassName("logon-button")[0].style.background = "#FFBD00";
        document.getElementsByClassName("registe2")[0].style.display = "block";
        document.getElementsByClassName("pull-password2")[0].style.display = "block";
        page = 2;
    }
}