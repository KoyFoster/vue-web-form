<template>
  <div class="home">
    <h1>Home</h1>
    Search:<input type="text" v-model="search" />
    <p>Search term = {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
export default {
  name: "HomeView",
  // setup runs before everything else
  setup() {
    const names = ref(["mario", "luigi", "peach", "toad"]);
    const search = ref("");

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames };
  },
};
</script>

<style></style>
