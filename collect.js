// observe for new elements in community-points-summary 
// with this class claimable-bonus__icon
/*
example
<div class="claimable-bonus__icon tw-flex"><div class="ScIconLayout-sc-1bgeryd-0 cFCmuf tw-icon"><div class="ScAspectRatio-sc-1sw3lwy-1 dNNaBC tw-aspect"><div class="ScAspectSpacer-sc-1sw3lwy-0 gkBhyN"></div><svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 cMQeyU"><g><path fill-rule="evenodd" d="M16.503 3.257L18 7v11H2V7l1.497-3.743A2 2 0 015.354 2h9.292a2 2 0 011.857 1.257zM5.354 4h9.292l1.2 3H4.154l1.2-3zM4 9v7h12V9h-3v4H7V9H4zm7 0v2H9V9h2z" clip-rule="evenodd"></path></g></svg></div></div></div>
*/
// if this exists claimable-bonus__icon
// click it

const observer = new MutationObserver(function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
            mutation.addedNodes.forEach(n => {
                if (n.classList.contains(".claimable-bonus__icon")) {
                    document.querySelector(".claimable-bonus__icon").click();
                }
            });
        }
    }
});
observer.observe(document.querySelector('.community-points-summary '), { attributes: true, childList: true, subtree: true })
