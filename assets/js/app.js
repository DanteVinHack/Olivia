!function(){document.querySelectorAll("a").forEach((e=>{if(!e.classList.contains("footer__link"))return e.onclick=e=>e.preventDefault();let t=e.hash;document.body.animate({scrollTop:e.offsetTop},800,(function(){location.hash=t}))}));const e=document.querySelector("#btn-register"),t=document.querySelector("#form__register"),c=document.querySelector("#mask");e.addEventListener("click",(function(){t.classList.add("active"),c.classList.add("active"),t.classList.contains("active")&&c.classList.contains("active")&&window.addEventListener("scroll",(e=>{document.body.scrollTop=0}))})),c.addEventListener("click",(function(){t.classList.remove("active"),c.classList.remove("active")}))}();