<template>
  <form>
    <label>Email: </label><input type="email" required v-model="email" />
    <label>Password: </label
    ><input type="password" required v-model="password" />
    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web developer</option>
      <option value="designer">Web designer</option>
      <option value="none">No role</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div class="pill" v-for="skill in skills" :key="skill" @click="removeSkill">
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
    };
  },

  methods: {
    addSkill(e) {
      if (e.key !== "," || !this.tempSkill) return;
      // parse out in case user copy pastes
      const skills = e.target.value.split(",").filter((skill) => skill !== "");
      if (skills.length === 0) {
        this.tempSkill = "";
        return;
      }

      this.skills.push(...skills);
      // filter duplicates
      this.skills = Array.from(new Set(this.skills));

      this.tempSkill = "";
    },
    removeSkill(e) {
      console.log("removeSkill:", e, e.target.innerHTML);
      console.dir(e.target);
      this.skills = this.skills.filter(
        (skill) => skill !== e.target.innerHTML
      );
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
