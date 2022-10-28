// Animation on scroll
function reveal(){
    let reveals = document.querySelectorAll('.heading');
    let section = document.getElementById('experience-section');

    for( let i = 0; i < reveals.length; i++){
        let innerHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if(elementTop < innerHeight - elementVisible){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove("active");
        }
    }

    let sectionBottom = section.getBoundingClientRect().bottom;
    let sectionTop = section.getBoundingClientRect().top;

    if(sectionBottom <= innerHeight/2 && sectionBottom >= 0){

        let lightness = 100 - (sectionBottom - 50) * 90 / (innerHeight/2 - 50);
        document.documentElement.style.setProperty('--lightness', `${lightness}%`);

    } else {
        document.documentElement.style.setProperty('--lightness', `10%`);
    }
}

window.addEventListener("scroll", reveal);

reveal();