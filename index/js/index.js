window.onload= function () {
   waterfall('main','box');
}
function  waterfall(parent,box) {
    //将main下的所有class为box的元素取出来
    var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent,box);
    //计算整个页面显示的列数（页面宽/box的宽）
    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
    //设置main的宽度
    oParent.style.cssText = 'width:'+oBoxW*cols+'px;margin:o auto;'
    console.log(oBoxW)
}
//根据class获取元素
function getByClass(parent,clsName) {
    var boxArr = new Array(),//用来存储获取到的所有class为box的元素
     oElements = document.getElementsByTagName('*');
    for( var i =0;i<oElements.length;i++){
        if(oElements[i].className == clsName){
            boxArr.push(oElements[i]);
        }
    }
    return boxArr;
}