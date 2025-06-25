
export function createscrollTriggers(){

    const headerSection = document.getElementById("header-container");

    const sliderSection = document.getElementById("image-carousel");

    return [

        {
            element: headerSection,
            triggerAt: sliderSection?.offsetTop,
            actionType: "sticky",
        },

    ];

}



