<template>
  <div class="single-post">
    <h1>Title: {{ post.title }}</h1>
    <p>{{ snippet }}</p>
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
