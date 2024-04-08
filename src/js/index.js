window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    let height = Math.min(100 + scroll / 5, 100); // Change '5' to control the speed of the animation
    document.getElementById('centerImage').style.width = height + '%';

    /*let widthCenterImage = document.getElementById('centerCarousel').style.width;
    // Get the width of the center image

    if (widthCenterImage < '70%') {
        // add 0.1% to the width of the center image
        document.getElementById('centerCarousel').style.height = (parseFloat(widthCenterImage) + 0.1) + '%';
        console.log(widthCenterImage);
        
    }*/

});

let list = [22, 50, 22];
let scrollPosition = window.scrollY;

window.addEventListener('scroll', function() {
    let newScrollPosition = window.scrollY;
    if (newScrollPosition > scrollPosition && list[1] < 80) {
        // L'utilisateur a défilé vers le bas
        list[0] -= 0.1;
        list[1] += 0.2;
        list[2] -= 0.1;
    } else if (newScrollPosition < scrollPosition && list[1] > 50){
        // L'utilisateur a défilé vers le haut
        list[0] += 0.1;
        list[1] -= 0.2;
        list[2] += 0.1;
    }
    scrollPosition = newScrollPosition;
    document.getElementById('centerCarousel').style.width = list[1] + '%';
    document.getElementById('leftCarousel').style.width = list[0] + '%';
    document.getElementById('rightCarousel').style.width = list[2] + '%';

    if (list[1] > 60) {
        document.getElementById('centerVideo').style.opacity = '1';
    }
    else {
        document.getElementById('centerVideo').style.opacity = '0';
    }
});


// Fonction pour vérifier si un élément est visible à l'écran
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour animer le compteur
function animateCounter(element, targetValue) {
    let value = 0;
    const interval = setInterval(() => {
        if (value < targetValue) {
            value++;
            element.textContent = value;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

// Obtenir tous les éléments bigNumber
const bigNumbers = document.querySelectorAll('.bigNumber');

// List of target values
const targetValues = [7, 5, 12, 10];

// Écouter l'événement de défilement
window.addEventListener('scroll', () => {
    let i = 0;
    bigNumbers.forEach(bigNumber => {
        if (isInViewport(bigNumber) && bigNumber.textContent === '0') {
            animateCounter(bigNumber, targetValues[i]);
        }
        else if (!isInViewport(bigNumber)) {
            bigNumber.textContent = 0;
        }
        i++;
    });
    i=0;
});

function showLetter() {
    document.getElementById('container').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('letter-box').style.display = 'block';
}

function hideLetter() {
    document.getElementById('container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('letter-box').style.display = 'none';
}