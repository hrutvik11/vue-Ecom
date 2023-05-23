<template>
  <div
    class="fixed w-full cursor-pointer h-[100vh] z-40 backdrop-blur-[2px]"
    v-if="isDrawerOpen"
    @click="onDrawerClose"
  ></div>

  <div
    class="bg-[#E6E6E6] fixed right-0 w-[500px] h-[100vh] transition duration-500 ease-in-out shadow-2xl z-50"
    :class="isDrawerOpen ? ' translate-x-0 ' : ' translate-x-full '"
  >
    <div class="flex w-full justify-between p-4">
      <div class="text-[22px] font-semibold capitalize">drawer</div>
      <div
        class="bg-[#05A64A] w-fit text-[20px] px-[11px] py-[2px] rounded-full text-white cursor-pointer"
        @click="onDrawerClose"
      >
        X
      </div>
    </div>
    <slot></slot>
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
