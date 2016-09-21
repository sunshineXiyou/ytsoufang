//烟台  下拉列表
function onMouseover1()
{
    //var sub_lists=sub_list[i];
    var obj=document.getElementById("sub_yt");
    obj.style.display="block";

}
function onMouseout1()
{
    var obj=document.getElementById("sub_yt");
    obj.style.display="none";
}




function demo1(){
    document.getElementById("left").style.backgroundImage="url(img\1468387742217.jpg)";
}
//头部图片设置
window.onload=function(){
		var aa = document.getElementById('y1');
        var bb=document.getElementById('y2')
         a.style.backgroundImage = 'url(img/8e82d9fa11a54b9f8328c926db1264e1 (1).jpg)';
         b.style.backgroundImage='url(img/1e113a8ab7a04df2b43b2e16a08eb741 (1).jpg)';
          myImg.onMouseover=function(aa,bb){

            if(aa) {
                aa.style.visibility="visible";
                bb.style.visibility="hidden";
            }else{
                bb.style.visibility="visible";
                aa.style.visibility="hidden";
            }
       }
}








//section  div11
window.onload = function () {
      var lis = document.getElementById('nav').getElementsByTagName('li');
      var bo = document.getElementsByClassName('a');
    for(i=0;i<lis.length;i++){
        lis[i].id = i;
        (function (x) {
            lis[x].onclick = function () {
                tab(this.id);
            }
        })(i);
    }
      function tab(nowid){
          for(j=0;j<lis.length;j++){
              if(nowid == j){
                 lis[j].style.backgroundColor = 'grey';
                  bo[j].style.display = 'block';
              }else{
                 lis[j].style.backgroundColor = '';
                  bo[j].style.display = '';
              }
          }
      }
}
/***********************************************************************/

$(function(){
    var $li = $('#nav li ');
    var $div = $('.a');

    $li.mouseover(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('re');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
    })
});






























