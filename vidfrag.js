let bar = document.getElementsByClassName("ytp-progress-bar")[0];
let width = bar.offsetWidth;
let runtime = bar.getAttribute("aria-valuemax");
let curtime = bar.getAttribute("aria-valuenow"); // user-set begin time also current time
let endtime; // user-set endtime
let transAmt = (parseInt(curtime) / parseInt(runtime)) * parseInt(width);

// transformX((now / length in secs) * bar length in px)

// convert above to class oop
