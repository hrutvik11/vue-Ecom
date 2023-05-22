<template>
  <div
    class="bg-[#515150] text-white h-[250px] fixed bottom-0 w-full flex items-center justify-center"
    v-if="isModalVisible"
  >
    <div class="w-[20%]">
      <img
        src="https://eptummers.nl/7e8e89a030b10f539cffe444ef646945.svg"
        alt="Logo"
        width="310"
        height="38"
      />
    </div>
    <div class="w-[30%]">
      <p class="font-semibold text-[22px]">We use cookies</p>
      <p class="mt-2">
        social media, advertising and analytics. These partners may combine this
        information with other information that you have provided to them or
        that they have collected based on your use of their services. You agree
        to our cookies if you continue to use our website.
      </p>
      <div class="mt-4 flex gap-4">
        <button @click="onAgree">I agree</button>
        <button @click="onNotAgree">Not agreed</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    onAgree() {
      this.isModalVisible = false;
      localStorage.setItem("eptummerscookie", true);
    },
    onNotAgree() {
      this.isModalVisible = false;
      localStorage.setItem("eptummerscookie", false);
    },
  },
  mounted() {
    if (
      localStorage.getItem("eptummerscookie") &&
      localStorage.getItem("eptummerscookie") === "true"
    ) {
      this.isModalVisible = false;
    } else {
      this.isModalVisible = true;
    }
  },
};
</script>
