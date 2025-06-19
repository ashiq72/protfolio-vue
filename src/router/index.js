import { createWebHistory, createRouter } from "vue-router";

import ImageEditing from "../views/Services/NavSubCategory/ImageEditing.vue";
import GraphicDesign from "../views/Services/NavSubCategory/GraphicDesign.vue";
import MotionGraphics from "../views/Services/NavSubCategory/MotionGraphics.vue";
import VideoEditing from "../views/Services/NavSubCategory/VideoEditing.vue";

// NavSubCategoryServices
import ClickingPath from "../views/Services/NavSubCategory/ClickingPath.vue";
import PhotoRetoucng from "../views/Services/NavSubCategory/PhotoRetoucng.vue";
import NeckJoint from "../views/Services/NavSubCategory/NeckJoint.vue";
import LogoDesign from "../views/Services/NavSubCategory/LogoDesign.vue";

import Home from "../views/Home/Home.vue";
import Contact from "../views/Contact/Contact.vue";
import Portfolio from "../views/Portfolio/portfolio.vue";
import DigitalMarketing from "../views/DigitalMarketing/DigitalMaketing.vue";
import About from "../views/About/About.vue";
import ThankYou from "../views/ThankYou/ThankYou.vue";
import ComingSoon from "../views/ComingSoon/ComingSoon.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

  // Services
  {
    path: "/services/image-editing",
    name: "ImageEditing",
    component: ImageEditing,
  },
  {
    path: "/services/graphic-design",
    name: "GraphicDesign",
    component: GraphicDesign,
  },
  {
    path: "/services/motion-graphics",
    name: "MotionGraphics",
    component: MotionGraphics,
  },
  {
    path: "/services/video-editing",
    name: "VideoEditing",
    component: VideoEditing,
  },
  // NavSubCategoryServices
  {
    path: "/services/clicking-path",
    name: "ClickingPath",
    component: ClickingPath,
  },
  {
    path: "/services/photo-retouching",
    name: "PhotoRetoucng",
    component: PhotoRetoucng,
  },
  {
    path: "/services/neck-joint",
    name: "NeckJoint",
    component: NeckJoint,
  },
  {
    path: "/services/logo-design",
    name: "LogoDesign",
    component: LogoDesign,
  },
  {
    path: "/digital-marketing",
    name: "DigitalMarketing",
    component: DigitalMarketing,
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
  },
  {
    path: "/coming-soon",
    name: "ComingSoon",
    component: ComingSoon,
  },
  // {
  //   path: "/services/graphic-design",
  //   name: "VideoEditing",
  //   component: VideoEditing,
  // },
  // {
  //   path: "/services/video-editing",
  //   name: "VideoEditing",
  //   component: VideoEditing,
  // },
  // {
  //   path: "/services/motion-graphics",
  //   name: "MotionGraphics",
  //   component: MotionGraphics,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  },
});

export default router;
