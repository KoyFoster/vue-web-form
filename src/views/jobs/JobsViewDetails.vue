<template>
  <div v-if="job !== null">
    <h1>Title: {{ job.title }}</h1>
    <p>Details: {{ job.details }}</p>
  </div>
  <div v-else><h1>Loading...</h1>.</div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log({ data });
        this.job = data;
      });
  },
};
</script>

<style></style>
