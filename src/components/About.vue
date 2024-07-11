<template>
  <div className="relative w-full ">
    <div
      className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-8 lg:px-8 items-center "
    >
      <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[450px] xl:aspect-[16/9]"
          src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a03b465b-b930-4624-b134-f947fcf94ae0.jpg"
          alt=""
        />
      </div>
      <div
        className="w-1/2 flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6"
      >
        <h1
          className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl"
        >
          Who Are We
        </h1>
        <p className="mt-8 text-lg text-gray-700">
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
          <router-link to="/contact">
            <button
              type="button"
              className="rounded-md bg-yellow-400 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact Us
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
