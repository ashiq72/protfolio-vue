<template>
  <div class="pb-24 bg-[#0d0e11]">
    <div className="relative w-full">
      <div
        className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-8 lg:px-8 items-center w-full   rounded-2xl">
        <div className="md:w-1/2 flex flex-col justify-center px-4  lg:col-span-7 lg:gap-x-6 lg:px-6  xl:col-span-6">
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
        <div className="md:w-1/2 relative lg:col-span-5 lg:-mr-8 xl:col-span-6  flex justify-center">
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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">

              <!-- Clipping Path 01 -->
              <div class="w-full h-full">
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
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position1 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath2" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c506f44a-1261-4629-a676-06bf15e24e03.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c5f8f02f-f102-4bce-8ae9-9ccbfdc0228d.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position2"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position2 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position2 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
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
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position3 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
          <!-- Photo Retouching -->
          <div>
            <div class="border mt-10 rounded-md">
              <h2 class="text-white text-center text-xl py-2">Photo Retouching</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
              <!-- Clipping Path 04 -->
              <div class="w-full h-full">
                <div ref="clippingPath4" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/bf63d249-5d9a-4827-9a1c-6f57e2163231.JPG"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/dc5bea02-a581-4ea3-afdf-3d98a5cd05b7.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position4"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position4 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position4 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <!-- Clipping Path 05 -->
              <div class="w-full h-full">
                <div ref="clippingPath5" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d6c58f85-2912-4d94-9575-6cb4552fb47f.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/9198d753-5dbd-49e6-9fa1-5b38b2c4a4e8.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position5"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position5 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position5 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <!-- Clipping Path 06 -->
              <div class="w-full h-full">
                <div ref="clippingPath6" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/92c28b5c-3d29-4523-bac9-733559cdaec8.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d48db08e-905a-419a-9f24-bdc6cb67b73c.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position6"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position6 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position6 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
              <!-- Clipping Path 01 -->
              <div class="w-full h-full">
                <div ref="clippingPath10" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/410da31a-e043-485f-b06a-a06451b02229.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a80dd554-a521-46c9-8bd9-294b844e89b1.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position10"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position10 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position10 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath11" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/defc02b7-2030-422f-8053-7ccb8d8e6569.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/7762c893-0968-4c70-b5c0-3c84b6b5e8de.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position11"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position11 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position11 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath12" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e220df97-d43d-4bb7-9914-b91f7031eef3.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/3e97f39b-7dfe-4a73-b9ac-695b5e7b3459.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position12"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position12 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position12 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
              <!-- Clipping Path 01 -->
              <div class="w-full h-full">
                <div ref="clippingPath13" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/5faad362-54aa-4b66-98fd-279814f235d3.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/952a86a8-7b57-4857-95d4-f33a68397dfd.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position13"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position13 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position13 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath14" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/364d3d87-effc-4e99-a058-f54a223b446c.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/79b91c27-48ae-44d1-8972-fd30aec47945.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position14"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position14 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position14 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath15" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e9cd866d-a97f-46a3-a8ed-eee3df385169.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d874e637-4be4-482d-ba60-2745015ad21f.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position15"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position15 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position15 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
              <!-- Clipping Path 01 -->
              <div class="w-full h-full">
                <div ref="clippingPath16" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a1d7c5c9-98b7-4310-a2bb-564cd0e3a604.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/3f4e0258-27ed-4573-8252-e5b5ad0e3a71.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position16"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position16 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position16 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath17" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/98be2fbd-9f4b-45d1-ac6c-79a78797f073.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/bf452467-7141-4910-a693-9f4a395b0682.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position17"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position17 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position17 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath18" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c4320bdf-e9c8-4ebd-8407-6dac98062b3f.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/7c2ff536-0857-4027-8acc-4a5ccc5fe583.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position18"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position18 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position18 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
              <!-- Clipping Path 01 -->
              <div class="w-full h-full">
                <div ref="clippingPath19" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/96ef1d34-3f56-4808-b7ca-430ff4d8f757.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/4a0d44e9-1e6e-4d3d-b3d3-1129d04869fb.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position19"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position19 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position19 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath20" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/2390989e-b173-404c-9bb3-947b621a5b67.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/0b3a1ed8-b208-45a7-97db-e2084ba2e146.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position20"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position20 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position20 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath21" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/30c3d6ef-8007-40d8-a501-168df58051ec.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/c102cece-e780-4da6-8f05-180b30cd9e6a.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position21"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position21 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position21 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
              <!-- Clipping Path 01 -->
              <div class="w-full h-full">
                <div ref="clippingPath22" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/94e68382-c40c-4f6c-b61e-5a376e9e44d3.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/5e030e33-4f78-43b0-9fa8-ebd8641f3f51.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position22"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position22 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position22 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath23" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/22923d78-b584-4419-a0dd-0336d7fb5d67.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/9ab6e39e-acfe-4e1b-a307-8441d66b8969.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position23"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position23 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position23 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath24" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/1945477f-425f-45a6-b676-ff53b41db34d.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/26e3006a-28c5-4168-9671-e28cbf5b30cc.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position24"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position24 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position24 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
              <!-- Clipping Path 01 -->
              <div class="w-full h-full">
                <div ref="clippingPath25" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/feabeeac-f121-47fe-8887-8aeba733e3b9.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/586c99d5-aeb9-4ea8-aa44-808b75b3baaf.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position25"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position25 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position25 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath26" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/ec24299d-7f51-4cad-8efa-2c993b5b3adc.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/ec5adcc6-fcce-4bdf-a05f-a6d886e0b273.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position26"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position26 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position26 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
              <div class="w-full h-full">
                <div ref="clippingPath27" class="relative grid place-content-center overflow-hidden rounded-sm wrapper">
                  <div class="relative w-full overflow-hidden max-w-lg aspect-square">
                    <img class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/60478a82-aa84-4eb4-8eb8-261bb6916d88.jpg"
                      alt="color photo" />
                    <img class="w-full h-full object-cover object-left"
                      src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/6add90db-80da-4aef-ae64-080bddc7dbd3.jpg"
                      alt="black and white" />
                  </div>
                  <input type="range" min="0" max="100" v-model="position27"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position27 + '%' }" aria-hidden="true"></div>
                  <div
                    class="absolute flex items-center justify-center w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[45%]"
                    :style="{
                      left: position27 + '%',
                      transform: 'translateX(-50%)',
                    }" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6"
                      fill="currentColor" viewBox="0 0 256 256">
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
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/f3197405-0cdb-4c19-93bd-557fc860a876.jpg"
                alt="black and white" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/f40d5881-561c-47d8-af33-50659c2f59c9.jpg"
                alt="black and white" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/87266acb-1e65-430f-b3dc-350a489f60de.jpg"
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
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/f36ef9fa-99d7-4d59-be48-c382de9520de.jpg"
                alt="black and white" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/bc3cc18e-da5b-48e4-ae16-50b131376a8f.jpg"
                alt="black and white" />
              <img class="w-full h-full object-cover object-left"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/e65d2de3-76b0-4681-b942-ebbb7a45a352.jpg"
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
  width: 100%;
  height: 100%;
  margin: 0;
}

.image-before {
  width: var(--position);
}
</style>