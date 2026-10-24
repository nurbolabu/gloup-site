(function(){
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  var plus='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';

  // Логотипы: пока текстовые знаки. Когда будут SVG-логотипы, замените t на <img>.
  // nda:1 — размытый знак без настоящего названия.
  var LOGOS=[
    {t:'VOGUE',s:'Hotel Supreme',c:'serif'},{t:'Candyland',c:'round'},{t:'LVI',s:'Hotels & Resorts',c:'bebas'},
    {t:'NDA BRAND',c:'wide',nda:1},{t:'THE RISE',s:'Bodrum',c:'wide'},{t:'PINSKY',s:'Beach Lounge',c:'bebas'},
    {t:'Jannat Garden',c:'italic'},{t:'Toranaga',s:'Teppanyaki',c:'italic'},{t:'NDA',c:'box',nda:1},
    {t:'HERO ELD',c:'bebas'},{t:'USA TV',c:'round'},{t:'OWAY CARGO',c:'wide'},{t:'Modern Nomad',c:'thin'},{t:'HIDDEN',c:'serif',nda:1}
  ];
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
          '<a class="gb-btn" href="#lead">Обсудить ↗</a></div></div></div></div></div></div>';
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

    var tl=document.querySelector('.gb-tl');
    if(tl){
      tl.innerHTML='<div class="gb-tl__line"><i></i></div>'+STEPS.map(function(s,k){
        return '<div class="gb-st"><span class="gb-st__dot"></span><div class="gb-st__file" style="transition-delay:'+k*.12+'s"><div class="gb-st__bar"><span class="gb-st__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+IC[s.i]+'</svg></span><span class="gb-st__meta">'+s.m+'</span></div><h3>'+esc(s.t)+'</h3><p>'+esc(s.x)+'</p></div></div>';
      }).join('');
      var steps=[].slice.call(tl.querySelectorAll('.gb-st'));
      reveal(steps,'is-in',.3);
      var line=tl.querySelector('.gb-tl__line'),tick=false;
      function prog(){tick=false;var r=tl.getBoundingClientRect(),vh=innerHeight;
        var p=Math.min(1,Math.max(0,(vh*.85-r.top)/(r.height+vh*.35)));line.style.setProperty('--p',p.toFixed(3))}
      addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(prog)}},{passive:true});prog();
    }
  });
})();
