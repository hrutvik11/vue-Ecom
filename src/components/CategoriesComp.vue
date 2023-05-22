<template>
  <div class="p-4 flex flex-col gap-2">
    <div
      class="p-4 bg-[#E6E6E6] rounded-md cursor-pointer hover:text-[#05A64A]"
      :class="
        activeCategory && activeCategory === category.id && 'text-[#05A64A]'
      "
      v-for="category in tempCategories"
      :key="category.id"
      @click="onCategoryClick(category.id)"
    >
      {{ category.title }}
    </div>
  </div>
</template>
<script>
import { categories } from "@/helpers/constants";
export default {
  props: ["activeCategory"],
  data() {
    return {
      tempCategories: categories,
    };
  },
  methods: {
    onCategoryClick(id) {
      this.$emit("setActiveCategory", id);
    },
  },
};
</script>
