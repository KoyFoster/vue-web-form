<template>
  <div class="single-post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h1>Title: {{ post.title }}</h1>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      if (props.post.body.length > 100)
        return props.post.body.substring(0, 100) + "....";
      return props.post.body;
    });

    return { snippet };
  },
};
</script>

<style scoped>
.single-post {
}
</style>
