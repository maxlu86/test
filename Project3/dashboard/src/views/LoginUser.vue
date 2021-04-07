<template>

<v-app>
		<v-card width="400" class="mx-auto mt-5">
			<v-card-title>
				<h1 class="display-1">Login</h1>
			</v-card-title>
			<form @submit.prevent="login">
      <v-card-text>
				
					<v-text-field label="email" v-model="email" type="email" prepend-icon="mdi-email" />
					<v-text-field
          v-model="password"
						:type="showPassword ? 'text' : 'password'"
						label="password"
						prepend-icon="mdi-lock"
						:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showPassword = !showPassword"
					/>
			
			</v-card-text>
       <p>{{ error }}</p>
			<v-divider></v-divider>
			<v-card-actions>
				<v-btn type="submit" color="info">Login</v-btn>
			</v-card-actions>
      	</form>
      <router-link to="/register">
        Don't have an account? Register.
      </router-link>
		</v-card>
	</v-app>


</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      showPassword: false
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch((err) => {
          this.error = err.response.data.error;
        });
    },
  },
};
</script>
