<template>
  <div class="pb-24 bg-[#0d0e11]">
    <div className="relative w-full">
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

    <div class=" gap-10 pt-10 px-4 min-h-screen">
      <div class="flex mx-auto max-w-4xl">
        <div class="grid grid-cols-2 justify-items-center w-full gap-5">
          <button v-for="item in services" @click="selectedService = item.title"
            class="bg-yellow-500 text-white w-full flex items-center justify-center py-5 rounded cursor-pointer hover:bg-yellow-400 duration-300 focus:ring-4 focus:ring-yellow-500 focus:ring-offset-4 focus:ring-offset-black">
            {{ item.title }}
          </button>
        </div>
      </div>
      <div class=" container mx-auto">

        <div v-if="selectedService == 'Image Editing'">
          <!-- <div v-for="(item, index) in selectedService.images" :key="index">
          <img :src="item" class="shadow rounded" />
          </div> -->
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">Clipping path Background Removal</h2>
            </div>
            <!-- image editing -->
            <div class="grid grid-cols-3 gap-4 py-10">

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
                  <input type="range" min="0" max="100" v-model="position1"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position1 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position1 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/sy2589wcrbm3jhd.tif"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/89660eb9-e418-4354-adcf-d1733dec3c62.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position2"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position2 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position2 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                  <input type="range" min="0" max="100" v-model="position3"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position3 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position3 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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

            <div>
              <div class="border mt-10 rounded-md">
                <h2 class="text-white text-center text-xl py-2">Photo Retouching</h2>
              </div>
              <div class="grid grid-cols-3 gap-4 py-10">
                <!-- Clipping Path 04 -->
                <div class="w-fit h-full">
                  <div ref="clippingPath4"
                    class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                    <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                      <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                        src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c2dbd0b7-237f-4d94-8d0c-23f55f97ebc2.jpg"
                        alt="color photo" />
                      <img class="w-full h-full object-cover object-left"
                        src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a87893ca-15cb-472d-97f0-5f8d31dc79df.jpg"
                        alt="black and white" />
                    </div>
                    <input type="range" min="0" max="100" v-model="position4"
                      aria-label="Percentage of before photo shown"
                      class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                      :style="{ left: position4 + '%' }" aria-hidden="true"></div>
                    <div
                      class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                      :style="{
                        left: position4 + '%',
                        transform: 'translateX(-50%)',
                      }" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="16"></line>
                        <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="16"></polyline>
                        <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- Clipping Path 05 -->
                <div class="w-fit h-full">
                  <div ref="clippingPath3"
                    class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                    <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                      <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                        src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4b8659de-1a1f-46f9-b231-b1a69d51aed5.jpg"
                        alt="color photo" />
                      <img class="w-full h-full object-cover object-left"
                        src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e6a2f177-0f53-41bc-aca9-5d6be1f8dc23.jpg"
                        alt="black and white" />
                    </div>
                    <input type="range" min="0" max="100" v-model="position5"
                      aria-label="Percentage of before photo shown"
                      class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                      :style="{ left: position5 + '%' }" aria-hidden="true"></div>
                    <div
                      class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                      :style="{
                        left: position5 + '%',
                        transform: 'translateX(-50%)',
                      }" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="16"></line>
                        <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="16"></polyline>
                        <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- Clipping Path 06 -->
                <div class="w-fit h-full">
                  <div ref="clippingPath4"
                    class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                    <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                      <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                        src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c2dbd0b7-237f-4d94-8d0c-23f55f97ebc2.jpg"
                        alt="color photo" />
                      <img class="w-full h-full object-cover object-left"
                        src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a87893ca-15cb-472d-97f0-5f8d31dc79df.jpg"
                        alt="black and white" />
                    </div>
                    <input type="range" min="0" max="100" v-model="position6"
                      aria-label="Percentage of before photo shown"
                      class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                      :style="{ left: position6 + '%' }" aria-hidden="true"></div>
                    <div
                      class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                      :style="{
                        left: position6 + '%',
                        transform: 'translateX(-50%)',
                      }" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="16"></line>
                        <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="16"></polyline>
                        <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                        <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Photo Retouching -->
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">Photo Retouching</h2>
            </div>
            <div class="grid grid-cols-3 gap-4 py-10">
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
                  <input type="range" min="0" max="100" v-model="position7"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position7 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position7 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath3" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4b8659de-1a1f-46f9-b231-b1a69d51aed5.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e6a2f177-0f53-41bc-aca9-5d6be1f8dc23.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position8"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position8 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position8 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath4" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c2dbd0b7-237f-4d94-8d0c-23f55f97ebc2.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a87893ca-15cb-472d-97f0-5f8d31dc79df.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position9"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position9 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position9 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
          </div>
          <!-- Neck Joint And Manipulation -->
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">Neck Joint And Manipulation</h2>
            </div>
            <div class="grid grid-cols-3 gap-4 py-10">
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
                  <input type="range" min="0" max="100" v-model="position10"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position10 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position10 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath3" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4b8659de-1a1f-46f9-b231-b1a69d51aed5.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e6a2f177-0f53-41bc-aca9-5d6be1f8dc23.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position11"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position11 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position11 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath4" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c2dbd0b7-237f-4d94-8d0c-23f55f97ebc2.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a87893ca-15cb-472d-97f0-5f8d31dc79df.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position12"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position12 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position12 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
          </div>
          <!-- Jewelry Retouching Service -->
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">Jewelry Retouching Service</h2>
            </div>
            <div class="grid grid-cols-3 gap-4 py-10">
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
                  <input type="range" min="0" max="100" v-model="position13"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position13 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position13 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath3" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4b8659de-1a1f-46f9-b231-b1a69d51aed5.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e6a2f177-0f53-41bc-aca9-5d6be1f8dc23.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position14"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position14 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position14 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath4" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c2dbd0b7-237f-4d94-8d0c-23f55f97ebc2.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a87893ca-15cb-472d-97f0-5f8d31dc79df.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position15"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position15 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position15 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
          </div>
          <!-- Skin Retouching Service -->
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">Skin Retouching Service</h2>
            </div>
            <div class="grid grid-cols-3 gap-4 py-10">
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
                  <input type="range" min="0" max="100" v-model="position16"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position16 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position16 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath3" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4b8659de-1a1f-46f9-b231-b1a69d51aed5.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e6a2f177-0f53-41bc-aca9-5d6be1f8dc23.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position17"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position17 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position17 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath4" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c2dbd0b7-237f-4d94-8d0c-23f55f97ebc2.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a87893ca-15cb-472d-97f0-5f8d31dc79df.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position18"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position18 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position18 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
          </div>
          <!-- Shadow  Service -->
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">Shadow Service</h2>
            </div>
            <div class="grid grid-cols-3 gap-4 py-10">
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
                  <input type="range" min="0" max="100" v-model="position19"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position19 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position19 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath3" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4b8659de-1a1f-46f9-b231-b1a69d51aed5.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e6a2f177-0f53-41bc-aca9-5d6be1f8dc23.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position20"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position20 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position20 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath4" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c2dbd0b7-237f-4d94-8d0c-23f55f97ebc2.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a87893ca-15cb-472d-97f0-5f8d31dc79df.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position21"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position21 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position21 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
          </div>
          <!-- Color Correction Service -->
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">Color Correction Service</h2>
            </div>
            <div class="grid grid-cols-3 gap-4 py-10">
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
                  <input type="range" min="0" max="100" v-model="position22"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position22 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position22 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath3" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4b8659de-1a1f-46f9-b231-b1a69d51aed5.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e6a2f177-0f53-41bc-aca9-5d6be1f8dc23.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position23"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position23 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position23 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath4" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c2dbd0b7-237f-4d94-8d0c-23f55f97ebc2.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a87893ca-15cb-472d-97f0-5f8d31dc79df.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position24"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position24 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position24 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
          </div>
          <!-- High Quality  Masking -->
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">High Quality Masking</h2>
            </div>
            <div class="grid grid-cols-3 gap-4 py-10">
              <!-- Clipping Path 01 -->
              <div class="w-fit h-full">
                <div ref="clippingPath1" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/9c6895b8-d99a-4708-9257-361de9ebfda8.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/3febd1c0-e5ee-4d40-9f8c-51da01e42fc6.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position24"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position24 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position24 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath3" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c950a50c-64ca-4ffa-bf68-a8306480a15b.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/5b78b39d-f250-4f95-bf6b-a42004c3f2b1.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position25"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position25 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position25 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
                <div ref="clippingPath4" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c2dbd0b7-237f-4d94-8d0c-23f55f97ebc2.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a87893ca-15cb-472d-97f0-5f8d31dc79df.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position27"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position27 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position27 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      viewBox="0 0 256 256">
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
          </div>
        </div>
        <div v-if="selectedService == 'Graphic Design'">
          <div class="grid grid-cols-3 gap-4 py-10">


            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e2c66546-f832-4464-b7cb-5e692da88ea5.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/2b582235-a1ab-440a-83fc-e8739a587bc6.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e5150b96-89c6-4571-9400-06a7d85064ad.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/53d19ed4-06ef-4c97-94b8-3ea05be85c10.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/5b05bc8d-893f-4aed-af3a-72efab4524ef.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a18309dc-956d-47fd-8f13-915435d2963a.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/334a2455-e91e-4510-8a44-a816f5f72a6a.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/3194c9f4-484b-4230-934c-861f2cdf101f.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/bc37ecc1-d361-4f2c-918d-f5e3d611b1d9.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4011374d-7df0-4a51-ad05-5635232503c9.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/275e7c63-2c76-4ade-8c7b-f8c0e3233279.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/714bfaac-ce7d-4ca8-9b1c-1ee0eaabec74.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d5b569a5-d872-4c4d-adf8-4cc686dc4a9b.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/017d57d4-c976-4a69-8249-705bf00205a1.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/17515360-2fbd-424a-a6c4-4aeedd8e7c72.jpg"
              alt="black and white" />
            <img class="w-full h-full object-cover object-left"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/7778d009-1d62-4cdb-b742-bf37bfe26dab.jpg"
              alt="black and white" />
          </div>
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">Business Card Design</h2>
            </div>
            <!-- image -->
            <div class="grid grid-cols-3 gap-4 py-10">


              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e2c66546-f832-4464-b7cb-5e692da88ea5.jpg"
                alt="black and white" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e2c66546-f832-4464-b7cb-5e692da88ea5.jpg"
                alt="black and white" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e2c66546-f832-4464-b7cb-5e692da88ea5.jpg"
                alt="black and white" />
            </div>
          </div>
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">ID Card Design</h2>
            </div>
            <!-- image -->
            <div class="grid grid-cols-3 gap-4 py-10">


              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e2c66546-f832-4464-b7cb-5e692da88ea5.jpg"
                alt="black and white" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e2c66546-f832-4464-b7cb-5e692da88ea5.jpg"
                alt="black and white" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e2c66546-f832-4464-b7cb-5e692da88ea5.jpg"
                alt="black and white" />
            </div>
          </div>
        </div>
        <div v-if="selectedService == 'Motion Graphics'" class="">
          <!-- <img class="w-full h-full object-cover object-left"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/fe3db054-64f3-4186-8765-6edca96c33aa.jpg"
            alt="black and white" /> -->
          <div class="flex justify-center items-center py-44">

            <h2 class="text-[#f8d315] text-5xl font-semibold">
              Coming soon...
            </h2>
          </div>
        </div>
        <div v-if="selectedService == 'Video Editing'" class="">
          <!-- <img class="w-full h-full object-cover object-left"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/fe3db054-64f3-4186-8765-6edca96c33aa.jpg"
            alt="black and white" /> -->
          <div class="flex justify-center items-center py-44">

            <h2 class="text-[#f8d315] text-5xl font-semibold">
              Coming soon...
            </h2>
          </div>
        </div>
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
const position5 = ref(50);
const position6 = ref(50);
const position7 = ref(50);
const position8 = ref(50);
const position9 = ref(50);
const position10 = ref(50);
const position11 = ref(50);
const position12 = ref(50);
const position13 = ref(50);
const position14 = ref(50);
const position15 = ref(50);
const position16 = ref(50);
const position17 = ref(50);
const position18 = ref(50);
const position19 = ref(50);
const position20 = ref(50);
const position21 = ref(50);
const position22 = ref(50);
const position23 = ref(50);
const position24 = ref(50);
const position25 = ref(50);
const position26 = ref(50);
const position27 = ref(50);
const clippingPath1 = ref(null);
const clippingPath2 = ref(null);
const clippingPath3 = ref(null);
const clippingPath4 = ref(null);
const clippingPath5 = ref(null);
const clippingPath6 = ref(null);
const clippingPath7 = ref(null);
const clippingPath8 = ref(null);
const clippingPath9 = ref(null);
const clippingPath10 = ref(null);
const clippingPath11 = ref(null);
const clippingPath12 = ref(null);
const clippingPath13 = ref(null);
const clippingPath14 = ref(null);
const clippingPath15 = ref(null);
const clippingPath16 = ref(null);
const clippingPath17 = ref(null);
const clippingPath18 = ref(null);
const clippingPath19 = ref(null);
const clippingPath20 = ref(null);
const clippingPath21 = ref(null);
const clippingPath22 = ref(null);
const clippingPath23 = ref(null);
const clippingPath24 = ref(null);
const clippingPath25 = ref(null);
const clippingPath26 = ref(null);
const clippingPath27 = ref(null);

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
watch(position5, (newValue) => {
  if (clippingPath5.value) {
    clippingPath5.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position6, (newValue) => {
  if (clippingPath6.value) {
    clippingPath6.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position7, (newValue) => {
  if (clippingPath7.value) {
    clippingPath7.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position8, (newValue) => {
  if (clippingPath8.value) {
    clippingPath8.value.style.setProperty("--position", `${newValue}%`);
  }
});
watch(position9, (newValue) => {
  if (clippingPath9.value) {
    clippingPath9.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position10, (newValue) => {
  if (clippingPath10.value) {
    clippingPath10.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position11, (newValue) => {
  if (clippingPath11.value) {
    clippingPath11.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position12, (newValue) => {
  if (clippingPath12.value) {
    clippingPath12.value.style.setProperty("--position", `${newValue}%`);
  }
});
watch(position13, (newValue) => {
  if (clippingPath13.value) {
    clippingPath13.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position14, (newValue) => {
  if (clippingPath14.value) {
    clippingPath14.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position15, (newValue) => {
  if (clippingPath15.value) {
    clippingPath15.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position16, (newValue) => {
  if (clippingPath16.value) {
    clippingPath16.value.style.setProperty("--position", `${newValue}%`);
  }
});
watch(position17, (newValue) => {
  if (clippingPath17.value) {
    clippingPath17.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position18, (newValue) => {
  if (clippingPath18.value) {
    clippingPath18.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position19, (newValue) => {
  if (clippingPath19.value) {
    clippingPath19.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position20, (newValue) => {
  if (clippingPath20.value) {
    clippingPath20.value.style.setProperty("--position", `${newValue}%`);
  }
});
watch(position21, (newValue) => {
  if (clippingPath21.value) {
    clippingPath21.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position22, (newValue) => {
  if (clippingPath22.value) {
    clippingPath22.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position23, (newValue) => {
  if (clippingPath23.value) {
    clippingPath23.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position24, (newValue) => {
  if (clippingPath24.value) {
    clippingPath24.value.style.setProperty("--position", `${newValue}%`);
  }
});
watch(position25, (newValue) => {
  if (clippingPath25.value) {
    clippingPath25.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position26, (newValue) => {
  if (clippingPath26.value) {
    clippingPath26.value.style.setProperty("--position", `${newValue}%`);
  }
});

watch(position27, (newValue) => {
  if (clippingPath27.value) {
    clippingPath27.value.style.setProperty("--position", `${newValue}%`);
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