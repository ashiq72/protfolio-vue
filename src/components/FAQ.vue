<template>
  <div>
    <!-- faq section -->
    <section class="py-16 font-poppins">
      <div>
        <p class="text-center text-xl text-yellow">Find Answers</p>
        <h2
          class="text-2xl md:text-4xl font-titillium lg:text-5xl text-gray-900 font-bold mb-4 text-center"
        >
          Frequently Asked Questions
        </h2>
      </div>
      <div class="max-w-4xl mx-auto px-4">
        <div class="px-4 mt-16">
          <div class="w-full">
            <Disclosure
              v-for="faq in faqs"
              :key="faq.id"
              as="div"
              class="border-b border-gray-300"
              v-slot="{ open }"
            >
              <DisclosureButton
                class="flex w-full justify-between items-center px-5 py-5 text-left xl:text-2xl text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75"
              >
                <span>{{ faq.question }}</span>
                <div
                  :class="open && 'bg-yellow'"
                  class="p-2 border border-black rounded-full"
                >
                  <ChevronDownIcon
                    :class="
                      open
                        ? 'rotate-180 transform duration-300'
                        : ' duration-300'
                    "
                    class="h-5 w-5 text-gray-700"
                  />
                </div>
              </DisclosureButton>
              <Transition @enter="onEnter" @leave="onLeave">
                <DisclosurePanel
                  v-show="open"
                  class="overflow-hidden px-4 pb-2 text-md text-gray-900"
                >
                  {{ faq.answer }}
                </DisclosurePanel>
              </Transition>
            </Disclosure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
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

const faqs = ref([
  {
    id: 1,
    question: "How can I place an order?",
    answer:
      "You can place an order by reaching out through the contact form on this page or directly via email or WhatsApp. We’ll discuss the details of your project and initiate the work immediately. Your satisfaction is our priority!",
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer:
      "At Graphical Creative, we specialize in a wide range of creative services, including: Logo Design & Branding – Crafting unique logos and brand identities that resonate with your target audience. Social Media Design – Engaging and visually compelling designs tailored to your brand's message. Image Editing & Retouching – Perfecting your images with professional edits and enhancements. Brand Promotion – Elevating your brand through impactful design and strategic marketing. Google Ads & Facebook Boosting – Improving your online presence with targeted ad strategies.",
  },
  {
    id: 3,
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the complexity and type of project: Logo Designs typically take 2-3 days. Social Media Designs & Image Edits can be delivered within 24 hours, depending on the scope. For urgent projects, we offer expedited services to meet tight deadlines.",
  },
  {
    id: 4,
    question: "Do you offer revisions?",
    answer:
      "Yes, we offer multiple revisions to ensure that the final design meets your expectations. We believe in collaboration and making sure your vision comes to life perfectly.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods for your convenience, including: PayPal payoneer Bank Transfer Mobile Payment Options (Bkash, Nagad, Rocket, etc.) Let us know your preferred payment method, and we’ll proceed accordingly.",
  },
  {
    id: 6,
    question: "Can I get a custom package?",
    answer:
      "Absolutely! If you require multiple services or a bespoke design package, please reach out to us. We’ll work with you to create a personalized solution that fits your exact needs.",
  },
]);
</script>
