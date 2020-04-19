<template>
  <section>
    <article role="article">
      <figure class="relative">
        <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }">
          <img
            :src="`/images/${restaurant.image}`"
            :alt="restaurant.name"
            class="w-full h-64 object-cover"
          >
        </router-link>
        <figcaption class="absolute inset-0 text-white opacity-75 py-6 px-4 z-10 flex flex-wrap">
          <router-link to="/">
            <svg class="fill-current" width="16" height="16">
              <use href="/images/arrow-left.svg#arrow-left"></use>
            </svg>
          </router-link>
          <svg class="fill-current ml-auto mr-2" width="18" height="18">
            <use href="/images/heart.svg#heart"></use>
          </svg>
          <router-link to="/">
            <svg class="fill-current" width="16" height="16" style="transform: rotate(90deg)">
              <use href="/images/vertical-menu.svg#v-menu"></use>
            </svg>
          </router-link>
        </figcaption>
        <span class="absolute inset-0 bg-black opacity-25"></span>
      </figure>
      <div class="bg-white p-4 text-center">
        <h1 class="py-2">{{ restaurant.name }}</h1>
        <p class="text-xs px-10">{{ restaurant.description }}</p>
        <hr class="my-6">
        <ul class="flex flex-wrap justify-center">
          <li
            class="w-8 mx-4 text-center"
            v-for="opinion in restaurant.opinions"
            :key="opinion.message"
          >
            <span
              class="block text-white h-8 rounded-full flex items-center justify-center"
              :class="opinion.color"
            >
              <svg class="fill-current ml-auto mr-2" width="16" height="16">
                <use :href="`/images/${opinion.icon}`"></use>
              </svg>
            </span>
            <p class="text-xs pt-1">{{ opinion.message }}</p>
          </li>
        </ul>
      </div>
    </article>
    <Grid :title="'Best dishes'">
      <div v-for="dish in restaurant.dishes" :key="dish.name" class="w-1/2 pr-2 pb-4">
        <Post :post="dish"/>
      </div>
    </Grid>
  </section>
</template>


<script>
import store from "@/store.js";
import Post from "@/components/Post.vue";
import Grid from "@/components/Grid.vue";

export default {
  name: "Restaurant",
  components: {
    Post,
    Grid
  },
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    restaurant() {
      return store.restaurants.find(
        restaurant => restaurant.slug === this.slug
      );
    }
  }
};
</script>