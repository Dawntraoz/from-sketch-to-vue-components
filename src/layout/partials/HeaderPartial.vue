<template>
  <header class="bg-red-700 pt-2">
    <router-link to="/">
      <p class="bg-white text-gray-600 rounded p-4 mx-2">
        <svg class="fill-current" width="14" height="14">
          <use href="/images/menu.svg#menu-burger"></use>
        </svg>
      </p>
    </router-link>
    <nav>
      <ul class="text-white text-sm uppercase flex flex-wrap text-center">
        <li class="w-1/4 py-3 border-b-2">
          <p>Food</p>
        </li>
        <li class="opacity-50 w-1/4 py-3 border-b-2 border-transparent">
          <p>Music</p>
        </li>
        <li class="opacity-50 w-1/4 py-3 border-b-2 border-transparent">
          <p>Art</p>
        </li>
        <li class="opacity-50 w-1/4 py-3 border-b-2 border-transparent">
          <p>Others</p>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderPartial"
};
</script>