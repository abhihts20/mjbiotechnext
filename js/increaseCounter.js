function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    if(obj!==null){
        let range = end - start;
        // no timer shorter than 50ms (not really visible any way)
        let minTimer = 50;
        // calc step time to show all intermediate values
        let stepTime = Math.abs(Math.floor(duration / range));
        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);
        // get current time and calculate desired end time
        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timer;
        function run() {
            let now = new Date().getTime();
            let remaining = Math.max((endTime - now) / duration, 0);
            let value = Math.round(end - (remaining * range));
            // noinspection JSValidateTypes
            obj.innerHTML = value;
            if (value === end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();
    }
}

export {
    animateValue
}
// animateValue("city-value",0,26,2000);
