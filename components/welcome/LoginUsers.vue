<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Email"
          name="Email"
          prepend-icon="mdi-account"
          type="text"
        ></v-text-field>

        <v-text-field
          id="password"
          label="username"
          name="username"
          prepend-icon="mdi-lock"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <LoginModal />
      <v-spacer />
      <v-btn color="primary" nuxt to="/apiboard">CONTINUE</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  components: {
    LoginModal: () => import('~/components/welcome/LoginModal'),
  },
  data() {
    return {
      userData: [],
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      this.userData = res.data
      console.log(this.userData)
    })
  },
}
</script>

<style></style>
