<template>
  <div>
    <v-container id="main" class="px-6">
      <v-row>
        <v-col class="px-3">
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
      </v-row>
      <v-row>
        <v-col class="px-3">
          <v-card
            id="data"
            class="content rounded-lg"
            elevation="0"
            @click="isLogin ? $router.push('./data') : (isNeedLogin = true)"
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
              size="70px"
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
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item width="25%" @click="logout()"
                  >ログアウト</v-list-item
                >
              </v-list>
            </v-menu>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="isNeedLogin">
      <v-card>
        <v-card-title> ログインしてね！ </v-card-title>
        <v-card-text>
          プレイ履歴を保存するにはログインしてください
        </v-card-text>
        <v-card-actions style="display: flex; justify-content: center">
          <v-btn
            id="toLogin"
            class="rounded-lg"
            color="primary"
            depressed
            @click="$router.push('../login')"
          >
            ログインする
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            id="close"
            icon
            color="sentence"
            depressed
            large
            @click="isNeedLogin = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogoutMenu: false,
      isNeedLogin: false,
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
    async logout() {
      await this.$store.dispatch('auth/logout')
    },
  },
}
</script>

<style lang="scss" scoped>
#main {
  margin-top: 88px;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
  #kuku {
    height: 23vh;
    #title {
      font-size: 2.5em;
      display: flex;
    }
  }
  #data {
    height: 23vh;
    #title {
      font-size: 2.5em;
      display: flex;
    }
  }
  #account {
    height: 102px;
    #title {
      font-size: 2.5em;
      display: flex;
    }
    #avatar {
      margin: auto 16px;
    }
    #avatar-text {
      font-size: 1.2em;
      line-height: 1.2em;
      letter-spacing: 0.2em;
      margin: auto;
      color: var(--v-base-sentence);
      span {
        font-size: 1.5em;
      }
    }
    #logout-btn {
      position: absolute;
      right: 16px;
      top: 4px;
    }
  }
}
#toLogin {
  font-size: 1rem;
  height: 3rem;
  width: 150px;
}
#close {
  position: absolute;
  top: 8px;
  right: 8px;
}

@media screen and (min-width: 960px) {
  #main {
    width: 40vw;
    #kuku {
      height: 30vh;
    }
    #data {
      height: 30vh;
    }
    #account {
      height: 102px;
    }
  }
}
</style>
