<template>
  <form>
    <label>Email: </label><input type="email" required v-model="email" />
    <label>Password: </label
    ><input type="password" required v-model="password" />
    <p>
      Email: {{ email }} - Password: {{ password }} - Role: {{ role }} - Terms:
      {{ terms }}
    </p>
    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web developer</option>
      <option value="designer">Web designer</option>
      <option value="none">No role</option>
    </select>
    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <!-- Data array example -->
    <!-- <div>
      <input type="checkbox" v-model="names" value="Mario" />
      <label>Mario</label>
    </div>
    <div>
      <input type="checkbox" v-model="names" value="Yoshi" />
      <label>Yoshi</label>
    </div>
    <div>
      <input type="checkbox" v-model="names" value="Shaun" />
      <label>Shaun</label>
    </div> -->
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "none",
      terms: false,
      // data array example
      // names: [],
    };
  },

  methods: {
    onChange() {
      console.log("email: ", this.email);
      console.log("password: ", this.password);
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>
