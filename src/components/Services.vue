<template>
  <div className="relative w-full bg-white py-20">
    <div className="mx-auto flex flex-col justify-center  max-w-4xl lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl text-yellow-400 whitespace-nowrap">Our Services</h1>
      </div>
      <div class="grid grid-cols-2 pt-10 gap-12 gap-y-32 justify-items-center">
        <router-link
          to="/services/image-editing"
          class="flex flex-col items-center rounded py-4 w-[150px] h-[150px]"
        >
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4efcc0b1-3c2c-4f81-9663-53bbe4d0344a.png"
            class=""
          />
          <h2 class="text-xl font-semibold pt-2 whitespace-nowrap">
            Image Editing
          </h2>
        </router-link>
        <router-link
          to="/services/graphic-design"
          class="flex flex-col items-center rounded py-4 w-[150px] h-[150px]"
        >
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/3dd432d8-0fe8-4303-bfd1-0e4060ec5fee.png"
            class=""
          />
          <h2 class="text-xl font-semibold pt-2 whitespace-nowrap">
            Graphic Design
          </h2>
        </router-link>
        <router-link
          to="/services/motion-graphics"
          class="flex flex-col items-center rounded py-4 w-[150px] h-[150px]"
        >
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a6d7a174-4819-4655-9003-ee2b59b66351.png"
            class=""
          />
          <h2 class="text-xl font-semibold pt-2 whitespace-nowrap">
            Motion Graphics
          </h2>
        </router-link>
        <router-link
          to="/services/video-editing"
          class="flex flex-col items-center rounded py-4 w-[150px] h-[150px]"
        >
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/3733ef68-023f-4af3-a508-487614e385f4.png"
            class=""
          />
          <h2 class="text-xl font-semibold pt-2 whitespace-nowrap">
            Video Editing
          </h2>
        </router-link>
      </div>
    </div>
  </div>
</template>
