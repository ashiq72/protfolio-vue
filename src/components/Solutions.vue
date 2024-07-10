<template>
  <div class="px-6 py-16 mx-auto container">
    <div class="pb-12">
      <div class="flex justify-center flex-col items-center gap-2">
        <h1 class="text-yellow-400 font-semibold uppercase text-3xl">
          Soluations
        </h1>
        <p class="text-gray-400">
          Experience Our Comprehensive Image Editing, Graphic Design, and
          Creative Solutions. Let’s Begin Your Journey to Achieving Business
          Success!
        </p>
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-4/12">
        <div
          v-for="tab in tabs"
          @click="selectedTab = tab.name"
          class="py-3 whitespace-nowrap w-full flex flex-col items-center justify-center cursor-pointer"
          :class="selectedTab == tab.name ? 'border shadow bg-gray-50' : ''"
        >
          {{ tab.name }}
        </div>
      </div>
      <div
        v-if="selectedTab === 'Clipping path Background Removal'"
        class="w-8/12 border"
      >
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">
            Clipping path Background Removal
          </p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Our pricing start at
            <span class="font-semibold text-gray-700">US $0.33</span> / Per
            Image for clipping path service. Highlight the details that matter
            with our image clipping path service. Using Photoshop's pen tool, we
            isolate and bring focus to your image's subject, no matter the
            volume.
          </p>
        </div>
      </div>

      <div v-if="selectedTab === 'Photo Retoucng'" class="w-8/12 border">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">Photo Retoucng</p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Our pricing start at
            <span class="font-semibold text-gray-700">US $0.33</span> / Per
            Image for clipping path service. Highlight the details that matter
            with our image clipping path service. Using Photoshop's pen tool, we
            isolate and bring focus to your image's subject, no matter the
            volume.
          </p>
        </div>
      </div>

      <div
        v-if="selectedTab === 'Neck joint/ghost mannequin Service'"
        class="w-8/12 border"
      >
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">
            Neck joint/ghost mannequin Service
          </p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Our pricing start at
            <span class="font-semibold text-gray-700">US $0.33</span> / Per
            Image for clipping path service. Highlight the details that matter
            with our image clipping path service. Using Photoshop's pen tool, we
            isolate and bring focus to your image's subject, no matter the
            volume.
          </p>
        </div>
      </div>
      <div v-if="selectedTab === 'Logo Design'" class="w-8/12 border">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">Logo Design</p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Our pricing start at
            <span class="font-semibold text-gray-700">US $0.33</span> / Per
            Image for clipping path service. Highlight the details that matter
            with our image clipping path service. Using Photoshop's pen tool, we
            isolate and bring focus to your image's subject, no matter the
            volume.
          </p>
        </div>
      </div>
      <div v-if="selectedTab === 'Graphic Design'" class="w-8/12 border">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">Graphic Design</p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Our pricing start at
            <span class="font-semibold text-gray-700">US $0.33</span> / Per
            Image for clipping path service. Highlight the details that matter
            with our image clipping path service. Using Photoshop's pen tool, we
            isolate and bring focus to your image's subject, no matter the
            volume.
          </p>
        </div>
      </div>
      <div v-if="selectedTab === 'Video editing'" class="w-8/12 border">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">Video editing</p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Our pricing start at
            <span class="font-semibold text-gray-700">US $0.33</span> / Per
            Image for clipping path service. Highlight the details that matter
            with our image clipping path service. Using Photoshop's pen tool, we
            isolate and bring focus to your image's subject, no matter the
            volume.
          </p>
        </div>
      </div>
      <div v-if="selectedTab === 'Motion Graphics'" class="w-8/12 border">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">Motion Graphics</p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Our pricing start at
            <span class="font-semibold text-gray-700">US $0.33</span> / Per
            Image for clipping path service. Highlight the details that matter
            with our image clipping path service. Using Photoshop's pen tool, we
            isolate and bring focus to your image's subject, no matter the
            volume.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedTab = ref("Clipping path Background Removal");

const tabs = ref([
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
  {
    name: "Video editing",
    href: "/services/video-editing",
  },
  {
    name: "Motion Graphics",
    href: "/services/motion-graphics",
  },
]);
</script>
