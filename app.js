console.log('app');
console.log(popularContents);
console.log(viewContents);
console.log(recentContents);

const popularTab = document.getElementById("popular-tab");
const viewTab = document.getElementById("view-tab");
const recentTab = document.getElementById("recent-tab");

const list = document.getElementById("list")

let prevSelectedTab = recentTab

window.onload = function(){
    console.log("onload");
    drawPage(recentContents)
}

popularTab.addEventListener("click", ()=>{
    drawPage(popularContents)
    selectTab(popularTab)
})

viewTab.addEventListener("click",()=>{
    drawPage(viewContents)
    selectTab(viewTab)
})

recentTab.addEventListener("click",()=>{
    drawPage(recentContents)
    selectTab(recentTab)
})

function selectTab(tab) {
    prevSelectedTab.classList.remove("active")
    prevSelectedTab = tab
    prevSelectedTab.classList.add("active")
}

function drawPage(data) {
    list.innerHTML = ""
    for(let i = 0; i < data.length; i++) {
        list.innerHTML += `<li>
    <a href="${data[i].url}" target="_blank">
        <img src="${data[i].img}" alt="...">
    </a>
    <div class="cont_thumb">
        <strong class="tit_thumb">
            <a href="${data[i].url}" target="_blank" class="link_txt">${data[i].title}</a>
        </strong>
        <span class="info_thumb">
        <span class="ico_auto ico_cmt">${data[i].cp}</span>
    </span>
    </div>
</li>`
    }
}