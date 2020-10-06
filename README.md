# Auto collect channel points
## usage
- make a new bookmark
- call it something like auto-collect
- set this to the url:
```javascript
javascript:const observer=new MutationObserver(function(e,o){for(const o of e)"childList"===o.type&&(console.log("A child node has been added or removed."),o.addedNodes.forEach(e=>{e&&e.classList.contains("claimable-bonus__icon")&&(console.log("collecting bonus"),document.querySelector(".claimable-bonus__icon").click())}))});observer.observe(document.querySelector(".community-points-summary "),{attributes:!0,childList:!0,subtree:!0});
```
