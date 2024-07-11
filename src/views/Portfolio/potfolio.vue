<template>
  <div class="pb-24">
    <div className="relative w-full bg-white ">
      <div
        className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-8 lg:px-8 items-center w-full   rounded-2xl"
      >
        <div
          className="w-1/2 flex flex-col justify-center px-4  lg:col-span-7 lg:gap-x-6 lg:px-6  xl:col-span-6"
        >
          <h1
            className="mt-8 text-3xl font-bold  text-yellow-500 md:text-4xl lg:text-7xl"
          >
            Portfolio
          </h1>
          <h3 class="text-2xl">Graphical Creative</h3>
          <p className="mt-8 text-lg text-gray-700">
            Welcome to the Graphical Creative Portfolio! Here, you’ll find a
            collection of our finest work that showcases our creativity,
            expertise, and dedication to delivering exceptional design
            solutions.
          </p>
        </div>
        <div
          className="w-1/2 relative lg:col-span-5 lg:-mr-8 xl:col-span-6  flex justify-center"
        >
          <img
            className=" bg-gray-50  h-[350px]"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4a9c1533-5ba8-4c24-9976-9b4e95daed7b.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-4xl gap-10 pt-10 px-4 min-h-screen">
      <div class="flex">
        <div class="grid grid-cols-2 justify-items-center w-full gap-5">
          <button
            v-for="item in services"
            @click="selectedService = item"
            class="bg-yellow-500 text-white w-full flex items-center justify-center py-5 rounded cursor-pointer hover:bg-yellow-400 duration-300 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            {{ item.title }}
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 py-10">
        <div v-for="(item, index) in selectedService.images" :key="index">
          <img :src="item" class="shadow rounded" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhoneIcon } from "@heroicons/vue/20/solid";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const services = ref([
  {
    id: 1,
    name: "imageEditing",
    title: "Image Editing",
    images: [
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
      "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg",
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
const selectedService = ref(services.value[0]);
</script>
