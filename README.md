# Auto collect channel points
### source code: https://github.com/msorce/auto-collect-twitch-bonus/blob/main/collect.js
## usage
- make a new bookmark
- call it something like auto-collect
- set this to the url:
```javascript
const observer=new MutationObserver(function(e,o){for(const o of e)"childList"===o.type&&o.addedNodes.forEach(e=>{e.querySelector&&e.querySelector(".claimable-bonus__icon")&&(console.log("collecting bonus"),setTimeout(()=>{document.querySelector(".claimable-bonus__icon").click()},500))})});let pointsInt=setInterval(()=>{console.log("searching for community points summary"),document.querySelector(".community-points-summary ")&&(clearInterval(pointsInt),observer.observe(document.querySelector(".community-points-summary "),{attributes:!0,childList:!0,subtree:!0}))},1e3);
```
