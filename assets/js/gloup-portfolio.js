(function(){
  // Одна папка = один проект. big/bigText — акцентная цифра в карточке «Результат», people — список инфлюенсеров.
  // Одна папка = один кейс. req/sol/res — «Запрос / Решение / Результат» (как в документе клиента).
  // big/bigText — акцентная цифра, people — инфлюенсеры и звёзды, hide — подпись «логотип/имя скрыто» для NDA.
  var P=[
    {tag:'Стратегия',name:'БекемБлок',nda:1,hide:'логотип скрыт',text:'Переход с B2C на B2B и B2G — склады распроданы на полгода вперёд',
     req:'Перейти от розничной модели B2C к корпоративному и государственному сегментам.',sol:'Изменение рыночного позиционирования и переориентация бизнеса на B2B- и B2G-клиентов.',res:'Переход на новые сегменты продаж и распроданные производственные запасы на полгода вперёд.',big:'6 мес.',bigText:'склады распроданы вперёд'},
    {tag:'Full outsourcing',name:'Vogue Hotel Supreme Bodrum',img:['vogue-4','vogue-1','vogue-2'],text:'Маркетинг под ключ: рост подписчиков +40 тыс., инфлюенс-кампания и ивент',
     req:'Комплексно вести маркетинг отеля и усилить его присутствие в соцсетях.',sol:'Маркетинг под ключ: ведение соцсетей, инфлюенс-кампания и ивент.',big:'+40 тыс.',bigText:'подписчиков'},
    {tag:'Вывод на рынок',name:'Jannat Garden',nda:1,text:'Запуск косметического бренда с солдаутом на всё лето 2025 года',
     req:'Вывести новый косметический бренд на рынок и сформировать спрос с момента запуска.',sol:'Разработка стратегии выхода на рынок и позиционирования нового бренда.',res:'Успешный запуск и солдаут продукции на протяжении всего лета 2025 года.',big:'Sold out',bigText:'всё лето 2025'},
    {tag:'Инфлюенс-маркетинг',name:'The Rise Bodrum',img:['rise-1','rise-2','rise-3'],text:'Кампания с Тимати, Rampa, Катей Лель, Maria Ost',
     req:'Привлечь внимание к отелю через узнаваемых артистов и блогеров.',sol:'Инфлюенс-кампания со звёздами и работа над стоимостью лида.',people:['Тимати','Rampa','Катя Лель','Maria Ost']},
    {tag:'Стратегия',name:'N Group',nda:1,hide:'логотип скрыт',text:'Вывод на рынок 10 компаний и трансформация бизнеса в холдинг',
     req:'Объединить направления бизнеса в единую структуру и вывести на рынок 10 дочерних компаний.',sol:'Трансформация корпоративной структуры и переход к модели холдинга.',res:'10 компаний выведены на рынок. Бизнес перешёл к холдинговой модели.',big:'10',bigText:'компаний выведены на рынок'},
    {tag:'Инфлюенс-маркетинг',tags:'Инфлюенс-маркетинг, Трафик, Контекстная реклама (Google Ads), Продакшн',name:'Candyland',img:['candy-1','candy-2','candy-3'],text:'Инфлюенс-кампания с Катей Лель, Аней Ищук и другими блогерами и таргет: +69 тыс. подписчиков',
     req:'Развить инфлюенс-маркетинг парка развлечений Candyland при Vogue Hotel Supreme Bodrum.',sol:'Инфлюенс-кампания с артистами и блогерами, таргет и Google Ads, продакшн.',big:'+69 тыс.',bigText:'подписчиков с инфлюенсом и таргетом',
     people:['Катя Лель','Аня Ищук','dimasblog','Настя Титонова','Даня Титонова','Валентин Есаян','Ivetti7','Тимати','Rampa','Betsy','Мария Янковская','Polina Dubkova','Milana Khametova','Olesiastarkova','Regina Todorenko','Kristina Dudkova','Настя Князева','Adrenalin TikTok House','Amina Kikido','Aslanshukasha','Kamil Kikido']},
    {tag:'Стратегия',name:'Agroway',nda:1,hide:'логотип скрыт',text:'Выход на экспорт и контракты, обеспечившие солдаут на год вперёд',
     req:'Выйти за пределы внутреннего рынка и создать устойчивый спрос на продукцию на экспортных направлениях.',sol:'Развитие экспортного направления и адаптация рыночной стратегии для выхода на международный рынок.',res:'Выход на экспорт и реализация объёма продукции на год вперёд.',big:'1 год',bigText:'продукция реализована вперёд'},
    {tag:'Ребрендинг',name:'EverNew',nda:1,hide:'логотип скрыт',tags:'Кризисный маркетинг · Ребрендинг · Девелопмент',text:'Выход из маркетингового кризиса и солдаут трёх блоков ЖК за 5 месяцев',
     req:'Преодолеть маркетинговый кризис, обновить позиционирование жилого комплекса и восстановить продажи.',sol:'Кризисная маркетинговая стратегия и ребрендинг проекта.',res:'Первые три блока жилого комплекса полностью распроданы за 5 месяцев.',big:'3 блока',bigText:'ЖК распроданы за 5 месяцев'},
    {tag:'PR и стратегия',name:'Персональный PR',nda:1,hide:'имя скрыто',text:'48% голосов избирателей и более 10 000 новых подписчиков',
     req:'Повысить узнаваемость кандидата, усилить публичное присутствие и поддержку аудитории.',sol:'Разработка и реализация стратегии PR-продвижения и публичных коммуникаций.',big:'48%',bigText:'голосов избирателей и +10 000 подписчиков'},
    {tag:'Вывод на рынок',name:'Этажи',nda:1,hide:'логотип скрыт',tags:'Вывод на рынок · Real Estate · Digital',text:'Запуск новой цифровой платформы для покупки недвижимости',
     req:'Представить рынку новую цифровую платформу для покупки недвижимости.',sol:'Разработка стратегии вывода продукта на рынок и его позиционирования.',res:'Запуск новой платформы для покупки недвижимости.'},
    {tag:'Продакшн',name:'Vogue Hotel Supreme Istanbul',text:'Продакшн для премиального отеля',
     req:'Создать визуальный контент уровня премиального отеля.',sol:'Продакшн: фото- и видеосъёмка для соцсетей и рекламы.'},
    {tag:'Инфлюенс-маркетинг',tags:'Продакшн · Инфлюенс-маркетинг',name:'LVI Hotels & Resorts Bodrum',text:'Продакшн, Burak Özçivit, Torerroo, Аня Ищук, Dimas Blog',
     req:'Вывести отель на премиальный и платёжеспособный рынок.',sol:'Продакшн и премиальный инфлюенс-маркетинг со звёздами.',people:['Burak Özçivit','Torerroo','Аня Ищук','Dimas Blog']},
    {tag:'Full outsourcing',name:'Pinsky Beach Lounge & Restaurant',text:'Франшиза Pinsky, работа с Тимати',
     req:'Запустить и продвинуть заведение франшизы Pinsky.',sol:'Маркетинг под ключ и работа со звёздами, фокус на стоимости лида.',people:['Тимати','Rampa']},
    {tag:'Продакшн',name:'Toranaga Teppanyaki',text:'Продакшн, вывод на рынок',
     req:'Вывести ресторан на рынок.',sol:'Продакшн и коллаборация с блогером.',people:['Настя Серовски']},
    {tag:'Трафик',name:'AITIM Group',nda:1,text:'Таргет и воронка продаж. Плюс продакшн',
     req:'Выстроить стабильный поток заявок.',sol:'Таргетированная реклама, воронка продаж и продакшн.'},
    {tag:'Трафик',name:'USA TV',text:'Таргет и YouTube-продвижение',
     req:'Нарастить аудиторию медиа-проекта.',sol:'Таргетированная реклама и продвижение на YouTube.'},
    {tag:'Брендинг',name:'HERO ELD',text:'Продвижение IT-проекта',
     req:'Продвинуть IT-продукт — приложение электронного журнала для траковых компаний в США.',sol:'Продвижение IT-проекта.'},
    {tag:'Трафик',name:'OWAY CARGO',text:'Таргет и упаковка бренда',
     req:'Упаковать бренд карго-компании и запустить поток клиентов.',sol:'Упаковка бренда и таргетированная реклама.'},
    {tag:'Full outsourcing',name:'Modern Nomad',text:'Продвижение, таргет, SMM и дизайн',
     req:'Комплексно вести маркетинг бренда.',sol:'Продвижение, таргет, SMM и дизайн.'}
  ];
  var FILE={'Стратегия':['Strategy','PDF'],'Вывод на рынок':['Go-to-market','PDF'],'Ребрендинг':['Brandbook','PDF'],'PR и стратегия':['PR plan','DOC'],'Брендинг':['Brandbook','PDF'],'PR':['PR plan','DOC'],'Продакшн':['Shooting','MOV'],'Инфлюенс-маркетинг':['Influencers','XLS'],'Трафик':['Ads report','PDF'],'Full outsourcing':['Media plan','PDF']};
  // обложки без фото: один фирменный цвет #b86d75 на разных тёмных основах
  var PAL=[['#b86d75','#1d1416','rgba(255,255,255,.32)'],['#b86d75','#120c0d','rgba(255,255,255,.22)'],['#b86d75','#2a1b1e','rgba(255,255,255,.4)'],['#b86d75','#0d0a0b','rgba(255,255,255,.28)'],['#b86d75','#241719','rgba(255,255,255,.36)']];
  function art(i){var p=PAL[i%PAL.length],a=(i*47)%100,b=(i*73+30)%100;
    return 'background:radial-gradient(60% 80% at '+a+'% 20%,'+p[2]+' 0%,transparent 60%),radial-gradient(70% 90% at '+b+'% 90%,'+p[0]+' 0%,transparent 65%),linear-gradient('+(i*37%360)+'deg,'+p[1]+','+p[0]+' 55%,'+p[1]+')'}
  // фото из официального Instagram (assets/cases), если есть; иначе фирменный градиент
  function pic(p,i,k){return p.img&&p.img[k]?'background:#1b1819 url(assets/cases/'+p.img[k]+'.jpg) center/cover no-repeat':art(i+(k?2:0))}
  var arrow='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function folder(p,i){var f=FILE[p.tag]||['Brief','PDF'];
    return '<button class="pf-folder" type="button" data-i="'+i+'" data-tag="'+esc(p.tag)+'" aria-label="Открыть кейс '+esc(p.name)+'">'+
      '<span class="pf-body">'+
      '<span class="pf-back'+(p.nda?' pf-back--nda':'')+'" style="'+pic(p,i,0)+'">'+(p.nda?'<span class="pf-lock">NDA</span>':'')+'</span>'+
      '<span class="pf-files">'+
        '<span class="pf-file"><span class="pf-file__bar">Brief<em>TXT · 6 KB</em></span><i></i><i></i><i></i></span>'+
        '<span class="pf-file"><span class="pf-file__bar">'+f[0]+'<em>'+f[1]+'</em></span><i></i><i></i><i></i></span>'+
        '<span class="pf-file pf-file--art" style="'+pic(p,i,1)+'"><span class="pf-file__bar">'+esc(p.name.split(' ')[0])+'<em>JPG</em></span></span>'+
      '</span>'+
      '<span class="pf-front">'+(p.nda?'<span class="pf-nda">NDA</span>':'')+
        '<span class="pf-meta"><span class="pf-tag">'+esc(p.tag)+'</span><span class="pf-name">'+esc(p.name)+'</span><span class="pf-sub">'+esc(p.text)+'</span></span>'+
        '<span class="pf-open">'+arrow+'</span></span>'+
      '<span class="pf-shadow"></span></span></button>';
  }
  function sheets(p,i){
    var s=[{img:pic(p,i,0),nda:p.nda,t:'Запрос',x:esc(p.req||p.text)},{img:p.img&&p.img[2]?pic(p,i,2):'',t:'Решение',x:esc(p.sol||p.text)}];
    if(p.big||p.res)s.push({acc:1,t:'Результат',big:p.big,x:esc(p.big?(p.bigText||''):p.res)});
    if(p.people)s.push({t:'Работали с',people:p.people});
    return s.map(function(c,k){
      return '<article class="pf-sheet'+(c.acc?' pf-sheet--accent':'')+'" style="--r:'+[-12,8,-5,11][k]+'deg;transition-delay:'+(.06+k*.09)+'s">'+
        (c.img?'<div class="pf-sheet__img'+(c.nda?' pf-back--nda':'')+'" style="'+c.img+'">'+(c.nda?'<span class="pf-lock">NDA</span>':'')+'</div>':'')+
        '<div class="pf-sheet__body"><b>'+c.t+'</b>'+(c.big?'<span class="pf-sheet__big">'+c.big+'</span>':'')+
        (c.people?'<div class="pf-people">'+c.people.map(function(n){return '<span>'+esc(n)+'</span>'}).join('')+'</div>':'<p>'+c.x+'</p>')+'</div></article>';
    }).join('');
  }
  document.addEventListener('DOMContentLoaded',function(){
    var root=document.querySelector('.pf');if(!root)return;
    var grid=root.querySelector('.pf__grid'),filters=root.querySelector('.pf__filters'),more=root.querySelector('.pf-more');
    var LIMIT=6,cur='Все',expanded=false;
    var tags=['Все'];P.forEach(function(p){if(tags.indexOf(p.tag)<0)tags.push(p.tag)});
    filters.innerHTML=tags.map(function(t){return '<button type="button" class="pf-chip'+(t===cur?' is-active':'')+'" data-tag="'+esc(t)+'">'+esc(t)+'</button>'}).join('');
    grid.innerHTML=P.map(folder).join('');
    var items=[].slice.call(grid.querySelectorAll('.pf-folder'));
    var touch=!matchMedia('(hover:hover)').matches;
    var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;
        el.classList.add('is-in');
        if(touch){el.classList.remove('is-peek');setTimeout(function(){el.classList.add('is-peek')},350)}
        io.unobserve(el)})},{threshold:.3}):null;
    function render(){
      var shown=0;
      items.forEach(function(el){var ok=cur==='Все'||el.dataset.tag===cur;var vis=ok&&(expanded||cur!=='Все'||shown<LIMIT);
        if(vis){var wasHidden=el.hidden;el.hidden=false;el.style.transitionDelay=(shown%3)*.1+'s';shown++;
          if(wasHidden||!el.classList.contains('is-in')){el.classList.remove('is-in');if(io)io.observe(el);else el.classList.add('is-in')}}
        else el.hidden=true});
      var total=cur==='Все'?P.length:0;
      more.hidden=!(cur==='Все'&&!expanded&&total>LIMIT);
      more.querySelector('span').textContent='Показать все кейсы ('+P.length+')';
    }
    filters.addEventListener('click',function(e){var b=e.target.closest('.pf-chip');if(!b)return;cur=b.dataset.tag;
      [].forEach.call(filters.children,function(c){c.classList.toggle('is-active',c===b)});render()});
    more.addEventListener('click',function(){expanded=true;render()});
    render();

    var modal=root.parentElement.querySelector('.pf-modal');
    // Скрипты Tilda ставят transform на body, из-за чего position:fixed считается от страницы, а не от экрана.
    // Поэтому окно кейса живёт прямо в <html>, вне body.
    document.documentElement.appendChild(modal);
    var box=modal.querySelector('.pf-sheets'),head=modal.querySelector('.pf-modal__head'),last;
    function open(btn){
      var i=+btn.dataset.i,p=P[i];last=btn;
      head.innerHTML='<small>'+esc(p.tags||p.tag)+(p.nda?' · NDA':'')+'</small><h3>'+esc(p.name)+'</h3>'+(p.hide?'<p>'+p.hide+'</p>':'');
      box.innerHTML=sheets(p,i);box.style.setProperty('--n',box.children.length);box.scrollTop=0;
      // карточки вылетают из папки, по которой нажали
      var r=btn.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height*.35;
      [].forEach.call(box.children,function(s){var b=s.getBoundingClientRect();
        s.style.setProperty('--fx',(cx-(b.left+b.width/2))+'px');s.style.setProperty('--fy',(cy-(b.top+b.height/2))+'px')});
      box.offsetWidth;
      modal.classList.add('is-open');modal.querySelector('.pf-close').focus({preventScroll:true});
    }
    function close(){if(!modal.classList.contains('is-open'))return;modal.classList.remove('is-open');if(last)last.focus({preventScroll:true})}
    grid.addEventListener('click',function(e){var b=e.target.closest('.pf-folder');if(b)open(b)});
    modal.querySelector('.pf-close').addEventListener('click',close);
    modal.querySelector('.pf-modal__bg').addEventListener('click',close);
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  });
})();
