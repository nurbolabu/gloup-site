(function(){
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  var ARROW='<svg class="g-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  var plus='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';

  // Логотипы: пока текстовые знаки. Когда будут SVG-логотипы, замените t на <img>.
  // nda:1 — размытый знак без настоящего названия.
  var LOGOS=[
    {t:'VOGUE',s:'Hotel Supreme',c:'serif'},{t:'Candyland',c:'round'},{t:'LVI',s:'Hotels & Resorts',c:'bebas'},
    {t:'THE RISE',s:'Bodrum',c:'wide'},{t:'PINSKY',s:'Beach Lounge',c:'bebas'},
    {t:'Jannat Garden',c:'italic'},{t:'Toranaga',s:'Teppanyaki',c:'italic'},
    {t:'HERO ELD',c:'bebas'},{t:'USA TV',c:'round'},{t:'OWAY CARGO',c:'wide'},{t:'Modern Nomad',c:'thin'}];
  var SERVICES=[
    {n:'Стратегия',d:'Аудит, цели, анализ рынка и конкурентов и пошаговый план роста бренда.',c:['Аудит','Позиционирование','Маркетинговая стратегия','Вывод на рынок','B2B · B2G · экспорт'],tag:'Стратегия'},
    {n:'Брендинг',d:'Позиционирование и визуальный образ, которые отличают вас от конкурентов и позволяют продавать дороже.',c:['Нейминг','Логотип и айдентика','Брендбук','Упаковка','Ребрендинг'],tag:'Брендинг'},
    {n:'SMM',d:'Системное присутствие бренда в соцсетях: контент, вовлечённость, доверие.',c:['Контент-план','Ведение аккаунтов','Reels и Stories','Комьюнити'],tag:'Full outsourcing'},
    {n:'Продакшн',d:'Фото и видео под задачу бизнеса — от идеи и сценария до съёмки и монтажа.',c:['Фотосъёмка','Видеопродакшн','Reels','Постпродакшн'],tag:'Продакшн'},
    {n:'Таргет и трафик',d:'Рекламные кампании с фокусом на стоимость лида и окупаемость.',c:['Meta Ads','TikTok Ads','Воронки продаж','Аналитика'],tag:'Трафик'},
    {n:'Контекстная реклама',d:'Работаем с горячим спросом в поиске и на YouTube.',c:['Google Ads','Яндекс Директ','YouTube']},
    {n:'Инфлюенс-маркетинг',d:'Блогеры и звёзды, которые приводят целевую аудиторию, и креативы под них.',c:['Подбор блогеров','Звёзды и артисты','Креативные подачи','Отчёт по охватам'],tag:'Инфлюенс-маркетинг'},
    {n:'PR и ивенты',d:'Репутация, медиа и мероприятия, которые усиливают бренд.',c:['Медиа','Коллаборации','Ивенты','Кризисные коммуникации'],tag:'PR и стратегия'},
    {n:'Full outsourcing',d:'Маркетинг под ключ: берём на себя весь отдел маркетинга.',c:['Стратегия','SMM','Продакшн','Реклама','Инфлюенс','Аналитика'],tag:'Full outsourcing'}
  ];
  var IC={
    brief:'<path d="M8 3h8l2 2h1v16H5V5h1z"/><path d="M8 11h8M8 15h5"/>',
    search:'<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    route:'<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7"/>',
    rocket:'<path d="M5 15c-1.5 1-2 4-2 6 2 0 5-.5 6-2M14 4c3-1 6-1 7-1 0 1 0 4-1 7l-6 6-5-5z"/>',
    chart:'<path d="M3 20h18M6 16v-4M11 16V8M16 16v-6"/>'
  };
  var STEPS=[
    {i:'brief',m:'Шаг 1',t:'Брифинг',x:'Подробно знакомимся с вашим брендом и задачей. Изучаем сильные стороны бренда для правильного позиционирования.'},
    {i:'search',m:'Шаг 2',t:'Анализ конкурентов и ресёрч',x:'Анализируем конкурентов и собираем важные данные, чтобы лучше изучить вашу нишу и выстроить выгодную стратегию.'},
    {i:'route',m:'Шаг 3',t:'Стратегия и планирование',x:'Предлагаем стратегию и план реализации задач для достижения результата — под ваши цели.'},
    {i:'rocket',m:'Шаг 4',t:'Реализация',x:'Запускаем продакшн, рекламу, SMM, инфлюенс и PR — каждый инструмент работает на общую цель.'},
    {i:'chart',m:'Шаг 5',t:'Аналитика и рост',x:'Отслеживаем метрики, оптимизируем и масштабируем то, что приносит результат.'}
  ];

  function reveal(nodes,cls,th){
    if(!('IntersectionObserver' in window)){nodes.forEach(function(n){n.classList.add(cls)});return}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add(cls);io.unobserve(e.target)}})},{threshold:th||.2});
    nodes.forEach(function(n){io.observe(n)});
  }

  // Скрипт Tilda сам дописывает плашку «Made on Tilda» в конец страницы — удаляем её, когда появится
  function dropTildaLabel(){[].forEach.call(document.querySelectorAll('.t-tildalabel,#tildacopy'),function(n){n.remove()})}
  if('MutationObserver' in window)new MutationObserver(dropTildaLabel).observe(document.documentElement,{childList:true,subtree:true});

  document.addEventListener('DOMContentLoaded',function(){
    var track=document.querySelector('.gb-logos__track');
    if(track){var h=LOGOS.map(function(l){return '<span class="gb-logo gb-logo--'+l.c+(l.nda?' gb-logo--nda':'')+'"'+(l.nda?' aria-hidden="true"':'')+'>'+esc(l.t)+(l.s?'<small>'+esc(l.s)+'</small>':'')+'</span>'}).join('');
      track.innerHTML=h+h.replace(/class="gb-logo/g,'aria-hidden="true" class="gb-logo')}

    var svc=document.querySelector('.gb-svc');
    if(svc){
      svc.innerHTML=SERVICES.map(function(s,k){
        return '<div class="gb-svc__item"><div class="gb-svc__card"><button class="gb-svc__head" type="button" aria-expanded="false" aria-controls="gbs'+k+'">'+
          '<span class="gb-svc__name">'+esc(s.n)+'</span><span class="gb-svc__desc">'+esc(s.d)+'</span><span class="gb-svc__plus">'+plus+'</span></button>'+
          '<div class="gb-svc__body" id="gbs'+k+'"><div class="gb-svc__inner"><div class="gb-svc__content"><div class="gb-svc__chips">'+
          s.c.map(function(c,i){return '<span style="transition-delay:'+(.08+i*.05)+'s">'+esc(c)+'</span>'}).join('')+'</div><div class="gb-svc__actions">'+
          (s.tag?'<button class="gb-btn" type="button" data-cases="'+esc(s.tag)+'">Смотреть кейсы</button>':'')+
          '<a class="gb-btn" href="#lead">Обсудить '+ARROW+'</a></div></div></div></div></div></div>';
      }).join('');
      var items=[].slice.call(svc.children);
      items.forEach(function(it,k){it.style.transitionDelay=Math.min(k,4)*.06+'s'});
      reveal(items,'is-in',.15);
      svc.addEventListener('click',function(e){
        var cases=e.target.closest('[data-cases]');
        if(cases){var pf=document.querySelector('.pf');var chip=pf&&[].filter.call(pf.querySelectorAll('.pf-chip'),function(c){return c.dataset.tag===cases.dataset.cases})[0];
          if(chip)chip.click();if(pf)pf.scrollIntoView({behavior:'smooth'});return}
        var head=e.target.closest('.gb-svc__head');if(!head)return;
        var it=head.closest('.gb-svc__item'),open=!it.classList.contains('is-open');
        items.forEach(function(o){o.classList.remove('is-open');o.querySelector('.gb-svc__head').setAttribute('aria-expanded','false')});
        if(open){it.classList.add('is-open');head.setAttribute('aria-expanded','true')}
      });
    }

    // Этапы: линия идёт через иконки шагов; когда доходит до иконки — та заполняется фирменным цветом
    var tl=document.querySelector('.gb-tl');
    if(tl){
      tl.className='gb-path';
      tl.innerHTML='<div class="gb-path__line" aria-hidden="true"><i></i></div><ol class="gb-path__list">'+STEPS.map(function(s){
        return '<li class="gb-path__step"><span class="gb-path__node"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+IC[s.i]+'</svg></span>'+
          '<div class="gb-path__text"><span class="gb-path__meta">'+s.m+'</span><h3>'+esc(s.t)+'</h3><p>'+esc(s.x)+'</p></div></li>';
      }).join('')+'</ol>';
      var line=tl.querySelector('.gb-path__line'),fill=line.firstChild,nodes=[].slice.call(tl.querySelectorAll('.gb-path__node')),tick=false;
      reveal([].slice.call(tl.querySelectorAll('.gb-path__step')),'is-in',.3);
      function place(){
        // линия от центра первой иконки до центра последней
        // offsetTop/Left не учитывают transform, поэтому анимация появления шагов не сдвигает линию
        function pos(el){var x=0,y=0;while(el&&el!==tl){x+=el.offsetLeft;y+=el.offsetTop;el=el.offsetParent}return {x:x+nodes[0].offsetWidth/2,y:y+nodes[0].offsetHeight/2}}
        var f=pos(nodes[0]),l=pos(nodes[nodes.length-1]);
        var vert=l.y-f.y>l.x-f.x;tl.classList.toggle('is-vert',vert);
        if(vert){line.style.cssText='left:'+f.x+'px;top:'+f.y+'px;height:'+(l.y-f.y)+'px;width:1px'}
        else{line.style.cssText='top:'+f.y+'px;left:'+f.x+'px;width:'+(l.x-f.x)+'px;height:1px'}
        prog();
      }
      function prog(){tick=false;
        var r=line.getBoundingClientRect(),vh=innerHeight,vert=tl.classList.contains('is-vert'),p;
        if(vert)p=(vh*.62-r.top)/Math.max(r.height,1);
        else{var s=tl.getBoundingClientRect();p=(vh*.8-s.top)/(s.height*.9)}
        p=Math.min(1,Math.max(0,p));fill.style.transform=(vert?'scaleY(':'scaleX(')+p.toFixed(4)+')';
        nodes.forEach(function(n,k){n.classList.toggle('is-on',p>=k/(nodes.length-1)-.002)});
      }
      addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(prog)}},{passive:true});
      addEventListener('resize',place);addEventListener('load',place);place();
    }
  });
})();
