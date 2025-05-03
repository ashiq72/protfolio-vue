<template>
  <div class="div bg-[#0d0e11] py-16 overflow-x-hidden">
    <div class="">
      <!-- <div class="wrapperItem2">
          <div class="imageItem item1">
            <img
              src="https://finerva.com/wp-content/uploads/2023/07/office.jpg"
              class="w-full h-full rounded"
            />
          </div>
          <div class="imageItem item2">
            <img
              src="https://www.greatplacetowork.ca/images/Asset_3.webp"
              class="w-full h-full rounded"
            />
          </div>
          <div class="imageItem item3">
            <img
              src="https://finerva.com/wp-content/uploads/2023/07/office.jpg"
              class="w-full h-full rounded"
            />
          </div>
          <div class="imageItem item4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlU5Se8ZseJWm4wkXGe-UtVLVYDFE3JyBJQXiVR8hibh8JSSWBctLSV74hVUQazWeeAM&usqp=CAU"
              class="w-full h-full rounded"
            />
          </div>
          <div class="imageItem item5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PeN-pfhkJ7XuxFQ-qavdWLYntUbI1QU1Sb63NgeHzflu9BbqEKXRwPADheBAmWT-3rc&usqp=CAU"
              class="w-full h-full rounded"
            />
          </div>
          <div class="imageItem item6">
            <img
              src="https://finerva.com/wp-content/uploads/2023/07/office.jpg"
              class="w-full h-full rounded"
            />
          </div>
          <div class="imageItem item7">
            <img
              src="https://finerva.com/wp-content/uploads/2023/07/office.jpg"
              class="w-full h-full rounded"
            />
          </div>
          <div class="imageItem item8">
            <img
              src="https://finerva.com/wp-content/uploads/2023/07/office.jpg"
              class="w-full h-full rounded"
            />
          </div>
          <div class="imageItem item9">
            <img
              src="https://finerva.com/wp-content/uploads/2023/07/office.jpg"
              class="w-full h-full rounded"
            />
          </div>
          <div class="imageItem item10">
            <img
              src="https://finerva.com/wp-content/uploads/2023/07/office.jpg"
              class="w-full h-full rounded"
            />
          </div>
        </div> -->

      <div class="whitespace-nowrap relative w-full py-4">
        <div
          class="inline-flex animate-marquee gap-7"
          :style="{ animationDuration: duration + 's' }"
        >
          <div
            v-for="(img, index) in images.concat(images)"
            class="w-[400px] h-[400px]"
          >
            <img
              :src="img"
              class="object-cover object-top h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div class="whitespace-nowrap relative w-full py-2">
        <div
          class="inline-flex animate-marquee-reverse gap-7"
          :style="{ animationDuration: duration + 's' }"
        >
          <div
            v-for="(img, index) in images2.concat(images2)"
            class="w-[400px] h-[400px]"
          >
            <img
              :src="img"
              class="object-cover object-top h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div class="whitespace-nowrap relative w-full py-4">
        <div
          class="inline-flex animate-marquee gap-7"
          :style="{ animationDuration: duration + 's' }"
        >
          <div
            v-for="(img, index) in images3.concat(images3)"
            class="w-[400px] h-[400px]"
          >
            <img
              :src="img"
              class="object-cover object-top h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import VueVirtualAutoScroller from "vue-virtual-auto-scroller";
import "vue-virtual-auto-scroller/dist/vue-virtual-auto-scroller.css";
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

const plugins = [
  new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
];
const logoContainer = ref(null);
let scrollInterval = null;

const startAutoScroll = () => {
  if (logoContainer.value) {
    scrollInterval = setInterval(() => {
      const container = logoContainer.value;
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    }, 10);
  }
};

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  if (scrollInterval) {
    clearInterval(scrollInterval);
  }
});
const duration = 30;
const images = [
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/60c5f8ce-47d0-43df-b69c-8f2da85fc99a.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/48f577e6-fba3-4417-9c50-576327feb4d8.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/3c30d2c6-e3d1-466c-9fd5-7298ab6cbb1a.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/9ea97a50-1d02-47a7-87e2-d602fad3fa06.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/50372e68-2c4c-496c-9d75-6f81b37494a3.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/91f1f188-ae5e-46b8-a53b-588e379a4e2c.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/60c5f8ce-47d0-43df-b69c-8f2da85fc99a.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/48f577e6-fba3-4417-9c50-576327feb4d8.jpg",
];
const images2 = [
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/b8b4a3e8-ebea-470d-ab81-fdc85d1e981e.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a4db4bb7-9405-4cfa-9d79-90ff35415aa7.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/ac7570cf-b688-4956-9817-f0a4ec0c67a0.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/b8b4a3e8-ebea-470d-ab81-fdc85d1e981e.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/19484371-d366-44c4-a727-6c410e349b9b.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/b8b4a3e8-ebea-470d-ab81-fdc85d1e981e.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/a4db4bb7-9405-4cfa-9d79-90ff35415aa7.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/ac7570cf-b688-4956-9817-f0a4ec0c67a0.jpg",
];
const images3 = [
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/b5ceea21-a1c0-445d-b1de-02136a85fdbd.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/2c8caa46-b524-4a08-a7f6-610b654b1ec6.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d8fef31f-08c8-4635-ab1d-bb09056dc542.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/52de1742-67b9-4e6c-9e04-25f582a35372.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/cabb7f1c-d519-4732-9131-94ba0fe98cf1.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/f1d65e13-b853-42a1-aa77-79f2d25db25b.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d8fef31f-08c8-4635-ab1d-bb09056dc542.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/52de1742-67b9-4e6c-9e04-25f582a35372.jpg",
];
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes marquee-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.animate-marquee-reverse {
  animation-name: marquee-reverse;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.wrapper {
  width: 100%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 400px;
  margin-top: 5rem;
  overflow: hidden;
}

@keyframes scrollLeft {
  to {
    left: -400px;
  }
}

.item {
  width: 400px;
  height: 400px;

  border-radius: 6px;
  position: absolute;
  left: max(calc(400px * 8), 100%);
  animation-name: scrollLeft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.item1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
}

.wrapperM {
  width: 100%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 400px;
  overflow: hidden;
}

@keyframes scrollLeftM {
  to {
    left: -400px;
  }
}

.itemM {
  width: 400px;
  height: 400px;
  border-radius: 6px;
  position: absolute;
  left: max(calc(400px * 8), 100%);
  animation-name: scrollLeftM;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes scrollRightM {
  to {
    left: max(calc(400px * 8), 100%);
  }
}

.itemMRight {
  width: 400px;
  height: 400px;
  border-radius: 6px;
  position: absolute;
  left: -400px; /* start from left */
  animation-name: scrollRightM;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.item1M {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2M {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3M {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4M {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5M {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6M {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7M {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8M {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
}
.wrapperItem2 {
  width: 100%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 400px;
  overflow: hidden;
}
</style>
