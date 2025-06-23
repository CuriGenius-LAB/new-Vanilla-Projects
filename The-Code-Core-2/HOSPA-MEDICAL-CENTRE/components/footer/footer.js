
export function renderFooter(Footer = ""){

    if(Footer){

        let html = "";

        Footer.targets.forEach(target => {

            const element = document.querySelector(target.Selector);

            if(!element){

                return false
            }

            element.innerHTML = "";

            html += "<div class='row'>";

            Footer.data.forEach((data , index) => {

                html += `<div class='col-sm-6 col-md-6 col-lg-3 footer-links' id='footer-link${index + 1}'>
                            <h3>
                                ${data.title}
                            </h3>
                        <ul>`

                data.links.forEach((link) => {

                    html  += `<li><a href="#">${link}</a></li>`;

                })

                html += "</ul>";

                if(index === Footer.data.length - 1){

                   html += `<div class='social-links'>
                                <span>${data.MediaLink.title}</span>
                            <ul>`

                    data.MediaLink.icons.forEach((icon) => {

                        html += `<a href="#"><i class='fa-brands ${icon} footer-icons'></i></a>`

                    })

                    html += "</ul></div>";
                }

                html += "</div>";
                
            })

            element.insertAdjacentHTML("beforeend", html);

            html += "</div>";
            
        });
    }

}
