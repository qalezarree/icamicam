/* ===== EDIT THIS PART ===== */
const CONFIG = {
  theme: "sweet",            // "sweet" (pink) or "red" (like the video)
  code: "1811",
  from: "babyyyy", to: "sayanggg",
  videoTitle: "Cheddar Cheese",
  song: "old love", artist: "YUJI & PUTRI DAHLIA",
  audioUrl: "og.mp3",              // optional mp3 link
  photos: ["11.jpeg","22.jpeg","33.jpeg","44.jpeg","55.jpeg","66.jpeg","77.jpeg"],   // 7 image links or file names
  message: "hi my sayangg i hope you know how lucky and grateful i am to have met you. i never thought we’d get to this point, but it was so unexpected. you make me feel loved, important, appreciated, and cared for. i see and appreciate all your love and effort. ever since you came into my life, everything has gotten better. you always make me smile, especially when i’m feeling sad. you always make me happy. thank you for being here. i love you so much, my love. hihi i love my imut <3",
  place: "our lovely memory", caption: "Memories, special", videoUrl: "special.mp4"      // your video file or link
};
/* ========================== */
const $=id=>document.getElementById(id), R=a=>a[Math.floor(Math.random()*a.length)], rnd=(a,b)=>a+Math.random()*(b-a);
const show=id=>{document.querySelectorAll('.scene').forEach(s=>s.classList.remove('on'));$(id).classList.add('on')};

/* ---- themes ---- */
const THEMES={
 sweet:{vars:{'--bg':'#fff1ee','--ink':'#c93b60','--pa':'#fff0f3','--pb':'#ffbfd0','--card':'#fff8f2','--cardInk':'#c93b60','--on':'#c93b60','--label':'#fff7ef','--btnInk':'#c93b60'},
  cloud:['#f27a98','#f9a8bc'],pal:[["#e8576f","#b3203a"],["#f58aa5","#d4466a"],["#ffb3c6","#e0587c"],["#ffd6de","#f09aae"],["#fff5ee","#f2d9c4"],["#f27a8e","#c8304f"]],wall:'#f6a3b6',deep:'#c93b60'},
 red:{vars:{'--bg':'#f3ead9','--ink':'#8e1b22','--pa':'#7a1520','--pb':'#4e0b12','--card':'#222','--cardInk':'#f1e9d8','--on':'#f1e9d8','--label':'#d9c7a5','--btnInk':'#8e1b22'},
  cloud:['#8e1b22','#b8444a'],pal:[["#b3202b","#7a1018"],["#d4414e","#8e1b22"],["#e98ba0","#b3203a"],["#f4cfd0","#d98b92"],["#fbf3e8","#e8d6bd"],["#c8302f","#8a1620"]],wall:'#a82a30',deep:'#8e1b22'}
};
const T=THEMES[CONFIG.theme]||THEMES.sweet;
for(const k in T.vars)document.documentElement.style.setProperty(k,T.vars[k]);
if(CONFIG.theme==='red')document.documentElement.style.setProperty('--label','#d9c7a5');

/* ---- art helpers ---- */
function flowerG(x,y,sc,c1,c2,n=8){let p='';
  for(let r=0;r<2;r++)for(let i=0;i<n;i++)p+=`<ellipse cx='0' cy='${r?-15:-23}' rx='${r?9:13}' ry='${r?15:23}' fill='${r?c2:c1}' stroke='#0002' stroke-width='1' opacity='${r?.55:1}' transform='rotate(${i*360/n+r*(180/n)})'/>`;
  return `<g transform='translate(${x} ${y}) scale(${sc})'>${p}<circle r='9' fill='${c2}'/><circle r='3.5' fill='#0003'/></g>`}
