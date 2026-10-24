(function(){
  // Контакты агентства. Впишите ссылки — пустые ведут к форме заявки.
  var CONTACTS=[
    {name:'Instagram',note:'Кейсы и закулисье',href:''},
    {name:'Telegram',note:'Быстрый ответ',href:''},
    {name:'WhatsApp',note:'Написать менеджеру',href:''},
    {name:'Почта',note:'Для брифов и предложений',href:''}
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
