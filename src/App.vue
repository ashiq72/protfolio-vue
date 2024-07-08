<script setup>
import Navber from "./components/Navber.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-gray-100">
    <Navber />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
