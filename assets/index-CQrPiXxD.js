(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function l(){try{let o=await fetch("/codev//com-datdfddfa.json");o.ok||n();const r=await o.json();a(r.data)}catch(o){o&&n(),console.error(o);return}}function a(o){document.querySelector(".cl-com-block-group").innerHTML=o.map(r=>`<div class="client-com-block">
        <hr class="separator">
        <div class="cl-com-block-content">
            <div class='com-person'>
                <img src='${r.icon}'>
                <div class='com-pers-text'>
                    <p class='com-pers-name'>${r.name}</p>
                    <p class='com-pers-role'>${r.role}</p>
                </div>
            </div>
            <p class='com-descr main-text'>
                ${r.description}
            </p>
            <a class='com-link base-link' href=''>${r.link}<svg width="14" height="8" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" style='margin-left: 6px;'>
<path d="M1 5.5H15M15 5.5L11 9.5M15 5.5L11 1.5" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
        </div>
        <hr class="separator">
        </div>`).join("")}l();function n(){document.querySelector(".clients-comments").classList.toggle("error")}
