<template>
  <header class="bg-[#0f1012] fixed w-full z-50 font-poppins">
    <nav x-data="{ isOpen: false }" class="relative bg-[#0f1012] border-b">
      <div
        class="container px-6 py-6 md:py-3 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between cursor-pointer">
          <router-link to="/" class="cursor-pointer">
            <img
              class="w-auto h-10 sm:h-16 cursor-pointer"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a2bfd60d-c6a4-405f-83ea-46288304a6fa.jpg"
              alt=""
            />
          </router-link>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              x-cloak
              @click="isOpen = !isOpen"
              type="button"
              class="text-gray-100 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                v-if="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
              <svg
                v-if="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          x-cloak
          :class="[
            isOpen
              ? 'translate-x-0 opacity-100 '
              : 'opacity-0 -translate-x-full',
          ]"
          class="absolute inset-x-0 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#0f1012] md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
        >
          <div class="flex flex-col md:flex-row md:mx-6">
            <router-link
              to="/"
              class="my-2 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-600 md:mx-4 md:my-0"
              >Home</router-link
            >
            <div
              @mouseenter="navberlinks = true"
              @click="navberlinksmb = !navberlinksmb"
              class=""
            >
              <!-- Trigger -->
              <router-link
                class="text-gray-100 transition-colors duration-300 transform hover:text-yellow-400 dark:hover:text-yellow-600 md:mx-4 md:my-0 inline-block my-2"
              >
                Services
              </router-link>
              <!-- Mega Menu -->

              <div
                v-show="navberlinksmb"
                class="w-full md:hidden duration-300 mt-2 bg-white shadow-lg p-6 grid grid-cols-1 gap-6"
              >
                <div v-for="(section, index) in menuData" :key="index">
                  <h3 class="text-lg font-semibold mb-3">
                    {{ section.title }}
                  </h3>
                  <ul class="space-y-2">
                    <li
                      @click="
                        navberlinks = false;
                        !isOpen;
                      "
                      v-for="(item, idx) in section.items"
                      :key="idx"
                      class="text-gray-700 hover:text-blue-600 text-xs cursor-pointer transition"
                    >
                      <router-link :to="item.path">
                        {{ item.name }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <router-link
              to="/portfolio"
              class="my-2 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-600 md:mx-4 md:my-0"
              >Portfolio</router-link
            >
            <router-link
              to="/about"
              class="my-2 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-600 md:mx-4 md:my-0"
              >About</router-link
            >
            <router-link
              to="/contact"
              class="my-2 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-600 md:mx-4 md:my-0"
              >Contact</router-link
            >
          </div>
          <!-- <div class="flex justify-center md:block">
            <a class="relative text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              href="#">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </a>
          </div> -->
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-6 relative">
      <!-- Mega Menu -->
      <transition @enter="enter" @leave="leave">
        <div
          v-show="navberlinks"
          ref="menu"
          @mouseleave="navberlinks = false"
          class="absolute w-full overflow-hidden hidden right-0 duration-300 top-0 bg-white shadow-lg md:grid grid-cols-1 md:grid-cols-4 gap-1 lg:gap-6"
        >
          <div
            class="px-3 py-6 lg:p-6"
            v-for="(section, index) in menuData"
            :key="index"
          >
            <h3 class="text-lg font-semibold mb-3">
              {{ section.title }}
            </h3>
            <ul class="space-y-2">
              <li
                @click="
                  navberlinks = false;
                  !isOpen;
                "
                v-for="(item, idx) in section.items"
                :key="idx"
                class="text-gray-700 hover:text-blue-600 text-xs cursor-pointer transition"
              >
                <router-link :to="item.path">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";

const navberlinks = ref(false);
const navberlinksmb = ref(false);
const menu = ref(null);

function enter(el) {
  el.style.height = "0px";
  el.style.transition = "height 0.3s ease";

  requestAnimationFrame(() => {
    el.style.height = el.scrollHeight + "px";
  });
}
function leave(el) {
  el.style.height = el.scrollHeight + "px";
  el.offsetHeight; // force reflow
  el.style.transition = "height 0.3s ease";
  void el.offsetHeight;
  el.style.height = "0px";
}
const isOpen = ref(false);

const subservices = ref([
  { name: "Clipping path Background Removal", href: "/services/clicking-path" },
  {
    name: "Photo Retoucng",
    href: "/services/photo-retoucng",
  },
  {
    name: "Neck joint/ghost mannequin Service",
    href: "/services/neck-joint",
  },
  {
    name: "Logo Design",
    href: "/services/logo-design",
  },
  {
    name: "Graphic Design",
    href: "/services/graphic-design",
  },
]);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const menuData = [
  {
    title: "Logo Design & Branding",
    subtitle: "Crafting Intuitive Experiences",
    items: [
      { name: "Brand Guidelines / Style Guide", path: "/services/logo-design" },
      { name: "Business Card Design", path: "/services/logo-design" },
      { name: "Letterhead & Envelope Design", path: "/services/logo-design" },
      {
        name: "Brand Color Palette & Typography",
        path: "/services/logo-design",
      },
      { name: "Packaging Design", path: "/services/logo-design" },
      { name: "Brand Mockups", path: "/services/logo-design" },
      { name: "Letterhead & Envelope Design", path: "/services/logo-design" },
    ],
  },
  {
    title: "Social Media Design",
    subtitle: "Crafting Timeless Visuals",
    items: [
      {
        name: "Facebook & Instagram Post Design",
        path: "/services/graphic-design",
      },
      {
        name: "Cover Photo / Banner Design",
        path: "/services/graphic-design",
      },
      {
        name: "Story Design",
        path: "/services/graphic-design",
      },
      {
        name: "YouTube Thumbnail Design",
        path: "/services/graphic-design",
      },
      {
        name: "Social Media Ads Creative",
        path: "/services/graphic-design",
      },
      {
        name: "Carousel Post Design",
        path: "/services/graphic-design",
      },
      {
        name: "Social Media Branding Pack (Profile + Banner + Post Templates)",
        path: "/services/graphic-design",
      },
    ],
  },
  {
    title: "Digital Marketing Services",
    subtitle: "Crafting Timeless Visuals",
    items: [
      {
        name: "Facebook & Instagram Post Design",
        path: "/services/facebook-instagram-post-design",
      },
      {
        name: "Google Ads Setup & Management",
        path: "/services/cover-photo-banner-design",
      },
      {
        name: "SEO (Search Engine Optimization)",
        path: "/services/story-design",
      },
      {
        name: "Email Marketing Design & Setup",
        path: "/services/social-media-ads-creative",
      },
      {
        name: "Social Media Marketing Strategy",
        path: "/services/carousel-post-design",
      },
      {
        name: "Content Calendar Creation",
        path: "/services/social-media-branding-pack",
      },
      {
        name: "Lead Generation Campaign",
        path: "/services/social-media-branding-pack",
      },
    ],
  },
  {
    title: "Image Editing Service",
    subtitle: "Crafting Timeless Visuals",
    items: [
      {
        name: "Background Removal",
        path: "/services/facebook-instagram-post-design",
      },
      {
        name: "Clipping Path",
        path: "/services/clicking-path",
      },
      {
        name: "Photo Retouching (Skin, Product, etc.)",
        path: "/services/photo-retouching",
      },
      {
        name: "Shadow Creation (Natural/Drop/Reflection)",
        path: "/services/social-media-ads-creative",
      },
      {
        name: "Ghost Mannequin / Neck Jointy",
        path: "/services/neck-joint",
      },
      {
        name: "Color Correction",
        path: "/services/social-media-branding-pack",
      },
      {
        name: "Image Resizing/Cropping",
        path: "/services/social-media-branding-pack",
      },
    ],
  },
];
</script>
