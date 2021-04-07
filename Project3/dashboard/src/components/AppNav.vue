<template>
  <div id="nav">
    <router-link to="/"> Home </router-link>
    <router-link v-if="loggedIn" to="/dashboard"> Dashboard </router-link>
    <router-link v-if="!loggedIn" to="/login" class="button">
      Login
    </router-link>
    <button v-else type="button" class="logoutButton" @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
import { authComputed } from "@/store/helpers.js";
export default {
  computed: {
    ...authComputed,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.2em 1em;
  background: linear-gradient(to right, #314755, #26a0da);
}

.nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: white;
}

a {
  font-weight: bold;
  color: #55626e;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}

.router-link-exact-active {
  color: white;
  border-bottom: 2px solid #fff;
}

button,
.button {
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #55626e;

  &.router-link-active {
    color: #55626e;
  }
}

.logoutButton {
  cursor: pointer;
}

.nav-welcome + button {
  margin-left: 0;
}
</style>
