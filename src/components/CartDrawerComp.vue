<template>
  <DrawerComp :isDrawerOpen="iscartOpen" :closeDrawer="closeDrawer">
    <div class="border border-red-300 h-full">asdasd</div>
  </DrawerComp>
</template>
<script>
import DrawerComp from "./DrawerComp.vue";
export default {
  components: { DrawerComp },
  props: ["iscartOpen", "closeDrawer"],
};
</script>
<style></style>
