<template>
  <article role="article" class="relative">
    <figure>
      <router-link :to="{ name: 'restaurant', params: { slug: post.slug } }">
        <img :src="`/images/${post.image}`" :alt="post.name" class="w-full h-64 object-cover">
      </router-link>
    </figure>
    <div class="absolute inset-x-0 bottom-0 text-white px-2 py-4 z-10">
      <router-link :to="{ name: 'restaurant', params: { slug: post.slug } }">
        <h2>{{ post.name }}</h2>
      </router-link>
      <p class="text-xs">{{ post.type }}</p>
    </div>
    <span class="absolute inset-0 bg-black opacity-50 pointer-events-none"></span>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>