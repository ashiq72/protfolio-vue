<template>
  <section class="py-4 bg-[#0d0e11] lg:pb-10 xl:pb-2">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 container">
      <div class="py-6 md:py-16">
        <div>
          <!-- <p class="text-sm font-normal tracking-widest text-gray-300 uppercase">A Hub for Designers, Developers & Marketers</p> -->

          <div
            class="positivity mt-5 text-2xl text-white sm:mt-5 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-8"
          >
            <span class="positivity__alone relative">
              Where Creativity Meets Strategy –
              <span class="text-yellow word-wrap">
                Elevating Brands with Stunning Visuals and
                <span class="sm:hidden inline-block text-white"
                  >Perfect Precision</span
                >
              </span>

              <!-- Word wrapper with reserved space -->
              <span class="hidden relative sm:inline-block word-wrap">
                <div class="positivity__words whitespace-nowrap w-full">
                  <span class="change">Perfect Precision</span>
                  <span class="change">Flawless Accuracy</span>
                  <span class="change">Impeccable Detail</span>
                </div>
              </span>
            </span>
          </div>

          <p
            class="md:w-3/4 mt-4 text-md lg:text-xl font-normal text-gray-400 sm:mt-4"
          >
            At Graphical Creative, we blend creativity with strategy to elevate
            your brand. Our team delivers visually impactful designs that align
            perfectly with your business goals, ensuring your brand stands out
            and thrives.
          </p>
          <!-- <div class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                                <div
                                    class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-yellow-500 group-hover:shadow-lg group-hover:shadow-yellow-500/50">

                                </div>
                                <a href="/contact" title=""
                                    class="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                                    role="button">
                                    Contact us
                                </a>
                            </div> -->
          <div>
            <!-- <div
              class="inline-flex items-center pt-6 mt-8 border-t border-gray-800"
            >
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                  stroke="url(#a)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1="3"
                    y1="7.00003"
                    x2="22.2956"
                    y2="12.0274"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: var(--color-cyan-500)"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: var(--color-purple-500)"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.positivity {
  height: auto;
  display: flex;
  overflow: hidden;

  .positivity__alone {
    display: inline-block;
    color: #fff;
    position: relative; /* adjust based on text height */
  }

  .positivity__words {
    overflow: visible;
    .change {
      opacity: 0;
      bottom: -10px;
      left: 0;
      position: absolute;
      animation: changeword 8s linear infinite;
      color: #fff;
    }

    .change:nth-child(1) {
      animation-delay: 0s;
    }
    .change:nth-child(2) {
      animation-delay: 2s;
    }
    .change:nth-child(3) {
      animation-delay: 4s;
    }
    .change:nth-child(4) {
      animation-delay: 6s;
    }
  }
}

@keyframes changeword {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  5% {
    opacity: 1;
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    transform: translateY(0);
  }

  30% {
    opacity: 0;
    transform: translateY(50px);
  }

  80% {
    opacity: 0;
    transform: translateY(0px);
  }
}
</style>
