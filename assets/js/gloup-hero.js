(function(){
  // Интро первого экрана: карточки и вращение — сразу; появляется только текст:
  // заголовок по словам → подзаголовок → счётчик с подписью
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var REC='#rec4262352703';
  var TITLE='1790174163923',SUB='1790174546975',NUM='1790524198655000012',CAP='1790524254098';
  var root=document.querySelector(REC);if(!root)return;
  // Tilda перезаписывает className у элементов при инициализации — вешаем классы на внутренний .tn-atom
  function el(id){var e=root.querySelector('[data-elem-id="'+id+'"]');return e&&(e.querySelector('.tn-atom')||e)}
  root.classList.add('gh-intro');
  [SUB,NUM,CAP].forEach(function(id){var e=el(id);e&&e.classList.add('gh-fade')});
  var atom=el(TITLE);
  if(atom){
    // каждое слово — в маску, слово выезжает снизу
    (function wrap(node){[].slice.call(node.childNodes).forEach(function(n){
      if(n.nodeType===3){var f=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(function(w){
        if(!w)return;if(/^\s+$/.test(w)){f.appendChild(document.createTextNode(w));return}
        var o=document.createElement('span');o.className='gh-w';var i=document.createElement('span');i.textContent=w;o.appendChild(i);f.appendChild(o)});
        n.parentNode.replaceChild(f,n)}
      else if(n.nodeType===1&&n.tagName!=='BR')wrap(n)})})(atom);
  }
  function at(ms,fn){setTimeout(fn,ms)}
  function start(){
    var words=[].slice.call(root.querySelectorAll('.gh-w'));
    words.forEach(function(w,k){at(150+k*110,function(){w.classList.add('is-in')})});
    var t=150+words.length*110+250;
    at(t,function(){el(SUB)&&el(SUB).classList.add('is-in')});
    at(t+400,function(){[NUM,CAP].forEach(function(id){el(id)&&el(id).classList.add('is-in')})});
  }
  if(document.readyState==='complete')at(150,start);else addEventListener('load',function(){at(150,start)});
  // подстраховка: если что-то пошло не так, через 5 с показываем весь текст
  at(5000,function(){root.querySelectorAll('.gh-w,.gh-fade').forEach(function(e){e.classList.add('is-in')})});
})();
