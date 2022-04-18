<template>
  <v-app>
    <v-main>
      <NavigationBar v-if="$route.path != '/'" />
      <Nuxt />
      <SnackBar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
  head: {
    htmlAttrs: {
      class: 'html-class'
    },
    bodyAttrs: {
      class: 'body-class'
    }
  }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: 'Makinas-sq';
  src: url('./assets/font/Makinas-4-Square.otf') format('opentype');
}
@font-face {
  font-family: 'Graduate';
  src: url('../assets/font/Graduate-Regular.ttf');
}
.v-application {
  font-family: 'Makinas-sq';
}
</style>
