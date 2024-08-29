<template>
  <div class="pb-24 bg-[#0d0e11]">
    <div className="relative w-full  ">

      <div
        className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-8 lg:px-8 items-center w-full   rounded-2xl">
        <div className="w-1/2 flex flex-col justify-center px-4  lg:col-span-7 lg:gap-x-6 lg:px-6  xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold  text-[#f8d315] md:text-4xl lg:text-7xl">
            Portfolio
          </h1>
          <h3 class="text-2xl text-gray-100">Graphical Creative</h3>
          <p className="mt-8 text-lg text-gray-50">
            Welcome to the Graphical Creative Portfolio! Here, you’ll find a
            collection of our finest work that showcases our creativity,
            expertise, and dedication to delivering exceptional design
            solutions.
          </p>
        </div>
        <div className="w-1/2 relative lg:col-span-5 lg:-mr-8 xl:col-span-6  flex justify-center">
          <img className=" bg-[#231f20]  h-[650px]"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/2f4ecd3b-8003-4100-a23c-65404822ae73.jpg"
            alt="" />
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-4xl gap-10 pt-10 px-4 min-h-screen">
      <div class="flex">
        <div class="grid grid-cols-2 justify-items-center w-full gap-5">
          <button v-for="item in services" @click="selectedService = item.title"
            class="bg-yellow-500 text-white w-full flex items-center justify-center py-5 rounded cursor-pointer hover:bg-yellow-400 duration-300 focus:ring-4 focus:ring-yellow-500 focus:ring-offset-4 focus:ring-offset-black">
            {{ item.title }}
          </button>
        </div>
      </div>
      <div v-if="selectedService == 'Image Editing'" class="grid grid-cols-2 gap-4 py-10">
        <!-- <div v-for="(item, index) in selectedService.images" :key="index">
          <img :src="item" class="shadow rounded" />
        </div> -->

        <!-- image editing -->
        <!-- Clipping Path 01 -->
        <div class="w-fit h-full">
          <div ref="clippingPath1" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
            <div class="relative w-full overflow-hidden max-w-lg aspect-square">
              <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/51fa3fb5-010d-4a51-86df-33b1d0152fff.JPG"
                alt="color photo" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/fe3db054-64f3-4186-8765-6edca96c33aa.jpg"
                alt="black and white" />
            </div>
            <input type="range" min="0" max="100" v-model="position1" aria-label="Percentage of before photo shown"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
              :style="{ left: position1 + '%' }" aria-hidden="true"></div>
            <div
              class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
              :style="{
                left: position1 + '%',
                transform: 'translateX(-50%)',
              }" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></polyline>
                <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <!-- Clipping Path 02 -->
        <div class="w-fit h-full">
          <div ref="clippingPath2" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
            <div class="relative w-full overflow-hidden max-w-lg aspect-square">
              <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/sy2589wcrbm3jhd.tif" alt="color photo" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/89660eb9-e418-4354-adcf-d1733dec3c62.jpg"
                alt="black and white" />
            </div>
            <input type="range" min="0" max="100" v-model="position2" aria-label="Percentage of before photo shown"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
              :style="{ left: position2 + '%' }" aria-hidden="true"></div>
            <div
              class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
              :style="{
                left: position2 + '%',
                transform: 'translateX(-50%)',
              }" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></polyline>
                <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <!-- Clipping Path 03 -->
        <div class="w-fit h-full">
          <div ref="clippingPath3" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
            <div class="relative w-full overflow-hidden max-w-lg aspect-square">
              <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4b8659de-1a1f-46f9-b231-b1a69d51aed5.jpg"
                alt="color photo" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e6a2f177-0f53-41bc-aca9-5d6be1f8dc23.jpg"
                alt="black and white" />
            </div>
            <input type="range" min="0" max="100" v-model="position3" aria-label="Percentage of before photo shown"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
              :style="{ left: position3 + '%' }" aria-hidden="true"></div>
            <div
              class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
              :style="{
                left: position3 + '%',
                transform: 'translateX(-50%)',
              }" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></polyline>
                <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <!-- Clipping Path 04 -->
        <div class="w-fit h-full">
          <div ref="clippingPath4" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
            <div class="relative w-full overflow-hidden max-w-lg aspect-square">
              <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c2dbd0b7-237f-4d94-8d0c-23f55f97ebc2.jpg"
                alt="color photo" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a87893ca-15cb-472d-97f0-5f8d31dc79df.jpg"
                alt="black and white" />
            </div>
            <input type="range" min="0" max="100" v-model="position4" aria-label="Percentage of before photo shown"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
              :style="{ left: position4 + '%' }" aria-hidden="true"></div>
            <div
              class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
              :style="{
                left: position4 + '%',
                transform: 'translateX(-50%)',
              }" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></polyline>
                <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></line>
                <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></polyline>
              </svg>
            </div>
          </div>
        </div>

      </div>
      <div v-if="selectedService == 'Graphic Design'" class="grid grid-cols-2 gap-4 py-10">
        <img class="w-full h-full object-cover object-left"
          src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/fe3db054-64f3-4186-8765-6edca96c33aa.jpg"
          alt="black and white" />
      </div>
      <div v-if="selectedService == 'Motion Graphics'" class="grid grid-cols-2 gap-4 py-10">
        <img class="w-full h-full object-cover object-left"
          src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/fe3db054-64f3-4186-8765-6edca96c33aa.jpg"
          alt="black and white" />
      </div>
      <div v-if="selectedService == 'Video Editing'" class="grid grid-cols-2 gap-4 py-10">
        <img class="w-full h-full object-cover object-left"
          src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/fe3db054-64f3-4186-8765-6edca96c33aa.jpg"
          alt="black and white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const services = ref([
  {
    id: 1,
    name: "imageEditing",
    title: "Image Editing",
    images: [
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
    ],
  },
  {
    id: 2,
    name: "graphicDesign",
    title: "Graphic Design",
    images: [
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
    ],
  },
  {
    id: 3,
    name: "motionGraphics",
    title: "Motion Graphics",
    images: [
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
    ],
  },
  {
    id: 4,
    name: "videoEditing",
    title: "Video Editing",
    images: [
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
    ],
  },
]);
const selectedService = ref('Image Editing');

// image re-touching
const position1 = ref(50);
const position2 = ref(50);
const position3 = ref(50);
const position4 = ref(50);
const clippingPath1 = ref(null);
const clippingPath2 = ref(null);
const clippingPath3 = ref(null);
const clippingPath4 = ref(null);

watch(position1, (newValue) => {
  if (clippingPath1.value) {
    clippingPath1.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position2, (newValue) => {
  if (clippingPath2.value) {
    clippingPath2.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position3, (newValue) => {
  if (clippingPath3.value) {
    clippingPath3.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position4, (newValue) => {
  if (clippingPath4.value) {
    clippingPath4.value.style.setProperty("--position", `${newValue}%`);
  }
});
</script>

<style scoped>
.wrapper {
  --position: 50%;
}

.wrapper {
  --position: 50%;
}

.image-before {
  width: var(--position);
}
</style>