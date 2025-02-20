<template>
  <div class="pb-40 bg-[#0d0e11]">
    <div className="relative w-full py-10">
      <div
        className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-8 lg:px-8 items-center w-full rounded-2xl">
        <!-- <div className="md:w-1/2 flex flex-col justify-center  lg:col-span-7 lg:gap-x-6 px-4 xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold  text-[#f8d315] md:text-4xl lg:text-7xl">
            Contact Us
          </h1>
          <h3 class="text-2xl text-gray-300">Graphical Creative</h3>
          <p className="mt-8 text-lg text-gray-200">
            At Graphical Creative, we’re excited to connect with you and assist
            with all your design needs. Whether you have a question about our
            services, need a quote, or just want to discuss your next big
            project, we’re here to help!
          </p>
        </div> -->
        <div className="md:w-1/2 relative lg:col-span-5 lg:-mr-8 xl:col-span-6  flex justify-center">
          <!-- <img className=" bg-gray-50  h-[550px]"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/f2eb3550-0815-436a-b7ff-9f443fb35933.jpg"
            alt="" /> -->
        </div>
      </div>
    </div>

    <div class="mx-auto container flex flex-col md:flex-row gap-10 pt-10 px-6 pb-16">
      <div class="md:w-1/2">
        <div>
          <h1 class="text-4xl font-medium text-gray-100 capitalize">
            Get in Touch with Our Experts!
          </h1>
          <p class="text-gray-100 pt-2 w-10/12">
            Email us your project details, and one of our experienced
            professionals will get back to you as soon as possible. We’re here
            to provide top-quality solutions and exceptional support for your
            needs!
          </p>
        </div>
        <div class="flex flex-col gap-8 py-10">
          <a href="https://wa.me/8801849989679" target="_blank" class="flex gap-3 items-center">
            <div class="w-fit h-fit rounded-full">
              <img
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/f7464c40-5cd5-40c7-abb0-ded3c6a17b02.jpeg"
                class="rounded-full w-14 h-14" />
            </div>
            <div>
              <h2 class="font-bold text-gray-300">Call Us</h2>
              <p class="text-gray-400">+880 1849989679</p>
            </div>
          </a>
          <a href="mailto:hello.graphicalcreative@gmail.com" target="_blank" class="flex gap-3 items-center">
            <div class="w-fit h-fit rounded-full">
              <img
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/61e7178e-e285-4de0-acad-53f2e2ae7da8.jpeg"
                class="rounded-full w-14 h-14" />
            </div>
            <div>
              <h2 class="font-bold text-gray-300">Email</h2>
              <p class="text-gray-400">hello.graphicalcreative@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/graphicalcreative/" target="_blank"
            class="flex gap-3 items-center cursor-pointer">
            <div class="w-fit h-fit rounded-full">
              <img
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/2c06425e-e663-4ce1-bf8c-46b6651cecae.jpeg"
                class="rounded-full w-14 h-14" />
            </div>

            <div>
              <h2 class="font-bold text-gray-300">Linkedin</h2>
              <p class="text-gray-400">/in/graphicalcreative</p>
            </div>
          </a>
        </div>
        <div class="flex gap-6 justify-center py-4">
          <a href="https://www.facebook.com/GraphicalCreativeAgency" target="_blank" class="cursor-pointer">
            <img class="w-12 h-12"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/0e7720ef-3b26-47a7-a7c0-814f336b4c15.jpeg" />
          </a>


          <a href="https://dribbble.com/GraphicalCreative" target="_blank" class="cursor-pointer">
            <img class="w-12 h-12"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/2c06425e-e663-4ce1-bf8c-46b6651cecae.jpeg" />
          </a>

          <a href="https://x.com/hello_graphical?prefetchTimestamp=1722579697401" target="_blank"
            class="cursor-pointer">
            <img class="w-12 h-12"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/672ad440-5a97-489f-a4a1-a65d3d02532c.jpeg" />
          </a>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="pb-2">
          <h1 class="text-xl font-medium text-gray-200 capitalize">
            Try Our Services For Free!
          </h1>
        </div>
        <form>
          <div class="flex gap-4 py-2">
            <input type="text" placeholder="First Name" class="bg-white shadow w-full py-2 px-4" />
            <input type="text" placeholder="Last name" class="bg-white shadow w-full py-2 px-4" />
          </div>
          <div class="py-2">
            <input type="text" placeholder="Enter your email" class="bg-white shadow w-full py-2 px-4" />
          </div>
          <div class="py-2">
            <input type="number" placeholder="Phone Number" class="bg-white shadow w-full py-2 px-4" />
          </div>
          <!-- <div class="flex gap-4">
            <div class="py-2 w-full">
              <input type="text" placeholder="Website" class="bg-white shadow w-full py-2 px-4" />
            </div>
          </div> -->
          <div class="py-2">
            <textarea rows="6" cols="50" type="text" placeholder="Message" class="bg-white shadow w-full py-2 px-4" />
          </div>
          <button class="bg-yellow-400 w-full py-2 text-white cursor-pointer">
            Get Your Free Trial
          </button>
        </form>
      </div>
    </div>

    <div class="bg-gray-100 py-20">
      <div class="flex flex-col lg:flex-row items-start  p-10 rounded-lg max-w-4xl mx-auto">
        <!-- Profile Card -->
        <div class="bg-purple-600 text-white p-6 rounded-2xl shadow-lg w-full lg:w-1/3 py-10">
          <div class="flex justify-start">
            <img src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/27369d3e-ed5e-4e2f-8027-68a402ae395f.png"
              alt="Profile Picture" class="w-20 h-20 rounded-full  mb-4" />
          </div>
          <p class="text-lg font-semibold text-center"></p>
          <p class="text-start">My name is Joy Debnath, Design Manager at Graphical Creative. I will answer all your
            questions.</p>
          <div class="flex justify-center mt-4">
            <button class="bg-white text-purple-600 px-4 py-2 rounded-lg flex items-center gap-2 shadow">
              Ask Questions <span class="text-green-500">&#x1F4F1;</span>
            </button>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="flex-1 mt-6 lg:mt-0 lg:ml-10">
          <h2 class="text-3xl font-bold text-gray-900">Common questions</h2>
          <div class="mt-4 space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-gray-200 p-4 rounded-lg">
              <button class="flex justify-between w-full text-left font-medium" @click="toggleFaq(index)">
                {{ faq.question }}
                <span>{{ openIndex === index ? '-' : '+' }}</span>
              </button>
              <p v-if="openIndex === index" class="mt-2 text-gray-700">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhoneIcon } from "@heroicons/vue/20/solid";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
const agreed = ref(false);



const openIndex = ref(null);
const faqs = ref([
  { question: 'How can I place an order?', answer: 'You can place an order by reaching out through the contact form on this page or directly via email or WhatsApp. We’ll discuss the details of your project and initiate the work immediately. Your satisfaction is our priority!' },
  { question: 'What services do you offer?', answer: "At Graphical Creative, we specialize in a wide range of creative services, including: Logo Design & Branding – Crafting unique logos and brand identities that resonate with your target audience. Social Media Design – Engaging and visually compelling designs tailored to your brand's message. Image Editing & Retouching – Perfecting your images with professional edits and enhancements. Brand Promotion – Elevating your brand through impactful design and strategic marketing. Google Ads & Facebook Boosting – Improving your online presence with targeted ad strategies." },
  { question: 'How long does it take to complete a project?', answer: "The timeline depends on the complexity and type of project: Logo Designs typically take 2-3 days. Social Media Designs & Image Edits can be delivered within 24 hours, depending on the scope. For urgent projects, we offer expedited services to meet tight deadlines." },
  { question: 'Do you offer revisions?', answer: "Yes, we offer multiple revisions to ensure that the final design meets your expectations. We believe in collaboration and making sure your vision comes to life perfectly." }
]);

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
