(function(){
var S=[["Website Development","Fast, SEO-ready websites designed around your brand and built to convert visitors.","","<circle cx='14' cy='14' r='11'/><path d='M3 14h22M14 3c3.5 3.5 3.5 18.5 0 22M14 3c-3.5 3.5-3.5 18.5 0 22'/>"],
["WordPress Websites","Custom themes and easy-to-manage WordPress sites you can update without a developer.","p","<rect x='3' y='4' width='22' height='20' rx='3'/><path d='M3 10h22M8 16h6M8 20h12'/>"],
["Web Apps","Dashboards, portals and SaaS products built to scale with your users.","d","<rect x='3' y='4' width='22' height='20' rx='3'/><path d='M10 10l-3 4 3 4M18 10l3 4-3 4M15 9l-2 10'/>"],
["Desktop Apps","Reliable Windows, macOS and Linux software for work that outgrows the browser.","","<rect x='3' y='4' width='22' height='15' rx='2'/><path d='M10 24h8M14 19v5'/>"],
["iOS & Android Apps","Smooth native and cross-platform mobile apps, from idea to the app stores.","y","<rect x='8' y='3' width='12' height='22' rx='3'/><path d='M12.5 21h3'/>"],
["AI Automation","Workflows that handle repetitive tasks automatically so your team can focus on growth.","d","<circle cx='14' cy='14' r='4'/><path d='M14 3v4M14 21v4M3 14h4M21 14h4M6.2 6.2l2.8 2.8M19 19l2.8 2.8M6.2 21.8L9 19M19 9l2.8-2.8'/>"],
["AI Agents","Custom agents that answer, research and act for your business around the clock.","","<rect x='5' y='9' width='18' height='13' rx='4'/><path d='M14 9V4M11 15v1M17 15v1M10 19.5h8'/>"],
["UGC Ads","Authentic creator-style video ads that stop the scroll and drive sales.","p","<rect x='3' y='6' width='22' height='16' rx='3'/><path d='M12 11l5 3-5 3z'/>"]];
document.getElementById('sg').innerHTML=S.map(function(s,i){return "<div class='sv "+s[2]+" rv s' style='--d:"+(i%4)*.1+"s'><div class='t'><svg viewBox='0 0 28 28'>"+s[3]+"</svg><span>0"+(i+1)+"</span></div><h3>"+s[0]+"</h3><p>"+s[1]+"</p><a href='#contact'>Learn more →</a></div>"}).join('');

/* services card carousel inspired by the supplied reference video */
var svcStage=document.getElementById('serviceStage'),svcTrack=document.getElementById('sg'),svcCards=[].slice.call(svcTrack.querySelectorAll('.sv')),svcPrev=document.getElementById('svcPrev'),svcNext=document.getElementById('svcNext'),svcDots=document.getElementById('svcDots'),svcIndex=0,svcTimer;
svcCards.forEach(function(_,i){var d=document.createElement('button');d.setAttribute('aria-label','Show service '+(i+1));d.onclick=function(){setSvc(i,true)};svcDots.appendChild(d)});
function setSvc(i,manual){svcIndex=(i+svcCards.length)%svcCards.length;var card=svcCards[svcIndex];if(!card)return;var stageWidth=svcStage.clientWidth,cardWidth=card.offsetWidth,gap=parseFloat(getComputedStyle(svcTrack).gap)||22;var offset=(stageWidth-cardWidth)/2-(svcIndex*(cardWidth+gap));svcTrack.style.transform='translateX('+offset+'px)';svcCards.forEach(function(c,n){c.classList.toggle('active',n===svcIndex)});[].forEach.call(svcDots.children,function(d,n){d.classList.toggle('on',n===svcIndex)});if(manual)restartSvc()}
function nextSvc(){setSvc(svcIndex+1,false)}
function restartSvc(){clearInterval(svcTimer);svcTimer=setInterval(nextSvc,3200)}
svcPrev.onclick=function(){setSvc(svcIndex-1,true)};svcNext.onclick=function(){setSvc(svcIndex+1,true)};
svcStage.addEventListener('mouseenter',function(){clearInterval(svcTimer)});svcStage.addEventListener('mouseleave',restartSvc);
window.addEventListener('resize',function(){setSvc(svcIndex,false)});
setTimeout(function(){setSvc(0,false);restartSvc()},60);


var P=[["Phd Professor Portfolio","Portfolio","web","A clean professional portfolio that presents his work and experience.","#8B6CFF"],
["Digital Marketer Portfolio","Portfolio","web","A personal portfolio site with a bold, modern look.","#D7FF64"],
["Developer Portfolio","Portfolio","web","A personal portfolio that puts projects and skills front and center.","#5B3FE0"],
["Naeem Mobile","Website","web","A fast, mobile-friendly website for a mobile business.","#D7FF64"],
["POS Software for Mobile Shop","Software","app","Point-of-sale software for mobile shops: billing, stock and sales in one place.","#8B6CFF"],
["Khamis E-commerce Store","E-commerce","web","An online store built for smooth browsing and easy checkout.","#3E24C4"],
["FinTrack","App","app","An app for tracking income, spending and personal finances.","#D7FF64"],
["Habitly","App","app","A habit-tracking app that helps people build daily routines.","#8B6CFF"],
["AI Customer Support Agent","AI Agent","ai","An AI agent that answers customer questions around the clock.","#3E24C4"],
["AI Invoice Processing Agent","AI Agent","ai","An AI agent that reads invoices and pulls out the data automatically.","#8B6CFF"],
["AI Voice Calling Agent","AI Agent","ai","An AI agent that makes and handles phone calls by voice.","#5B3FE0"],
["AI Voice Receptionist","AI Agent","ai","An AI receptionist that answers calls and routes or books them.","#D7FF64"]];
var win="<svg viewBox='0 0 200 130'><rect x='6' y='6' width='188' height='118' rx='10' fill='#fff'/><rect x='6' y='6' width='188' height='18' rx='10' fill='#0E0B26' opacity='.1'/><circle cx='20' cy='15' r='3' fill='#0E0B26' opacity='.35'/><circle cx='31' cy='15' r='3' fill='#0E0B26' opacity='.35'/><rect x='22' y='40' width='80' height='10' rx='5' fill='#0E0B26'/><rect x='22' y='58' width='110' height='7' rx='3' fill='#0E0B26' opacity='.3'/><rect x='22' y='72' width='90' height='7' rx='3' fill='#0E0B26' opacity='.3'/><rect x='22' y='94' width='50' height='16' rx='8' fill='#0E0B26'/><circle cx='150' cy='80' r='26' fill='#0E0B26' opacity='.14'/></svg>";
var bot="<svg viewBox='0 0 200 130'><rect x='20' y='14' width='110' height='34' rx='12' fill='#fff'/><rect x='34' y='28' width='64' height='7' rx='3' fill='#0E0B26' opacity='.4'/><rect x='70' y='58' width='110' height='34' rx='12' fill='#0E0B26'/><rect x='84' y='72' width='64' height='7' rx='3' fill='#fff' opacity='.7'/><rect x='20' y='100' width='90' height='24' rx='12' fill='#fff'/></svg>";
var app="<svg viewBox='0 0 200 130'><rect x='62' y='6' width='76' height='118' rx='14' fill='#fff'/><rect x='72' y='20' width='56' height='36' rx='8' fill='#0E0B26' opacity='.85'/><rect x='72' y='66' width='56' height='7' rx='3' fill='#0E0B26' opacity='.4'/><rect x='72' y='80' width='38' height='7' rx='3' fill='#0E0B26' opacity='.25'/><rect x='72' y='98' width='56' height='14' rx='7' fill='#0E0B26' opacity='.14'/></svg>";
var pg=document.getElementById('pg');if(pg)pg.innerHTML=P.map(function(p,i){return "<article class='pc rv s' data-c='"+p[2]+"' style='--d:"+(i%3)*.12+"s'><div class='th' style='--c:"+p[4]+"'>"+(p[2]=="ai"?bot:p[2]=="app"?app:win)+"</div><div class='bd'><small>"+p[1]+"</small><h3>"+p[0]+"</h3><p>"+p[3]+"</p><a href='#contact'>View project →</a></div></article>"}).join('');

var W=[["One team, idea to launch","Design, development and AI under one roof, so nothing gets lost between handoffs.","<circle cx='10' cy='10' r='4'/><circle cx='20' cy='11' r='3'/><path d='M3 24c0-4 3-7 7-7s7 3 7 7M17 18c4-1 8 1 8 6'/>"],
["Built to scale","Clean, well-structured code and architecture that keeps working as your users grow.","<path d='M14 3l11 6-11 6L3 9z'/><path d='M3 14l11 6 11-6M3 19l11 6 11-6'/>"],
["Clear communication","Regular updates and honest timelines. You always know where your project stands.","<path d='M4 6h20v13H12l-6 5v-5H4z'/><path d='M9 11h10M9 15h6'/>"],
["Fast, iterative delivery","Working versions early, then short cycles of feedback and improvement.","<path d='M16 3L6 16h7l-1 9 10-13h-7z'/>"],
["AI built in","Automation and AI agents are part of how we build, not an add-on.","<rect x='5' y='9' width='18' height='13' rx='4'/><path d='M14 9V4M11 15v1M17 15v1M10 19.5h8'/>"],
["Support after launch","We stay on for fixes, updates and new features once you go live.","<path d='M14 3l9 3v7c0 6-4 9-9 12-5-3-9-6-9-12V6z'/><path d='M10 14l3 3 5-6'/>"]];
document.getElementById('wg').innerHTML=W.map(function(w,i){return "<div class='wc rv "+(i%3==0?"l":i%3==2?"r":"")+"' style='--d:"+(Math.floor(i/3))*.15+"s'><div class='ic'><svg viewBox='0 0 28 28'>"+w[2]+"</svg></div><h3>"+w[0]+"</h3><p>"+w[1]+"</p></div>"}).join('');

/* scroll animations */
document.documentElement.classList.add('js-ready');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -8% 0px'});
function obs(){document.querySelectorAll('.rv,.wd').forEach(function(el){io.observe(el)})}
obs();
requestAnimationFrame(function(){document.querySelectorAll('h1 .wd').forEach(function(w){w.classList.add('in')})});

/* scroll progress, header, parallax, active link */
var bar=document.getElementById('bar'),hd=document.getElementById('hd'),root=document.documentElement,links=[].slice.call(document.querySelectorAll('#nv a')),secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))}),tick=false;
function upd(){var y=window.scrollY,h=root.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?y/h:0)+')';hd.classList.toggle('sc',y>30);root.style.setProperty('--sy',Math.min(y,900));
var cur=-1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<innerHeight*.4)cur=i});links.forEach(function(a,i){a.classList.toggle('on',i===cur)});tick=false}
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();

/* mobile menu */
document.getElementById('bg').onclick=function(){hd.classList.toggle('open')};
links.forEach(function(a){a.onclick=function(){hd.classList.remove('open')}});

/* contact form -> WhatsApp */
document.getElementById('cf').addEventListener('submit',function(e){e.preventDefault();
var t="Hi Selwick, I'm "+n.value+(e_.value?" ("+e_.value+")":"")+". I need: "+s.value+".\n"+m.value;
window.open("https://wa.me/923265933029?text="+encodeURIComponent(t),"_blank")});
var n=document.getElementById('n'),e_=document.getElementById('e'),s=document.getElementById('s'),m=document.getElementById('m');
})();
