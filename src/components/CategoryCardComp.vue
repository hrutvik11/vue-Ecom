<template>
  <div>
    <div v-if="activeCategory !== 6" class="flex flex-wrap gap-4">
      <cardComp
        class="h-[260px] border border-[#E6E6E6] w-[260px] cursor-pointer"
        v-for="category in filteredSubCategoryData"
        :key="category.id"
        @click="onSubCategoryClick(category.id)"
      >
        <div class="h-[80%] px-4 py-2">
          <img :src="category.img" class="h-full w-full object-contain" />
        </div>
        <div class="mt-3 text-[#05A64A] text-center">{{ category.name }}</div>
      </cardComp>
    </div>
    <div v-else>
      <p
        class="text-[#05A64A] mb-1 cursor-pointer"
        v-for="cat in listCategoryData"
        :key="cat.id"
        @click="onSubCategoryClick(cat.id)"
      >
        {{ cat.name }}
      </p>
    </div>
  </div>
</template>
<script>
import { subCategories } from "@/utils/constants";
import cardComp from "./cardComp.vue";

export default {
  props: ["activeCategory"],
  components: { cardComp },
  emits: ["setActiveSubCategory"],
  watch: {
    activeCategory() {
      this.updateCategoryCards();
    },
  },
  data() {
    return {
      filteredSubCategoryData: null,
      listCategoryData: null,
    };
  },
  methods: {
    updateCategoryCards() {
      if (this.activeCategory === 6) {
        this.listCategoryData = { ...subCategories };
      } else {
        const filterData = [...subCategories].filter(
          (el) => el.categoryID === this.activeCategory
        );
        this.filteredSubCategoryData = filterData;
      }
    },
    onSubCategoryClick(sudID) {
      this.$emit("setActiveSubCategory", sudID);
    },
  },
  mounted() {
    this.updateCategoryCards();
  },
};
</script>
