
export function popupSearch(){

    const searchTogglers = document.querySelectorAll(".ex-features");

    const popup = document.querySelector(".search-popup");

    const overlay = document.querySelector(".search-popup-overlay");

    const searchForm = document.querySelector(".search-popup-form"); 

    if (searchTogglers.length === 0 || !popup || !overlay || !searchForm) return;

    const showPopUp = () => {

        const mobileCanvas = document.querySelector(".offcanvas.show");

        if(mobileCanvas){

            const canvasInstance = bootstrap.Offcanvas.getInstance(mobileCanvas);

            canvasInstance.hide();
        }

        popup.classList.add("active");

        setTimeout(() => {

            searchForm.classList.add("show");

        }, 500);
        
    }

    const hidePopUp = () => {

        popup.classList.remove("active");

        searchForm.classList.remove("show");

    }

    searchTogglers.forEach((searchToggler) => {

        searchToggler.addEventListener("click" , showPopUp)

    })

    overlay.addEventListener("click" , hidePopUp)
}

