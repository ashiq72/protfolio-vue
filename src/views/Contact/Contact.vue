<template>
  <div class="pb-40">
    <div className="relative w-full bg-white ">
      <div
        className="mx-auto container flex flex-col-reverse md:flex-row lg:gap-x-8 lg:px-8 items-center w-full   rounded-2xl"
      >
        <div
          className="w-1/2 flex flex-col justify-center px-4  lg:col-span-7 lg:gap-x-6 lg:px-6  xl:col-span-6"
        >
          <h1
            className="mt-8 text-3xl font-bold  text-[#f8d315] md:text-4xl lg:text-7xl"
          >
            Contact Us
          </h1>
          <h3 class="text-2xl">Graphical Creative</h3>
          <p className="mt-8 text-lg text-gray-700">
            At Graphical Creative, we’re excited to connect with you and assist
            with all your design needs. Whether you have a question about our
            services, need a quote, or just want to discuss your next big
            project, we’re here to help!
          </p>
        </div>
        <div
          className="w-1/2 relative lg:col-span-5 lg:-mr-8 xl:col-span-6  flex justify-center"
        >
          <img
            className=" bg-gray-50  h-[350px]"
            src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/463d31fa-a6f1-4aa5-96e6-8a536421afc1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="mx-auto container flex gap-10 pt-10 px-4">
      <div class="w-1/2">
        <div>
          <h1 class="text-xl font-medium text-gray-600 capitalize">
            Get in Touch with Our Experts!
          </h1>
          <p class="text-gray-500 pt-2">
            Email us your project details, and one of our experienced
            professionals will get back to you as soon as possible. We’re here
            to provide top-quality solutions and exceptional support for your
            needs!
          </p>
        </div>
        <div class="flex flex-col gap-8 py-10">
          <div class="flex gap-3 items-center">
            <div class="w-fit h-fit rounded-full">
              <img
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/197e240f-1a9c-4d34-8cf1-b25d7ba3f545.png"
                class="rounded-full w-14 h-14"
              />
            </div>
            <div>
              <h2 class="font-bold text-gray-500">Call Us</h2>
              <p class="text-gray-400">+880 1849989679</p>
            </div>
          </div>
          <div class="flex gap-3 items-center">
            <div class="w-fit h-fit rounded-full">
              <img
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/13c75e27-bcc6-4773-a22c-b42463e666e7.png"
                class="rounded-full w-14 h-14"
              />
            </div>
            <div>
              <h2 class="font-bold text-gray-500">Email</h2>
              <p class="text-gray-400">hello.graphicalcreative@gmail.com</p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/graphicalcreative/"
            target="_blank"
            class="flex gap-3 items-center cursor-pointer"
          >
            <div class="w-fit h-fit rounded-full">
              <img
                src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/b4e83a92-6f21-4aca-8ea3-f5743f1fb5b1.png"
                class="rounded-full w-14 h-14"
              />
            </div>

            <div>
              <h2 class="font-bold text-gray-500">Linkedin</h2>
              <p class="text-gray-400">/in/graphicalcreative</p>
            </div>
          </a>
        </div>
        <div class="flex gap-6 justify-center py-4">
          <a
            href="https://www.facebook.com/GraphicalCreativeAgency"
            target="_blank"
            class="cursor-pointer"
          >
            <img
              class="w-12 h-12"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/08d5d097-d2de-4d5e-a2fe-3bb33027c7eb.png"
            />
          </a>
          <a
            href="https://dribbble.com/GraphicalCreative"
            target="_blank"
            class="cursor-pointer"
          >
            <img
              class="w-12 h-12"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/1a3ffab8-229f-4e22-91b0-c051911289e3.png"
            />
          </a>

          <a
            href="https://dribbble.com/GraphicalCreative"
            target="_blank"
            class="cursor-pointer"
          >
            <img
              class="w-12 h-12"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/42ac301d-7783-40a8-b1d5-2fd2698daa38.png"
            />
          </a>

          <a
            href="https://x.com/hello_graphical?prefetchTimestamp=1722579697401"
            target="_blank"
            class="cursor-pointer"
          >
            <img
              class="w-12 h-12"
              src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/ad709941-6ffd-40f9-93d5-df86c6e18004.png"
            />
          </a>
        </div>
      </div>
      <div class="w-1/2">
        <div class="pb-2">
          <h1 class="text-xl font-medium text-gray-600 capitalize">
            Try Our Services For Free!
          </h1>
        </div>
        <form>
          <div class="flex gap-4 py-2">
            <input
              type="text"
              placeholder="First Name"
              class="bg-white shadow w-full py-2 px-4"
            />
            <input
              type="text"
              placeholder="Last name"
              class="bg-white shadow w-full py-2 px-4"
            />
          </div>
          <div class="py-2">
            <input
              type="text"
              placeholder="Enter your email"
              class="bg-white shadow w-full py-2 px-4"
            />
          </div>
          <div class="py-2">
            <input
              type="number"
              placeholder="Phone Number"
              class="bg-white shadow w-full py-2 px-4"
            />
          </div>
          <div class="flex gap-4">
            <!-- <div class="py-2 w-full">
            <input
              type="text"
              placeholder="Subject"
              class="bg-white shadow w-full py-2 px-4"
            />
          </div> -->
            <div class="py-2 w-full">
              <input
                type="text"
                placeholder="Website"
                class="bg-white shadow w-full py-2 px-4"
              />
            </div>
          </div>
          <div class="py-2">
            <textarea
              rows="6"
              cols="50"
              type="text"
              placeholder="Message"
              class="bg-white shadow w-full py-2 px-4"
            />
          </div>
          <button class="bg-yellow-400 w-full py-2 text-white cursor-pointer">
            Get Your Free Trial
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhoneIcon } from "@heroicons/vue/20/solid";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const agreed = ref(false);
</script>
