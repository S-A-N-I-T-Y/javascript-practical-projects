const downloadbtn = document.querySelector('.download-btn')
filelink = ''
const initTimer = () => {
    if (downloadbtn.classList.contains("disable-timer")) {
        return (location.href = filelink)
    }
    // Getting timer attribute from html
    let timer = downloadbtn.dataset.timer;
    downloadbtn.classList.add("timer")
    btn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;

    //Creating the countdown timer
    const Counter = setInterval(() => {
        timer--;
        btn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;
        if (timer == 0) {
            clearInterval(Counter)
            downloadbtn.textContent = "Your file is downloading..."
        }
        setTimeout(() => {
            downloadbtn.classList.replace("timer", "disable-timer")
            downloadbtn.innerHTML = `<span class="text">Download Again</span>`
        }, 3000)
    }, 1000)
}



downloadbtn.addEventListener("click", initTimer)



