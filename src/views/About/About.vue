
<template>
  <main class="pb-14 bg-[#0d0e11]">
    <div className="relative w-full bg-[#0d0e11] pt-10">
      <div
        className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-8 lg:px-8 items-center w-full rounded-2xl"
      >
        <div
          className="w-1/2 flex flex-col justify-center px-4  lg:col-span-7 lg:gap-x-6 lg:px-6  xl:col-span-6"
        >
          <h1
            className="mt-8 text-3xl font-bold  text-[#f8d315] md:text-4xl lg:text-7xl"
          >
            About
          </h1>
          <h3 class="text-2xl text-gray-100">Graphical Creative</h3>
          <p className="mt-8 text-lg text-gray-50">
            We’re a team of passionate designers dedicated to bringing your
            ideas to life. Our goal is to deliver high-quality design solutions
            that make your brand stand out.
          </p>
        </div>
        <div
          className="w-1/2 relative lg:col-span-5 lg:-mr-8 xl:col-span-6  flex justify-center"
        >
          <img
            className=" bg-[#231f20]  h-[550px]"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/1c398a72-3ecd-49db-b235-ffedc3a7a4c7.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <!-- faq section -->
    <section class="pt-20 pb-10">
      <div class="container mx-auto px-4">
        <h2
          class="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-100"
        >
          About <span class="text-[#f8d315]">Us</span>
        </h2>
        <div class="max-w-5xl mx-auto">
          <p class="text-gray-200 text-center">
            What We Do at Graphical Creative? Welcome to Graphical Creative,
            where your brand’s vision becomes a visual masterpiece! 🌟 At
            Graphical Creative, we are passionate about delivering top-notch
            design solutions that make a real impact. Our team of skilled
            designers is here to help you with a range of services that will
            elevate your brand and capture your audience’s attention.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-16">
          <div class="w-full">
            <Disclosure
              v-for="faq in faqs"
              :key="faq.id"
              as="div"
              class="mt-3"
              v-slot="{ open }"
            >
              <DisclosureButton
                class="flex w-full justify-between rounded bg-white px-4 py-4 text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75"
              >
                <span>{{ faq.question }}</span>
                <ChevronDownIcon
                  :class="open ? 'rotate-180 transform' : ''"
                  class="h-5 w-5 text-gray-700"
                />
              </DisclosureButton>
              <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-300">
                {{ faq.answer }}
              </DisclosurePanel>
            </Disclosure>
          </div>
          <div class="w-full">
            <img :src="aboutUs" alt="about us" />
          </div>
        </div>
      </div>
    </section>

    <!-- our mission -->
    <section class="py-10">
      <div class="container mx-auto px-4">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between"
        >
          <div class="w-full">
            <h2 class="text-2xl md:text-4xl text-yellow-400 font-bold mb-4">
              {{ missionSection.title }}
            </h2>
            <p class="text-gray-200 text-justify">
              {{ missionSection.description }}
            </p>
          </div>
          <div class="w-full flex justify-end">
            <img
              class="max-h-[420px]"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/fb3dfe3e-e9a6-426f-a315-175e9be6dcdc.jpg"
              alt="missionSection.title"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- our vision -->
    <section class="py-10">
      <div class="container mx-auto px-4">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between"
        >
          <div class="w-full">
            <img
              class="max-h-[420px]"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/1737de1a-934e-40a3-86f8-1ea8d1b9b95f.jpg"
              alt="visionSection.title"
            />
          </div>
          <div class="w-full">
            <h2 class="text-2xl md:text-4xl text-yellow-400 font-bold mb-4">
              {{ visionSection.title }}
            </h2>
            <p class="text-gray-200 text-justify">
              {{ visionSection.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- <div id="smooth-wrapper" ref="main">
    <div id="smooth-content">
      <header class="header">
        <h1 class="title">GreenSock ScrollSmoother on a Vue3 App</h1>
        <button class="button" @click="scrollTo">Jump to C</button>
      </header>
      <div class="box box-a gradient-purple" data-speed="0.5">a</div>
      <div class="box box-b gradient-green" data-speed="0.8">b</div>
      <div class="box box-c gradient-orange" data-speed="1.5">c</div>
      <div class="line"></div>
    </div>
  </div> -->
  <!-- <footer>
    <a href="https://greensock.com/scrollsmoother">
      <img
        class="greensock-icon"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-smoother-logo-light.svg"
        width="220"
        height="70"
      />
    </a>
  </footer> -->
</template>

<script setup>
import aboutBanner from "../../assets/images/about-Page.png";
import aboutUs from "../../assets/images/about-Page01.png";
import missionImg from "../../assets/images/our-mission-vision.png";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { onMounted, onUnmounted, ref } from 'vue';

// gsap
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';


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

// gsap animation
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const main = ref(null);
let smoother;
let ctx;

const scrollTo = () => {
  smoother.scrollTo('.box-c', true, 'center center');
};

onMounted(() => {
  ctx = gsap.context(() => {
    // create the smooth scroller FIRST!
    smoother = ScrollSmoother.create({
      smooth: 2, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });
    // ScrollTrigger.create({
    //   trigger: '.box-c',
    //   pin: true,
    //   start: 'center center',
    //   end: '+=300',
    // });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<!-- <style scoped>

@font-face {
  font-display: block;
  font-family: Mori;
  font-style: normal;
  font-weight: 400;
  src: url(https://assets.codepen.io/16327/PPMori-Regular.woff) format("woff");
}

@font-face {
  font-display: block;
  font-family: Mori;
  font-style: normal;
  font-weight: 600;
  src: url(https://assets.codepen.io/16327/PPMori-SemiBold.woff) format("woff");
}

@font-face {
  font-display: block;
  font-family: Fraktion Mono;
  font-style: normal;
  font-weight: 400;
  src: url(https://assets.codepen.io/16327/PPFraktionMono-Bold.woff)
    format("woff");
}

:root {
  --color-shockingly-green: #0ae448;
  --color-just-black: #0e100f;
  --color-surface-white: #fffce1;
  --color-pink: #fec5fb;
  --color-shockingly-pink: #f100cb;
  --color-orangey: #ff8709;
  --color-lilac: #9d95ff;
  --color-lt-green: #abff84;
  --color-blue: #00bae2;
  --color-grey: gray;
  --color-surface75: #bbbaa6;
  --color-surface50: #7c7c6f;
  --color-surface25: #42433d;
  --gradient-macha: linear-gradient(
    114.41deg,
    var(--color-shockingly-green) 20.74%,
    var(--color-lt-green) 65.5%
  );
  --gradient-orange-crush: linear-gradient(
    111.45deg,
    var(--color-orangey) 19.42%,
    #f7bdf8 73.08%
  );
  --gradient-lipstick: linear-gradient(
    165.72deg,
    #f7bdf8 21.15%,
    #cd237f 81.93%
  );
  --gradient-purple-haze: linear-gradient(
    153.58deg,
    #f7bdf8 32.25%,
    #2f3cc0 92.68%
  );
  --gradient-skyfall: linear-gradient(
    131.77deg,
    #0a157a 30.82%,
    #15bfe4 81.82%
  );
  --gradient-emerald-city: linear-gradient(
    166.9deg,
    var(--color-shockingly-green) 53.19%,
    #0085d0 107.69%
  );
  --gradient-summer-fair: linear-gradient(
    144.02deg,
    var(--color-blue) 4.56%,
    var(--color-pink) 72.98%
  );
  --color-core-green: #dfffd1;
  --color-core-green-lt: #f3ffee;
  --color-core-gradient: radial-gradient(
    89.08% 84.62% at 16.54% 78.46%,
    #fbfefa 0%,
    #c9f6b4 39.58%,
    #abff84 77.6%,
    #2fee65 100%
  );
  --color-core-button-gradient: linear-gradient(
    114.41deg,
    #0ae448 20.74%,
    #abff84 65.5%
  );
  --color-core-heading-gradient: linear-gradient(
      180deg,
      #d6ffc3 0%,
      rgba(214, 255, 195, 0) 100%
    ),
    #f3ffee;
  --color-core-intro-gradient: linear-gradient(
      144.5deg,
      #e8ffdd 65.09%,
      #7dea7b 122.73%
    ),
    linear-gradient(311.31deg, #7ef89e 36.08%, #e5ffd9 106.98%);
  --color-text-purple: #d2ceff;
  --color-text-purple-lt: #dfdcff;
  --color-text-gradient: radial-gradient(
    129.03% 100% at 120.97% 81.45%,
    #dfdcff 27.08%,
    #a69eff 100%
  );
  --color-svg-tangerine: #ffe3c7;
  --color-svg-tangerine-lt: #fff0e0;
  --color-svg-gradient: radial-gradient(
    70.77% 70.77% at 0% 70.77%,
    #ffd9b0 0%,
    #fd9f3b 80.73%,
    #ff8709 100%
  );
  --color-svg-heading-gradient: linear-gradient(
      180deg,
      #ffbd77 0%,
      rgba(254, 197, 251, 0) 100%
    ),
    #ffe4c7;
  --color-ui-blue: #bef3fe;
  --color-ui-blue-lt: #e1faff;
  --color-ui-blue-codeblk: #f6feff;
  --color-ui-text-gradient: linear-gradient(
    168.89deg,
    #fec5fb -21.3%,
    #00bae2 89.88%
  );
  --color-ui-code-blocktext-gradient: linear-gradient(
    142.91deg,
    #cef6ff 18.75%,
    #a6efff 54.93%
  );
  --color-ui-gradient: radial-gradient(
    78.77% 78.77% at 71.71% 30.77%,
    #f0fcff 0%,
    #9bedff 67.21%,
    #98ecff 76.04%,
    #5be1ff 84.9%,
    #00bae2 94.79%
  );
  --color-ui-gradient-background: linear-gradient(
    137.1deg,
    #ecfcff 27.5%,
    #a6efff 94.09%
  );
  --color-ui-gradient-flip-background: radial-gradient(
    140% 190% at 117.54% 131.12%,
    #f0fcff 0%,
    #9bedff 25.52%,
    #98ecff 42.71%,
    #5be1ff 60.94%,
    #00bae2 94.79%
  );
  --color-scroll-pink: #ffd7fd;
  --color-scroll-pink-lt: #ffe9fe;
  --color-scroll-gradient: linear-gradient(
    317.42deg,
    #ffe9fe 10.4%,
    #ff96f9 83.03%
  );
  --ease-in: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.86, 0, 0.07, 1);
  --ease-out-quart: cubic-bezier(0.175, 0.79, 0.38, 0.905);
  --ease-in-out-quart: cubic-bezier(0.645, 0.045, 0.355, 1);
}

:root {
  --dark: var(--color-just-black);
  --grey-dark: #42433d;
  --light: var(--color-surface-white);
  --mid: #7c7c6f;
  --grey: #gray;
  --gray: #gray;
  --green: var(--color-shockingly-green);
  --green-dark: #0ae448;
  --green-light: var(--color-lt-green);
  --blue: var(--color-blue);
  --purple: var(--color-lilac);
  --red: #cd237f;
  --orange: var(--color-orangey);
  accent-color: var(--color-shockingly-green);
}
/* lovely fluid fonts */

:root {
  --fluid-min-width: 320;
  --fluid-max-width: 1140;

  --fluid-screen: 100vw;
  --fluid-bp: calc(
    (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
      (var(--fluid-max-width) - var(--fluid-min-width))
  );
}

@media screen and (min-width: 1140px) {
  :root {
    --fluid-screen: calc(var(--fluid-max-width) * 1px);
  }
}

:root {
  --f-0-min: 16;
  --f-0-max: 18;
  --step-0: calc(
    ((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
      var(--fluid-bp)
  );

  --f-1-min: 16;
  --f-1-max: 22.5;
  --step-1: calc(
    ((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
      var(--fluid-bp)
  );

  --f-2-min: 23.04;
  --f-2-max: 28.13;
  --step-2: calc(
    ((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) *
      var(--fluid-bp)
  );

  --f-3-min: 27.65;
  --f-3-max: 35.16;
  --step-3: calc(
    ((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) *
      var(--fluid-bp)
  );

  --f-4-min: 33.18;
  --f-4-max: 46;
  --step-4: calc(
    ((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) *
      var(--fluid-bp)
  );
}

/* fluid paddings */

:root {
  --fluid-min-width: 320;
  --fluid-max-width: 1140;

  --fluid-screen: 100vw;
  --fluid-bp: calc(
    (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
      (var(--fluid-max-width) - var(--fluid-min-width))
  );
}

@media screen and (min-width: 1140px) {
  :root {
    --fluid-screen: calc(var(--fluid-max-width) * 1px);
  }
}

:root {
  --fc-s-min: (var(--f-0-min, 21));
  --fc-s-max: (var(--f-0-max, 24));

  --fc-m-min: (var(--fc-s-min) * 6);
  --fc-m-max: (var(--fc-s-max) * 6);

  --fc-l-min: (var(--fc-s-min) * 8);
  --fc-l-max: (var(--fc-s-max) * 8);

  --fc-xl-min: (var(--fc-s-min) * 10);
  --fc-xl-max: (var(--fc-s-max) * 10);

  /* T-shirt sizes */
  --space-s: calc(
    ((var(--fc-s-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-s-min)) *
      var(--fluid-bp)
  );
  --space-m: calc(
    ((var(--fc-m-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-m-min)) *
      var(--fluid-bp)
  );
  --space-l: calc(
    ((var(--fc-l-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-l-min)) *
      var(--fluid-bp)
  );
  --space-xl: calc(
    ((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-xl-min)) *
      var(--fluid-bp)
  );

  /* One-up pairs */
  --space-s-m: calc(
    ((var(--fc-s-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-s-min)) *
      var(--fluid-bp)
  );
  --space-m-l: calc(
    ((var(--fc-m-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-m-min)) *
      var(--fluid-bp)
  );
  --space-l-xl: calc(
    ((var(--fc-l-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-l-min)) *
      var(--fluid-bp)
  );
}

/* commonly used utils */

.pad-s {
  padding-top: var(--space-s);
  padding-bottom: var(--space-s);
}

.pad-m {
  padding-top: var(--space-m);
  padding-bottom: var(--space-m);
}

.pad-l {
  padding-top: var(--space-l);
  padding-bottom: var(--space-l);
}

.pad-xl {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.flow > * + * {
  margin-top: 1em;
}

.text-center {
  text-align: center;
}

.box {
  width: 75px;
  height: 75px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--green);
  font-weight: 600;
  color: var(--dark);
  line-height: 1.2;
  will-change: transform;
}

.circle {
  width: 75px;
  height: 75px;
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--green);
  font-weight: 600;
  color: var(--dark);
  line-height: 1.2;
  will-change: transform;
}

/* always doing this */
.flex-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

/* and this */

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* colors */

.green {
  background-color: var(--green);
}
.blue {
  background-color: var(--blue);
}
.purple {
  background-color: var(--purple);
}
.red {
  background-color: var(--red);
}
.orange {
  background-color: var(--orange);
}

.dark {
  background-color: var(--dark);
  color: var(--light);
}

.light {
  background-color: var(--light);
  color: var(--dark);
}

.text-light {
  color: var(--light);
}

.text-dark {
  color: var(--dark);
}

.gray,
.grey {
  background-color: var(--grey);
}

body {
  color: var(--color-surface-white);
  background-color: var(--dark);
  font-family: Mori, sans-serif;
  font-weight: 400;
  margin: 0;
  font-size: var(--step-0);
  line-height: 1.45;
}

h1,
h2,
h3,
h4 {
  margin: 10px 0 10px 0;
  font-weight: 400;
  line-height: 1.2;
}

h1,
.h1 {
  font-size: var(--step-4);
}

h2,
.h2 {
  font-size: var(--step-3);
}

h3,
.h3 {
  font-size: var(--step-2);
}

h4,
.h4,
.lead {
  font-size: var(--step-1);
}

a {
  color: var(--green);
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.light a {
  color: var(--green-dark);
}

/* button:not('.box') { breaking for some reason in codepen? */
button {
  display: inline-block;
  outline: none;
  padding: 8px 14px;
  background: var(--dark);
  border: solid 2px var(--light);
  color: var(--light);
  text-decoration: none;
  border-radius: 99px;
  padding: 12px 25px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  line-height: 18px;
}

.gsap-logo {
  width: 20vw;
  max-width: 150px;
  position: fixed;
  bottom: 15px;
  right: 15px;
  mix-blend-mode: difference;
  z-index: 9999;
}

.gsap-logo img {
  width: 100%;
}

.gsap-3-logo {
  width: 20vw;
  max-width: 150px;
  position: fixed;
  bottom: 15px;
  right: 15px;
}

/* panels  */

.panel {
  min-height: 100vh;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
}

.panel.gray {
  background-color: #777;
  background-image: var(--gradient-macha);
}
.panel.blue {
  background-color: #2c7ad2;
  background-image: var(--gradient-summer-fair);
}
.panel.orange {
  background-color: #e77614;
  background-image: var(--gradient-orange-crush);
}

.panel.red {
  background-color: #c82736;
  background-image: var(--gradient-lipstick);
}

.panel.purple {
  background-color: #8d3dae;
  background-image: var(--gradient-purple-haze);
}
.panel.green {
  background-color: #28a92b;
  background-image: var(--gradient-macha);
}

/* SCROLL DOWN */
.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  color: black;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 16px;
  overflow: visible;
}
.scroll-down .arrow {
  position: relative;
  top: -4px;
  margin: 0 auto;
  width: 20px;
  height: 20px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+);
  background-size: contain;
}

/* h1, h2, p, li {
  max-width: 800px;
breaking stuff
}
 */
.panel p strong,
.panel li strong {
  color: white;
  font-weight: 400;
}
.panel p code,
.panel li code {
  background-color: rgba(255, 255, 255, 0.15);
  padding: 2px 4px;
  border-radius: 5px;
}
.panel li {
  margin: 0;
}

pre.prettyprint {
  max-width: 100%;
  overflow: auto;
}

ul pre.prettyprint {
  margin-left: -0.5rem;
}

/* prism */

pre {
  --ifm-pre-background: var(--ifm-color-gray-800) !important;
  --ifm-font-family-monospace: "Fraktion Mono";
}
/* Plain text style */
code {
  border: none;
  border-radius: 4px;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  vertical-align: baseline;
  background: #28292b;
  color: #f5f4e6de;
}

/* Comment */
code .token.comment {
  color: #9c9c9c;
  font-style: italic;
}

/* String and inserted */
code .token.string,
code .token.inserted {
  color: #63d55a;
}

/* Number */
code .token.number {
  color: rgb(247, 140, 108);
}

/* Builtin, char, constant, and function */
code .token.builtin,
code .token.char,
code .token.constant,
code .token.function {
  color: rgb(130, 170, 255);
}

/* Punctuation and selector */
code .token.punctuation,
code .token.selector {
  color: rgb(199, 146, 234);
}

/* Variable */
code .token.variable {
  color: rgb(191, 199, 213);
}

/* Class-name and attr-name */
code .token.class-name,
code .token.attr-name {
  color: rgb(255, 203, 107);
}

/* Tag and deleted */
code .token.tag,
code .token.deleted {
  color: rgb(255, 85, 114);
}

/* Operator */
code .token.operator {
  color: rgb(137, 221, 255);
}

/* Boolean */
code .token.boolean {
  color: rgb(255, 88, 116);
}

/* Keyword */
code .token.keyword {
  font-style: italic;
}

/* Doctype */
code .token.doctype {
  color: rgb(199, 146, 234);
  font-style: italic;
}

/* Namespace */
code .token.namespace {
  color: rgb(178, 204, 214);
}

/* URL */
code .token.url {
  color: rgb(221, 221, 221);
}

/* Hide elements visually, but not for screenreaders by clipping it */

.vh {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
}

/* checkboxes */

/*  Add a :before to each label and style this as the checkbox you want to have */
.checkbox label {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.checkbox label:before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background: var(--light);
  display: inline-block;
  margin-right: 10px;
}

.checkbox input[type="checkbox"]:checked ~ label:before {
  background: var(--green) no-repeat center;
  background-size: 12px 12px;
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ1LjcwMSA0NS43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NS43MDEgNDUuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMC42ODcsMzguMzMyYy0yLjA3MiwyLjA3Mi01LjQzNCwyLjA3Mi03LjUwNSwwTDEuNTU0LDI2LjcwNGMtMi4wNzItMi4wNzEtMi4wNzItNS40MzMsMC03LjUwNCAgICBjMi4wNzEtMi4wNzIsNS40MzMtMi4wNzIsNy41MDUsMGw2LjkyOCw2LjkyN2MwLjUyMywwLjUyMiwxLjM3MiwwLjUyMiwxLjg5NiwwTDM2LjY0Miw3LjM2OGMyLjA3MS0yLjA3Miw1LjQzMy0yLjA3Miw3LjUwNSwwICAgIGMwLjk5NSwwLjk5NSwxLjU1NCwyLjM0NSwxLjU1NCwzLjc1MmMwLDEuNDA3LTAuNTU5LDIuNzU3LTEuNTU0LDMuNzUyTDIwLjY4NywzOC4zMzJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.flair {
  width: 100px;
  height: 100px;
  background-image: url("https://assets.codepen.io/16327/flair.png");
  background-size: contain;
  background-repeat: no-repeat;
  will-change: transform;
}

.flair--2 {
  background-image: url("https://assets.codepen.io/16327/flair-2.png");
}

.flair--3 {
  background-image: url("https://assets.codepen.io/16327/flair-3.png");
}

.flair--4 {
  background-image: url("https://assets.codepen.io/16327/flair-4.png");
}

.flair--5 {
  background-image: url("https://assets.codepen.io/16327/flair-5.png");
}

.flair--6 {
  background-image: url("https://assets.codepen.io/16327/flair-6.png");
}

.flair--7 {
  background-image: url("https://assets.codepen.io/16327/flair-7.png");
}

.flair--8 {
  background-image: url("https://assets.codepen.io/16327/flair-8.png");
}

.flair--9 {
  background-image: url("https://assets.codepen.io/16327/flair-9.png");
}

.flair--10 {
  background-image: url("https://assets.codepen.io/16327/flair-10.png");
}

.flair--11 {
  background-image: url("https://assets.codepen.io/16327/flair-11.png");
}

.flair--12 {
  background-image: url("https://assets.codepen.io/16327/flair-12.png");
}

.flair--13 {
  background-image: url("https://assets.codepen.io/16327/flair-13.png");
}

.flair--14 {
  background-image: url("https://assets.codepen.io/16327/flair-14.png");
}

.flair--15 {
  background-image: url("https://assets.codepen.io/16327/flair-15.png");
}

.flair--16 {
  background-image: url("https://assets.codepen.io/16327/flair-16.png");
}

.flair--17 {
  background-image: url("https://assets.codepen.io/16327/flair-17.png");
}

.flair--18 {
  background-image: url("https://assets.codepen.io/16327/flair-18.png");
}

.flair--19 {
  background-image: url("https://assets.codepen.io/16327/flair-19.png");
}

.flair--20 {
  background-image: url("https://assets.codepen.io/16327/flair-20.png");
}

.flair--21 {
  background-image: url("https://assets.codepen.io/16327/flair-21.png");
}

.flair--22 {
  background-image: url("https://assets.codepen.io/16327/flair-22.png");
}

.flair--23 {
  background-image: url("https://assets.codepen.io/16327/flair-23.png");
}

.flair--24 {
  background-image: url("https://assets.codepen.io/16327/flair-24.png");
}

.flair--25 {
  background-image: url("https://assets.codepen.io/16327/flair-25.png");
}

.flair--26 {
  background-image: url("https://assets.codepen.io/16327/flair-26.png");
}

.flair--27 {
  background-image: url("https://assets.codepen.io/16327/flair-27.png");
}

.flair--28 {
  background-image: url("https://assets.codepen.io/16327/flair-28.png");
}

.flair--29 {
  background-image: url("https://assets.codepen.io/16327/flair-29.png");
}

.flair--30 {
  background-image: url("https://assets.codepen.io/16327/flair-30.png");
}

.flair--31 {
  background-image: url("https://assets.codepen.io/16327/flair-31.png");
}

.flair--32 {
  background-image: url("https://assets.codepen.io/16327/flair-32.png");
}

.flair--33 {
  background-image: url("https://assets.codepen.io/16327/flair-33.png");
}

.flair--34 {
  background-image: url("https://assets.codepen.io/16327/flair-34.png");
}

.flair--35 {
  background-image: url("https://assets.codepen.io/16327/flair-35.png");
}

.flair-cont {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
}

.gradient-green {
  background: var(--gradient-macha),
  url('https://assets.codepen.io/16327/noise-e82662fe.png'); /* Replace with the path to your noise texture image */
      background-blend-mode: color-dodge; /* Blend the noise texture with the gradient */
}

.gradient-green-2 {
  background: var(--gradient-emerald-city),
  url('https://assets.codepen.io/16327/noise-e82662fe.png'); /* Replace with the path to your noise texture image */
      background-blend-mode: color-dodge; /* Blend the noise texture with the gradient */
}

.gradient-orange {
  background: var(--gradient-orange-crush),
  url('https://assets.codepen.io/16327/noise-e82662fe.png'); /* Replace with the path to your noise texture image */
      background-blend-mode: color-dodge; /* Blend the noise texture with the gradient */
}

.gradient-purple {
  background: var(--gradient-purple-haze),
  url('https://assets.codepen.io/16327/noise-e82662fe.png'); /* Replace with the path to your noise texture image */
      background-blend-mode: color-dodge; /* Blend the noise texture with the gradient */
}

.gradient-blue-2 {
  background: var(--gradient-summer-fair),
  url('https://assets.codepen.io/16327/noise-e82662fe.png'); /* Replace with the path to your noise texture image */
      background-blend-mode: color-dodge; /* Blend the noise texture with the gradient */
}

.gradient-blue {
  background: var(--color-ui-gradient),
  url('https://assets.codepen.io/16327/noise-e82662fe.png'); /* Replace with the path to your noise texture image */
      background-blend-mode: color-dodge; /* Blend the noise texture with the gradient */
}

.gradient-red {
  background: var(--gradient-lipstick),
  url('https://assets.codepen.io/16327/noise-e82662fe.png'); /* Replace with the path to your noise texture image */
      background-blend-mode: color-dodge; /* Blend the noise texture with the gradient */
}



.noise {
  position: relative;
}
.noise:after {
  content: '';
  position:absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: url('https://assets.codepen.io/16327/noise-e82662fe.png');
  opacity: 0.4;
  pointer-events: none;
}

body {
  background-color: #111;
  font-family: 'Signika Negative', sans-serif, Arial;
  overscroll-behavior: none;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#smooth-content {
  overflow: visible;
  width: 100%;
  /* set a height because the contents are position: absolute, thus natively there's no height */
  height: 4000px;

  /* background-image: linear-gradient(
      rgba(255, 255, 255, 0.07) 2px,
      transparent 2px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px; */
}

button {
  position: relative;
}

.box {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  text-align: center;
  will-change: transform;
}

.box-a {
  top: 200px;
}

.box-b {
  top: 600px;
}

.box-c {
  top: 1000px;
}

.line {
  visibility: hidden;
  width: 2px;
  height: 4000px;
  position: absolute;
  left: 400px;
  top: 0px;
  background-color: #777;
}

header .name {
  color: white;
}

.title {
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 40px;
}
footer {
  position: fixed;
  right: 0px;
  bottom: 0px;
  padding: 6px 10px 10px 12px;
  border-top-left-radius: 26px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
}

.end {
  position: absolute;
  /*   bottom: 0; */
  top: 2400px;
  transform: translateY(-100%);
  font-size: 30px;
  color: white;
}

/* button:not('.box') { breaking for some reason in codepen? */
/* button {
  display: inline-block;
  outline: none;
  border: none;
  padding: 8px 14px;
  background: var(--light);
  background-image: linear-gradient(
    to bottom,
    hsl(0deg 0% 100%),
    hsl(0deg 0% 94%)
  );
  -webkit-box-shadow: 0px 1px 0px #414141;
  -moz-box-shadow: 0px 1px 0px #414141;
  box-shadow: 0px 1px 0px #414141;
  color: var(--dark);
  text-decoration: none;
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  padding: 12px 25px;
  font-family: 'Signika Negative', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  line-height: 18px;
} */

.light button {
  color: var(--light);
  background-image: linear-gradient(to bottom, #575757, #414141);
}

button:hover {
  background: var(--green-light);
  background-image: linear-gradient(to bottom, #57a818, #4d9916);
  -webkit-box-shadow: 0px 1px 0px fefefe;
  -moz-box-shadow: 0px 1px 0px fefefe;
  box-shadow: 0px 1px 0px fefefe;
  color: #ffffff;
  text-decoration: none;
}

</style> -->