document.querySelectorAll("h1").forEach((ele) => ele.className = "counter")
const counters = document.querySelectorAll(".counter")
counters.forEach((counter) => {
    counter.innerHTML = 0

    //1st Method
    // setInterval(() => {
    //     const targetCount = +counter.getAttribute('data-target');
    //     // console.log(typeof (targetCount));
    //     const startingCount = +counter.innerHTML
    //     const incr = targetCount / 100;
    //     if (startingCount < targetCount) {
    //         counter.innerHTML = `${startingCount + incr}`
    //         // setTimeout(updatedCounter, 10)
    //     }

    // }, 10);

    const updatedCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        // console.log(typeof (targetCount));
        const startingCount = +counter.innerHTML
        const incr = targetCount / 100;
        if (startingCount < targetCount) {
            counter.innerHTML = `${startingCount + incr}`
            setTimeout(updatedCounter, 10)
        }
    }
    updatedCounter();
})