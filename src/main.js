// Get the navigation element
const nav = document.querySelector('nav');

// Store the previous scroll position
let prevScrollPos = window.scrollY;

let start = null;
let difference = 150 - 100; // La différence de hauteur
let duration = 200; // Durée de l'animation en millisecondes

function animate120to100(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    let height = Math.max(120 - progress / duration * difference, 100);
    nav.style.height = height + 'px';
    if (progress < duration) {
        window.requestAnimationFrame(animate120to100);
    }
    else {
        start = null;
    }
}

function animate100to120(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    let height = Math.min(100 + progress / duration * difference, 120   );
    nav.style.height = height + 'px';
    if (progress < duration) {
        window.requestAnimationFrame(animate100to120);
    }
    else {
        start = null;
    }
}

// Function to handle scroll event
function handleScroll() {
    // Get the current scroll position
    const currentScrollPos = window.scrollY;

    // Check if the user is at the top of the page
    if (currentScrollPos === 0) {
        // Set the background color to transparent
        nav.style.backgroundColor = 'transparent';
        // Enlever shadow   
        nav.style.boxShadow = 'none';
        // Enelver le border bottom
        nav.style.borderBottom = 'none';
        if (nav.style.height != '120px' && start === null) {
            window.requestAnimationFrame(animate100to120);
        }
    } else {
        /*// Check the scroll direction
        if (currentScrollPos > prevScrollPos) {
            // Scrolling down, hide the navigation bar
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up, show the navigation bar
            nav.style.transform = 'translateY(0)';
        }*/
        nav.style.backgroundColor = 'rgba(239, 245, 245, 1)';
        // Enlever shadow   
        nav.style.boxShadow = '0px 4px 0px 0px rgba(0, 0, 0, 0.25)';
        // Enelver le border bottom
        nav.style.borderBottom = '2px solid #1E3120';
        if (nav.style.height != '100px' && start === null) {
            window.requestAnimationFrame(animate120to100);
        }
        
    }

    // Update the previous scroll position
    prevScrollPos = currentScrollPos;
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Sélectionnez les éléments
const cursor = document.querySelector('#cursor');
const ringBorder = cursor.querySelector('.ring:first-child div');
const ringPointer = cursor.querySelector('.ring:last-child div');

/*// Cachez le curseur lorsque la souris se déplace
document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.display = 'block';
    document.body.style.cursor = 'none';
});

// Modifiez les styles de ring lorsque la souris est en mode pointer
document.addEventListener('mouseover', e => {
    if (e.target.style.cursor === 'pointer') {
        ringBorder.style.width = '0px';
        ringBorder.style.height = '0px';
        ringPointer.style.width = '3px';
        ringPointer.style.height = '3px';
        console.log('pointer');
    } else {
        ringBorder.style.width = 'initial';
        ringBorder.style.height = 'initial';
        ringPointer.style.width = 'initial';
        ringPointer.style.height = 'initial';
        console.log('not pointer');
    }
});*/