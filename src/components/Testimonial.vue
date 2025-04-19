<template>
  <div class="bg-[#0d0e11]">
    <div class="text-center py-10 lg:py-16">
      <h2 class="text-3xl font-bold text-[#f8d315] sm:text-4xl xl:text-5xl">
        Our happy clients say about us
      </h2>
    </div>
    <div class="container mx-auto bg-white py-10 lg:py-16 rounded-xl">
      <div class="max-w-5xl mx-auto">
        <Flicking
          :key="'5'"
          :options="{
            align: 'prev',
            circular: true,
            circularFallback: 'bound',
            panelsPerView: 1,
          }"
          :plugins="plugins"
        >
          <div
            class="!flex flex-col-reverse sm:flex-row items-center justify-between gap-6 p-6"
          >
            <div class="w-full">
              <p class="text-sm sm:text-base text-gray-500 text-justify">
                Graphical Creative completely transformed our brand identity!
                The logo and social media designs were not just creative but
                also perfectly aligned with our brand vision. Highly
                professional and talented team!
              </p>
              <div class="mt-4">
                <p class="text-lg font-bold text-gray-900 font-pj">Emma R.</p>
                <p class="text-sm font-pj text-gray-600">Business Owner</p>
              </div>
            </div>

            <div class="w-full">
              <img
                class="object-cover rounded-xl aspect-square max-h-96 mx-auto"
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341"
                alt=""
              />
            </div>
          </div>

          <div
            class="!flex flex-col-reverse sm:flex-row items-center justify-between gap-6 p-6"
          >
            <div class="w-full">
              <p class="text-sm sm:text-base text-gray-500 text-justify">
                I needed urgent image editing for my e-commerce store, and they
                delivered within hours! The attention to detail was incredible.
                Highly recommend their services!
              </p>
              <div class="mt-4">
                <p class="text-lg font-bold text-gray-900 font-pj">John D.</p>
                <p class="text-sm font-pj text-gray-600">Online Store Owner</p>
              </div>
            </div>

            <div class="w-full">
              <img
                class="object-cover rounded-xl aspect-square max-h-96 mx-auto"
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
                alt=""
              />
            </div>
          </div>
          <div
            class="!flex flex-col-reverse sm:flex-row items-center justify-between gap-6 p-6"
          >
            <div class="w-full">
              <p class="text-sm sm:text-base text-gray-500 text-justify">
                From branding to social media design, everything was flawless!
                My brand now looks more premium, and the engagement on my pages
                has increased significantly!
              </p>
              <div class="mt-4">
                <p class="text-lg font-bold text-gray-900 font-pj">Sophia K.</p>
                <p class="text-sm font-pj text-gray-600">Entrepreneur</p>
              </div>
            </div>

            <div class="w-full">
              <img
                class="object-cover rounded-xl aspect-square max-h-96 mx-auto"
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341"
                alt=""
              />
            </div>
          </div>

          <div
            class="!flex flex-col-reverse sm:flex-row items-center justify-between gap-6 p-6"
          >
            <div class="w-full">
              <p class="text-sm sm:text-base text-gray-500 text-justify">
                Graphical Creative's expertise in Facebook boosting and ad
                creatives made a huge impact on my business. Our campaigns
                started performing much better after working with them!
              </p>
              <div class="mt-4">
                <p class="text-lg font-bold text-gray-900 font-pj">
                  Michael T.
                </p>
                <p class="text-sm font-pj text-gray-600">Digital Marketer</p>
              </div>
            </div>

            <div class="w-full">
              <img
                class="object-cover rounded-xl aspect-square max-h-96 mx-auto"
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
                alt=""
              />
            </div>
          </div>
          <div
            class="!flex flex-col-reverse sm:flex-row items-center justify-between gap-6 p-6"
          >
            <div class="w-full">
              <p class="text-sm sm:text-base text-gray-500 text-justify">
                Fast, reliable, and highly creative! The logo they designed for
                my startup was exactly what I envisioned. They revised it
                multiple times to perfection. Couldn’t have asked for a better
                experience!
              </p>
              <div class="mt-4">
                <p class="text-lg font-bold text-gray-900 font-pj">Liam S.</p>
                <p class="text-sm font-pj text-gray-600">Startup Founder</p>
              </div>
            </div>

            <div class="w-full">
              <img
                class="object-cover rounded-xl aspect-square max-h-96 mx-auto"
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341"
                alt=""
              />
            </div>
          </div>

          <div
            class="!flex flex-col-reverse sm:flex-row items-center justify-between gap-6 p-6"
          >
            <div class="w-full">
              <p class="text-sm sm:text-base text-gray-500 text-justify">
                Their team understands branding like no other! Every design they
                created felt unique and professional. It helped my business
                stand out in a crowded market.
              </p>
              <div class="mt-4">
                <p class="text-lg font-bold text-gray-900 font-pj">Rachel M.</p>
                <p class="text-sm font-pj text-gray-600">Fashion Brand Owner</p>
              </div>
            </div>

            <div class="w-full">
              <img
                class="object-cover rounded-xl aspect-square max-h-96 mx-auto"
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
                alt=""
              />
            </div>
          </div>

          <template #viewport>
            <span class="flicking-arrow-prev"></span>
            <span class="flicking-arrow-next"></span>
            <span class="flicking-pagination"></span>
          </template>
        </Flicking>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import VueVirtualAutoScroller from "vue-virtual-auto-scroller";
import "vue-virtual-auto-scroller/dist/vue-virtual-auto-scroller.css";
import Flicking from "@egjs/vue3-flicking";
import { Arrow, AutoPlay } from "@egjs/flicking-plugins";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/arrow.css";
const logos = ref([
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/bdb1fdf9-00b7-4c64-b9a2-7a8cd4176c5b.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/1307193a-8dd2-475d-8e82-703865bdc5be.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/544383b5-14b5-412e-81eb-4aea92ff6f04.jpg",
  // Add more logos here
]);
const plugins = [
  new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  new Arrow(),
  new Pagination({ type: "bullet" }),
];
const logoContainer = ref(null);
let scrollInterval = null;

const startAutoScroll = () => {
  if (logoContainer.value) {
    scrollInterval = setInterval(() => {
      const container = logoContainer.value;
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        // When the container reaches the end, reset to the start
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1; // Control scroll speed by adjusting this value
      }
    }, 10); // Adjust the interval for smooth scrolling (lower is faster)
  }
};

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  if (scrollInterval) {
    clearInterval(scrollInterval);
  }
});
</script>

<style></style>
