<template>
  <cardComp
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
        <button
          @click.stop="AddtoCart(products.id)"
          :disabled="isAddedInCart(products.id)"
        >
          Add to cart
        </button>
      </div>
    </div>
  </cardComp>
</template>
<script>
import { subCategories } from "@/utils/constants";
import { AddToCart, isProductInCart } from "@/utils/helpers";
import cardComp from "./cardComp.vue";

export default {
  props: ["activeSubCategory"],
  components: { cardComp },
  emits: ["onproductclick"],
  data() {
    return {
      productsList: null,
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    onProductClick(productID) {
      this.$emit("onproductclick", productID);
    },
    AddtoCart(productID) {
      AddToCart(productID);
      this.fetchProducts();
    },
    isAddedInCart(productID) {
      return isProductInCart(productID);
    },
    fetchProducts() {
      const productsData = [...subCategories].find(
        (el) => el.id === this.activeSubCategory
      );

      if (productsData.products && productsData.products.length > 0) {
        this.productsList = productsData.products;
      }
    },
  },
};
</script>
