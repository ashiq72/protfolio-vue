<template>
  <div className="relative w-full bg-[#0d0e11] py-20">
    <div className="mx-auto flex flex-col justify-center container lg:px-8">
      <div class="text-center">
        <h1 class=" text-3xl font-bold text-[#f8d315] sm:text-4xl xl:text-5xl">Our Services</h1>
      </div>
      <div
        class="grid grid-cols-4 pt-10 gap-12 gap-y-32 justify-items-center w-full"
      >
        <router-link
          to="/services/image-editing"
          class="flex flex-col items-center rounded py-4 w-[150px] md:w-[200px] h-[150px] md:h-[200px]"
        >
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d426699c-e9a9-4df4-93c6-78090721245b.jpg"
            class=""
          />
          <h2
            class="text-xl font-semibold pt-2 whitespace-nowrap text-gray-200"
          >
            Image Editing
          </h2>
        </router-link>
        <router-link
          to="/services/graphic-design"
          class="flex flex-col items-center rounded py-4 w-[150px] md:w-[200px] h-[150px] md:h-[200px]"
        >
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c317cadc-c28d-4ce4-b3a4-eaf9f58fb743.jpg"
            class=""
          />
          <h2
            class="text-xl font-semibold pt-2 whitespace-nowrap text-gray-200"
          >
            Graphic Design
          </h2>
        </router-link>
        <router-link
          to="/services/motion-graphics"
          class="flex flex-col items-center rounded py-4 w-[150px] md:w-[200px] h-[150px] md:h-[200px]"
        >
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/f8e97d1b-63ad-46ae-8e6c-69d25fc8da44.jpg"
            class=""
          />
          <h2
            class="text-xl font-semibold pt-2 whitespace-nowrap text-gray-200"
          >
            Motion Graphics
          </h2>
        </router-link>
        <router-link
          to="/services/video-editing"
          class="flex flex-col items-center rounded py-4 w-[150px] md:w-[200px] h-[150px] md:h-[200px]"
        >
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/ab219507-4de8-468e-903a-596c5c517103.jpg"
            class=""
          />
          <h2
            class="text-xl font-semibold pt-2 whitespace-nowrap text-gray-200"
          >
            Video Editing
          </h2>
        </router-link>
      </div>
    </div>
  </div>
</template>
