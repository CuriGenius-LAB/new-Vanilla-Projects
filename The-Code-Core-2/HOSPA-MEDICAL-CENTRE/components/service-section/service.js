
export function renderService(Service = ""){

    if(Service){

        Service.targets.forEach(target => {

           const element = document.querySelector(target.Selector);

           if(!element){

            return false

           }

            const serviceData = Service.data.map((data) => (

                `<div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="service-card">
                        <div class="icon">
                                <img src="images/${data.imgPath}" alt="">
                        </div>
                        <h3><a href="">${data.title}</a></h3>
                        <p>20+ Doctors are available under this department who serve.</p>
                        <a href="" class="services-btn">
                            <i class="ti ti-arrow-right"></i>
                            read more
                        </a>
                    </div>
                </div>`

           )).join("")

           element.insertAdjacentHTML("beforeend" , serviceData)
            
        });
    }

}