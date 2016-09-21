//<script text = "javascript" >
 
 var className=document.getElementById("danmu_inbox_id").value;
 
var a=document.getElementById("banner_show").getElementsByTagName("a");
 var ABCD = Math.floor(Math.random()*a.length);
 for(i=0;i<a.length;i++){if(i==ABCD){a[i].style.display="";}else{a[i].style.display="none";}}
 document.getElementById("banner_show").style.display="";
 if(a.length>1){ for(i=1;i<=a.length;i++){var id="banner_ctr" + i ; document.getElementById(id).style.display="";
 if(i==(ABCD+1)){document.getElementById(id).className="current";}}}
 
 
 //var dianping01Html= $(".bannger_inbox").eq(ABCD).find("div").eq(0).html();
 //var dianpingUrl=$(".bannger_inbox").eq(ABCD).find("div").eq(1).html();
 
  var dianping01Html= $(className).eq(ABCD).find("div").eq(0).html();
 var dianpingUrl=$(className).eq(ABCD).find("div").eq(1).html();
 
 
 var arr=[];
 if(dianping01Html.split(',').length==1&&dianping01Html.split(',')[0].trim().length==0)
 {
   arr=[];
 }else
 {
   arr=dianping01Html.split(',');
    var barrage = new Barrage({text: arr,type:[],
                host:'',url:dianpingUrl,wrapper: 'danmu'+ABCD});
    window.barrage=barrage;
 }
//</script>

















$('.bar01').on('webkitAnimationEnd', '.barragetda', function () {
    var that = $(this);
    var index =  that.index() % 4;
    var durationArr = [12,15,10,18];
    var delayArr = [0,5.5,3,1.5];
    var time = delayArr[index] + durationArr[index];
    that.hide();
    clearTimeout(this.timer);
    this.timer = setTimeout(function () {
        that.show();
    },time * 1000);
});


