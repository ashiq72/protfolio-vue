<template>
  <div className="relative w-full bg-[#0d0e11]">
    <div className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-32 lg:px-8 items-center ">
      <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 ">
        <img className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[400px] xl:aspect-[16/9]"
          src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/8faa3bb1-48ec-4567-b18b-687e217c7953.jpg"
          alt="" />
      </div>
      <div
        className="w-1/2 flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#f8d315] md:text-4xl lg:text-6xl">
          Who Are We
        </h1>
        <p className="mt-8 text-lg text-gray-200">
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
        <form action="" className="mt-8 flex items-start space-x-2">
          <router-link to="/protfolio">
            <div class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
              <div
                class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-yellow-500 group-hover:shadow-lg group-hover:shadow-yellow-500/50">

              </div>
              <span title=""
                class="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-[#f8d315] bg-black border border-transparent rounded-full"
                role="button">
                See Protfolio
              </span>
            </div>
          </router-link>
        </form>
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