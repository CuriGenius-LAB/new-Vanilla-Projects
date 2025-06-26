
export function createscrollTriggers(){

    const headerSection = document.getElementById("header-container");

    const sliderSection = document.getElementById("image-carousel");

    const btnTop = document.querySelector(".back-to-top");

    return [

        {
            element: headerSection,
            triggerAt: sliderSection?.offsetTop,
            actionType: "sticky",
        },

        {
            element: btnTop,
            triggerAt: 420,
            actionType: "show",
        },

    ];

}



