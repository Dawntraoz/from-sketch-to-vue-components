<template>
  <article role="article" class="shadow bg-white rounded-t-sm">
    <figure>
      <router-link :to="{ name: 'restaurant', params: { slug: post.slug } }">
        <img
          :src="`/images/${post.image}`"
          :alt="post.name"
          class="w-full h-40 rounded-sm object-cover"
        >
      </router-link>
    </figure>
    <div class="p-2">
      <router-link :to="{ name: 'restaurant', params: { slug: post.slug } }">
        <h2 class="font-medium leading-tight">{{ post.name }}</h2>
      </router-link>
      <p class="text-xs">{{ post.type }}</p>
    </div>
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