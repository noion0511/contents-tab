let tabs = {
    "recentContents": {
        "pointer": 0,
        "data": recentContents
    },
    "viewContents": {
        "pointer": 0,
        "data" : viewContents
    },
    "popularContents": {
        "pointer": 0,
        "data": popularContents
    }
};

function fetchData(tab, size, callback) {
    let data = tabs[tab].data.slice(tabs[tab].pointer, tabs[tab].pointer + size)
    tabs[tab].pointer += size

    setTimeout(() => { callback(data) }, 1000);
}