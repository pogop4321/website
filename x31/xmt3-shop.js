/* 모터.com 카페24 스킨 공통 + 구매 페이지 (261112) */
(function(){
var P=location.pathname;if(P==='/'||P==='/index.html')return;
var D=document,H=D.documentElement,CDN='https://ecimg.cafe24img.com/pg3601b81015020090/pixelgroup/web/upload/';
var DV='xmtd',IV='ph';
var PN={11:'001',12:'002',13:'003',15:'004',16:'005',17:'006',18:'007',19:'008',20:'009',21:'010',22:'011',25:'012',26:'013',27:'014',41:'015',42:'016',14:'017',29:'018',30:'019',31:'020',33:'021',34:'022',23:'023',24:'024',32:'025',28:'026',35:'027',36:'028',37:'029',38:'030',39:'031',40:'032',43:'033'};
var isLogin=/^\/member\/login/.test(P),isProd=/^\/product\//.test(P)&&!/\/product\/(list|search)/.test(P);
var HDR="<header class=\"xh\" style=\"position: relative; z-index: 5; background: #E4E4E4\">\n    \n    <span style=\"position: absolute; left: 64px; right: 0; bottom: -1px; height: 1px; background: rgba(14,14,14,.55)\"><\/span>\n    <div style=\"padding: 0 2.2vw; height: 76px; display: flex; align-items: center; gap: 28px\">\n      <a href=\"/\" aria-label=\"X MOTOR 모터.com 홈\" style=\"display: flex; align-items: center; text-decoration: none\"><span role=\"img\" aria-label=\"X MOTOR 모터.com\" style=\"display: inline-flex; align-items: center; color: #0E0E0E; white-space: nowrap\"><svg width=\"42\" height=\"42\" style=\"display:block;flex:none\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 112 112\" role=\"img\" aria-label=\"X MOTOR\"><title>X MOTOR<\/title><g transform=\"translate(5.7 14) scale(1)\"><defs><mask id=\"symbol\" x=\"-5\" y=\"-5\" width=\"112\" height=\"96\" maskUnits=\"userSpaceOnUse\"><rect x=\"-5\" y=\"-5\" width=\"112\" height=\"96\" fill=\"white\"/><path d=\"M9.3 83.8C2.8 83.8-.7 79.3.4 72.8 2.1 63.1 10.6 57.2 20.1 51.8 30.7 45.9 38.2 40 46.5 31.2L66.4 10.9C74.1 3.4 80.9-.3 87.5.1 94.7.5 99.7 5.1 99.7 10.6 99.7 16.4 95.7 20.9 89.3 23.5L80 27C67 32 56.8 39.2 47.5 48.9L25.6 73.8C19.7 80.6 15 83.8 9.3 83.8Z\" stroke=\"black\" fill=\"black\" stroke-linejoin=\"round\" stroke-width=\"4.2\"/><\/mask><\/defs><g fill=\"#FF582F\"><path mask=\"url(#symbol)\" d=\"M20.9 8.4C26.3 7.1 30.9 9.4 33.3 14.4 35.7 19.4 37 23.8 41.7 28.2 46.4 32.7 52.6 36.2 60 40.2 73.4 47.3 86.2 55.9 92.6 65.1 97.3 71.9 96.2 78.7 90.4 81.9 84.5 85.2 77.1 82.7 70.9 77.9 64.4 72.9 58.4 65.6 52.3 59.6C45.7 53.3 39.2 47.8 33.2 42.9 25.2 36.5 18 31.2 12.4 25.9 4 17.9 11.1 10.4 20.9 8.4Z\"/><path d=\"M9.3 83.8C2.8 83.8-.7 79.3.4 72.8 2.1 63.1 10.6 57.2 20.1 51.8 30.7 45.9 38.2 40 46.5 31.2L66.4 10.9C74.1 3.4 80.9-.3 87.5.1 94.7.5 99.7 5.1 99.7 10.6 99.7 16.4 95.7 20.9 89.3 23.5L80 27C67 32 56.8 39.2 47.5 48.9L25.6 73.8C19.7 80.6 15 83.8 9.3 83.8Z\"/><\/g><\/g><\/svg><span style=\"font-family: 'Tektur', 'IBM Plex Sans KR', sans-serif; font-weight: 600; font-size: 26.1px; letter-spacing: .04em; margin-left: 7.8px; line-height: 1\">MOTOR<\/span><span style=\"width: 1px; height: 26.1px; background: currentColor; opacity: .3; margin: 0 14.8px\"><\/span><span style=\"display: inline-flex; align-items: flex-end; gap: 1.7px\"><svg height=\"19.2\" style=\"display:block;flex:none;color:#0E0E0E\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 -4 220 152\" fill-rule=\"evenodd\"><path fill=\"currentColor\" d=\"M6.8 0.8 L6.3 1.3 L6.1 1.9 L6.0 2.6 L6.0 47.8 L6.1 48.4 L6.3 49.1 L6.8 49.6 L30.4 73.2 L30.9 73.7 L31.6 73.9 L32.2 74.0 L91.4 74.0 L92.1 73.9 L92.7 73.7 L93.2 73.2 L93.7 72.7 L93.9 72.1 L94.0 71.4 L94.0 2.6 L93.9 1.9 L93.7 1.3 L93.2 0.8 L92.7 0.3 L92.1 0.1 L91.4 0.0 L8.6 0.0 L7.9 0.1 L7.3 0.3 Z M76.2 17.8 L76.6 18.3 L76.9 18.9 L77.0 19.8 L77.0 54.2 L76.9 55.1 L76.6 55.7 L76.2 56.2 L75.7 56.6 L75.1 56.9 L74.2 57.0 L41.8 57.0 L40.9 56.9 L40.3 56.6 L39.6 56.1 L23.9 40.4 L23.4 39.7 L23.1 39.1 L23.0 38.2 L23.0 19.8 L23.1 18.9 L23.4 18.3 L23.8 17.8 L24.3 17.4 L24.9 17.1 L25.8 17.0 L74.2 17.0 L75.1 17.1 L75.7 17.4 Z M112.8 123.2 L113.3 123.7 L113.9 123.9 L114.6 124.0 L169.4 124.0 L170.1 123.9 L170.7 123.7 L171.2 123.2 L171.7 122.7 L171.9 122.1 L172.0 121.4 L172.0 109.6 L171.9 108.9 L171.7 108.3 L171.2 107.8 L170.7 107.3 L170.1 107.1 L169.4 107.0 L131.8 107.0 L130.9 106.9 L130.3 106.6 L129.8 106.2 L129.4 105.7 L129.1 105.1 L129.0 104.2 L129.0 73.3 L129.1 72.4 L129.4 71.8 L129.8 71.3 L130.3 70.9 L130.9 70.6 L131.8 70.5 L166.0 70.5 L166.7 70.4 L167.3 70.2 L167.8 69.7 L168.3 69.2 L168.5 68.6 L168.6 67.9 L168.6 56.1 L168.5 55.4 L168.3 54.8 L167.8 54.3 L167.3 53.8 L166.7 53.6 L166.0 53.5 L131.8 53.5 L130.9 53.4 L130.3 53.1 L129.8 52.7 L129.4 52.2 L129.1 51.6 L129.0 50.7 L129.0 19.8 L129.1 18.9 L129.4 18.3 L129.8 17.8 L130.3 17.4 L130.9 17.1 L131.8 17.0 L169.4 17.0 L170.1 16.9 L170.7 16.7 L171.2 16.2 L171.7 15.7 L171.9 15.1 L172.0 14.4 L172.0 2.6 L171.9 1.9 L171.7 1.3 L171.2 0.8 L170.7 0.3 L170.1 0.1 L169.4 0.0 L114.6 0.0 L113.9 0.1 L113.3 0.3 L112.8 0.8 L112.3 1.3 L112.1 1.9 L112.0 2.6 L112.0 121.4 L112.1 122.1 L112.3 122.7 Z M182.8 54.3 L182.3 54.8 L182.1 55.4 L182.0 56.1 L182.0 67.9 L182.1 68.6 L182.3 69.2 L182.8 69.7 L183.3 70.2 L183.9 70.4 L184.6 70.5 L192.2 70.5 L193.1 70.6 L193.7 70.9 L194.2 71.3 L194.6 71.8 L194.9 72.4 L195.0 73.3 L195.0 121.4 L195.1 122.1 L195.3 122.7 L195.8 123.2 L196.3 123.7 L196.9 123.9 L197.6 124.0 L209.4 124.0 L210.1 123.9 L210.7 123.7 L211.2 123.2 L211.7 122.7 L211.9 122.1 L212.0 121.4 L212.0 2.6 L211.9 1.9 L211.7 1.3 L211.2 0.8 L210.7 0.3 L210.1 0.1 L209.4 0.0 L197.6 0.0 L196.9 0.1 L196.3 0.3 L195.8 0.8 L195.3 1.3 L195.1 1.9 L195.0 2.6 L195.0 50.7 L194.9 51.6 L194.6 52.2 L194.2 52.7 L193.7 53.1 L193.1 53.4 L192.2 53.5 L184.6 53.5 L183.9 53.6 L183.3 53.8 Z M0.8 107.8 L0.3 108.3 L0.1 108.9 L0.0 109.6 L0.0 121.4 L0.1 122.1 L0.3 122.7 L0.8 123.2 L1.3 123.7 L1.9 123.9 L2.6 124.0 L97.4 124.0 L98.1 123.9 L98.7 123.7 L99.2 123.2 L99.7 122.7 L99.9 122.1 L100.0 121.4 L100.0 109.6 L99.9 108.9 L99.7 108.3 L99.2 107.8 L98.7 107.3 L98.1 107.1 L97.4 107.0 L61.3 107.0 L60.4 106.9 L59.8 106.6 L59.3 106.2 L58.9 105.7 L58.6 105.1 L58.5 104.2 L58.5 76.6 L58.4 75.9 L58.2 75.3 L57.7 74.8 L57.2 74.3 L56.6 74.1 L55.9 74.0 L44.1 74.0 L43.4 74.1 L42.8 74.3 L42.3 74.8 L41.8 75.3 L41.6 75.9 L41.5 76.6 L41.5 104.2 L41.4 105.1 L41.1 105.7 L40.7 106.2 L40.2 106.6 L39.6 106.9 L38.7 107.0 L2.6 107.0 L1.9 107.1 L1.3 107.3 Z\"/><\/svg><b style=\"font-family: 'Tektur', 'IBM Plex Sans KR', sans-serif; font-weight: 600; font-size: 20.0px; line-height: .82\">.COM<\/b><\/span><\/span><\/a>\n      <span class=\"hide-n\" style=\"width: 1px; height: 76px; background: rgba(14,14,14,.18)\"><\/span>\n      <nav class=\"nav xh-nav hide-n\" aria-label=\"주요 메뉴\" style=\"display: flex; gap: 10px\">\n        <a href=\"/#shop\">전체 모터<\/a><a href=\"/#finder\">모터 파인더<\/a><a href=\"/#types\">모터 종류<\/a><a href=\"/#scenes\">들어가는 곳<\/a><a href=\"/#faq\">FAQ<\/a><a href=\"/#why\">모터.com 소개<\/a>\n      <\/nav>\n      <span style=\"margin-left: auto; display: flex; align-items: center; gap: 18px\">\n        <span class=\"hide-n xh-note\" style=\"font-family: 'Roboto Mono', 'Nanum Gothic Coding', monospace; font-size: 12px; color: #3A3A3A; display: inline-flex; align-items: center; gap: 8px\"><span style=\"display: inline-grid; grid-template-columns: 1fr 1fr; gap: 2px\"><i style=\"width: 4px; height: 4px; background: #FF582F\"><\/i><i style=\"width: 4px; height: 4px; background: #FF582F\"><\/i><i style=\"width: 4px; height: 4px; background: #FF582F\"><\/i><i style=\"width: 4px; height: 4px; background: #FF582F\"><\/i><\/span>정식 오픈 · 제조 직판<\/span>\n        <a href=\"/member/login.html\" class=\"xh-u\" data-xm-my>로그인<\/a><a href=\"/order/basket.html\" class=\"xh-u\">장바구니<\/a><a href=\"/myshop/order/list.html\" class=\"xh-u\">주문조회<\/a><a href=\"/#shop\" class=\"btn xh-btn\" style=\"padding: 12px 20px\">판매 중인 모터<\/a>\n      <\/span>\n    <\/div>\n  <\/header>";
function el(t,c,h){var e=D.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function $(s,r){return (r||D).querySelector(s)}
function $$(s,r){return [].slice.call((r||D).querySelectorAll(s))}
function fonts(){if(D.getElementById('xm-fonts'))return;var l=el('link');l.id='xm-fonts';l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Tektur:wght@500;600;700&family=Roboto+Mono:wght@400;500&family=IBM+Plex+Sans+KR:wght@400;500;600;700&display=swap';D.head.appendChild(l)}
function gaze(gz){var last=0,cur='',t0=Date.now();
  function set(nx,ny){nx=Math.max(-1,Math.min(1,nx));ny=Math.max(-1,Math.min(1,ny));var c=Math.round((nx+1)*4),r=Math.round(ny+1),k=c+','+r;if(k!==cur){cur=k;gz.style.backgroundPosition=(c*12.5)+'% '+(r*25)+'%'}gz.style.transform='translate3d('+Math.round(nx*5)+'px,'+Math.round(ny*3)+'px,0)'}
  function mv(e){var p=e.touches&&e.touches[0]?e.touches[0]:e,b=gz.getBoundingClientRect();last=Date.now();set((p.clientX-(b.left+b.width/2))/(innerWidth*.42),(p.clientY-(b.top+b.height*.34))/(innerHeight*.42))}
  addEventListener('mousemove',mv,{passive:true});addEventListener('touchmove',mv,{passive:true});
  setInterval(function(){if(Date.now()-last<3500)return;var s=(Date.now()-t0)/1000;set(Math.sin(s*.9)*.85,Math.sin(s*.55+1)*.6)},120)}

function common(){
  fonts();
  if(!isLogin&&!$('header.xh')){var hd=el('div',null,HDR),h=hd.firstElementChild;D.body.insertBefore(h,D.body.firstChild);
    var nav=$$('.nav a',h);if(isProd&&nav[0])nav[0].style.boxShadow='inset 0 -2px 0 #FF582F'}
  if($('.xans-layout-statelogon'))$$('[data-xm-my]').forEach(function(a){a.href='/myshop/index.html';a.textContent='마이쇼핑'});
  var ft=$('#footer');
  if(ft&&!$('.xf-band')){
    var band=el('div','xf-band','<div><div><small>WHY 모터.COM</small><b>제조부터 판매까지<br>직접 합니다.</b></div><a href="/#shop">판매 중인 모터 보기 →</a></div>');
    ft.parentNode.insertBefore(band,ft);
    var lg=$('.xm-logo'),a=$('.bt_logo a',ft);if(lg&&a){a.textContent='';a.appendChild(lg.cloneNode(true))}
  }
}

function product(){
  var da=$('.xans-product-detail .detailArea'),img=da&&$('.imgArea',da),inf=da&&$('.infoArea',da);
  if(!da||!img||!inf||$('.xp-stage'))return false;
  H.classList.add('xp');
  var pno=(window.iProductNo||(location.search.match(/product_no=(\d+)/)||[])[1]||(P.match(/\/(\d+)\//)||[])[1]),no=PN[pno];
  var nat=$('.headingArea',inf),nm=nat?nat.innerText.replace(/\s+/g,' ').trim():D.title;
  var big=$('.BigImage',img),bsrc=big?big.getAttribute('src'):'';
  var ct=$('#contents');
  var bc=el('nav','xp-bc','<a href="/#shop">전체 모터</a><span>›</span><span class="c"></span><span class="s">›</span><b style="font-weight:400" class="m"></b>');
  ct.insertBefore(bc,$('.xans-product-detail'));
  var st=el('div','xp-stage','<img alt="" decoding="async"><span class="xp-ang">FRONT · 정면</span><span class="xp-no"></span>');
  var gal=el('div','xp-gal');gal.setAttribute('role','tablist');
  var side=el('div','xp-side','<div class="txt"><small>MOTOR FINDER</small><b>어떤 옵션이 맞는지 모르겠다면<br>전압과 회전수만 알려 주세요.</b><a href="/#finder">모터 파인더 열기 →</a></div><div class="xp-rb"><div class="xm-gz2" role="img" aria-label="시선을 따라 고개를 돌리는 X MOTOR 로봇"></div></div>');
  img.appendChild(st);img.appendChild(gal);img.appendChild(side);gaze($('.xm-gz2',side));
  var main=$('img',st);main.alt=nm+' 정면 이미지';main.src=bsrc;
  var head=el('div','xp-head','<span class="xp-eye">X MOTOR</span><h1 class="xp-h1"></h1><p class="xp-sub"></p><div class="xp-pr"><b></b><span></span></div>');
  $('.xp-h1',head).textContent=nm;inf.insertBefore(head,inf.firstChild);
  var pt=$('#span_product_price_text');$('.xp-pr b',head).innerHTML=(pt?pt.textContent.replace('원',''):'')+'<small>원</small>';
  var sel=$('select[id^="product_option_id"]',inf),optT=$('.xans-product-option',inf);
  var optl=el('div','xp-optl','<span>OPTION · 옵션 선택</span><em></em>');
  if(sel&&optT)optT.parentNode.insertBefore(optl,optT);
  var lg=el('div','xp-lg','<span><i class="live"></i>재고보유 · 결제 확인 후 바로 출고</span><span><i class="ord"></i>주문 제작 · 납기 약 3주</span>');
  var tp=$('#totalProducts',inf);if(tp)tp.parentNode.insertBefore(lg,tp);
  var t=$('#totalPrice .title',inf);if(t&&t.firstChild)t.firstChild.nodeValue='합계 ';
  var tx={actionBuy:'바로 구매'};$$('#actionBuy').forEach(function(e){e.textContent='바로 구매'});
  $$('.actionCart').forEach(function(e){e.textContent='장바구니'});$$('.actionWish').forEach(function(e){e.textContent='관심상품'});
  var to=$('#totalProductsOption');if(to)to.style.display='none';
  var act=$('.productAction',inf);
  var spec=el('table','spec'),note=el('p','xp-note','제조부터 판매까지 맑은전자가 직접 합니다. 재고보유 옵션은 결제 확인 후 바로 출고하고, 그 외 옵션은 주문 제작으로 약 3주 안에 출고합니다. 10개 이상은 견적서·세금계산서로 안내합니다.');
  if(act){act.parentNode.insertBefore(spec,act.nextSibling);spec.parentNode.insertBefore(note,spec.nextSibling)}
  var add=$('.xans-product-additional'),sec=el('div','xp-sec');if(add)add.insertBefore(sec,add.firstChild);

  function views(d){
    var V=[['FRONT · 정면','정면',CDN+IV+'_'+d.no+'.webp'],['SIDE · 측면','측면',CDN+IV+'_'+d.no+'_side.webp'],['REAR · 후면','후면',CDN+IV+'_'+d.no+'_back.webp']];
    gal.innerHTML='';
    V.forEach(function(v,i){var b=el('button',i?'':'on','<img alt="" loading="lazy" decoding="async" src="'+v[2]+'"><span>'+v[1]+'</span>');b.type='button';
      b.onclick=function(){$$('button',gal).forEach(function(x){x.className=''});b.className='on';main.style.opacity=0;setTimeout(function(){main.src=v[2];main.alt=d.full+' '+v[1]+' 이미지';$('.xp-ang',st).textContent=v[0];main.style.opacity=1},140)};gal.appendChild(b)});
    var a=el('a',null,'<span>치수도 ↓</span>');a.href='#drawing';gal.appendChild(a);
    var pre=new Image();pre.onload=function(){main.src=V[0][2]};pre.src=V[0][2];
  }
  function stockOf(d,name){return d.stock.hasOwnProperty(name)?d.stock[name]:null}
  function labels(d){
    if(!sel)return;
    $$('option',sel).forEach(function(o){var v=o.value;if(v==='**')return;
      if(v==='*'){if(o.textContent!=='옵션을 선택하세요 (필수)')o.textContent='옵션을 선택하세요 (필수)';return}
      var base=o.getAttribute('data-xp');if(!base){base=o.textContent.replace(/\s+/g,' ').trim();o.setAttribute('data-xp',base)}
      var nmo=base.replace(/\s*\[품절\]\s*$/,''),s=stockOf(d,nmo);if(s==null)return;
      var want=base+'  |  '+(s?'재고보유':'납기 3주');if(o.textContent!==want)o.textContent=want});
  }
  function rows(d){
    $$('#totalProducts tr.option_product').forEach(function(tr){if($('.xp-st',tr))return;var sp=$('p.product span',tr);if(!sp)return;
      var nm2=sp.textContent.split('|')[0].replace(/\s+/g,' ').trim(),s=stockOf(d,nm2);if(s==null)return;sp.textContent=nm2;
      tr.classList.toggle('xp-live',!!s);var p=sp.parentNode,sm=el('small');sm.textContent=d.full;while(p.firstChild)p.removeChild(p.firstChild);p.appendChild(sm);p.appendChild(sp);p.appendChild(el('em','xp-st','<i class="'+(s?'live':'ord')+'"></i>'+(s?'재고보유 · 바로 출고':'주문 제작 · 납기 약 3주')))});
  }
  function pick(name,stay){if(!sel)return;var o=$$('option',sel).filter(function(o){return (o.getAttribute('data-xp')||o.textContent).replace(/\s*\[품절\]\s*$/,'')===name})[0];if(!o)return;
    sel.value=o.value;sel.dispatchEvent(new Event('change',{bubbles:true}));if(window.jQuery)try{window.jQuery(sel).trigger('change')}catch(e){}
    if(stay)return;var y=optl.getBoundingClientRect().top+pageYOffset-110;scrollTo({top:y,behavior:'smooth'})}
  function tableLinks(d){
    $$('.xm-pc-tbl-wrap table',sec).forEach(function(tb){var ths=$$('tr:first-child th',tb).map(function(th){var m=th.textContent.match(/(\d+(?:\.\d+)?V)/);return m?m[1]:null});
      $$('tr',tb).slice(1).forEach(function(tr){var tds=$$('td',tr);if(!tds.length)return;var rpm=tds[0].textContent.replace(/\s+/g,'');
        tds.forEach(function(td,i){if(!ths[i])return;var name=ths[i]+' '+rpm+'RPM';if(stockOf(d,name)==null)return;td.style.cursor='pointer';td.title=name+' 선택';
          td.onmouseenter=function(){td.style.background='#FFF1EC'};td.onmouseleave=function(){td.style.background=''};td.onclick=function(){pick(name)}})})});
  }
  function cardLinks(d){
    $$('.xm-m-optlist .xm-mc',sec).forEach(function(mc){var t=$('.xm-mc-ttl',mc);if(!t||!t.firstChild)return;var rpm=(t.firstChild.nodeValue||'').replace(/\s+/g,'');
      $$('.xm-mc-pr',mc).forEach(function(pr){var v=$('.xm-mc-v',pr);if(!v)return;var name=v.textContent.trim()+' '+rpm+'RPM';if(stockOf(d,name)==null)return;pr.style.cursor='pointer';pr.onclick=function(){pick(name)}})});
  }
  function apply(d){
    H.classList.add('xp-data');
    $('.c',bc).innerHTML='<a href="/#shop">'+d.cat+'</a>';$('.m',bc).textContent=d.model;
    $('.xp-eye',head).textContent=d.eye;$('.xp-h1',head).textContent=d.model;$('.xp-sub',head).textContent=d.name;$('.xp-no',st).textContent=d.no;
    var names=Object.keys(d.stock),live=names.filter(function(k){return d.stock[k]}).length,n=names.length;
    $('.xp-pr b',head).innerHTML=d.pmin.toLocaleString('ko-KR')+'<small>원'+(d.pvar?'~':'')+'</small>';
    var info=$('.xp-pr span',head);
    if(n>1){info.textContent='옵션 '+n+' · 재고보유 '+live+' · 배송비 '+d.ship;$('em',optl).textContent='재고보유 '+live+' · 주문 제작 '+(n-live)}
    else{info.innerHTML='';var c=el('span','xp-chip'+(live?' live':''),'<i class="'+(live?'live':'ord')+'"></i>'+(live?'재고보유 · 바로 출고':'주문 제작 · 납기 약 3주'));info.appendChild(c);info.appendChild(D.createTextNode('  배송비 '+d.ship));lg.style.display='none'}
    spec.innerHTML=d.specs.map(function(r){return '<tr><th></th><td></td></tr>'}).join('');
    $$('tr',spec).forEach(function(tr,i){tr.children[0].textContent=d.specs[i][0];tr.children[1].textContent=d.specs[i][1]});
    views(d);labels(d);rows(d);
    if(sel&&window.MutationObserver)new MutationObserver(function(){labels(d)}).observe(sel,{childList:true,subtree:true,characterData:true});
    if(tp&&window.MutationObserver)new MutationObserver(function(){rows(d)}).observe(tp,{childList:true,subtree:true});
    sec.innerHTML=d.sec;tableLinks(d);cardLinks(d);
    var hint=$('#xm-opt-sec',sec);if(hint&&$('.xm-pc-tbl-wrap td[title]',sec)){var p=el('p',null,'가격 칸을 누르면 그 옵션이 바로 선택됩니다.');p.style.cssText='margin:0 0 8px;font-size:13px;color:#FF582F';hint.parentNode.insertBefore(p,hint.nextSibling)}
    var inc=el('div','xp-inc','<div class="xp-inc-v"><span class="xp-inc-fig">FIG. · MOTOR INCUBATOR</span><div class="xp-tk"><img alt="" loading="lazy" src="'+CDN+'60943cf44ea5b89e.webp"><div class="in"><img alt="" loading="lazy" src="'+CDN+IV+'_'+d.no+'.webp"><i style="left:14%;animation-delay:-2s"></i><i style="left:36%;width:3.4%;animation-duration:11s;animation-delay:-6s"></i><i style="left:63%;width:4.2%;animation-duration:8s;animation-delay:-4s"></i><i style="left:82%;width:3%;animation-duration:12s;animation-delay:-9s"></i></div></div></div>'
      +'<div class="xp-inc-t"><small>STOCK · LEAD TIME</small><h3>재고는 바로 꺼내고,<br>없는 옵션은 새로 만듭니다.</h3>'
      +'<div class="xp-inc-r"><b>'+live+'</b><strong><i class="live"></i>재고보유</strong><span>결제 확인 후 순서대로 바로 출고합니다.</span></div>'
      +'<div class="xp-inc-r"><b>'+(n-live)+'</b><strong><i class="ord"></i>주문 제작</strong><span>주문 후 제작해 약 3주 안에 출고합니다.</span></div>'
      +'<p>옵션 선택 칸에서 옵션마다 재고보유 · 납기를 확인할 수 있습니다. 10개 이상은 견적서·세금계산서로 안내합니다.</p>'
      +'<div class="xp-back"><a class="o" href="#" data-top>옵션 선택하기 ↑</a><a href="/#shop/'+d.ch+'">← 목록으로</a></div></div>');
    sec.appendChild(inc);
    $('[data-top]',inc).onclick=function(e){e.preventDefault();scrollTo({top:optl.getBoundingClientRect().top+pageYOffset-110,behavior:'smooth'})};
    var rv=$('#prdReview .board_title h2');if(rv)rv.textContent='상품 후기';var qa=$('#prdQnA .board_title h2');if(qa)qa.textContent='상품 문의';
    $$('#prdReview .board_title a,#prdQnA .board_title a').forEach(function(x){var t=x.textContent.trim();if(t==='LIST')x.textContent='전체 보기';if(t==='WRITE')x.textContent='글쓰기'});
    var gd=$('#prdInfo .detail_guide');if(gd&&!$('.xp-h2')){var gh=el('h3','xp-h2');gh.textContent='배송 · 교환 · 환불 안내';gd.parentNode.insertBefore(gh,gd);
      var KO={'PAYMENT INFO':'결제 안내','DELIVERY INFO':'배송 안내','EXCHANGE INFO':'교환 · 반품 안내','SERVICE INFO':'서비스 문의 안내'};
      $$('.ec-base-fold',gd).forEach(function(f){var h=$('h2',f),cn=$('.contents',f);if(h&&KO[h.textContent.trim()])h.textContent=KO[h.textContent.trim()];if(!cn||!cn.textContent.replace(/\s+/g,''))f.classList.add('xp-empty')})}
    var hm=location.hash.match(/^#opt=(.+)$/);if(hm){var on=decodeURIComponent(hm[1]),go=function(){try{if(sel&&!$$('#totalProducts tr.option_product').length)pick(on,true)}catch(e){}};setTimeout(go,700)}
    if(location.hash==='#drawing'){var dw=D.getElementById('drawing');if(dw)dw.scrollIntoView()}
  }
  var done=false;function reveal(){if(done)return;done=true;H.classList.remove('xp-pre')}
  if(no){window.XMPD_CB=function(){try{apply(window.XMPD)}catch(e){if(window.console)console.error('[XM]',e)}reveal()};
    var s=el('script');s.src=CDN+DV+'_'+no+'.js';s.onerror=reveal;D.head.appendChild(s);setTimeout(reveal,2500)}
  else reveal();
  return true;
}
function loginFix(){var w=$('.xm-lg-wrap');if(!w||$('.xm-nm',w))return;
  var a=$$('.xm-orig a').filter(function(x){return /비회원\s*구매/.test(x.textContent)&&/orderform/.test(x.getAttribute('href')||'')})[0],alt=$('.xm-lg-alt',w);if(!a||!alt)return;
  var b=el('a','xm-sb xm-nm','<span style="margin:0">비회원으로 주문하기 →</span>');b.href=a.getAttribute('href');b.style.cssText='background:#0E0E0E;color:#fff;text-decoration:none;margin:14px 0 0;justify-content:center;box-sizing:border-box';
  var p=el('p',null,'회원가입 없이 바로 주문할 수 있습니다.');p.style.cssText='margin:8px 0 0;font-size:12.5px;color:#3A3A3A;text-align:center';
  alt.parentNode.insertBefore(b,alt);alt.parentNode.insertBefore(p,alt)}
function run(){if(isLogin){var lf=function(){try{loginFix();common()}catch(e){if(window.console)console.error('[XM]',e)}};if(D.readyState==='complete')lf();else{D.addEventListener('DOMContentLoaded',function(){setTimeout(lf,0)});addEventListener('load',lf)}return}
  try{common()}catch(e){if(window.console)console.error('[XM]',e)}
  if(isProd){var ok=false;try{ok=product()}catch(e){if(window.console)console.error('[XM]',e)}if(!ok)H.classList.remove('xp-pre')}}
if(D.readyState!=='loading')run();else D.addEventListener('DOMContentLoaded',run);
})();
