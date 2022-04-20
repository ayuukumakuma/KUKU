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
            <v-card-title id="title">
              <v-icon x-large color="sentence">mdi-controller-classic</v-icon>
              <h4 class="pl-2">KUKU</h4>
            </v-card-title>
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
            <v-card-title id="title">
              <v-icon x-large color="sentence">mdi-clipboard-text</v-icon>
              <h4 class="pl-2">きろく</h4>
            </v-card-title>
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
            @click="$router.push(isLogin ? '' : './login')"
          >
            <v-avatar
              id="avatar"
              size="100px"
              color="cLight"
              class="rounded-lg py-auto"
            >
              <v-icon v-if="!isLogin" x-large color="sentence">
                mdi-account-off
              </v-icon>
              <v-img v-else-if="userInfo.photoURL" :src="userInfo.photoURL" />
              <v-icon v-else x-large> mdi-account </v-icon>
            </v-avatar>
            <v-card-text v-show="isLogin" id="avatar-text" class="px-0">
              <span>{{ userInfo.displayName }}</span
              ><br />
              がログイン中
            </v-card-text>
            <v-card-text v-show="!isLogin" id="avatar-text" class="px-0">
              ログイン<br />してもらおう!
            </v-card-text>
            <v-menu offset-y transition="slide-y-transition">
              <template #activator="{ on, attrs }">
                <v-btn
                  v-show="isLogin"
                  id="logout-btn"
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="logout()"> ログアウト </v-list-item>
              </v-list>
            </v-menu>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogoutMenu: false,
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters['auth/userInfo']
    },
    isLogin() {
      return this.$store.getters['auth/isLogin']
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
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
  display: flex;
}
#avatar {
  margin: auto 16px;
}

#avatar-text {
  font-size: 24px;
  margin: auto;
  color: var(--v-base-sentence);
  text-align: center;
  span {
    font-size: 32px;
  }
}

#logout-btn {
  position: absolute;
  right: 8px;
  top: 8px;
}
</style>
