
import { pageComponents } from "./data.js";

import { componentsRenderer } from "./renderer.js";

import { createscrollTriggers } from "./homeData/scrollEvents/scrollConfig.js";

import { setTriggers } from "./homeData/scrollEvents/scrollEvents.js";

import { scrollToTop } from "./homeData/scrollEvents/scrollEvents.js";

// function to load a component or page //

function loadHtml(url){

    return fetch(url).then((response) => {

        if(!response.ok){

            throw new Error(`error loading ${url} not found`);
        }

        return response.text();
    })
    .then((result) => {

        return result;

    })
    .catch((error) => {

        console.log(error.message);
    })

}


// function to inject components into page //


function mountComponents(wrapper){

    const componentsSrc = wrapper.querySelectorAll("[data-src]");

    const promises = Array.from(componentsSrc).map((componentSrc) => {

        const componentUrl = componentSrc.getAttribute("data-src");

        return loadHtml(componentUrl)
        
        .then((componentHtml) => {

            componentSrc.outerHTML = componentHtml;

        })
        .catch((error) => {

            console.log(`error loading not ${componentSrc} found`);
        })
    })

    return Promise.all(promises);
}


// function to render a page //


function renderPage(pageUrl = "pages/home/home.html"){

    const virtualDom = document.createElement("div");

    const root = document.querySelector("#root");

    loadHtml(pageUrl).then((response) => {

        return response;
    })
    .then((pageContent) => {

        virtualDom.insertAdjacentHTML("beforeend" , pageContent);

        return mountComponents(virtualDom);

    })
    .then(() => {

        root.insertAdjacentHTML("beforeend" , virtualDom.innerHTML);

        if(typeof componentsRenderer !== "object"){

            return false
        }

        const keys = Object.keys(componentsRenderer);

        if(keys.length === 0){

            return false
        }

        keys.forEach((key) => {

            const renderer = componentsRenderer[key];

            if(typeof renderer === "function"){

                renderer(pageComponents[key])
            }

        })

        const triggers = createscrollTriggers();

        if(triggers){

            setTriggers(triggers);
        }


        // go to top event functionality starts here //
        
        const btnTop = document.querySelector(".back-to-top");

        btnTop.addEventListener("click" , function(){

           scrollToTop(btnTop)

        })

    })
}

renderPage()

// Function to Launch An Home Slider //

export function launchHomeSlider(){

    new Splide( '.splide' , {

        classes: {

		arrows: 'splide__arrows slider-arrows-box',

		arrow : 'splide__arrow slider-arrow',

		prev  : 'splide__arrow--prev arrow-prev',

		next  : 'splide__arrow--next arrow-next',
    },

    pagination: false,

    autoplay: true,

    rewind: true

    }).mount();

    const sliderArrows = document.querySelectorAll(".slider-arrow");

    sliderArrows.forEach((sliderArrow) => {

        sliderArrow.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'><g transform='scale(0.078125)'><path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'/></g></svg>";
    })

}

// Function to Launch A Tab Slider //


export function launchTabSlider(){

    return new Swiper(".swiper" , {

        autoplay: true,

        navigation: {

            nextEl: '.custom-button-next',
            prevEl: '.custom-button-prev'

        },


        breakpoints: {

            768: {

                slidesPerView: 2
            },

            992: {

                slidesPerView: 3
            },

            1200: {

                slidesPerView: 4
            }

        }

    });
}
