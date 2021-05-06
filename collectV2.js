let btn;
setInterval(() => {
    btn = document.querySelector(".claimable-bonus__icon");
    if (btn) {btn.click();console.log("collecting channel points om nom nom nom");}
}, 5000)
try {
    let synth = window.speechSynthesis;
    let utterThis = new SpeechSynthesisUtterance("clickin that button all day err day");
    synth.speak(utterThis);   
} catch (err) {/*Quiet*/}
