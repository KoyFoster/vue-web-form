<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div class="job" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }"
        ><h2>{{ job.title }}</h2></router-link
      >
    </div>
  </div>
  <div v-else><h2>Loading...</h2></div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((resp) => resp.json())
      .then((data) => (this.jobs = data))
      .catch((err) => {
        console.log("Error requesting jobs:", err);
      });
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  /*  remove underline */
  text-decoration: none;
}
</style>
