(function(){
  // Контакты агентства. Пустая ссылка ведёт к форме заявки.
  var CONTACTS=[
    {name:'Instagram',note:'@gloup.marketing',href:'https://www.instagram.com/gloup.marketing'},
    {name:'WhatsApp',note:'+996 506 686 686',href:'https://wa.me/996506686686'},
    {name:'WhatsApp',note:'+90 552 586 81 80',href:'https://wa.me/905525868180'},
    {name:'Почта',note:'gloup.digital.agency@gmail.com',href:'mailto:gloup.digital.agency@gmail.com'}
  ];
  var ARROW='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  document.addEventListener('DOMContentLoaded',function(){
    var list=document.querySelector('.gc__list');if(!list)return;
    list.innerHTML=CONTACTS.map(function(c){
      var ext=/^https?:/.test(c.href);
      return '<li><a class="gc__link" href="'+(c.href||'#lead')+'"'+(ext?' target="_blank" rel="noopener"':'')+'><span>'+c.name+'<small>'+c.note+'</small></span><span class="gc__go">'+ARROW+'</span></a></li>';
    }).join('');
    var y=document.querySelector('.gc__year');if(y)y.textContent=new Date().getFullYear();
    var top=document.querySelector('.gc__top');
    if(top)top.addEventListener('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});
  });
})();
