
export function renderBlog(Blog = ""){

    if(Blog){

        Blog.targets.forEach((target) => {

            const element = document.querySelector(target.Selector);

            if(!element){

                return false
            }

            const blog = Blog.data.map((data) => (

                `<div class="col-md-6 col-lg-4 blog-card">
                    <div class="blog-image">
                        <a href="#">
                            <img src="images/${data.image}" alt="">
                        </a>
                        <a href="#" class="tag-btn">
                           ${data.category}   
                        </a>
                    </div>
                    <div class="blog-content">
                        <ul class="meta">
                            <li>${data.date}</li>
                            <li class="meta-time">${data.readTime}</li>
                        </ul>

                        <h3>
                            <a href="#">
                                ${data.title}
                            </a>
                        </h3>
                        <a href="" class="blog-btn"><i class="fa-solid fa-arrow-right"></i> read more</a>
                    </div>
                </div>`

            )).join("")

            element.insertAdjacentHTML("beforeend" , blog);

        });
    }

}