const flowerSVG=(size,k)=>{const c=T.pal[k%T.pal.length];return `<svg width='${size}' height='${size}' viewBox='-50 -50 100 100'>${flowerG(0,0,1,c[0],c[1],k%2?10:8)}</svg>`};
const heart=(s,c)=>`<svg width='${s}' height='${s}' viewBox='0 0 100 90'><path d='M50 85 C-15 40 15 -5 50 25 C85 -5 115 40 50 85Z' fill='${c}' opacity='.85'/><path d='M30 22 Q22 30 28 42' stroke='#fff8' stroke-width='4' fill='none' stroke-linecap='round'/></svg>`;
function cloud(w,h,c){ // watercolor scalloped cloud
  let b='';const n=6;
  for(let i=0;i<n;i++){const cx=w*(.14+i*.14),cy=h*(.55-(i%2)*.18),r=h*(.3+(i%3)*.06);b+=`<circle cx='${cx}' cy='${cy}' r='${r}'/>`}
  b+=`<rect x='${w*.1}' y='${h*.5}' width='${w*.8}' height='${h*.32}' rx='${h*.16}'/>`;
  return `<svg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'><g filter='url(#wc)'><g fill='${c[1]}'>${b}</g><g fill='${c[0]}' opacity='.55' transform='translate(${w*.04} ${h*.08}) scale(.92)'>${b}</g></g></svg>`}

/* ---- lock-screen decor ---- */
(function(){const d=$('lockDecor');let h='';
  [[-10,-8,60,50],[60,10,55,45],[20,70,60,50],[70,75,55,50]].forEach(([x,y,w,hh])=>h+=`<div class='blot' style='left:${x}%;top:${y}%;width:${w}vmax;height:${hh}vmax'></div>`);
  [[-3,3,34,16],[62,22,30,14],[55,68,40,18],[-2,44,34,16]].forEach(([x,y,w,hh])=>h+=`<div class='abs' style='left:${x}%;top:${y}%'>${cloud(w*10,hh*10,T.cloud)}</div>`.replace(/width='(\d+)'/,"width='min($1px,60vw)'"));
  h+=`<div class='abs' style='left:26%;top:7%'><svg width='90' height='90' viewBox='0 0 90 90'><defs><mask id='mm'><rect width='90' height='90' fill='#fff'/><circle cx='62' cy='38' r='34' fill='#000'/></mask></defs><circle cx='45' cy='45' r='38' fill='${T.cloud[0]}' mask='url(#mm)' filter='url(#wc)'/></svg></div>`;
  [[8,12,18],[82,40,44],[70,70,56],[88,8,38],[14,76,50]].forEach(([x,y,s])=>h+=`<div class='abs' style='left:${x}%;top:${y}%'>${heart(s,T.cloud[0])}</div>`);
  for(let i=0;i<9;i++)h+=`<div class='abs' style='left:${rnd(0,92)}%;top:${rnd(0,90)}%;transform:rotate(${rnd(0,360)}deg)'>${flowerSVG(R([26,34,44]),i)}</div>`;
  for(let i=0;i<10;i++)h+=`<div class='abs' style='left:${rnd(0,98)}%;top:${rnd(0,98)}%;width:7px;height:7px;border-radius:50%;background:${T.cloud[0]};opacity:.6'></div>`;
  d.innerHTML=h})();

/* ---- transition wall ---- */
(function(){let g='';
  for(let r=0;r<8;r++)for(let c=0;c<11;c++){const k=R(T.pal);g+=flowerG(c*90+rnd(-10,30),r*80+rnd(-10,30),rnd(.9,1.5),k[0],k[1],R([7,8,9,10]))}
  $('wall').innerHTML=`<svg viewBox='0 0 900 600' preserveAspectRatio='xMidYMid slice'><rect width='900' height='600' fill='${T.wall}'/>${g}</svg>`})();
function go(id){$('wall').classList.add('on');setTimeout(()=>{show(id);if(id==='s3')initScratch();$('wall').classList.remove('on')},900)}

