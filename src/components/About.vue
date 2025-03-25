<template>
  <div className="relative w-full bg-[#0d0e11]">
    <div
      className="mx-auto container grid grid-cols-1 lg:grid-cols-2 2xl:gap-8  lg:px-8 items-center"
    >
      <!-- Image Section -->
      <div className="relative">
        <img
          className="w-full mt-20 lg:mt-0 aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[400px] xl:aspect-[16/9]"
          src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/8faa3bb1-48ec-4567-b18b-687e217c7953.jpg"
          alt=""
        />
      </div>

      <!-- Text Section -->
      <div
        className="flex flex-col justify-center px-4 py-6 md:py-16 lg:gap-x-6 lg:px-6 lg:py-12"
      >
        <h1
          className="mt-8 text-3xl font-bold tracking-tight text-[#f8d315] md:text-4xl lg:text-6xl"
        >
          Who Are We
        </h1>
        <p className="mt-8 lg:text-lg text-gray-200">
          Graphical Creative, we stand as your foremost agency for all your
          online requirements! Our specialization spans a wide range of
          services, encompassing image editing, clipping path, background
          removal, graphics design, logo design, motion graphic design, logo
          animation, and video production & editing. With our expert team
          dedicated to infusing innovation and creativity into every project,
          we're here to assist businesses like yours in thriving within the
          digital realm. Partner with us today to elevate your brand and realize
          your goals.
        </p>
        <router-link to="/portfolio">
          <div
            class="relative inline-flex items-center justify-center mt-8 sm:mt-6 group"
          >
            <div
              class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-yellow-500 group-hover:shadow-lg group-hover:shadow-yellow-500/50"
            ></div>
            <span
              title=""
              class="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-[#f8d315] bg-black border border-transparent rounded-full"
              role="button"
            >
              See Portfolio
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

.logos {
  padding: 60px 0;
  background: white;
  white-space: nowrap;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: inline-block;
  animation: 35s slide infinite linear;
}

.logos-slide img {
  height: 50px;
  margin: 0 40px;
}
</style>
