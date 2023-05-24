<template>
  <div class="h-[60vh] flex">
    <div class="h-full w-1/6">
      <CategoriesComp
        :activeCategory="activeCategory"
        @setActiveCategory="setActiveCategory"
      />
    </div>
    <div class="h-full flex-1 p-4">
      <component
        :is="ActiveComponent"
        :activeCategory="activeCategory"
        @setActiveSubCategory="setActiveSubCategory"
        :activeSubCategory="activeSubCategory"
        @onproductclick="onProductClick"
        :productID="productID"
        ref="thisismyref"
      ></component>
    </div>
  </div>
  <div class="bg-[#E6E6E6] h-[50vh] overflow-y-auto w-full px-4">
    <p class="text-left text-[32px] font-semibold mt-5">Toppers of the week</p>

    <div class="flex overflow-y-auto w-full gap-4 flex-row mt-5">
      <TopProductCardComp @onproductclicks="onProductClick" />
    </div>
  </div>
  <CookieComp />
</template>
<script>
import CategoriesComp from "../components/CategoriesComp.vue";
import CategoryCardComp from "../components/CategoryCardComp.vue";
import ProductCardComp from "../components/ProductCardComp.vue";
import TopProductCardComp from "../components/TopProductCardComp.vue";
import ProductDetailsComp from "../components/ProductDetailsComp.vue";
import CookieComp from "../components/CookieComp.vue";

export default {
  components: {
    CategoriesComp,
    CategoryCardComp,
    ProductCardComp,
    TopProductCardComp,
    ProductDetailsComp,
    CookieComp,
  },
  data() {
    return {
      activeCategory: null,
      activeSubCategory: null,
      productID: null,
      ActiveComponent: null,
    };
  },
  methods: {
    setActiveCategory(id) {
      this.activeCategory = id;
      this.ActiveComponent = "CategoryCardComp";
      this.resetData();
    },
    setActiveSubCategory(sudID) {
      this.activeSubCategory = sudID;
      this.ActiveComponent = "ProductCardComp";
    },
    onProductClick(prodID) {
      this.ActiveComponent = "ProductDetailsComp";
      this.productID = prodID;
      this.activeSubCategory = null;
      this.activeCategory = null;

      // if (this.$refs.thisismyref) {
      //   console.log(this.$refs.thisismyref);
      //   this.$refs.thisismyref.updateData();
      // }
    },
    resetData() {
      this.activeSubCategory = null;
      this.productID = null;
    },
  },
};
</script>
