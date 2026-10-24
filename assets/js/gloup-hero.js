(function(){
  // Интро первого экрана: заголовок по словам → подзаголовок → карточки по кругу → дуга и счётчик → карусель начинает крутиться
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var REC='#rec4262352703';
  var TITLE='1790174163923',SUB='1790174546975',RING='1790523969527',NUM='1790524198655000012',CAP='1790524254098';
  var CARDS=['1790523826390','1790523852301000001','1790523868310000002','1790523879176000003','1790523879275000004','1790523999367000005','1790524008747000006','1790524030671000007','1790524077358000008','1790524101745000009','1790524120948000010','1790524131265000011'];
  var root=document.querySelector(REC);if(!root)return;
  function el(id){var e=root.querySelector('[data-elem-id="'+id+'"]');return e&&(e.querySelector('.tn-atom')||e)}
  root.classList.add('gh-intro');
  // сразу прячем, чтобы не мигало до старта
  [SUB,RING,NUM,CAP].forEach(function(id){var e=el(id);e&&e.classList.add('gh-fade')});
  CARDS.forEach(function(id){var e=el(id);e&&e.classList.add('gh-card')});
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
    var wrapper=el(CARDS[0])&&el(CARDS[0]).closest('.tn-atom__sbs-anim-wrapper');
    // карточки лежат в группе Tilda, её крутит CSS-анимация на обёртке
    if(wrapper)wrapper.style.animationPlayState='paused';
    var words=[].slice.call(root.querySelectorAll('.gh-w'));
    words.forEach(function(w,k){at(150+k*90,function(){w.classList.add('is-in')})});
    var t=150+words.length*90+250;
    at(t,function(){el(SUB)&&el(SUB).classList.add('is-in')});
    t+=350;
    CARDS.forEach(function(id,k){at(t+k*110,function(){el(id)&&el(id).classList.add('is-in')})});
    t+=CARDS.length*110+300;
    at(t,function(){[RING,NUM,CAP].forEach(function(id){el(id)&&el(id).classList.add('is-in')})});
    at(t+500,function(){if(wrapper)wrapper.style.animationPlayState='running'});
  }
  if(document.readyState==='complete')at(200,start);else addEventListener('load',function(){at(200,start)});
  // подстраховка: если что-то пошло не так, через 6 с всё показываем
  at(6000,function(){root.querySelectorAll('.gh-w,.gh-fade,.gh-card').forEach(function(e){e.classList.add('is-in')})});
})();
