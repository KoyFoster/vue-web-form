<template>
  <form @submit.prevent="handleSubmit">
    <label>Email: </label><input type="email" required v-model="email" />
    <label>Password: </label
    ><input type="password" required v-model="password" />
    <p class="error">{{ passwordError }}</p>
    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web developer</option>
      <option value="designer">Web designer</option>
      <option value="none">No role</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div
      class="pill"
      v-for="skill in skills"
      :key="skill"
      @click="removeSkill(skill)"
    >
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>
      Terms:
      {{ terms }}
    </p>
    <p>Skills: {{ tempSkill }} => {{ skills }}</p>

    <div class="submit"><button>Create Account</button></div>
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
      tempSkill: "",
      skills: [],

      // errors
      passwordError: null,
    };
  },

  methods: {
    addSkill(e) {
      if (e.key !== "," || !this.tempSkill) return;
      console.time("addSkill-Timer");
      // parse out in case user copy pastes
      const skills = e.target.value.split(",").filter((skill) => skill !== "");
      if (skills.length === 0) {
        this.tempSkill = "";
        console.timeEnd("addSkill");
        return;
      }

      this.skills.push(...skills);
      // filter duplicates
      this.skills = Array.from(new Set(this.skills));

      this.tempSkill = "";
      console.timeEnd("addSkill-Timer");
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    },
    handleSubmit() {
      console.warn("handleSubmit");
      // validations
      // pwd
      this.password.length <= 5
        ? (this.passwordError =
            "This password must be more then 5 characters long")
        : (this.passwordError = null);

      if (this.passwordError) return;
      console.warn({
        email: this.email,
        password: this.password,
        role: this.role,
        skills: this.skills,
        terms: this.terms,
      });
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
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
.pill:hover {
  background: red;
  color: white;
}
button {
  background: rgb(109, 109, 251);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 2px;
}
.submit {
  text-align: center;
}
.error {
  color: red;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
