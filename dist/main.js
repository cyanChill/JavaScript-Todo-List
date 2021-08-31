(()=>{"use strict";const e=document.getElementById("header"),t=document.getElementById("task-header"),n=document.getElementById("task-list");function d(){const d=e.offsetHeight+t.offsetHeight;n.style.height=`max(3rem, calc(100vh - ${d}px - 3rem))`}function a(e){const t=document.createElement("i");return t.classList=e,t}const c=(e,t,n,d,a,c="")=>({taskName:e,taskDescription:t,priority:n,project:d,dueDate:a,completedDate:c});function s(e,t){const{taskName:n,taskDescription:d,priority:c,project:s,dueDate:i,completedDate:o}=e,l=document.createElement("div");l.classList.add("task-card");const p=document.createElement("div");p.classList.add("task-info"),l.appendChild(p);const r=document.createElement("div");r.classList.add("task-header"),p.appendChild(r);const m=document.createElement("div");if(m.classList.add("checkbox-div"),r.appendChild(m),!t.completed){const e=document.createElement("input");e.type="checkbox",m.appendChild(e)}const h=document.createElement("p");if(h.classList.add("task-title"),h.textContent=n,m.appendChild(h),!t.completed){const e=document.createElement("section");r.appendChild(e),e.appendChild(a(`fas fa-flag icon ${c}`)),e.appendChild(a("far fa-edit icon"))}const u=document.createElement("div");u.classList.add("task-shelf"),p.appendChild(u);const f=document.createElement("div");f.classList.add("task-description"),f.textContent=d,u.appendChild(f);const C=document.createElement("div");C.classList.add("task-stats"),u.appendChild(C);const g=document.createElement("div");C.appendChild(g);const E=document.createElement("div");C.appendChild(E);const y=document.createElement("p");y.innerHTML=`Priority: <span class="unfocus-text">${c}</span>`,g.appendChild(y);const k=document.createElement("p");if(k.innerHTML=`Due Date: <span class="unfocus-text">${i}</span>`,E.appendChild(k),t.completed){const e=document.createElement("p");e.innerHTML=`Project: <span class="unfocus-text">${s}</span>`,g.appendChild(e);const t=document.createElement("p");t.innerHTML=`Completed: <span class="unfocus-text">${o}</span>`,E.appendChild(t)}return t.completed?(l.classList.add("completed"),u.classList.add("completed")):l.addEventListener("click",(e=>{[...e.target.classList].includes("task-card")&&([...u.classList].includes("show")?u.style.maxHeight=0:u.style.maxHeight=`${u.scrollHeight}px`,u.classList.toggle("show"))})),l}const i=document.getElementById("nav-toggle"),o=document.getElementById("nav-toggle-label"),l=document.getElementById("side-nav-bar");let p=window.innerWidth;function r(){i.checked?o.innerHTML='<i class="fas fa-times icon"></i>':o.innerHTML='<i class="fas fa-bars icon"></i>',l.classList.toggle("active")}function m(){window.innerWidth<=750&&(i.checked=!i.checked,r())}i.addEventListener("change",(()=>{r()})),window.addEventListener("resize",(function(){d(),window.innerWidth>725&&window.innerWidth<775&&(window.innerWidth<=750&&p>window.innerWidth&&i.checked||window.innerWidth>=750&&p<window.innerWidth&&!i.checked)&&(i.checked=!i.checked,r()),p=window.innerWidth}));const h=document.getElementById("task-header"),u=document.getElementById("task-list"),f={Inbox:"fas fa-inbox icon",Today:"fas fa-star icon",Upcoming:"fas fa-calendar-alt icon",Anytime:"fas fa-layer-group icon",Completed:"fas fa-clipboard-check icon"};function C(e,t){!function(e){h.textContent="",h.appendChild(g(e))}(e),u.textContent="";const n=t.filter((t=>t.project===e));"Completed"!==e?n.forEach((e=>{u.appendChild(s(e,{completed:!1}))})):n.forEach((e=>{u.appendChild(s(e,{completed:!0}))}))}function g(e){const t=document.createElement("div");t.classList.add("category-label"),t.appendChild(a(f[e]||"fas fa-list icon"));const n=document.createElement("span");return n.textContent=e,t.appendChild(n),t}function E(e){document.querySelectorAll(".category").forEach((e=>{e.classList.remove("selected")})),e.classList.add("selected")}function y(e){const t=document.createElement("div");return t.classList.add("category"),t.dataset.category=e,t.appendChild(g(e)),t.appendChild(a("far fa-trash-alt icon")),t.addEventListener("click",(function(){C(this.dataset.category,[]),E(this),m()})),t}const k=document.getElementById("task-list");d();const L=c("Test1","This is a test","low","Inbox","n/a"),w=c("1234567890123456789012345","This is another test","medium","Inbox","8/10/2021, 11:59:59 PM"),v=c("Test3","This is a final test","high","Inbox","n/a"),x=s(L,{completed:!1}),T=s(w,{completed:!1}),I=s(v,{completed:!1}),b=c("Test4","This is a test","low","Completed","n/a","8/10/2021, 11:59:59 PM"),H=c("Test5","This is another test","medium","Completed","8/10/2021, 11:59:59 PM","8/10/2021, 11:59:59 PM"),M=c("1234567890123456789012345","This is a final test","high","Completed","n/a","8/10/2021, 11:59:59 PM"),B=s(b,{completed:!0}),W=s(H,{completed:!0}),D=s(M,{completed:!0});k.append(x,T,I,B,W,D);const P=[L,w,v,b,H,M];C("Inbox",P),document.querySelectorAll("#main-categories .category").forEach((e=>{e.addEventListener("click",(function(){C(this.dataset.category,P),E(this),m()}))}));const $=document.getElementById("custom-category-list");$.appendChild(y("Custom Category 1")),$.appendChild(y("Custom Category 2")),$.appendChild(y("Custom Category 3")),$.appendChild(y("Custom Category 4")),$.appendChild(y("Custom Category 5"))})();