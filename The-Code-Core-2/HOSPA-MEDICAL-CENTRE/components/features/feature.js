
export function renderFeature(Feature = ""){

    if(Feature){

        Feature.targets.forEach((target) => {

            const element = document.querySelector(target.Selector);

            const feature = Feature.data.map((data , index) => (

                `<div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                    <div class="features-card" id="features-card${index + 1}">
                        <div class="title">
                            <i class="ti ${data.icon}"></i>
                            <h3>${data.title}</h3>
                        </div>

                        <p>${data.desc}</p>

                        <a href="#" class="features-btn">
                            <i class="ti ti-arrow-right"></i>
                            learn more
                        </a>
                    </div>
                </div>`

            )).join("")
            
            element.insertAdjacentHTML("beforeend" , feature);
        });
    }
}