<template>
    <div className="relative w-full bg-white py-20">
      <div className="mx-auto flex flex-col justify-center  container lg:px-8">
        <div className="relative w-full bg-white flex flex-col gap-8">
          <div
            className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-8 p-5 lg:p-8 items-center  shadow rounded-xl"
          >
            <div class="w-8/12">
              <div class="w-fit h-full">
                <div
                  ref="imageContainer"
                  class="relative grid place-content-center overflow-hidden rounded-sm wrapper"
                >
                  <div
                    class="relative w-full overflow-hidden max-w-lg aspect-square"
                  >
                    <img
                      class="image-before absolute inset-0 w-full h-full object-cover object-left"
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="color photo"
                    />
                    <img
                      class="w-full h-full object-cover object-left"
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="black and white"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    v-model="position"
                    aria-label="Percentage of before photo shown"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div
                    class="absolute inset-0 w-0.5 h-full bg-white pointer-events-none slider-line"
                    :style="{ left: position + '%' }"
                    aria-hidden="true"
                  ></div>
                  <div
                    class="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg pointer-events-none slider-button top-[50%]"
                    :style="{
                      left: position + '%',
                      transform: 'translateX(-50%)',
                    }"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <line
                        x1="128"
                        y1="40"
                        x2="128"
                        y2="216"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></line>
                      <line
                        x1="96"
                        y1="128"
                        x2="16"
                        y2="128"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></line>
                      <polyline
                        points="48 160 16 128 48 96"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></polyline>
                      <line
                        x1="160"
                        y1="128"
                        x2="240"
                        y2="128"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></line>
                      <polyline
                        points="208 96 240 128 208 160"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 w-6/12"
            >
              <h1
                className="mt-8 text-xl font-bold tracking-tight text-black md:text-xl lg:text-2xl"
              >
                Clipping Path Service
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                Our clipping path company offers sharp, niche-looking paths at
                competitive prices. We focus on highlighting the dedicated part of
                your image, ensuring the audience's attention is on the product or
                model. But our background removal service does more than just
                eliminate backgrounds—it enhances your visuals for maximum impact.
              </p>
            </div>
          </div>
          <div
            className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-8 lg:px-8 items-center  shadow rounded-xl"
          >
            <div
              className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 w-6/12"
            >
              <h1
                className="mt-8 text-xl font-bold tracking-tight text-black md:text-xl lg:text-2xl"
              >
                Clipping Path Service
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                Our clipping path company offers sharp, niche-looking paths at
                competitive prices. We focus on highlighting the dedicated part of
                your image, ensuring the audience's attention is on the product or
                model. But our background removal service does more than just
                eliminate backgrounds—it enhances your visuals for maximum impact.
              </p>
            </div>
            <div className="relative w-8/12">
              <img
                className=" bg-gray-50 object-cover  w-full h-full"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
                alt=""
              />
            </div>
          </div>
          <div
            className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-8 lg:px-8 items-center  shadow rounded-xl"
          >
            <div className="relative w-8/12">
              <img
                className=" bg-gray-50 object-cover  w-full h-full"
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/aae11197-7bdb-482c-bf22-e49f837a3436.jpeg"
                alt=""
              />
            </div>
            <div
              className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 w-6/12"
            >
              <h1
                className="mt-8 text-xl font-bold tracking-tight text-black md:text-xl lg:text-2xl"
              >
                Clipping Path Service
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                Our clipping path company offers sharp, niche-looking paths at
                competitive prices. We focus on highlighting the dedicated part of
                your image, ensuring the audience's attention is on the product or
                model. But our background removal service does more than just
                eliminate backgrounds—it enhances your visuals for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const position = ref(50);
  const imageContainer = ref(null);
  
  watch(position, (newValue) => {
    if (imageContainer.value) {
      imageContainer.value.style.setProperty("--position", ${newValue}%);
    }
    console.log(position.value);
  });
  </script>
  
  <style scoped>
  .wrapper {
    --position: 50%;
  }
  
  .image-before {
    width: var(--position);
    filter: grayscale(100%);
  }
  </style>