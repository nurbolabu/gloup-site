(function(){
  var MIN=640,MAX=1199,PAD=16;
  function fit(){
    var w=document.documentElement.clientWidth;
    document.querySelectorAll('.t396__artboard').forEach(function(a){
      var els=[].slice.call(a.querySelectorAll(':scope > .tn-elem'));
      if(!a.dataset.gH){a.dataset.gH=a.dataset.artboardHeight}
      els.forEach(function(e){e.style.zoom=''});
      [a,a.querySelector('.t396__carrier'),a.querySelector('.t396__filter')].forEach(function(n){if(n&&n.dataset.gSet){n.style.height='';delete n.dataset.gSet}});
      if(w<MIN||w>MAX||!els.length||a.dataset.artboardPos==='fixed')return;
      var c=w/2,half=0;
      els.forEach(function(e){var b=e.getBoundingClientRect();if(!b.width)return;half=Math.max(half,Math.abs(b.left-c),Math.abs(b.right-c))});
      var f=Math.max(parseFloat(a.dataset.gH)<300?0.5:0.82,Math.min(1,(w/2-PAD)/Math.max(half,1)));
      if(f>=0.999)return;
      els.forEach(function(e){e.style.zoom=f});
      var h=Math.round(parseFloat(a.dataset.gH)*f)+'px';
      [a,a.querySelector('.t396__carrier'),a.querySelector('.t396__filter')].forEach(function(n){if(n){n.style.height=h;n.dataset.gSet='1'}});
    });
  }
  var t;function later(){clearTimeout(t);t=setTimeout(fit,80)}
  window.addEventListener('resize',later);window.addEventListener('orientationchange',later);window.addEventListener('load',function(){fit();setTimeout(fit,600)});
  document.addEventListener('DOMContentLoaded',function(){
    if(matchMedia('(hover:hover)').matches)document.querySelectorAll('.g-step').forEach(function(s){var c=s.querySelector('.g-card');s.addEventListener('mousemove',function(e){var r=s.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--ry',((x-.5)*14)+'deg');c.style.setProperty('--rx',((.5-y)*14)+'deg');c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%')});s.addEventListener('mouseleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});
    var items=document.querySelectorAll('.g-step');
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=[].indexOf.call(items,e.target);e.target.style.transitionDelay=(i%3)*120+'ms';e.target.classList.add('is-in');io.unobserve(e.target)}})},{threshold:.15});
      items.forEach(function(s){io.observe(s)});
    }else items.forEach(function(s){s.classList.add('is-in')});
  });
})();
