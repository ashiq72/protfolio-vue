<script setup>
import Navber from "./components/Navber.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-gray-100">
    <Navber />
    <div class="pt-20">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
