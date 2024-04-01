import{a as b,S as v,i as f}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function g(t,o){const a="https://pixabay.com/api/",l={key:"42958097-9b7fc012df8e9620edb2fab69",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await b.get(a,{params:l})).data}function M({webformatURL:t,largeImageURL:o,tags:a,likes:l,views:e,comments:r,downloads:n}){return`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
        <img loading="lazy" class="gallery-image" src="${o}" alt="${a}" />
      </a>
        <div class="image-info">
    <ul class="infoBlock">
    <li class="title">Likes</li>
    <li class="info">${l}</li>
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
    <li class="info">${n}</li>
    </ul>
    </div>
  </li>`}function S(t){return t.map(M).join("")}function h(t){const o=S(t);i.gallery.insertAdjacentHTML("beforeend",o),E.refresh()}const E=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),i={formEl:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnLoadMore:document.querySelector(".loadMore")};let d,u=1,y=0;const P=15;i.formEl.addEventListener("submit",q);i.btnLoadMore.addEventListener("click",w);c();s();async function q(t){if(t.preventDefault(),L(),d=t.target.elements.request.value.trim(),i.gallery.innerHTML="",u=1,s(),!d){c(),f.error({message:"Please enter a request",position:"topRight"});return}try{const o=await g(d,u);if(console.log(o),o.hits.length===0){c(),s(),f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y=Math.ceil(o.totalHits/P),h(o.hits),m()}catch(o){console.log(o),s()}c(),i.formEl.reset(),p()}async function w(){u+=1,L(),s();try{const t=await g(d,u);h(t.hits),m()}catch(t){console.log(t),s()}B(),c(),p()}function m(){i.btnLoadMore.classList.remove("is-hidden")}function s(){i.btnLoadMore.classList.add("is-hidden")}function p(){u>=y?(s(),f.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):m()}function c(){i.loaderEl.classList.add("is-hidden")}function L(){i.loaderEl.classList.remove("is-hidden")}function B(){const t=i.gallery.firstChild.getBoundingClientRect().height;scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
