<template>
  <section class="bg-gray-200 max-w-sm mx-auto">
    <HeaderPartial/>
    <router-view/>
    <Footer/>
  </section>
</template>

<script>
import HeaderPartial from "@/layout/partials/HeaderPartial.vue";
import FooterPartial from "@/layout/partials/FooterPartial.vue";

export default {
  name: "Master",
  components: {
    HeaderPartial,
    FooterPartial
  }
};
</script>