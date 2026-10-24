(function(){
  // Куда отправлять заявки: укажите URL в data-endpoint у формы (например, вебхук Tilda, Make или Telegram-бота).
  // Пока endpoint пустой, форма только показывает экран «Заявка отправлена».
  document.addEventListener('DOMContentLoaded',function(){
    var form=document.querySelector('.gl-form');if(!form)return;
    // все кнопки BRIEF/«Обсудить» ведут к форме
    function toLead(e){e.preventDefault();document.getElementById('lead').scrollIntoView({behavior:'smooth'});setTimeout(function(){var i=form.querySelector('input');i&&i.focus({preventScroll:true})},700)}
    [].forEach.call(document.querySelectorAll('.tn-atom__button-text'),function(t){if(/brief/i.test(t.textContent)){var b=t.closest('.tn-atom');b.style.cursor='pointer';b.addEventListener('click',toLead)}});
    document.addEventListener('click',function(e){var a=e.target.closest('a[href="#lead"]');if(a)toLead(e)});
    function check(name,ok){var f=form.querySelector('[name="'+name+'"]').closest('.gl-field');f.classList.toggle('is-error',!ok);return ok}
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var d=new FormData(form),name=(d.get('name')||'').trim(),contact=(d.get('contact')||'').trim();
      var ok=check('name',name.length>1)&check('contact',/^@?[\w.]{4,}$|^\+?[\d\s()-]{7,}$/.test(contact));
      if(!ok){var bad=form.querySelector('.is-error input');bad&&bad.focus();return}
      var payload={name:name,contact:contact,services:d.getAll('service'),message:(d.get('message')||'').trim(),page:location.href};
      var btn=form.querySelector('.gl-submit');btn.disabled=true;btn.firstChild.textContent='Отправляем… ';
      var url=form.dataset.endpoint;
      var req=url?fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}):Promise.resolve();
      req.then(function(r){if(r&&!r.ok)throw 0;form.classList.add('is-sent')})
         .catch(function(){btn.disabled=false;btn.firstChild.textContent='Отправить заявку ';alert('Не удалось отправить заявку. Проверьте интернет и попробуйте ещё раз или напишите нам в Instagram.')});
    });
    form.addEventListener('input',function(e){var f=e.target.closest('.gl-field');if(f)f.classList.remove('is-error')});
  });
})();
