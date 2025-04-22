<template>
  <div class="bg-[#0d0e11]">
    <div class="text-center py-10 lg:py-16">
      <h2 class="text-3xl font-bold text-[#f8d315] sm:text-4xl xl:text-5xl">
        Our happy clients say about us
      </h2>
      <p class="text-white text-center text-xl mt-3">
        Hear What Our Clients Say!
      </p>
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
            class="!flex flex-col-reverse sm:flex-row items-center justify-between gap-6 p-12"
          >
            <div class="w-full">
              <p class="text-sm sm:text-base text-gray-500 text-justify">
                Graphical Creative completely transformed our brand identity!
                The logo and social media designs were not just creative but
                also perfectly aligned with our brand vision. Highly
                professional and talented team!
              </p>
              <div class="mt-4">
                <p class="text-lg font-bold text-gray-900 font-pj">
                  Mannaful Anam
                </p>
                <p class="text-sm font-pj text-gray-600">Business Owner</p>
              </div>
            </div>

            <div class="w-full">
              <img
                class="object-cover object-top rounded-xl aspect-square max-h-96 ms-auto"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cef031ff-d089-4436-b706-b06ebfcef37d.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            class="!flex flex-col-reverse sm:flex-row items-center justify-between gap-6 p-12"
          >
            <div class="w-full">
              <p class="text-sm sm:text-base text-gray-500 text-justify">
                I needed urgent image editing for my e-commerce store, and they
                delivered within hours! The attention to detail was incredible.
                Highly recommend their services!
              </p>
              <div class="mt-4">
                <p class="text-lg font-bold text-gray-900 font-pj">
                  Guilherme Gomes
                </p>
                <p class="text-sm font-pj text-gray-600">Online Store Owner</p>
              </div>
            </div>

            <div class="w-full">
              <img
                class="object-cover rounded-xl aspect-square max-h-96 ms-auto"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/8903d742-4f9a-424b-a9c0-a40cebfad7cc.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            class="!flex flex-col-reverse sm:flex-row items-center justify-between gap-6 p-12"
          >
            <div class="w-full">
              <p class="text-sm sm:text-base text-gray-500 text-justify">
                Graphical Creative's expertise in Facebook boosting and ad
                creatives made a huge impact on my business. Our campaigns
                started performing much better after working with them!"
              </p>
              <div class="mt-4">
                <p class="text-lg font-bold text-gray-900 font-pj">
                  BM Emon Hossain
                </p>
                <p class="text-sm font-pj text-gray-600">Business Owner</p>
              </div>
            </div>

            <div class="w-full">
              <img
                class="object-cover rounded-xl aspect-square max-h-96 ms-auto"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/b38c7509-b821-401b-a42a-3a3827400572.jpg"
                alt=""
              />
            </div>
          </div>

          <template #viewport>
            <span class="flicking-arrow-prev is-thin"></span>
            <span class="flicking-arrow-next is-thin"></span>
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
