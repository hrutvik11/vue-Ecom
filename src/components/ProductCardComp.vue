<template>
  <div
    class="h-fit border border-[#E6E6E6] w-[260px] cursor-pointer"
    v-for="products in productsList"
    :key="products.id"
    @click="onProductClick(products.id)"
  >
    <div class="h-[200px] px-4 py-2">
      <img :src="products.img" class="h-full w-full object-contain" />
    </div>
    <div class="mt-3 text-left px-2">
      <div class="text-[#05A64A]">{{ products.name }}</div>
      <div class="text-[#959595] text-[12px] mt-1">{{ products.desc }}</div>
      <div class="mt-1 flex justify-between py-2 items-center px-2">
        <span class="text-[18px] font-semibold">${{ products.price }}</span>
        <button>Add to cart</button>
      </div>
    </div>
  </div>
</template>
<script>
import { subCategories } from "@/helpers/constants";
export default {
  props: ["activeSubCategory"],
  data() {
    return {
      productsList: null,
    };
  },
  mounted() {
    const productsData = [...subCategories].find(
      (el) => el.id === this.activeSubCategory
    );

    if (productsData.products && productsData.products.length > 0) {
      this.productsList = productsData.products;
    }
  },
  methods: {
    onProductClick(productID) {
      this.$emit("onproductclick", productID);
    },
  },
};
</script>
