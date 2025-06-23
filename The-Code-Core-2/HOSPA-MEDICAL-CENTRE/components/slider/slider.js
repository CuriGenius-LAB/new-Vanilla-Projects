
import { launchHomeSlider } from "../../js/index.js";

export function renderSlider(Slider = ""){

    if(!Slider){

        return 
    }

    const targetElements = Slider.targets.map((target) => {

        return document.querySelector(target.Selector)

    }).filter(element => (

        element !== null
    ))

    const html = Slider.data.map((data , index) => {

        return `<li class="splide__slide splide-slide${index + 1}" style="background-image: url('images/${data.image}');">
                    
            <div class="container slider-content-container p-0">
                <div class="row">
                    <div class="col-md-10">
                        <div class="slider-content">
                            <h1>${data.title}</h1>
                            <a href="#" class="slider-btn"><i class="ti ti-circle-arrow-right-filled"></i> exploring services</a>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-end">
                    <div class="col-6">
                
                    </div>
                    <div class="col-md-9 col-lg-7 col-xl-6 award-box">
                        <img src="images/award-1.png" alt="">
                        <p>Combining cutting-edge treatments with compassionate support to guide you through every step of your cancer journey.</p>
                    </div>
                </div>
            </div>

            <div class="slider-overlay"></div>

        </li>`

    }).join("")

    if(targetElements.length === 0){

        return
    }

    targetElements.forEach(targetElement => {

        targetElement.innerHTML = "";

        targetElement.innerHTML = html;
        
    });

    launchHomeSlider()
}