/* ---- loading ---- */
(function(){let g='';for(let i=0;i<6;i++){const a=i*Math.PI/3,k=T.pal[i%T.pal.length];g+=flowerG(Math.sin(a)*27,-Math.cos(a)*27,.4,k[0],k[1])}
  $('ring').innerHTML=`<svg viewBox='-50 -50 100 100'>${g}</svg>`})();
setTimeout(()=>show('s1'),2200);

/* ---- lock ---- */
$('heartLock').innerHTML=`<g transform='translate(0 0)'><path class='shk' d='M26 52 V34 a20 20 0 0 1 40 0 V52' stroke='${T.deep}' stroke-width='7' fill='none'/>
<path d='M46 112 C-10 68 8 30 46 54 C84 30 102 68 46 112Z' fill='${T.cloud[0]}' stroke='${T.deep}' stroke-width='3'/>
<path d='M30 62 Q22 72 30 84' stroke='#fff7' stroke-width='4' fill='none' stroke-linecap='round'/>
<circle cx='46' cy='76' r='6' fill='#fff8f0'/><rect x='43.5' y='78' width='5' height='14' fill='#fff8f0'/>
<g transform='rotate(-30 78 52)'><circle cx='78' cy='40' r='7' fill='none' stroke='${T.deep}' stroke-width='4'/><rect x='76' y='46' width='4' height='34' fill='${T.deep}'/><rect x='80' y='66' width='8' height='4' fill='${T.deep}'/><rect x='80' y='74' width='6' height='4' fill='${T.deep}'/></g></g>`;
$('names').innerHTML=`From : ${CONFIG.from}<br>For : ${CONFIG.to}<small>a little secret...</small>`;
let entry="";const dots=$('dots');for(let i=0;i<4;i++)dots.appendChild(document.createElement('b'));
const drawDots=()=>[...dots.children].forEach((d,i)=>d.classList.toggle('f',i<entry.length));
["1","2","3","4","5","6","7","8","9","","0","⌫"].forEach(k=>{
  const b=document.createElement('button');b.textContent=k;if(!k)b.style.visibility="hidden";
  b.onclick=()=>{if(k==="⌫")entry=entry.slice(0,-1);else if(entry.length<4)entry+=k;drawDots();
    if(entry.length===4){if(entry===CONFIG.code){$('heartLock').classList.add('open');setTimeout(()=>go('s2'),1100)}
      else{dots.classList.add('shake');setTimeout(()=>{dots.classList.remove('shake');entry="";drawDots()},450)}}};
  $('pad').appendChild(b)});

$('env').onclick=()=>{if($('env').classList.contains('open'))return;$('env').classList.add('open');setTimeout(()=>go('s3'),1700)};

/* ---- board ---- */
$('vidT').textContent=CONFIG.videoTitle;$('song').textContent=CONFIG.song;$('artist').textContent=CONFIG.artist;
$('from').innerHTML=`From : ${CONFIG.from}<br>For : ${CONFIG.to}`;
const audio=$('audio');if(CONFIG.audioUrl)audio.src=CONFIG.audioUrl;
$('play').onclick=()=>{if(!CONFIG.audioUrl)return;if(audio.paused){audio.play();$('play').innerHTML="&#10074;&#10074;"}else{audio.pause();$('play').innerHTML="&#9658;"}};
function leopardStar(size,style=''){let sp='';
  for(let i=0;i<60;i++){const x=rnd(0,200),y=rnd(0,200);sp+=`<ellipse cx='${x}' cy='${y}' rx='${rnd(4,9)}' ry='${rnd(3,6)}' fill='none' stroke='#2e1a0c' stroke-width='3' opacity='.85' transform='rotate(${rnd(0,180)} ${x} ${y})'/><circle cx='${x+3}' cy='${y+2}' r='2' fill='#2e1a0c'/>`}
  const pts='100,6 124,72 194,76 140,118 160,190 100,150 40,190 60,118 6,76 76,72';
  return `<svg class='star' style='${style}' width='${size}' height='${size}' viewBox='0 0 200 200'><defs><clipPath id='cs'><polygon points='${pts}'/></clipPath></defs><polygon points='${pts}' fill='#fff' stroke='#fff' stroke-width='10' stroke-linejoin='round'/><g clip-path='url(#cs)'><rect width='200' height='200' fill='#e1b46c'/>${sp}</g></svg>`}
