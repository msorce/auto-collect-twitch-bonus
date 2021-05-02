const observer = new MutationObserver(function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(n => {
                if (n.querySelector) {
                    // if points are there to collect collect them
                    if (n.querySelector(".claimable-bonus__icon")) {
                        console.log('collecting bonus');
                        setTimeout(() => {
                            // click that button
                            document.querySelector(".claimable-bonus__icon").click();
                        }, 500)
                    }
                }
            });
        }
    }
});

// search for community-points-summary element it loads in asynchronously 
let pointsInt = setInterval(() => {

    console.log("searching for community points summary...");
    let el = document.querySelector('.community-points-summary ');

    if (el) {

        // community-points-summary exists now
        clearInterval(pointsInt);

        console.log("👁 now observing for channel points to collect 👁");

        let btn = (document.querySelector(".claimable-bonus__icon"));

        // if there is already points to claim claim them
        if (btn) {
            btn.click();
        }

        // observe for new elements in community-points-summary 
        observer.observe(
            document.querySelector('.community-points-summary'), {
                attributes: true,
                childList: true,
                subtree: true
            }
        );
    }
}, 1000);
