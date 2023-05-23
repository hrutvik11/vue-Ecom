<template>
  <CartDrawerComp :isDrawerOpen="iscartOpen" :closeDrawer="closeDrawer" />

  <header
    class="bg-[#515150] text-white h-[80px] flex items-center justify-center"
  >
    <div class="flex items-center justify-evenly w-[50%]">
      <img
        src="https://eptummers.nl/7e8e89a030b10f539cffe444ef646945.svg"
        alt="Logo"
        width="210"
        height="28"
      />
      <input class="w-[500px]" placeholder="search" />
    </div>
    <img
      data-v-36e20054=""
      src="https://eptummers.nl/media/wagentje_wit.svg"
      alt="Winkelmand"
      width="35"
      height="35"
      class="cursor-pointer"
      @click="toggleCart"
    />
  </header>
</template>
<script>
import CartDrawerComp from "./CartDrawerComp.vue";

export default {
  components: {
    CartDrawerComp,
  },
  data() {
    return {
      iscartOpen: false,
    };
  },
  methods: {
    toggleCart() {
      this.iscartOpen = !this.iscartOpen;
    },
    closeDrawer() {
      this.iscartOpen = false;
    },
  },
};
</script>
<style scoped>
input {
  border-radius: 25px;
  height: 40px;
  background-color: #8a8a8a;
  color: black;
  padding: 10px;
}

input:focus {
  outline: none;
}
</style>