const ph=i=>`url("data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='200' height='220'><rect width='200' height='220' fill='${["#f2a5b5","#e8b09a","#c99ab0","#f5b8a8","#d9a0b8","#eab0c0","#cf9aa8"][i]}'/><text x='100' y='125' font-size='56' text-anchor='middle'>&#10084;</text></svg>`)}")`;
let ready=false,boxes=[];
const ROT=[-7,5,-3,6,-5,3,-6];
function burst(x,y){for(let i=0;i<18;i++){const d=document.createElement('div');d.textContent=R(['\u{1F497}','\u{1F338}','\u2728','\u{1F496}']);
  d.style.cssText=`position:fixed;left:${x}px;top:${y}px;z-index:60;pointer-events:none;font-size:${rnd(14,28)}px`;document.body.appendChild(d);
  const a=rnd(0,6.28),k=rnd(60,170);
  d.animate([{transform:'translate(0,0) scale(.4)',opacity:1},{transform:`translate(${Math.cos(a)*k}px,${Math.sin(a)*k-40}px) scale(1.2)`,opacity:0}],{duration:rnd(900,1600),easing:'ease-out'}).onfinish=()=>d.remove()}}
function foil(cv,w,h){const x=cv.getContext('2d');
  const g=x.createLinearGradient(0,0,w,h);[[0,'#b9aeb2'],[.3,'#f0e7ea'],[.55,'#a99ea3'],[.8,'#e7dde0'],[1,'#9a8f94']].forEach(([o,c])=>g.addColorStop(o,c));
  x.fillStyle=g;x.fillRect(0,0,w,h);
  for(let i=0;i<w*h/16;i++){x.fillStyle=`rgba(${Math.random()<.5?255:70},${Math.random()<.5?255:70},${Math.random()<.5?255:70},${rnd(.05,.16)})`;x.fillRect(rnd(0,w),rnd(0,h),1.6,1.6)}
  x.textAlign='center';x.font="italic 24px 'Playfair Display',serif";
  x.fillStyle='#fffb';x.fillText('Scratch me',w/2+1,h/2+2);x.fillStyle='#6a5f64';x.fillText('Scratch me',w/2,h/2);return x}
function initScratch(){
  if(ready)return;ready=true;
  const P=$('polas');
  P.insertAdjacentHTML('afterbegin',leopardStar(Math.min(430,innerWidth*.8),'left:22%;top:20%')+leopardStar(Math.min(380,innerWidth*.7),'left:80%;top:74%;transform:translate(-50%,-50%) rotate(18deg)'));
  CONFIG.photos.slice(0,7).forEach((url,i)=>{
    const p=document.createElement('div');p.className='pola';p.style.setProperty('--r',ROT[i]+'deg');p.style.setProperty('--t',(i%2?4:-4)+'deg');p.style.setProperty('--i',i);
    if(i%2)p.style.marginTop='26px';
    const box=document.createElement('div');box.className='box';box.style.backgroundImage=url?`url("${url}")`:ph(i);boxes[i]=box;
    const cv=document.createElement('canvas');box.appendChild(cv);p.appendChild(box);P.appendChild(p);
    const w=cv.width=box.clientWidth||190,h=cv.height=box.clientHeight||210,ctx=foil(cv,w,h);
    let down=false,lx=0,ly=0,done=false;
    const pt=e=>{const r=cv.getBoundingClientRect();return[(e.clientX-r.left)*w/r.width,(e.clientY-r.top)*h/r.height]};
    const stroke=(a,b,c,d)=>{ctx.globalCompositeOperation='destination-out';ctx.lineWidth=40;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(a,b);ctx.lineTo(c,d);ctx.stroke()};
    const check=()=>{if(done)return;const d=ctx.getImageData(0,0,w,h).data;let t=0,n=0;for(let k=3;k<d.length;k+=64){n++;if(d[k]<20)t++}
      if(t/n>.5){done=true;cv.style.transition='opacity .8s';cv.style.opacity=0;const r=cv.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2);setTimeout(()=>cv.remove(),900)}};
    cv.onpointerdown=e=>{down=true;[lx,ly]=pt(e);cv.setPointerCapture(e.pointerId);stroke(lx,ly,lx,ly)};
    cv.onpointermove=e=>{if(!down)return;const[x,y]=pt(e);stroke(lx,ly,x,y);lx=x;ly=y};
    cv.onpointerup=()=>{down=false;check()};
  });
}

