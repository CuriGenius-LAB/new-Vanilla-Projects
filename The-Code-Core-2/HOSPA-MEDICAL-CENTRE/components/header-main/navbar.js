export function renderNavbar(Navbar = ""){

    if(Navbar){

       Navbar.targets.forEach(target => {

        const element = document.querySelector(target.Selector);

        if(!element){

            return false
        }

        element.innerHTML = "";

        const navLinks = Navbar.data.map((data , index) => (

            `<li class="nav-item"><a href="" class="nav-link ${index === 0 ? 'active' : ''} " page-data="${data.tag}">${data.tag}</a></li>`

        )).join("")

        element.insertAdjacentHTML("beforeend" , navLinks);

       });

    }

}
