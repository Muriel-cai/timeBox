window.onload = function(){
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    getRem(375,100)
};
window.onresize = function(){
    getRem(375,100)
};
function getRem(pwidth,prem){
    var oHtml = document.getElementsByTagName("html")[0];
    var oWidth = document.body.offsetWidth || document.documentElement.offsetWidth;
    oHtml.style.fontSize = oWidth/pwidth*prem + "px";
    if(oWidth >= pwidth){
        oHtml.style.fontSize = "100px";
    }else {
        oHtml.style.fontSize = (prem*oWidth/pwidth)+"px";
    }
}