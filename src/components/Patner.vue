<template>
  <section class="bg-gray-600 py-20">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center justify-center">
        <p class="text-gray-300">Our Patner</p>
        <h1 class="font-bold text-2xl font-serif text-white">
          Our Working Patner
        </h1>
      </div>
      <div
        className="px-2 py-5 md:px-0 grid grid-cols-6 gap-6 mt-10 justify-items-center"
      >
        <div v-for="i in 6">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/0e7553db-41bd-4409-afaa-33f39ab4f2d4.png"
            class="w-40 rounded"
          />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </section>
</template>
