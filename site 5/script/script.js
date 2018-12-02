window.onload = function() {
  document.getElementById('closeblok1').classList.add('disnone');
  document.getElementById('closeblok2').classList.add('disnone');
  document.getElementById('closeblok3').classList.add('disnone');
  document.getElementById('closeblok4').classList.add('disnone');
  document.getElementById('closeblok5').classList.add('disnone');
  document.getElementById('closeblok6').classList.add('disnone');
};

//Меню кнопка
var menu = document.getElementById('menu1');
menu.addEventListener('click',function(){
  resize();
});
function resize(){
 var width = document.getElementById('menu1').offsetWidth;
 if (width==220){
  document.getElementById('menu1').style.width='50px';
  document.getElementById('link1').classList.add('disnone')
  document.getElementById('link2').classList.add('disnone')
  document.getElementById('link3').classList.add('disnone')
  document.getElementById('menu1').style.backgroundColor='#eff0f2';
}else{
  document.getElementById('menu1').style.width='220px';
  setTimeout("document.getElementById('link1').classList.remove('disnone')", 250);
  setTimeout("document.getElementById('link2').classList.remove('disnone')", 350);
  setTimeout("document.getElementById('link3').classList.remove('disnone')", 450);
  document.getElementById('menu1').style.backgroundColor='#70f5eb';
  document.getElementById('menu1').style.borderRadius= '8px';
}
};

var close1 = document.getElementById('buttonclose1');
var close2 = document.getElementById('buttonclose2');
var close3 = document.getElementById('buttonclose3');
var close4 = document.getElementById('buttonclose4');
var close5 = document.getElementById('buttonclose5');
var close6 = document.getElementById('buttonclose6');

var open1 = document.getElementById('buttonmore1');
var open2 = document.getElementById('buttonmore2');
var open3 = document.getElementById('buttonmore3');
var open4 = document.getElementById('buttonmore4');
var open5 = document.getElementById('buttonmore5');
var open6 = document.getElementById('buttonmore6');

close1.addEventListener('click',function(){
 document.getElementById('closeblok1').classList.add('disnone');
});
close2.addEventListener('click',function(){
  document.getElementById('closeblok2').classList.add('disnone');
});
close3.addEventListener('click',function(){
  document.getElementById('closeblok3').classList.add('disnone');
});
close4.addEventListener('click',function(){
  document.getElementById('closeblok4').classList.add('disnone');
});
close5.addEventListener('click',function(){
  document.getElementById('closeblok5').classList.add('disnone');
});
close6.addEventListener('click',function(){
  document.getElementById('closeblok6').classList.add('disnone');
});

open1.addEventListener('click',function(){
  document.getElementById('closeblok1').classList.remove('disnone');
});
open2.addEventListener('click',function(){
  document.getElementById('closeblok2').classList.remove('disnone');
});
open3.addEventListener('click',function(){
  document.getElementById('closeblok3').classList.remove('disnone');
});
open4.addEventListener('click',function(){
  document.getElementById('closeblok4').classList.remove('disnone');
});
open5.addEventListener('click',function(){
  document.getElementById('closeblok5').classList.remove('disnone');
});
open6.addEventListener('click',function(){
  document.getElementById('closeblok6').classList.remove('disnone');
});

