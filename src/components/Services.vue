<template>
  <div id="services" className="relative w-full bg-[#0d0e11] pt-20 lg:pt-40">
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
    <div class="pb-10 container mx-auto px-4">
      <h3 class="text-white font-poppins text-2xl lg:text-3xl lg:w-[60%]">
        From startups to big brands — we power your journey with fast, creative,
        and impactful design solutions.
      </h3>
    </div>
    <div
      v-for="service in services"
      :key="service.id"
      id="services"
      :style="{ backgroundColor: service.bgColor, top: `${97 * service.id}px` }"
      class="sticky"
      :class="service.textColor ? service.textColor : 'text-white'"
    >
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row justify-between py-6 lg:py-10"
      >
        <div class="w-full">
          <div class="font-bold text-3xl lg:text-5xl mb-6 lg:mb-10">
            {{ service.title }}
          </div>
          <div class="flex flex-col md:flex-row justify-between gap-5 lg:gap-8">
            <p
              class="hidden md:block w-full font-medium"
              :class="service.textColor ? service.textColor : 'text-gray-100'"
            >
              {{ service.shortdesc }}
            </p>
            <ul
              class="w-full font-normal"
              :class="service.textColor ? service.textColor : 'text-gray-100'"
            >
              <li v-for="item in service.listitems">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="w-full">
          <img
            class="object-cover aspect-square max-h-96 mx-auto"
            :src="service.img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const services = ref([
  {
    id: 1,
    title: "Branding Identity",
    bgColor: "blue",
    img: "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/1727179a-4edc-4b2e-8e02-d8c1b0c2116b.jpg",
    topPosition: "64px",
    shortdesc:
      "Craft a strong visual identity that builds trust and speaks for your brand.",
    listitems: [
      "Custom Logo Design",
      "Brand Identity & Style Guide",
      "Rebranding Solutions",
      "Business Card & Letterhead Design",
      "Visual Identity System",
      "Brand Consistency Strategy",
      "Social Media Brand Kit",
    ],
  },
  {
    id: 2,
    title: "Social Media Design",
    bgColor: "white",
    textColor: "text-black",
    img: "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d76992e2-43c4-44b5-8317-f79305db5371.jpg",
    topPosition: "100px",
    shortdesc:
      "Make your brand stand out on every platform with scroll-stopping visuals.",
    listitems: [
      "Facebook Post Design",
      "Instagram Carousel & Story Design",
      "YouTube Thumbnail Design",
      "LinkedIn & Twitter Visuals",
      "Cover Photos & Banners",
      "Sale & Offer Graphics",
      "Custom Template Design",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing",
    bgColor: "#facf1b",
    textColor: "text-black",
    img: "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/8f69529c-1df8-46c1-bb18-847bbca1b955.jpg",
    topPosition: "160px",
    shortdesc:
      "We use results-based strategies to enhance your brand, engage with your audience, and increase online visibility.",
    listitems: [
      "Facebook & Instagram Ads",
      "Content Creation",
      "Page Setup & Optimization",
      "Boost Campaign Management",
      "Audience Targeting",
      "Performance Analysis",
      "Social Media Strategy",
    ],
  },
  {
    id: 4,
    title: "Image Editing",
    bgColor: "black",
    img: "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/90bcc6ba-0ecc-4618-81a1-aca3dbce9f52.jpg",
    topPosition: "200px",
    shortdesc:
      "Enhance, clean and perfect your images for e-commerce, advertising and branding.",
    listitems: [
      "Background Removal",
      "Clipping Path",
      "Shadow Creation",
      "Ghost Mannequin / Neck Joint",
      "Image Retouching",
      "Resize & Cropping",
      "E-commerce Photo Optimization",
    ],
  },
]);
</script>
