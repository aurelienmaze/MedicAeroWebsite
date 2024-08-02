document.addEventListener("DOMContentLoaded", () => {
    const letter = document.querySelector(".letter");
    let position = 100; // Initial position at bottom
    const step = 20; // Step size
    var interval = 1000; // Interval time in ms

    const moveLetter = () => {
        if (position > 10) {
            position -= step;
            if (interval > 100)
            interval -= 300;
            letter.style.top = `${position}%`;
            setTimeout(moveLetter, interval);
            window.scrollTo(0, 0);
        }
        else {
            letter.style.transform = "scale(1)";
        }
    };


    window.scrollTo(0, 0);

    moveLetter();
});

function returnToPreviousPage() {
    window.history.back();
}