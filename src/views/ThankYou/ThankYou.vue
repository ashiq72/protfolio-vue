<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8 text-center">
      <div class="flex justify-center mb-6">
        <div
          class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <h1 class="text-3xl font-extrabold text-gray-800 mb-2">Thank You!</h1>
      <p class="text-gray-600 text-lg mb-6">
        Your message has been successfully sent. We’ll get back to you as soon
        as possible.
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition"
      >
        Back to Home
      </router-link>
    </div>
  </div>
</template>
