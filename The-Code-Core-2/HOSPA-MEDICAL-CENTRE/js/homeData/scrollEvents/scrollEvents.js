
import { actionHandlers } from "./scrollHandlers.js";

let scrollTriggers = [];

export function setTriggers(getTriggers = ""){

    scrollTriggers = getTriggers;

}

function handleScrollEvents(){

    const scrollY = window.pageYOffset;

    scrollTriggers.forEach(({element , triggerAt , actionType}) => {

        const actions = actionHandlers[actionType];

        if(actions){

            actions({element , triggerAt , scrollY});
        }
    })
}


window.addEventListener("scroll" , handleScrollEvents);


export function scrollToTop(){

    setTimeout(() => {

        window.scrollTo({

            top: 0,

            behavior: 'smooth',

        });

    } , 300)

}