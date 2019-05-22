// JavaScript Document

//音乐播放div滚动事件
window.onscroll = scroll_audio;

//标题切换效果
document.body.onfocus = function(){
	document.title = "～(●￣(ｴ)￣●)_豆奶";
};
document.body.onblur = function(){
	document.title = "(●￣●) i miss you";
};



//----音乐播放div滚动
	//获取style中设定的top值  (带px单位)
var old_top = document.defaultView.getComputedStyle(document.getElementById("ins_audio"),null).top;
	//数字加字母的字符串 直接转换为数字能直接去掉字母保留数字
old_top = parseInt(old_top);

function scroll_audio(){
	var scroll_height = document.documentElement.scrollTop;
	document.getElementById("ins_audio").style.top = (scroll_height+old_top)+"px";
}

//-----音乐播放div鼠标移入移出
function over_audio_display(){
	var audio_display = document.getElementById("audio_display");
	audio_display.style.display = "block";
}
function out_audio_display(){
	var audio_display = document.getElementById("audio_display");
	audio_display.style.display = "none";
}