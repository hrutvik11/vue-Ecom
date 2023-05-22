<template>
  <div class="h-[60vh] flex">
    <div class="h-full w-1/6">
      <CategoriesComp
        :activeCategory="activeCategory"
        @setActiveCategory="setActiveCategory"
      />
    </div>
    <div class="h-full flex-1 p-4">
      <div
        v-if="activeCategory !== null && !isProductListVisible"
        class="h-full"
      >
        <p class="text-left text-[32px] font-semibold">
          {{ activeCategory === 6 ? "ALL CATEGORIES" : "SUB CATEGORIES" }}
        </p>
        <div class="flex flex-wrap gap-4">
          <CategoryCardComp
            :activeCategory="activeCategory"
            @setActiveSubCategory="setActiveSubCategory"
          />
        </div>
      </div>

      <div
        v-if="
          activeCategory !== null &&
          isProductListVisible &&
          activeSubCategory !== null
        "
        class="h-full"
      >
        <p class="text-left text-[32px] font-semibold">PRODUCTS</p>
        <div class="flex flex-wrap gap-4">
          <ProductCardComp
            :activeSubCategory="activeSubCategory"
            @onproductclick="onProductClick"
          />
        </div>
      </div>

      <div class="h-full" v-if="isProductDetailsVisible">
        <ProductDetailsComp :productID="productID" />
      </div>
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
      isProductListVisible: false,

      isProductDetailsVisible: false,
      productID: null,
    };
  },
  methods: {
    setActiveCategory(id) {
      this.activeCategory = id;
      this.isProductListVisible = false;
      this.activeSubCategory = null;
      this.isProductDetailsVisible = false;
      this.productID = null;
    },
    setActiveSubCategory(sudID) {
      this.activeSubCategory = sudID;
      this.isProductListVisible = true;
    },
    onProductClick(prodID) {
      this.isProductDetailsVisible = true;
      this.productID = prodID;
      this.isProductListVisible = false;
      this.activeSubCategory = null;
      this.activeCategory = null;
    },
  },
};
</script>
