const countEl = document.getElementById("counter");
const animated = document.getElementById("redirect")

function countDown(n = 3) {
    if(n < 0){
        window.location.href = "index.html";
        return 0;
    } else {
        setTimeout(() => {
            countDown(n - 1)
            }, 
            1000);
        countEl.innerHTML = n;
    }
}


animated.onanimationend = () => {
    countDown();
};