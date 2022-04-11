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
import { onMounted } from "@vue/runtime-core";
export default {
  name: "HomeView",
  components: { PostList },
  // setup runs before everything else
  setup() {
    const posts = ref([]);
    const error = ref(null);
    const isRequesting = ref(false);

    // load posts function
    const load = async () => {
      isRequesting.value = true;
      try {
        let resp = await fetch("http://localhost:3000/posts");
        if (!resp.ok) {
          throw Error("no data available");
        } else {
          posts.value = await resp.json();
          isRequesting.value = false;
        }
      } catch (err) {
        isRequesting.value = false;
        error.value = err.message;
        console.error("Posts Request Error:", error.value);
      }
    };

    onMounted(() => {
      load();
    });

    const showPosts = ref(true);
    const togglePosts = () => {
      showPosts.value = !showPosts.value;
    };
    return { posts, showPosts, togglePosts, error, isRequesting };
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
