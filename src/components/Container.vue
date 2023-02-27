<template>
  <div>
    <Post v-for="(post, idx) in posts" :key="idx" :post="posts[idx]" />
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "container",
  props: {
    posts: Array,
  },
  components: {
    Post,
  },
};
</script>

<style></style>
