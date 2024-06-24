<template>
  <div className="relative w-full bg-white py-20">
    <div className="mx-auto container lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl text-yellow-400">Testimonial</h1>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-2 pt-10 gap-6">
        <div
          v-for="i in 6"
          className="md:flex md:items-center md:justify-center md:space-x-14"
        >
          <div className="relative h-48 w-48 flex-shrink-0">
            <img
              className="relative h-48 w-48 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam aliquam repellat laborum minima tempore deserunt
                explicabo placeat! Fugit, molestias nesciunt.”
              </p>
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-black">John Doe</p>
            <p className="mt-1 text-base text-gray-600">
              Frontend Developer at DevUI
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
