<template>
  <h1>This is the Home page</h1>
  <h2>Setup Name: {{ name }} Setup Age: {{ age }}</h2>
  <button @click='handleClick'>Click me</button>
</template>

<script>
export default {
  // setup runs before everything else
  setup() {
    console.log("setup");
    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log("you clicked me");
    };

    // return data to template
    // non-reactive data
    return {
      name: name,
      age: age,
      handleClick
    };
  },

  // reactive data
  data() {
    return {};
  },
};
</script>
