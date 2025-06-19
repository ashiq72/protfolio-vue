<template>
  <div class="relative h-screen w-screen overflow-hidden">
    <div class="absolute w-full h-full inset-0 z-50 bg-[rgba(0,0,0,0.5)]">
      <div class="relative z-10 flex justify-center items-center h-full">
        <h1 class="text-white text-6xl font-medium">Coming Soon</h1>
      </div>
    </div>
    <video
      src="/comingsoonvideo.mp4"
      autoplay
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    ></video>
  </div>
</template>
