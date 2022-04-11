<template>
  <div class="home">
    <h1>Home</h1>
    <button v-if="showPosts" @click="togglePosts">Hide Posts</button>
    <button v-if="!showPosts" @click="togglePosts">Show Posts</button>
    <PostList v-if="showPosts" :posts="posts" />
    <div class="requesting" v-if="isRequesting">Requesting data...</div>
    <div class="error">{{ error }}</div>
    <button v-if="showPosts" @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "HomeView",
  components: { PostList },
  // setup runs before everything else
  setup() {
    //
    const { posts, error, isRequesting, load } = getPosts();
    load();

    const showPosts = ref(true);
    const togglePosts = () => {
      showPosts.value = !showPosts.value;
    };

    return {
      posts,
      showPosts,
      togglePosts,
      error,
      isRequesting,
    };
  },
};
</script>
<style>
.error {
  color: red;
}
.requesting {
  color: green;
}
</style>
