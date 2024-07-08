<template>
  <div class="mx-auto container flex px-4 py-40 gap-10">
    <div class="w-1/2">
      <div>
        <h1 class="text-xl font-medium text-gray-600 capitalize">
          Get a Free trial with
          <span class="font-semibold text-xl">no cost or obligation</span>
        </h1>
        <p class="text-gray-500 pt-2">
          You can email us, your one of our exparts with years of experience.
          And one of our experts will answer you as soon as possible.
        </p>
      </div>
      <div class="flex flex-col gap-8 py-10">
        <div class="flex gap-3 items-center">
          <div class="bg-yellow-400 w-fit h-fit p-2 rounded-full">
            <PhoneIcon class="w-6 text-white" />
          </div>
          <div>
            <h2 class="font-bold text-gray-500">Call Us</h2>
            <p class="text-gray-400">+880 1518927686</p>
          </div>
        </div>
        <div class="flex gap-3 items-center">
          <div class="bg-yellow-400 w-fit h-fit p-2 rounded-full">
            <PhoneIcon class="w-6 text-white" />
          </div>
          <div>
            <h2 class="font-bold text-gray-500">Email</h2>
            <p class="text-gray-400">joydebnath.yahoo@gmail.com</p>
          </div>
        </div>
        <div class="flex gap-3 items-center">
          <div class="bg-yellow-400 w-fit h-fit p-2 rounded-full">
            <PhoneIcon class="w-6 text-white" />
          </div>
          <div>
            <h2 class="font-bold text-gray-500">Linkedin</h2>
            <p class="text-gray-400">live: cid.2ad094c718de760c</p>
          </div>
        </div>
      </div>
      <div class="flex gap-6 justify-center py-4">
        <img
          class="w-5 h-5"
          src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/d5efdfa7-45be-482c-838e-51a60a91b801.png"
        />
        <img
          class="w-5 h-5"
          src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/42e128c0-5c12-48d4-ac2f-b46533a576b8.png"
        />
        <img
          class="w-5 h-5"
          src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/7151fda2-8d48-4918-9360-941d3db35af2.png"
        />
        <img
          class="w-5 h-5"
          src="https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/63badd59-a70f-415d-bb1d-5f978b8475f0.png"
        />
      </div>
    </div>
    <div class="w-1/2">
      <div class="pb-2">
        <h1 class="text-xl font-medium text-gray-600 capitalize">
          Try Our Image Editing Services For Free!
        </h1>
      </div>
      <form>
        <div class="flex gap-4 py-2">
          <input
            type="text"
            placeholder="Full Name"
            class="bg-white shadow w-full py-2 px-4"
          />
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
</template>

<script setup>
import { ref } from "vue";
import { PhoneIcon } from "@heroicons/vue/20/solid";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const agreed = ref(false);
</script>
