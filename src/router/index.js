import { createWebHistory, createRouter } from "vue-router";

import ImageEditing from "../views/Services/ImageEditing.vue";
import GraphicDesign from "../views/Services/GraphicDesign.vue";
import MotionGraphics from "../views/Services/MotionGraphics.vue";
import VideoEditing from "../views/Services/VideoEditing.vue";

// NavSubCategoryServices
import ClickingPath from "../views/Services/NavSubCategory/ClickingPath.vue";
import PhotoRetoucng from "../views/Services/NavSubCategory/PhotoRetoucng.vue";
import NeckJoint from "../views/Services/NavSubCategory/NeckJoint.vue";
import LogoDesign from "../views/Services/NavSubCategory/LogoDesign.vue";

import Home from "../views/Home/Home.vue";
import Contact from "../views/Contact/Contact.vue";

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
    path: "/services/photo-retoucng",
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
});

export default router;
