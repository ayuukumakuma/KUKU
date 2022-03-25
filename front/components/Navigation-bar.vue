<template>
  <div>
    <div
      id="nav-bar"
      class="primary mr-4"
    >
      <v-icon
        id="back-icon"
        size="56px"
        color="sentence"
        @click="backPage"
      >
        mdi-arrow-left
      </v-icon>
      <div
        id="nav-bar-text"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  props: {
    page: {
      type: String,
      default: "",
    },
    back: {
      type: String,
      default: "",
    },

  },
  methods: {
    backPage() {
      this.$router.push(this.back)
    }
  },
}
</script>
<style lang="scss" scoped>
#nav-bar {
  position: absolute;
  height: 64px;
  width: calc(100vw - 16px);
  display: flex;
  top: 16px;
  border-radius: 0 32px 32px 0;
}

#back-icon {
  margin: 0 0 0 8px;
}

#nav-bar-text {
  font-size: 32px;
  padding-top: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>