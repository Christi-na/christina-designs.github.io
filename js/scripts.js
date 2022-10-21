// Pagination
const presPages = document.getElementsByClassName("shop-presentation");
let currentPage = 0;

presPages[currentPage].style.display = "initial";

function showPage(data) {
    let number;

    switch(data){
        case "next":
            number = currentPage + 2;
            break;
        case "prev":
            number = currentPage;
            break;
        default:
            number = data;
            break;
    }

    let prevLink  = document.getElementById(`page-link-${currentPage + 1}`);
    let currentLink = document.getElementById(`page-link-${number}`);
    
    if(number > 1){
        document.getElementById('page-link-prev').classList.remove('disabled');
    }
    else if(number == 1){
        document.getElementById('page-link-prev').classList.add('disabled');
    }
    if(number >= presPages.length - 1){
        document.getElementById('page-link-next').classList.add('disabled');
    }
    if(number < presPages.length){
        document.getElementById('page-link-next').classList.remove('disabled');
    }

    prevLink.classList.remove("active");
    currentLink.classList.add("active");

    
    presPages[currentPage].style.display = "none";
    presPages[number-1].style.display = "initial";
    currentPage = number - 1;
    
}

