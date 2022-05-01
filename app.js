console.log('app');
console.log(popularContents);
console.log(viewContents);
console.log(recentContents);

const popularTab = document.getElementById("popular-tab");
const viewTab = document.getElementById("view-tab");
const recentTab = document.getElementById("recent-tab");
const moreButton = document.getElementById("more-button");
const loadingImage = document.getElementById("loading-image");

const list = document.getElementById("list")
const fetchedData = {};

let prevSelectedTab = recentTab

window.onload = function(){
    console.log("onload");
    drawPage("recentContents")
}

popularTab.addEventListener("click", ()=>{
    drawPage("popularContents")
    selectTab(popularTab)
})

viewTab.addEventListener("click",()=>{
    drawPage("viewContents")
    selectTab(viewTab)
})

recentTab.addEventListener("click",()=>{
    drawPage("recentContents")
    selectTab(recentTab)
})

moreButton.addEventListener("click", () => {
    if (prevSelectedTab === recentTab) {
        loadTab("recentContents");
    } else if (prevSelectedTab === viewTab) {
        loadTab("viewContents");
    } else if (prevSelectedTab == popularTab) {
        loadTab("popularContents");
    }
})

function selectTab(tab) {
    prevSelectedTab.classList.remove("active")
    prevSelectedTab = tab
    prevSelectedTab.classList.add("active")
}

function drawPage(tab) {
    list.innerHTML = ""
        if (!fetchedData[tab]) {
            fetchedData[tab] = []
            loadTab(tab)
        }
        for(let i = 0; i < fetchedData[tab].length; i++) {
            list.innerHTML += `<li>
        <a href="${fetchedData[tab][i].url}" target="_blank">
            <img src="${fetchedData[tab][i].img}" alt="...">
        </a>
        <div class="cont_thumb">
            <strong class="tit_thumb">
                <a href="${fetchedData[tab][i].url}" target="_blank" class="link_txt">${fetchedData[tab][i].title}</a>
            </strong>
            <span class="info_thumb">
            <span class="ico_auto ico_cmt">${fetchedData[tab][i].cp}</span>
        </span>
        </div>
    </li>`
        }
}

function loadTab(tab) {
    loadingImage.classList.remove("hidden");
    moreButton.classList.add("hidden");

    fetchData(tab, 10, (data) => {
        fetchedData[tab] = fetchedData[tab].concat(data)
        drawPage(tab)
        loadingImage.classList.add("hidden");
        moreButton.classList.remove("hidden");
    })
}