<template>
  <div class="flex flex-wrap">
    <Heading class="w-full px-2">Best choices for this week</Heading>
    <FeaturedPost :post="restaurants[0]" class="w-full"/>
    <Grid :title="'More recommendations'">
      <div
        v-for="restaurant in restaurants.slice(1)"
        :key="restaurant.name"
        class="w-1/2 pr-2 pb-4"
      >
        <Post v-if="restaurant.id !== 1" :post="restaurant"/>
      </div>
    </Grid>
  </div>
</template>

<script>
import store from "@/store.js";
import Heading from "@/layout/partials/Heading.vue";
import FeaturedPost from "@/components/FeaturedPost.vue";
import Post from "@/components/Post.vue";
import Grid from "@/components/Grid.vue";

export default {
  name: "Restaurants",
  components: {
    Heading,
    FeaturedPost,
    Post,
    Grid
  },
  data() {
    return {
      restaurants: store.restaurants
    };
  }
};
</script>
