<template>
  <div
    class="border border-gray-300 w-[260px] cursor-pointer bg-white"
    v-for="product in trendingList"
    :key="product.id"
    @click="onProductClick(product.id)"
  >
    <div class="h-[200px] px-4 py-2">
      <img :src="product.img" class="h-full w-full object-contain" />
    </div>
    <div class="mt-3 text-left px-2">
      <div class="text-[#05A64A]">{{ product.name }}</div>
      <div class="text-[#959595] text-[12px] mt-1">{{ product.desc }}</div>
      <span class="text-[18px] font-semibold">${{ product.price }}</span>
    </div>
  </div>
</template>
<script>
import { subCategories } from "@/utils/constants";

export default {
  data() {
    return {
      trendingList: null,
    };
  },
  mounted() {
    const temp = [];

    [...subCategories].map((element) => {
      if (element.products) {
        [...element.products].map((ele) => {
          if (ele.isTrending) {
            temp.push(ele);
          }
        });
      }
    });

    this.trendingList = [...temp];
  },
  methods: {
    onProductClick(productID) {
      this.$emit("onproductclicks", productID);
    },
  },
};
</script>
