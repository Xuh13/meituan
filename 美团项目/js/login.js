var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab1Content = document.getElementById("tab1-content");
var tab2Content = document.getElementById("tab2-content");

var logonNow = document.getElementById("logonNow");
var header_text = document.getElementsByClassName("header-meituan");
var login =document.getElementById("login");


function change(bool) {  //改变登陆方式
    if (bool == 1) {
        tab1.style.borderBottomColor = "#FFBD00";
        tab2.style.borderBottomColor = "#DDD8CE";
        tab1Content.style.display = "block";
        tab2Content.style.display = "none";
    } else {
        tab1.style.borderBottomColor = "#DDD8CE";
        tab2.style.borderBottomColor = "#FFBD00";
        tab2Content.style.display = "block";
        tab1Content.style.display = "none";
    }
}
