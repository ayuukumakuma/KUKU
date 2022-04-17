<template>
  <div>
    <NavigationBar page="メニュー" back="./" />
    <v-container id="menu">
      <v-row>
        <v-col class="px-6 pb-3">
          <v-card
            height="300px"
            class="content rounded-lg"
            elevation="0"
            @click="$router.push('./kuku'), $store.dispatch('score/resetScore')"
          >
            <v-card-title id="title"> KUKU </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="px-6 pb-3">
          <v-card
            height="150"
            class="content rounded-lg"
            elevation="0"
            @click="$router.push('./data')"
          >
            <v-card-title id="title"> きろく </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="px-6 pb-3">
          <v-card
            style="display: flex"
            height="150"
            class="content rounded-lg"
            elevation="0"
            @click="$router.push(isLogin ? './auth_test' : './login')"
          >
            <div>
              <v-card-title id="title"> アカウント </v-card-title>
              <v-card-subtitle style="font-size: 16px">
                {{ isLogin ? '編集とか' : 'ログインしてね' }}
              </v-card-subtitle>
            </div>
            <div id="account">
              <v-avatar color="cLight" size="80">
                <v-icon v-if="!isLogin" x-large> mdi-account-off </v-icon>
                <v-img v-else-if="userInfo.photoURL" :src="userInfo.photoURL" />
                <v-icon v-else x-large> mdi-account </v-icon>
              </v-avatar>
              <p>{{ !userInfo.displayName ? '未ログイン' : userInfo.displayName }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="px-6 pb-3">
          <v-card
            height="150"
            class="content rounded-lg"
            elevation="0"
            @click="$router.push('./test_api')"
          >
            <v-card-title id="title"> API </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    userInfo() {
      return this.$store.getters['auth/userInfo']
    },
    isLogin() {
      return this.$store.getters['auth/isLogin']
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  position: relative;
}
#menu {
  position: absolute;
  top: 96px;
  left: 50%;
  transform: translate(-50%);
  max-width: 600px;
}
#title {
  font-size: 32px;
}
#account {
  margin: 24px 24px 0 auto;
  p {
    text-align: center;
  }
}
</style>
