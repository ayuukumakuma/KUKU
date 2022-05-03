<template>
  <div>
    <v-btn style="font-size: 3rem; position: absolute; left: 50%; transform: translate(-50%); top: 40%;" x-large @click="sendApi()">
      TEST
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        email: 'ayuu.kumakuma@gmail.com',
        password: '20020721',
        userName: 'Ayuu'
      }
    }
  },
  methods: {
    sendApi() {
      this.$store.dispatch('auth/testCreateUser', { email: this.users.email, password: this.users.password, userName: this.users.userName})
    }
  },
}
</script>
<style lang="scss" scoped>
#button {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%);
}
</style>
