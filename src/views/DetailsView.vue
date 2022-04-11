<template>
  <div class="details">Details</div>
  <div class="requesting" v-if="isRequesting">Requesting data...</div>
  <div class="error">{{ error }}</div>

  <div class="single-post">
    <h1>Title: {{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }}</span>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
export default {
  props: ["id"],
  setup(props) {
    const { post, error, isRequesting, load } = getPost(props.id);

    load();

    return { post, error, isRequesting, load };
  },
};
</script>

<style>
.details {
}
.error {
  color: red;
}
.requesting {
  color: green;
}
</style>
