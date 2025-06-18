<template>
  <main>
    <div className="relative w-full bg-white">
      <div
        className=" flex flex-col-reverse md:flex-row lg:gap-x-8  items-center w-full rounded-2xl"
      >
        <!-- <div className="md:w-1/2 flex flex-col justify-center px-4  lg:col-span-7 lg:gap-x-6 lg:px-6  xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold  text-[#f8d315] md:text-4xl lg:text-7xl">
            About
          </h1>
          <h3 class="text-2xl text-gray-100">Graphical Creative</h3>
          <p className="mt-8 text-lg text-gray-50">
            We’re a team of passionate designers dedicated to bringing your
            ideas to life. Our goal is to deliver high-quality design solutions
            that make your brand stand out.
          </p>
        </div> -->
        <div className="w-full">
          <h2 class="pb-16 pt-20 text-5xl text-black text-center font-poppins">
            Bringing Brands to Life with Creativity & Strategy
          </h2>
          <img
            className=" bg-[#231f20]  h-[550px]"
            src="https://bkacontent.com/wp-content/uploads/2020/06/about-us.jpg"
            alt=""
            class="w-full"
          />
        </div>
      </div>
    </div>

    <!-- our mission -->
    <section class="py-16 bg-white font-poppins">
      <div class="container mx-auto px-4">
        <div class="items-center justify-between">
          <div class="w-full">
            <h2
              class="text-2xl md:text-4xl text-yellow-400 font-bold mb-4 text-center"
            >
              Our Story – Graphical Creative
            </h2>
            <p
              class="text-gray-900 tracking-wide font-poppins text-justify text-3xl pt-10"
            >
              At Graphical Creative, we are driven by one simple truth:
              exceptional design is the key to elevating brands. What began as a
              passion for creative excellence has since evolved into a strategic
              design agency, specializing in solutions that not only captivate
              but also drive measurable business success.
              <br />
              <br />

              We blend creativity, strategy, and innovation to craft bespoke
              designs that align with your brand's vision. Each project is
              meticulously executed with a focus on delivering both aesthetic
              appeal and tangible impact.
              <br />
              <br />
              Our Mission: To empower businesses by providing cutting-edge
              design solutions that foster growth, enhance brand recognition,
              and create lasting impressions.
            </p>
          </div>
          <!-- <div class="w-full flex justify-end">
            <img class="max-h-[420px]"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/fb3dfe3e-e9a6-426f-a315-175e9be6dcdc.jpg"
              alt="missionSection.title" />
          </div> -->
        </div>
      </div>
    </section>

    <Gallery />
    <div class="b bg-[#0d0e11] pb-16 font-poppins">
      <div class="container mx-auto px-4">
        <div class="">
          <h2
            class="text-2xl md:text-4xl text-yellow font-bold mb-4 text-center"
          >
            Our Creative Family
          </h2>
          <p class="text-center text-gray-200 text-xl mb-6">
            A dynamic team of skilled experts, united in our passion for
            crafting exceptional, impactful designs that elevate your brand.
          </p>
        </div>
        <Flicking
          :key="'5'"
          :options="{
            align: 'prev',
            circular: true,
            circularFallback: 'bound',
            panelsPerView: perView,
          }"
          :plugins="plugins"
        >
          <div
            v-for="i in 12"
            class="flex flex-col rounded-md shadow-xl w-fit md:w-fit ml-4"
          >
            <div
              class="flex flex-col rounded-md justify-between flex-1 p-6 bg-white lg:py-4 lg:px-4"
            >
              <div class="flex-1">
                <img
                  class="flex-shrink-0 rounded-md object-cover w-56 h-56"
                  src="https://b1688923.smushcdn.com/1688923/wp-content/uploads/2022/05/Melbourne-Corporate-Headshots-Julia-Nance-Portraits1.jpg?lossy=2&strip=1&webp=1"
                  alt=""
                />
              </div>
              <div class="flex items-center mt-2">
                <div class="">
                  <p class="text-base font-bold text-gray-900 font-pj">
                    Leslie Alexander
                  </p>
                  <p class="mt-0.5 text-sm font-pj text-gray-600">
                    Freelance React Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Flicking>
      </div>
    </div>
    <!-- faq section -->
    <FAQ />

    <!-- our vision -->
    <div class="bg-[#0d0e11]">
      <Testimonial />
    </div>
  </main>
</template>

<script setup>
import aboutUs from "../../assets/images/about-Page01.png";
import missionImg from "../../assets/images/our-mission-vision.png";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import Testimonial from "../../components/Testimonial.vue";
import { ref, onMounted, onUnmounted } from "vue";
import VueVirtualAutoScroller from "vue-virtual-auto-scroller";
import "vue-virtual-auto-scroller/dist/vue-virtual-auto-scroller.css";
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import FAQ from "../../components/FAQ.vue";
import Gallery from "../../components/Gallery.vue";
const onEnter = (el) => {
  el.style.height = "0px";
  el.style.overflow = "hidden";

  // Force reflow before setting height
  requestAnimationFrame(() => {
    el.style.transition = "height 600ms ease";
    el.style.height = el.scrollHeight + "px";
  });

  el.addEventListener(
    "transitionend",
    () => {
      el.style.height = "auto"; // <- reset to auto after animation
    },
    { once: true }
  );
};

