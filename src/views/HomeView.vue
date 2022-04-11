<template>
  <div class="home">
    <h1>Home</h1>
    <button v-if="showPosts" @click="togglePosts">Hide Posts</button>
    <button v-if="!showPosts" @click="togglePosts">Show Posts</button>
    <PostList v-if="showPosts" :posts="posts" />
    <button v-if="showPosts" @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import PostList from "../components/PostList.vue";
export default {
  name: "HomeView",
  components: { PostList },
  // setup runs before everything else
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum",
        id: 1,
      },
      { title: "top 5 css tips", body: "lorem ipsum", id: 2 },
    ]);
    const showPosts = ref(true);
    const togglePosts = () => {
      showPosts.value = !showPosts.value;
    };
    return { posts, showPosts, togglePosts };
  },
};
</script>

<style></style>
