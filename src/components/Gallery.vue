<template>
  <div class="div bg-[#0d0e11] py-16">
    <div class="container mx-auto px-4">
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

      <div class="wrapperM">
        <div class="itemM item1M flex items-center">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/5b7d7d4f-99d1-4a7f-be64-0a06c0a7d25b.jpg"
            class="w-full h-full object-cover object-top rounded"
          />
        </div>
        <div class="itemM flex items-center item2M">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/08e62261-320d-4333-be81-0bce09a1cb03.jpg"
            class="w-full h-full object-cover object-top rounded"
          />
        </div>
        <div class="itemM flex items-center item3M">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/8c858cb6-40dd-464c-917d-2e7145e5fd60.jpg"
            class="w-full h-full object-cover object-top rounded"
          />
        </div>
        <div class="itemM flex items-center item4M">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/6e06ff6c-e6eb-46bc-9dd4-1864045efda7.jpg"
            class="w-full h-full object-cover object-top rounded"
          />
        </div>
        <div class="itemM flex items-center item5M">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/11f1efda-1d66-4fce-9072-307988797e65.jpg"
            class="w-full h-full object-cover object-top rounded"
          />
        </div>
        <div class="itemM flex items-center item6M">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/49bee7af-66ab-4181-a18c-d748b0487843.jpg"
            class="w-full h-full object-cover object-top rounded"
          />
        </div>
        <div class="itemM flex items-center item7M">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/8c858cb6-40dd-464c-917d-2e7145e5fd60.jpg"
            class="w-full h-full object-cover object-top rounded"
          />
        </div>
        <div class="itemM item8M flex items-center">
          <img
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/08e62261-320d-4333-be81-0bce09a1cb03.jpg"
            class="w-full h-full object-cover object-top rounded"
          />
        </div>
      </div>
    </div>
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
</script>

<style scoped>
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
