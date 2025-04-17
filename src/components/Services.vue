<template>
  <div className="relative w-full bg-[#0d0e11] py-20">
    <!-- <div className="mx-auto flex flex-col justify-center container lg:px-8">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-[#f8d315] sm:text-4xl xl:text-5xl">
          Our Services
        </h1>
      </div>
      <div class="md:grid grid-cols-4 pt-10 gap-12 gap-y-32 justify-items-center w-full">
        <router-link to="/services/image-editing"
          class="flex flex-col items-center  rounded py-4 w-full md:w-[200px] h-full md:h-[200px]">
          <img src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d426699c-e9a9-4df4-93c6-78090721245b.jpg"
            class="" />
          <h2 class="text-xl font-semibold pt-2 whitespace-nowrap text-gray-200">
            Image Editing
          </h2>
        </router-link>
        <router-link to="/services/graphic-design"
          class="flex flex-col items-center rounded py-4 w-full md:w-[200px] h-full md:h-[200px]">
          <img src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c317cadc-c28d-4ce4-b3a4-eaf9f58fb743.jpg"
            class="" />
          <h2 class="text-xl font-semibold pt-2 whitespace-nowrap text-gray-200">
            Graphic Design
          </h2>
        </router-link>
        <router-link to="/services/motion-graphics"
          class="flex flex-col items-center rounded py-4 w-full md:w-[200px] h-full md:h-[200px]">
          <img src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/f8e97d1b-63ad-46ae-8e6c-69d25fc8da44.jpg"
            class="" />
          <h2 class="text-xl font-semibold pt-2 whitespace-nowrap text-gray-200">
            Motion Graphics
          </h2>
        </router-link>
        <router-link to="/services/video-editing"
          class="flex flex-col items-center rounded py-4 w-full md:w-[200px] h-full md:h-[200px]">
          <img src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/ab219507-4de8-468e-903a-596c5c517103.jpg"
            class="" />
          <h2 class="text-xl font-semibold pt-2 whitespace-nowrap text-gray-200">
            Video Editing
          </h2>
        </router-link>
      </div>
    </div> -->
      <div v-for="service in services" :key="service.id" :style="{backgroundColor: service.bgColor, top: `${97 * service.id}px`}" class="text-white sticky">
        <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between py-6 lg:py-10">
          <div class="w-full">
            <div class="font-bold text-3xl lg:text-5xl mb-6 lg:mb-10">{{service.title}}</div>
            <div class="flex flex-col md:flex-row justify-between gap-5 lg:gap-8">
              <p class="hidden md:block w-full font-medium text-gray-100">
                Create a trusted, global brand with our expert designs and
                strategies. We help improve your brand's visibility,
                credibility, and connection with customers both online and
                offline.
              </p>
              <ul class="w-full font-normal text-gray-200">
                <li>Visual Identity Design</li>
                <li>Brand Experience</li>
                <li>Brand Audits</li>
                <li>Rebranding</li>
                <li>Brand Guidelines</li>
                <li>Brand Strategy</li>
                <li>Brand Collaterals</li>
              </ul>
            </div>
          </div>
          <div class="w-full">
            <img class="object-cover aspect-square max-h-96 mx-auto"
              :src="service.img" />
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const services = ref([
  {
    id: 1,
    title: "Branding Identity",
    bgColor: "blue",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/679b026af4ac1ca2bf5f3656_brand%20identity.webp",
    topPosition: "64px"
  },
  {
    id: 2,
    title: "UI UX Design",
    bgColor: "gray",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/679b026af4ac1ca2bf5f3656_brand%20identity.webp",
    topPosition: "100px"
  },
  {
    id: 3,
    title: "Web Design",
    bgColor: "orange",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/679b026af4ac1ca2bf5f3656_brand%20identity.webp",
    topPosition: "160px"
  },
  {
    id: 4,
    title: "Build Product",
    bgColor: "coral",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/679b026af4ac1ca2bf5f3656_brand%20identity.webp",
    topPosition: "200px"
  },
  {
    id: 5,
    title: "Webflow",
    bgColor: "black",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/679b026af4ac1ca2bf5f3656_brand%20identity.webp",
    topPosition: "250px"
  }
])
</script>