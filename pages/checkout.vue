<template>
  <MainLayout>
    <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-xl font-semibold mb-2">Shipping Address</div>
            <div v-if="true">
              <NuxtLink
                to="/address"
                class="flex items-center pb-2 text-blue-500 hover:text-red-400">
                <Icon name="mdi:plus" size="18" class="mr-2" />
                Update Address
              </NuxtLink>

              <div class="p-2 border">
                <div class="underline pb-1">Delivery Address</div>
                <ul class="text-xs">
                  <li class="flex items-center gap-2">
                    <div class="">Contact Name:</div>
                    <div class="font-bold">Tessth</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div class="">Address:</div>
                    <div class="font-bold">Tessth</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div class="">Zip Code:</div>
                    <div class="font-bold">Tessth</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div class="">City:</div>
                    <div class="font-bold">Tessth</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div class="">Country</div>
                    <div class="font-bold">Tessth</div>
                  </li>
                </ul>
              </div>
            </div>
                <NuxtLink
                 v-else
                to="/address"
                class="flex items-center pb-2 text-blue-500 hover:text-red-400">
                <Icon name="mdi:plus" size="18" class="mr-2" />
               Add Address
              </NuxtLink>
          </div>
          <div>
            <div class="bg-white rounded-lg p-4 mt-4">
                <div v-for="product in products" :key="product">
                    <CheckoutItem :product='product'/>
                </div>
            </div>
          </div>

          
        </div>
 
          <div class="md:hidden block my-4" />

        <div class="md:w-[35%]">
            <div id="PlaceOrder" class="bg-white rounded-lg p-4">
                <div class="text-2xl font-extrabold mb-2">Summary</div>

                <div class="flex items-center justify-between my-4">
                    <div class="">Total Shipping</div>
                    <div>Free</div>
                </div>

                <div class="flex items-center justify-between my-4">
                    <div class="font-semibold">Total</div>
                    <div class="text-2xl font-semibold">
                        $ <span class="font-extrabold">{{total/100}}</span>
                    </div>
                </div>

                <form @submit.prevent="pay()">
                    <div class="border border-gray-500 p-2 rounded-sm" id="card-element" />

                    <p id="card-error" class="text-red-700 text-center font-semibold" />

                    <button 
                    :disabled="isProcessing" type="submit" class="mt-4 bg-gradient-to-r from-[#fe630c] to-[#ff3200] w-full text-white font-semibold p-1.5 rounded-full"
                    :class="isProcessing ?'opacity-70' 
                    : 'opacity-100' ">
                    
                    <Icon v-if="isProcessing" name="eos-icons:loading" />
                    <div v-else>
                        Place Order
                    </div>
                    </button>
                </form>
            </div>
            <div class="bg-white rounded-lg p-4 mt-4">
                <div class="text-lg font-semibold mb-2 mt-2">AliExpress</div>
                <p class="my-2">
                    AliExpress keeps your information and payment safe
                </p>
            </div>
          </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const route = useRoute();

let stripe = null;
let element = null;
let card = null;
let form = null;
let total = ref(0);
let clientSecret = null;
let currentAddre = ref(null);
let isProcessing = ref(false);

let selectedArray = ref([]);

onMounted(() => {
  isProcessing.value = true;

  userStore.checkout.forEach((item) => {
    total.value += item.price;
  });
});

const stipeInit = async () => {};

const pay = async () => {};

const createOrder = async (stripIdd) => {};
watch(
  () => total.value,
  () => {
    if (total.value > 0) {
      stipeInit();
    }
  }
);

const showError = (errorMsgText) => {};

const products = [
  {
    id: 1,
    title: "Title 1",
    description: "This is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999,
  },
  {
    id: 2,
    title: "Title 1",
    description: "This is a description",
    url: "https://picsum.photos/id/71/800/800",
    price: 9919,
  },
];
</script>
