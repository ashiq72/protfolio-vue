<template>
  <span class="inline-block relative h-[1.5em] overflow-hidden w-fit">
    <span
      v-for="(word, index) in words"
      :key="index"
      class="absolute left-0 top-0 transition-all duration-500 ease-in-out"
      :class="{
        'opacity-100 translate-y-0': index === currentIndex,
        'opacity-0 translate-y-full': index !== currentIndex,
      }"
    >
      {{ word }}
    </span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  words: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 2000,
  },
});

const currentIndex = ref(0);
let timer;

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.words.length;
  }, props.interval);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
