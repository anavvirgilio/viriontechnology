(function(){
  /* CURSOR */
  const cur = document.getElementById('cur');
  const ring = document.getElementById('cur-ring');
  const isTouch = window.matchMedia('(pointer:coarse)').matches;
  if(!isTouch){
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; cur.style.left=mx+'px'; cur.style.top=my+'px'; });
    (function loop(){
      rx+=(mx-rx)*.14; ry+=(my-ry)*.14;
      ring.style.left=rx+'px'; ring.style.top=ry+'px';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a,button,.svc-tab').forEach(el=>{
      el.addEventListener('mouseenter',()=>{ cur.classList.add('big'); ring.classList.add('big'); });
      el.addEventListener('mouseleave',()=>{ cur.classList.remove('big'); ring.classList.remove('big'); });
    });
  }

  /* DRAWER */
  const drawer = document.getElementById('drawer');
  document.getElementById('hbg').addEventListener('click',()=>drawer.classList.add('open'));
  document.getElementById('dc').addEventListener('click',()=>drawer.classList.remove('open'));
  drawer.querySelectorAll('.dl').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')));

  /* NAV SCROLL */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40),{passive:true});

  /* SERVICE TABS */
  document.querySelectorAll('.svc-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.svc-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.svc-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('p-'+tab.dataset.svc).classList.add('active');
    });
  });

  /* SCROLL REVEAL */
  const io = new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('in'),i*55); io.unobserve(e.target); }
    });
  },{threshold:0.08});
  document.querySelectorAll('.rev').forEach(el=>io.observe(el));

  /* COUNTERS */
  function countUp(el,target,sfx){
    let v=0; const step=target/(1800/16);
    const t=setInterval(()=>{
      v+=step;
      if(v>=target){ el.textContent=target+sfx; clearInterval(t); return; }
      el.textContent=Math.floor(v)+sfx;
    },16);
  }
  const statsIo = new IntersectionObserver(entries=>{
    if(!entries[0].isIntersecting) return;
    statsIo.disconnect();
    document.querySelectorAll('.stat-n[data-target]').forEach(el=>countUp(el,+el.dataset.target,el.dataset.sfx||''));
  },{threshold:.5});
  const sb=document.querySelector('.stats');
  if(sb) statsIo.observe(sb);
})();


//enviar a mensagem do formulário para o email da empresa usando EmailJS

document.getElementById("enviarBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // Pegando valores
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const servico = document.getElementById("servico").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  // Validação simples
  if (!nome || !email || !servico || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Montando mensagem
  const texto = `Olá! Me chamo ${nome}.
Email: ${email}
Serviço: ${servico}
Mensagem: ${mensagem}`;

  // Número (sem espaços e sem caracteres especiais)
  const telefone = "+5519974151771";

  // Criando link do WhatsApp
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

  // Abrindo WhatsApp
  window.open(url, "_blank");
});