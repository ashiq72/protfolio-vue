<template>
  <div class="px-6 py-16 mx-auto container">
    <div class="pb-12">
      <div class="flex justify-center flex-col items-center gap-2">
        <h1 class="text-yellow-400 font-semibold uppercase text-3xl">
          Best Our Soluations
        </h1>
        <p class="text-gray-400 text-center max-w-2xl">
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
          <p class="pt-2 italic text-gray-800 font-medium">
            Perfect Your Photos with Professional Clipping Path & Background
            Removal!
          </p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Do you want your product images to be flawless? Our Clipping Path
            and Background Removal services are designed to give your photos a
            clean, professional look. We ensure every detail of your images
            stands out, perfect for e-commerce, catalogs, or any marketing
            needs.
          </p>
        </div>
      </div>

      <div v-if="selectedTab === 'Photo Retoucng'" class="w-8/12 border">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">
            Transform Your Photos with Expert Retouching Services!
          </p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Want to make your photos look stunning? Our Photo Retouching
            services are here to enhance your images with perfect color
            correction, blemish removal, and creative effects.
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
            Neck Joint/Ghost Mannequin Service
          </p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Our Neck Joint and Ghost Mannequin services provide a realistic and
            professional presentation for your clothing products. Perfect for
            online stores and fashion catalogs, we create stunning visuals for
            your apparel.
          </p>
        </div>
      </div>
      <div v-if="selectedTab === 'Logo Design'" class="w-8/12 border">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">
            Create a Strong Brand Identity with Professional Logo Design!
          </p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            A well-designed logo is the cornerstone of your brand’s identity.
            Our Logo Design services help you craft a unique and memorable logo
            that represents your business vision and values.
          </p>
        </div>
      </div>
      <div v-if="selectedTab === 'Graphic Design'" class="w-8/12 border">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">
            Bring Your Ideas to Life with Expert Graphic Design Services!
          </p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            From marketing materials to digital content, our Graphic Design
            services cover all your design needs. We create visually appealing
            designs that engage your audience and enhance your brand’s image.
          </p>
        </div>
      </div>
      <div v-if="selectedTab === 'Video editing'" class="w-8/12 border">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">
            Elevate Your Content with Professional Video Editing Services!
          </p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Our Video Editing services turn your raw footage into polished,
            engaging content. Perfect for marketing videos, social media, or
            personal projects, we provide comprehensive editing solutions for
            outstanding results.
          </p>
        </div>
      </div>
      <div v-if="selectedTab === 'Motion Graphics'" class="w-8/12 border">
        <div class="flex flex-col items-center justify-center">
          <img
            class="w-[800px] pt-4"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
          />
          <p class="pt-2 italic text-gray-400">
            Add Excitement to Your Content with Professional Motion Graphics!
          </p>
        </div>
        <div class="p-4 text-center">
          <p class="text-gray-400">
            Our Motion Graphics services bring your ideas to life with engaging
            animations and visual effects. Ideal for explainer videos,
            advertisements, and more, we create dynamic content that captures
            attention.
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
