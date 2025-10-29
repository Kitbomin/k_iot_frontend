var count = 0;
function updateDisplay() {
    var countElement = document.getElementById('countValue');
    if (countElement) {
        // .textContent 속성은 문자열 타입만 넣을 수 있음
        countElement.textContent = count.toString();
    }
}
function increment() {
    count++;
    updateDisplay();
}
function decrement() {
    count--;
    updateDisplay();
}
document.addEventListener('DOMContentLoaded', function () {
    var incrementBtn = document.getElementById('incrementBtn');
    var decrementBtn = document.getElementById('decrementBtn');
    if (incrementBtn) {
        incrementBtn.addEventListener('click', increment);
    }
    if (decrementBtn) {
        decrementBtn.addEventListener('click', decrement);
    }
});
