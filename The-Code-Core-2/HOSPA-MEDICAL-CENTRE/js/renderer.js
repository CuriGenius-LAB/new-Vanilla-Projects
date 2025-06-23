
import { renderNavbar } from "../components/header-main/navbar.js";

import { renderSlider } from "../components/slider/slider.js";

import { renderFeature } from "../components/features/feature.js";

import { renderService } from "../components/service-section/service.js";

import { renderDoctorTab } from "../components/doctor-information-section/doctor-information.js";

import { renderBlog } from "../components/blog/blog.js";

import { renderFooter } from "../components/footer/footer.js";


export const componentsRenderer = {

    header: renderNavbar,

    heroSlides: renderSlider,

    feature: renderFeature,

    service: renderService,

    doctor: renderDoctorTab,

    blog: renderBlog,

    footer: renderFooter

}