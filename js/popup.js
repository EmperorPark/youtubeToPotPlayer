const btnNowPageNode = document.getElementById('btnNowPage');
const btnLinkNode = document.getElementById('btnLink');
const inputLinkNode = document.getElementById('inputLink');

function clickBtnNowPage(){
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
        window.location.href = "potplayer://" + tabs[0].url;
    }); 
}

btnNowPageNode.addEventListener('click', clickBtnNowPage, false);

function clickBtnLinkNode() {
    window.location.href = "potplayer://" + inputLinkNode.value.trim();
}

btnLinkNode.addEventListener('click', clickBtnLinkNode, false);
