<template>
  <v-form style="margin-top: 68px" lazy-validation>
    <v-container>
      <v-row>
        <v-col style="text-align: center" class="pt-8">
          <v-btn
            class="rounded-lg pt-1"
            height="48px"
            depressed
            color="cLight"
            @click="googleLogin()"
          >
            <GoogleImg id="google-img" />
            <div id="button-text"><span>Google</span>で新規登録</div>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col id="or-text"> または </v-col>
      </v-row>
      <AuthFormNewAccount />
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('auth/userInfoInit')
  },
  methods: {
    googleLogin() {
      this.$store.dispatch('auth/googleAuthLogin')
    },
  },
}
</script>

<style lang="scss" scoped>
#explanation {
  padding: 0 24px;
  text-align: center;
}

#divider {
  border: 0.5px var(--v-cLight-darken2) solid;
  margin: 16px;
}

#or-text {
  font-size: 16px;
  text-align: center;
}

#google-img {
  float: left;
}

#button-text {
  margin-left: 8px;
  letter-spacing: 0.1em;
  span {
    font-size: 1.3rem;
    text-transform: capitalize;
  }
}

#create-user {
  font-size: 1.1rem;
  height: 48px;
}
</style>
