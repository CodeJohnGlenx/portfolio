const about = document.querySelector('.about-text h2');
const rect = about.getBoundingClientRect();
let aboutCount = 0;
const aboutText = "John Glen Falceso is a Computer Science student from the Polytechnic University of the Philippines. I specialize in creating mobile, system, and web software applications. Adaptable to change and with a drive for life-long learning, I firmly believe that every interesting project is just one code away. Beyond coding, I also like to run long distances, read books, and play FPS games.";

// if element is in view port
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


// type text effect
function typeWriter(text, speed) {
    let i = 0;

    // type char callback
    function type() {
        if (i < text.length) {
            document.querySelector(".about-text p").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
          }
    }
    type();
  }


// execute type effect when scrolling
document.addEventListener('scroll', function () {
    if (aboutCount == 0 && isInViewport(about)) {
        typeWriter(aboutText, 5);
        aboutCount = 1;
    }
}, {
    passive: true
});