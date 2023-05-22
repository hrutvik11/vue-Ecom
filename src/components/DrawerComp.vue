<template>
  <div
    class="border-2 border-red-600 fixed w-full cursor-pointer h-[100vh] z-40 backdrop-blur-[2px]"
    v-if="isDrawerOpen"
    @click="onDrawerClose"
  ></div>

  <div
    class="bg-[#E6E6E6] fixed right-0 w-[500px] h-[100vh] transition duration-500 ease-in-out shadow-2xl z-50"
    :class="isDrawerOpen ? ' translate-x-0 ' : ' translate-x-full '"
  >
    hello
  </div>
</template>
<script>
export default {
  props: ["isDrawerOpen", "closeDrawer"],
  methods: {
    onDrawerClose() {
      this.closeDrawer();
    },
  },
};
</script>
