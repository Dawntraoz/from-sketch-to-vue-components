<template>
  <div class="flex flex-wrap -mr-2 px-2">
    <Heading class="w-full">{{ title }}</Heading>
    <slot/>
  </div>
</template>

<script>
import Heading from "@/layout/partials/Heading.vue";

export default {
  name: "Grid",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Heading
  }
};
</script>