<template>
  <h1>This is the Home page</h1>
  <p ref="para">Setup Name: {{ name }} Setup Age: {{ age }}</p>
  <button @click="handleClick">Click me</button>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  // setup runs before everything else
  setup() {
    console.log("setup");

    const para = ref(null);

    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log("you clicked me:", para, para.value);
      para.value.classList.add("test");
      para.value.textContent = '[ERROR]'
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