const onLeave = (el) => {
  el.style.height = el.scrollHeight + "px"; // Set current height
  el.style.overflow = "hidden";
  el.style.transition = "height 600ms ease";

  // Force reflow so transition takes effect
  void el.offsetHeight;

  requestAnimationFrame(() => {
    el.style.height = "0px"; // Collapse to 0
  });

  el.addEventListener(
    "transitionend",
    () => {
      el.style.height = "";
      el.style.overflow = "";
      el.style.transition = "";
    },
    { once: true }
  );
};
const logos = ref([
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/bdb1fdf9-00b7-4c64-b9a2-7a8cd4176c5b.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/1307193a-8dd2-475d-8e82-703865bdc5be.jpg",
  "https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/544383b5-14b5-412e-81eb-4aea92ff6f04.jpg",
  // Add more logos here
]);
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
        // When the container reaches the end, reset to the start
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1; // Control scroll speed by adjusting this value
      }
    }, 10); // Adjust the interval for smooth scrolling (lower is faster)
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

const faqs = ref([
  {
    id: 1,
    question: "What is a clipping path, and why is it important?",
    answer:
      "A clipping path is a technique used in photo editing to remove the background from an image. It is essential for creating clean and professional-looking photos, especially for product images in e-commerce, catalogs, and advertisements.",
  },
  {
    id: 2,
    question: "How long does it take to complete a background removal project?",
    answer:
      "The time required to complete a background removal project depends on the complexity and number of images. Typically, small batches can be completed within 24-48 hours.",
  },
  {
    id: 3,
    question: "What is photo retouching, and what does it involve?",
    answer:
      "Photo retouching involves enhancing and correcting images to improve their overall appearance. This can include removing blemishes, adjusting colors, smoothing skin, and enhancing details to make the image look polished and professional.",
  },
  {
    id: 4,
    question: "What is a neck joint/ghost mannequin service?",
    answer:
      "A neck joint or ghost mannequin service is used in apparel photography to create a 3D effect. It involves removing the mannequin or model from the image, making the clothing appear as if it is worn by an invisible person, which showcases the product more effectively.",
  },
  {
    id: 5,
    question: "Can you design a custom logo for my business?",
    answer:
      "Yes, I offer custom logo design services. I work closely with clients to understand their brand and create a unique logo that represents their business identity and values.",
  },
  {
    id: 6,
    question: "What types of graphic design services do you offer?",
    answer:
      "I offer a wide range of graphic design services, including branding, marketing materials, social media graphics, website design, and more. My goal is to help businesses visually communicate their message and stand out in their industry.",
  },
  {
    id: 7,
    question: "Do you provide video editing services?",
    answer:
      "Yes, I provide professional video editing services. Whether you need a promotional video, a social media clip, or a full-length video, I can help bring your vision to life with high-quality editing.",
  },
  {
    id: 8,
    question: "What are motion graphics, and how can they benefit my project?",
    answer:
      "Motion graphics are animated visual elements that help convey information or tell a story in an engaging way. They can be used in videos, presentations, advertisements, and more to captivate the audience and enhance the overall message.",
  },
  {
    id: 9,
    question: "How can I get a quote for my project?",
    answer:
      "To get a quote, please contact me through the contact form on the website or email me directly with the details of your project. I will review your requirements and provide you with a customized quote based on the scope and complexity of the work.",
  },
  {
    id: 10,
    question: "What is the process for starting a project with you?",
    answer:
      "To start a project, simply reach out to me via the contact form or email. We will discuss your needs, objectives, and timeline. Once we agree on the project details and terms, I will begin working on your project and keep you updated throughout the process.",
  },
]);

const missionSection = ref({
  id: "mission",
  title: "Our Mission",
  description: `
At Graphical Creative, our mission is to be the premier global provider of exceptional image editing services. We are dedicated to delivering superior quality solutions that transform visual content and help our clients achieve their branding and marketing objectives. With over two years of industry expertise and a state-of-the-art manufacturing facility, we offer a comprehensive range of services, including clipping path, retouching, image masking, shading, manipulation, logo design, social media design, graphic design, motion graphics, animation, and video editing. Our passion for the art of image editing drives us to exceed expectations, ensuring that every project we undertake meets the highest standards of excellence. We are committed to building lasting relationships with our clients through innovative solutions and exceptional service.
  `,
  image: missionImg,
});
const visionSection = ref({
  id: "vision",
  title: "Our Vision",
  description: `
    Our vision is to set the global benchmark for excellence in image editing services. We aspire to be recognized as the most innovative and reliable partner for businesses worldwide, delivering creative and impactful visual solutions that elevate brands and drive success. As we look to the future, we are committed to continually advancing our techniques, embracing new technologies, and expanding our reach to serve clients across the globe. Our goal is to be the first choice for image editing services, known for our creativity, quality, and dedication to client satisfaction
  `,
  image: missionImg,
});
</script>
<style>
.wrapperItem {
  width: 100%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 300px;
  margin-top: 5rem;
  overflow: hidden;
}

@keyframes scrollLeft {
  to {
    left: -200px;
  }
}

.imageItem {
  width: 350px;
  height: 400px;
  border-radius: 6px;
  position: absolute;
  left: max(calc(350px * 10), 100%);
  animation-name: scrollLeft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* Synchronized animation delays */
.item1 {
  animation-delay: calc(-30s / 10 * 9);
}

.item2 {
  animation-delay: calc(-30s / 10 * 8);
}

.item3 {
  animation-delay: calc(-30s / 10 * 7);
}

.item4 {
  animation-delay: calc(-30s / 10 * 6);
}

.item5 {
  animation-delay: calc(-30s / 10 * 5);
}

.item6 {
  animation-delay: calc(-30s / 10 * 4);
}

.item7 {
  animation-delay: calc(-30s / 10 * 3);
}

.item8 {
  animation-delay: calc(-30s / 10 * 2);
}

.item9 {
  animation-delay: calc(-30s / 10 * 1);
}

.item10 {
  animation-delay: 0s;
}
</style>
