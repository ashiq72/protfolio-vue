<template>
  <section class="bg-black py-20">
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
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/39e30aae-cfa1-4613-afb9-78c3273eb212.jpg"
            class="w-32 rounded"
          />
        </div>
        <div v-for="i in 6">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/39e30aae-cfa1-4613-afb9-78c3273eb212.jpg"
            class="w-32 rounded"
          />
        </div>
        <div v-for="i in 6">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/39e30aae-cfa1-4613-afb9-78c3273eb212.jpg"
            class="w-32 rounded"
          />
        </div>
      </div>
    </div>
  </section>
</template>
