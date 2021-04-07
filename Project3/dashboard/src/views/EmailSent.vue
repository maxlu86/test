<template>
  <div class="home">
    <h1>Confirmation email has been sent!</h1>
    <div v-if="!loggedIn">
      If you already confirmed your email address please
      <router-link to="/login"> Login </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
