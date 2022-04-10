<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/About">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link> |
    <router-link to="/Signup">Sign Up</router-link>
  </div>

  <!-- Navigations -->
  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Got Forward</button>

  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 16px;
  background: #42b983;
  border-radius: 4px;
}

#nav a {
  padding: 4px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  background: white;
  border-radius: 2px;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
