<template>
<v-app>
    <v-card width="500" class="mx-auto mt-5">
      <v-card-title>
				<h1 class="display-1">Register</h1>
			</v-card-title>
    <form @submit.prevent="register">
      <v-card-text>
        <v-text-field label="Name" v-model="name" prepend-icon="mdi-account-circle" />

        <v-text-field label="Email" v-model="email" type="email" prepend-icon="mdi-email" />
        
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
        <v-text-field
          v-model="password_confirmation"
          :type="showPassword ? 'text' : 'password'"
          label="Password confirmation"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn depressed color="primary" type="submit" >Register</v-btn>
        </v-card-actions>
      </v-card-text>
      <ul>
        <li v-for="(error, index) in errors" :key="index">
          <p>{{ error }}</p>
        </li>
      </ul>

      <router-link to="/login"> Already have an account? Login. </router-link>
    </form>
    </v-card>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: null,
      showPassword: false
    };
  },

  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(() => {
          this.$router.push({ name: "emailsent" });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>


