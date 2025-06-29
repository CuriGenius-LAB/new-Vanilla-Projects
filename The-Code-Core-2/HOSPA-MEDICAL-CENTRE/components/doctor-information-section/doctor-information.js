
import { launchTabSlider } from "../../js/index.js";

export function renderDoctorTab(Doctor = ""){

    const tabSection = document.querySelector(".doctor-tab");

    if(!Doctor || !tabSection){

        return
    }

    const targetElements = Doctor.targets.map((target) => {

        return document.querySelector(target.Selector)

    })
    .filter((element) => (

        element !== null

    ));

    const html = Doctor.data.map((data) => {

        return `<div class="swiper-slide fade" data-role="${data.specialization}">
                    <div class="doctor-card">
                        <div class="doctor-image">
                            <a href="#"><img src="images/${data.image}" alt=""></a>
                            <div class="doctor-btn">
                                <a href="#" class="default-btn"><i class="ti ti-circle-arrow-right-filled"></i> book an appointment</a>
                            </div>
                        </div>
                        <div class="doctor-content">
                            <h3><a href="#">${data.name}</a></h3>
                            <span>${data.role}</span>
                        </div>
                    </div>
                </div>`

    }).join("")

    targetElements.forEach(targetElement => {

        targetElement.innerHTML = html;
            
    });

    let swiperInstance = launchTabSlider();   

    const tabs = document.querySelectorAll(".tab-links");

    const slides = document.querySelectorAll(".swiper-slide");

    function getSlidesContentMapping() {

    const isMobile = window.innerWidth < 992;

        return {

            cardiologist: [
            "cardiologist",
            "orthopedist",
            "gynecologist",
            "orthopedist",
            "nutritionist"
            ],

            orthopedist: isMobile
            ? ["orthopedist"]
            : ["orthopedist", "nutritionist"],
            
            nutritionist: ["nutritionist"],
            gynecologist: ["gynecologist"]
        };
    }   

    function filterContent(Role){

        const slidesContentMapping = getSlidesContentMapping();

        const slidesToShow = Array.from(slides).filter((slide) => {

            return slidesContentMapping[Role].includes(slide.dataset.role)

        })
        
        slides.forEach((slide) => {

            slide.classList.remove("active" , "show");

        })

        slidesToShow.forEach((filteredSlide) => {

            filteredSlide.classList.add("active");

            setTimeout(() => {
                filteredSlide.classList.add("show");
            }, 300);
        })

        const swiperWrapper = document.querySelector(".swiper-wrapper");

        const InCenter = slidesToShow.length <= 3;

        swiperWrapper.classList.toggle("center-flex" , InCenter);

        swiperInstance.update();

         if(!InCenter){

            swiperInstance.autoplay.start();

        }

    }

    tabSection.addEventListener("click" , (event) => {

        const ele = event.target;

        if(ele.classList.contains("tab-links")){

            event.preventDefault();

            tabs.forEach((tab) => {

                tab.classList.remove("active")
            })

            ele.classList.add("active");

            const role = ele.dataset.role;

            filterContent(role)
        }

    })

    tabs[0]?.click();
}
