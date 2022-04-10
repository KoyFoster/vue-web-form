<template>
  <h1>This is the Home page</h1>
  <p ref="para">Setup Name: {{ name }} Setup Age: {{ age }}</p>
  <button @click="handleClick">Click me</button>
  <button @click="age++">Grow up</button>
  <input type="text" v-model="name" />
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "HomeView",
  // setup runs before everything else
  setup() {
    console.log("setup");

    const para = ref(null);

    const name = ref("mario");
    const age = ref(30);

    const handleClick = () => {
      console.log("you clicked me:", para, para.value);
      para.value.classList.add("test");
      para.value.textContent = "[ERROR]";
      name.value = "ppop";
    };

    // return data to template
    // non-reactive data
    return {
      name: name,
      age: age,
      handleClick,
      para,
    };
  },

  // reactive data
  data() {
    return {};
  },
};
</script>

<style>
.test {
  color: red;
}
</style>
