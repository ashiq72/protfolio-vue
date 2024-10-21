<template>
  <div>
    <Hero />
    <About />
    <Soluations />
    <Services />
    <!-- <Contact /> -->
    <Testimonial />

    <Patner />
    <<<<<<< HEAD=======>>>>>>> 3c4f7ba57d2382a9533b2dc6e6721af2549b3601
  </div>
</template>
<script setup>
import About from "../../components/About.vue";
import Hero from "../../components/Hero.vue";
import Services from "../../components/Services.vue";
import Soluations from "../../components/Solutions.vue";
import Testimonial from "../../components/Testimonial.vue";
import Patner from "../../components/Patner.vue";
</script>

<style>
body {
  background: #f2f2f2;
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
  overflow: hidden;
  padding: 0px 0;
  background: white;
  white-space: nowrap;
  position: relative;

  width: 100%;
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
  animation: 20s slide infinite linear;
}

.logos-slide img {
  height: 50px;
  margin: 0 40px;
}
</style>
