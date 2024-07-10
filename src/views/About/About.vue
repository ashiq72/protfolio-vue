<template>
  <main class="pb-14">
    <section>
      <img
        class="w-full h-full max-h-80 object-cover"
        :src="aboutBanner"
        alt="about banner"
      />
    </section>

    <!-- faq section -->
    <section class="pt-20 pb-10">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-4xl font-bold text-center mb-8">
          About <span class="text-yellow-400">Us</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div class="w-full">
            <Disclosure
              v-for="faq in faqs"
              :key="faq.id"
              as="div"
              class="mt-2"
              v-slot="{ open }"
            >
              <DisclosureButton
                class="flex w-full justify-between rounded bg-white px-4 py-2 text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75"
              >
                <span>{{ faq.question }}</span>
                <ChevronDownIcon
                  :class="open ? 'rotate-180 transform' : ''"
                  class="h-5 w-5 text-gray-700"
                />
              </DisclosureButton>
              <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
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
            <p class="text-gray-500 text-justify">
              {{ missionSection.description }}
            </p>
          </div>
          <div class="w-full">
            <img
              class="max-h-96"
              :src="missionImg"
              :alt="missionSection.title"
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
              class="max-h-96"
              :src="missionImg"
              :alt="visionSection.title"
            />
          </div>
          <div class="w-full">
            <h2 class="text-2xl md:text-4xl text-yellow-400 font-bold mb-4">
              {{ visionSection.title }}
            </h2>
            <p class="text-gray-500 text-justify">
              {{ visionSection.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import aboutBanner from "../../assets/images/about-Page.png";
import aboutUs from "../../assets/images/about-Page01.png";
import missionImg from "../../assets/images/our-mission-vision.png";

import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

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
    Our mission is to deliver exceptional graphic design and multimedia services that elevate our clients' brands and projects. We are committed to providing high-quality, creative solutions tailored to meet the unique needs of each client. We strive to enhance visual communication through innovative and engaging designs, deliver precise and professional photo editing services that highlight the best features of our clients' products and images, create compelling video content and motion graphics that capture and retain audience attention, offer comprehensive graphic design services that help businesses establish and strengthen their brand identity, and maintain the highest standards of quality and customer satisfaction in every project we undertake. Our dedication to creativity, quality, and customer satisfaction drives everything we do. We look forward to collaborating with you to bring your vision to life.
  `,
  image: missionImg,
});
const visionSection = ref({
  id: "vision",
  title: "Our Vision",
  description: `
    Our vision is to be a leading provider of innovative and creative graphic design and multimedia solutions. We aim to inspire and empower businesses and individuals by transforming their ideas into visually compelling and impactful realities. We envision a world where exceptional design and creative excellence drive success and recognition for our clients. Through continuous learning, adaptation, and a commitment to the highest standards of quality, we strive to push the boundaries of creativity and deliver unparalleled value in every project we undertake. Our ultimate goal is to leave a lasting positive impact on the industries we serve and to be recognized as a trusted and indispensable partner in our clients' journeys towards achieving their creative and business goals.
  `,
  image: missionImg,
});
</script>