/* ---- letter + bouquet ---- */
(function(){let st='',fl='';
  [[38,62,.62,0],[80,44,.78,4],[122,64,.62,1],[58,92,.56,3],[102,94,.56,2],[80,76,.5,5]].forEach(([x,y,s,k])=>{
    st+=`<path d='M${x} ${y} Q${x+(80-x)*.3} 140 80 178' stroke='#4f7a44' stroke-width='3' fill='none'/>`;
    fl+=flowerG(x,y,s,T.pal[k][0],T.pal[k][1],k%2?10:8)});
  $('bq').innerHTML=`<svg viewBox='0 0 160 215'>${st}<path d='M18 122 L142 122 L80 210 Z' fill='#e8c595' stroke='#c9a06a' stroke-width='2'/><path d='M62 152 Q80 142 98 152 L80 162 Z' fill='#7fb3a8'/>${fl}</svg>`})();
let typing;
let typed=false;
$('toLetter').onclick=()=>{show('s4');const el=$('msg');el.textContent="";let i=0;typed=false;clearInterval(typing);
  typing=setInterval(()=>{el.textContent=CONFIG.message.slice(0,++i);if(i>=CONFIG.message.length){clearInterval(typing);typed=true}},45)};
$('s4').onclick=()=>{if(!typed){clearInterval(typing);$('msg').textContent=CONFIG.message;typed=true;return}
  $('finalVideo').src=CONFIG.videoUrl;$('place').textContent=CONFIG.place;$('cap').textContent=CONFIG.caption;show('s5')};


/* ---- pink leaves (falling + fallen) ---- */
(function(){
  const cols=['#f9a8bc','#f27a98','#ffc6d3','#ee8fb0','#fbb6c8'];
  const leaf=(w,c)=>`<svg width='${w}' height='${w*1.5}' viewBox='0 0 40 60'><path d='M20 2 C42 20 38 46 20 58 C2 46 -2 20 20 2Z' fill='${c}'/><path d='M20 10 V56 M20 28 L30 20 M20 38 L10 30' stroke='#fff8' stroke-width='1.5' fill='none'/></svg>`;
  const L=document.createElement('div');L.id='leaves';
  for(let i=0;i<14;i++){const d=document.createElement('div');d.className='leaf';
    d.style.left=rnd(0,96)+'%';d.style.animationDuration=rnd(9,17)+'s';d.style.animationDelay=(-rnd(0,15))+'s';
    d.innerHTML=leaf(rnd(14,26),R(cols));L.appendChild(d)}
  document.body.appendChild(L);
  const G=document.createElement('div');G.id='ground';
  for(let i=0;i<26;i++){const d=document.createElement('div');d.className='rest';
    d.style.left=rnd(-2,98)+'%';d.style.bottom=rnd(-8,26)+'px';d.style.transform='rotate('+rnd(0,360)+'deg)';d.style.opacity=rnd(.75,1);
    d.innerHTML=leaf(rnd(18,32),R(cols));G.appendChild(d)}
  document.body.appendChild(G);
})();