$(function(){


 'use strict';

    var ieFlag = !1;
    var browserName = navigator.userAgent;
    if (browserName.indexOf('MSIE 9.0') > 0 || browserName.indexOf('MSIE 8.0') > 0) {
        ieFlag = !0;
    }

var timer=5000;
var showtime = 800;
var showbox = $("#banner_show");
var className=document.getElementById("danmu_inbox_id").value;
var inbox = $(className);
var movelist = $("#yq_banner_list");
var s;
var loopS;
var size =inbox.size();
var play = 1;
var index= ABCD;
function move(){


if(index >= 7){
	index = -1;
}
$('.barclose').hide();
var closeBtn = $('#closeBtn');
var current = $('#banner_ctr').find('span').eq(index+1);
if (current.attr('data-class') === 'close') {
	closeBtn.html('\u5f00\u542f\u5f39\u5e55');
}else {
	closeBtn.html('\u5173\u95ed\u5f39\u5e55');
}

index++;
if(index>size-1){
index=0;
}
if(size>1)
	{
inbox.each(function(e){
inbox.eq(e).hide(0);
$("#banner_magbox"+e).hide();
movelist.find("a").eq(e).removeClass("hover");
if(e == index){
inbox.eq(index).fadeIn(showtime);
$("#banner_magbox"+index).show();
clearClass1();
var id2="banner_ctr"+(index+1);
//$('#danmu').find('div').remove();
document.getElementById(id2).className="current";
 var dianpingHtml=inbox.eq(index).find("div").eq(0).html();
 var dianpingUrl=inbox.eq(index).find("div").eq(1).html();

					  var currentDanmu = $('#danmu' + index);
                    currentDanmu.siblings('.bar01').css({
                            opacity: 0,
                            'z-index': -99,
                            visibility: 'hidden'
                        }).find('div').css('animation-play-state','paused');

                    if (ieFlag){
                        currentDanmu.siblings('.bar01').find('div').pause();
                    }
                    

                    var divArr = currentDanmu.find('div');
                    var danmuLen = divArr.length;
                    if($.trim(dianpingHtml) != "") {
                        if (danmuLen > 0) {
                            $('.barclose').show();
                            currentDanmu.css({
                                opacity: 1,
                                'z-index': 99,
                                visibility: 'visible'
                            })
                            divArr.css('animation-play-state','running');
                            if (ieFlag) {
                                divArr.resume();
                            }
                        }else {
                            currentDanmu.show();
                            barrage = new Barrage({text:dianpingHtml.split(','),type:[],host:'',url:dianpingUrl,wrapper:'danmu' + index});
                            currentDanmu.css({
                                opacity: 1,
                                'z-index': 99,
                                visibility: 'visible'
                            });
                            divArr.css('animation-play-state','running');
                            if (ieFlag) {
                                divArr.resume();
                            }
                        }
                    }
                  
movelist.find("a").eq(index).addClass("hover");
}
});
}
}
	  // img 1 start
    var imgNum = inbox.length;
  if (imgNum === 1) {
		var dianping01Html=$(className).eq(0).find("div").eq(0).html();
		var dianping01Url=$(className).eq(0).find("div").eq(1).html();
		if(dianping01Html.trim()!="")
		{
		 loopS = barrage.loop();
		}
       
    }
    //  end
    imgNum !== 1 && (s = setInterval(move,timer));
       function stopp(obj){
        $('.bigbanner').on('mouseover', obj, function() {
            if(play){
                clearInterval(s);
                play = 0;
            }
        });
        $('.bigbanner').on('mouseleave', obj, function() {
            if(!play && imgNum !== 1){
                s = setInterval(move,timer);
                play = 1;
                clearInterval(loopS);
            }
        });
    }
    imgNum !== 1 && stopp(className);
    stopp('.barragetda');
    stopp('.bannger_inbox');
function clearClass1(){
document.getElementById("banner_ctr1").className="";
document.getElementById("banner_ctr2").className="";
document.getElementById("banner_ctr3").className="";
document.getElementById("banner_ctr4").className="";
document.getElementById("banner_ctr5").className="";
document.getElementById("banner_ctr6").className="";
document.getElementById("banner_ctr7").className="";
}
$("#banner_ctr1").click(function(){
index=-1;
move(); 
});
$("#banner_ctr2").click(function(){
index=0;
move(); 
});
$("#banner_ctr3").click(function(){
index=1;
move(); 
});
$("#banner_ctr4").click(function(){
index=2;
move(); 
});
$("#banner_ctr5").click(function(){
index=3;
move(); 
});
$("#banner_ctr6").click(function(){
index=4;
move(); 
});
$("#banner_ctr7").click(function(){
index=5;
move(); 
});
$("#banner_ctr1").mouseover(function(){
index=-1;
move(); 
});
$("#banner_ctr2").mouseover(function(){
index=0;
move(); 
});
$("#banner_ctr3").mouseover(function(){
index=1;
move(); 
});
$("#banner_ctr4").mouseover(function(){
index=2;
move(); 
});
$("#banner_ctr5").mouseover(function(){
index=3;
move(); 
});
$("#banner_ctr6").mouseover(function(){
index=4;
move(); 
});
$("#banner_ctr7").mouseover(function(){
index=5;
move(); 
});
$(".banner_btn_right").click(function(){
move(); 
});
$(".banner_btn_left").click(function(){
  index--;
        index--;
        if (index <= -2) {
            index = size - 2;
        }
        move();
});
movelist.find("a").click(function(){
var rel = $(this).attr("rel");
inbox.each(function(e){
inbox.eq(e).hide(0);
movelist.find("a").eq(e).removeClass("hover");
$("#banner_magbox"+e).hide(0);
if(e == rel){
inbox.eq(rel).fadeIn(showtime);
movelist.find("a").eq(rel).addClass("hover");
$("#banner_magbox"+rel).show(0);
}
});
});
$(className).each(function(e){
        var inboxsize = $(className).size();
        var inboxwimg = $(this).find("img").width();
        $(className).eq(e).css({"margin-left":(-1)*inboxwimg/2+"px","z-index":inboxsize-e});
    });
$(".banner").hover(
function(){
	$(".banner_pre_next").fadeIn();
	},function(){
		$(".banner_pre_next").fadeOut();
		})
$(".add1200").addClass("add1300").removeClass("add1200");
});