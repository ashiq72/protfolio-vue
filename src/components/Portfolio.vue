<template>
  <div class="portfolio-main bg-[#0d0e11] pt-16">
    <div class="container mx-auto px-6">
      <p class="text-[#f8d315] text-2xl">Our Works</p>
      <h1 class="text-white text-3xl lg:text-5xl xl:text-7xl pb-10 font-bold">
        Our Case Study
      </h1>
      <div class="flex flex-col gap-32">
        <div class="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-6 xl:gap-16">
          <div class="image w-full">
            <img
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/129618ea-c8d7-4951-b4bb-64699286349d.jpg"
              alt=""
              class="w-full rounded-[20px]"
            />
          </div>
          <div class="right-text flex items-center">
            <div class="text w-fit">
              <h1
                class="text-3xl xl:text-6xl lg:text-4xl text-white font-bold py-3 xl:py-6"
              >
                Logo Design & Branding
              </h1>
              <p class="text-gray-400 text-md lg:text-md xl:text-lg">
                Let’s create a logo that reflects your brand’s essence and makes
                a lasting impact. We craft unique logos that help your brand
                stand out.
              </p>
              <!-- <router-link class="text-gray-900 bg-yellow mt-6 p-2 px-3 flex items-center justify-center text-sm lg:text-md rounded-md" :to="{ name: 'ProductPage', query: { id: '12345' } }">
                Click for details
              </router-link> -->
              <a
                class="text-gray-900 w-fit bg-yellow mt-6 p-2 px-3 flex items-center justify-center text-sm lg:text-md rounded-md"
                :href="`/portfolio?id=LogoDesign`"
                >Click for details</a
              >
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16">
          <div class="right-text order-2 lg:order-1 flex items-center">
            <div class="text w-fit">
              <h1
                class="text-3xl xl:text-6xl lg:text-4xl text-white font-bold py-3 xl:py-6"
              >
                Social Media Design
              </h1>
              <p class="text-gray-400 text-md lg:text-md xl:text-lg">
                Stand out on social media with engaging designs that capture
                attention and drive meaningful results.
              </p>
              <a
                class="text-gray-900 w-fit bg-yellow mt-6 p-2 px-3 flex items-center justify-center text-sm lg:text-md rounded-md"
                :href="`/portfolio?id=SocialMedia`"
                >Click for details</a
              >
            </div>
          </div>
          <div class="image order-1 lg:order-2 w-full">
            <img
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/64490801-79d0-4f26-92ef-5e8c9664fb6e.jpg"
              alt=""
              class="w-full rounded-[20px]"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16">
          <div class="image w-full">
            <img
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/bb501318-f65d-4c93-ab9c-e569e03ca9be.jpg"
              alt=""
              class="w-full rounded-[20px]"
            />
          </div>
          <div class="right-text flex items-center">
            <div class="text w-fit">
              <h1
                class="text-3xl xl:text-6xl lg:text-4xl text-white font-bold py-3 xl:py-6"
              >
                Digital Marketing
              </h1>
              <p class="text-gray-400 text-md lg:text-md xl:text-lg">
                Ignite your brand’s growth with tailored strategies that
                deliver. From targeted campaigns to engaging content, we drive
                traffic, boost conversions, and grow your online presence.
              </p>
              <router-link
                to="/digital-marketing"
                class="text-gray-900 w-fit cursor-pointer bg-yellow mt-6 p-2 px-3 flex items-center justify-center text-sm lg:text-md rounded-md"
              >
                Click for details
              </router-link>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16">
          <div class="right-text order-2 lg:order-1 flex items-center">
            <div class="text w-fit">
              <h1
                class="text-3xl xl:text-6xl lg:text-4xl text-white font-bold py-3 xl:py-6"
              >
                Image Editing
              </h1>
              <p class="text-gray-400 text-md lg:text-md xl:text-lg">
                Transform your images into perfection. From meticulous
                background removal to flawless retouching and color correction,
                we deliver high-end editing that enhances your visuals for
                e-commerce, ads, and more — making every image ready to impress.
              </p>
              <a
                class="text-gray-900 w-fit bg-yellow mt-6 p-2 px-3 flex items-center justify-center text-sm lg:text-md rounded-md"
                :href="`/portfolio?id=ImageEditing`"
                >Click for details</a
              >
            </div>
          </div>
          <div class="image order-1 lg:order-2 w-full">
            <img
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/51e3d3e6-6c4c-4c5c-be66-6640f04a7074.jpg"
              alt=""
              class="w-full rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
</script>
