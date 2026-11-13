(function(){
  // Заявки уходят в Google-форму (data-gform у формы). Имена полей — entry.* из этой формы.
  // Значения чекбоксов услуг должны совпадать с вариантами в Google-форме.
  var FIELDS={name:'entry.978458685',contact:'entry.1468784854',service:'entry.2053773197',message:'entry.1860947187'};
  document.addEventListener('DOMContentLoaded',function(){
    var form=document.querySelector('.gl-form');if(!form)return;
    // все кнопки BRIEF/«Обсудить» ведут к форме
    function toLead(e){if(e)e.preventDefault();document.getElementById('lead').scrollIntoView({behavior:'smooth'});setTimeout(function(){var i=form.querySelector('input');i&&i.focus({preventScroll:true})},700)}
    [].forEach.call(document.querySelectorAll('.tn-atom__button-text'),function(t){if(/brief/i.test(t.textContent)){var b=t.closest('.tn-atom');b.style.cursor='pointer';b.addEventListener('click',toLead)}});
    document.addEventListener('click',function(e){var a=e.target.closest('a[href="#lead"]');if(a)toLead(e)});

    // плавающая кнопка заявки. Живёт в <html>: Tilda ставит transform на body, и fixed внутри body уезжает
    var fab=document.createElement('a');fab.href='#lead';fab.className='gl-fab';fab.setAttribute('aria-label','Оставить заявку');
    fab.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5h14v10H9l-4 4z"/><path d="M9 10h6"/></svg><span>Оставить заявку</span>';
    document.documentElement.appendChild(fab);
    fab.addEventListener('click',toLead);
    // прячем, когда форма уже на экране
    if('IntersectionObserver' in window){new IntersectionObserver(function(es){fab.classList.toggle('is-hidden',es[0].isIntersecting)},{threshold:.25}).observe(document.getElementById('lead'))}

    function check(name,ok){var f=form.querySelector('[name="'+name+'"]').closest('.gl-field');f.classList.toggle('is-error',!ok);return ok}
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var d=new FormData(form),name=(d.get('name')||'').trim(),contact=(d.get('contact')||'').trim();
      var ok=check('name',name.length>1)&check('contact',/^@?[\w.]{4,}$|^\+?[\d\s()-]{7,}$/.test(contact));
      if(!ok){var bad=form.querySelector('.is-error input');bad&&bad.focus();return}
      var body=new URLSearchParams();
      body.append(FIELDS.name,name);body.append(FIELDS.contact,contact);
      d.getAll('service').forEach(function(s){body.append(FIELDS.service,s)});
      body.append(FIELDS.message,(d.get('message')||'').trim());
      var btn=form.querySelector('.gl-submit');btn.disabled=true;btn.firstChild.textContent='Отправляем… ';
      // Google Forms не отдаёт CORS-заголовки: ответ «непрозрачный», поэтому успехом считаем отсутствие сетевой ошибки
      fetch(form.dataset.gform,{method:'POST',mode:'no-cors',body:body})
        .then(function(){form.classList.add('is-sent')})
        .catch(function(){btn.disabled=false;btn.firstChild.textContent='Отправить заявку ';alert('Не удалось отправить заявку. Проверьте интернет и попробуйте ещё раз или напишите нам в WhatsApp.')});
    });
    form.addEventListener('input',function(e){var f=e.target.closest('.gl-field');if(f)f.classList.remove('is-error')});
  });
})();
