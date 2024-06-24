<script setup>
import Navber from "./components/Navber.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="">
    <Navber />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
