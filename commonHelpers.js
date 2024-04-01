import{a as b,S as v,i as m}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();async function g(t,o){const l="https://pixabay.com/api/",s={key:"42958097-9b7fc012df8e9620edb2fab69",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await b.get(l,{params:s})).data}function M({webformatURL:t,largeImageURL:o,tags:l,likes:s,views:e,comments:r,downloads:a}){return`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
        <img loading="lazy" class="gallery-image" src="${o}" alt="${l}" />
      </a>
        <div class="image-info">
    <ul class="infoBlock">
    <li class="title">Likes</li>
    <li class="info">${s}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Views</li>
    <li class="info">${e}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Comments</li>
    <li class="info">${r}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Downloads</li>
    <li class="info">${a}</li>
    </ul>
    </div>
  </li>`}function S(t){return t.map(M).join("")}function h(t){const o=S(t);i.gallery.insertAdjacentHTML("beforeend",o),E.refresh(),d()}const E=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),i={formEl:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnLoadMore:document.querySelector(".loadMore")};let u,c=1,y=0;const P=15;i.formEl.addEventListener("submit",q);i.btnLoadMore.addEventListener("click",w);n();f();async function q(t){if(t.preventDefault(),L(),u=t.target.elements.request.value.trim(),i.gallery.innerHTML="",c=1,!u){n(),m.error({message:"Please enter a request",position:"topRight"});return}try{const o=await g(u,c);if(console.log(o),o.hits.length===0){n(),m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y=Math.ceil(o.totalHits/P),h(o.hits),d()}catch(o){console.log(o),f()}p(),n(),i.formEl.reset()}async function w(){c+=1,L();try{const t=await g(u,c);h(t.hits),d()}catch(t){console.log(t),f()}p(),B(),n()}function d(){i.btnLoadMore.classList.remove("is-hidden")}function f(){i.btnLoadMore.classList.add("is-hidden")}function p(){c>=y?(f(),m.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):d()}function n(){i.loaderEl.classList.add("is-hidden")}function L(){i.loaderEl.classList.remove("is-hidden")}function B(){const t=i.gallery.firstChild.getBoundingClientRect().height;scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
