(function(){
  // Плавное появление заголовков и содержимого блоков при прокрутке (по очереди внутри блока)
  var GROUPS=[
    ['.gs',['.gs__item']],
    ['.gb-logos',['.gb-logos__pill']],
    ['.gb-services',['.gb-eyebrow','.gb-title','.gb-lead']],
    ['.pf',['.pf__eyebrow','.pf__title','.pf__lead','.pf__filters']],
    ['.gb-steps',['.gb-eyebrow','.gb-title','.gb-lead']],
    ['.gl',['.gl__stage','.gl__title','.gl__lead','.gl-form']],
    ['.gc',['.gc__wrap > div','.gc__bottom']]
  ];
  document.addEventListener('DOMContentLoaded',function(){
    if(!('IntersectionObserver' in window))return;
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
    GROUPS.forEach(function(g){
      var root=document.querySelector(g[0]);if(!root)return;
      var k=0;
      g[1].forEach(function(sel){[].forEach.call(root.querySelectorAll(sel),function(el){
        el.classList.add('g-rv');el.style.transitionDelay=Math.min(k++,5)*.09+'s';io.observe(el)})});
    });
  });
})();
