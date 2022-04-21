<template>
  <div>
    <v-container style="display: flex; justify-content: center;">
      <v-row  id="menu">
        <v-col cols="12" md="6" class="px-0">
          <v-card
            id="kuku"
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
        <v-col cols="12" md="6" class="px-0">
          <v-row>
            <v-col>
              <v-card
                id="data"
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
            <v-col>
              <v-card
                id="account"
                style="display: flex"
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
                  <v-img
                    v-else-if="userInfo.photoURL"
                    :src="userInfo.photoURL"
                  />
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
  width: 90%;
  position: absolute;
  top: 104px;
  #kuku {
    height: 86vh;
  }
  #data {
    height: calc(66vh - 12px);
  }
  #account {
    height: calc(20vh - 12px);
  }
}
#title {
  font-size: 2.5em;
  display: flex;
}
#avatar {
  margin: auto 16px;
}

#avatar-text {
  font-size: 1.5em;
  line-height: 1.2em;
  letter-spacing: .25em;
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

@media screen and (max-width: 960px) {
  #menu {
    #kuku {
      height: 33vh;
    }
    #data {
      height: 33vh;
    }
    #account {
      height: 15vh;
    }
  }
}
</style>
