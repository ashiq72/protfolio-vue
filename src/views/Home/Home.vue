<template>
  <div>
    <Hero />
    <About />
    <Soluations />
    <Services />
    <!-- <Contact /> -->
    <Testimonial />

    <Patner />


    <div>
      <div ref="splide" class="splide scrollbar-hide ">
        <div class="splide__track scrollbar-hide">
          <ul class="splide__list flex scrollbar-none scroll">
            <li class="splide__slide">Slide 1</li>
            <li class="splide__slide">Slide 2</li>
            <li class="splide__slide">Slide 3</li>

            <!-- Add more slides as needed -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import About from "../../components/About.vue";
import Hero from "../../components/Hero.vue";
import Services from "../../components/Services.vue";
import Soluations from "../../components/Solutions.vue";
import Testimonial from "../../components/Testimonial.vue";
import Patner from "../../components/Patner.vue";

import { ref, onMounted } from 'vue';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const splide = ref(null);

onMounted(() => {
  const splideInstance = new Splide(splide.value, {
    type: 'loop',

    focus: 'center',
    perPage: 3,
    autoplay: true,
  });

  splideInstance.mount({ AutoScroll });
});



</script>
