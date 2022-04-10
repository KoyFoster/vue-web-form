<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja one</button>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
export default {
  name: "HomeView",
  // setup runs before everything else
  setup() {
    const ninjaOne = ref({ name: "mario", age: 40 });
    const ninjaTwo = reactive({ name: "luigi", age: 35 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 45;
    };
    const updateNinjaTwo = () => {
      ninjaTwo.age = 40;
    };

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
  },
};
</script>

<style></style>
