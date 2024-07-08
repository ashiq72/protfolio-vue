<template>
  <div class="pb-40">
    <div>
      <img
        src="https://cdn1.vectorstock.com/i/1000x1000/78/45/portfolio-banner-with-colorful-confetti-vector-21757845.jpg"
        class="w-full h-96"
      />
    </div>

    <div class="mx-auto max-w-4xl gap-10 pt-10 px-4">
      <div class="flex">
        <div class="grid grid-cols-2 justify-items-center w-full gap-5">
          <h2
            class="bg-yellow-500 text-white w-full flex items-center justify-center py-5 rounded cursor-pointer hover:bg-yellow-400 duration-300"
          >
            Image Editing
          </h2>
          <h2
            class="bg-yellow-500 text-white w-full flex items-center justify-center py-5 rounded hover:bg-yellow-400 duration-300"
          >
            Graphic Design
          </h2>
          <h2
            class="bg-yellow-500 text-white w-full flex items-center justify-center py-5 rounded hover:bg-yellow-400 duration-300"
          >
            Motion Graphics
          </h2>
          <h2
            class="bg-yellow-500 text-white w-full flex items-center justify-center py-5 rounded hover:bg-yellow-400 duration-300"
          >
            Video Editing
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 py-10">
        <div v-for="i in 4">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cb38dacf-744a-4e46-8970-66f170030dcf.jpeg"
            class="shadow rounded"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhoneIcon } from "@heroicons/vue/20/solid";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const agreed = ref(false);
</script>
