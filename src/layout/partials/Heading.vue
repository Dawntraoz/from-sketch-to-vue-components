<template>
  <header>
    <h3 class="font-bold text-xl my-3">
      <slot/>
    </h3>
  </header>
</template>

<script>
export default {
  name: "HeaderPartial"
};
</script>