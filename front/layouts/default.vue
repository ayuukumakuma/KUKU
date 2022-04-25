<template>
  <v-app id="default">
    <v-main>
      <NavigationBar
        v-if="$route.path !== '/' && $route.path !== '/await-auth'"
      />
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
}
</script>
<style lang="scss">
* {
box-sizing:border-box;
}

html,body {
  height: 100%;
}

#default {
  height: 100%;
  font-family: 'SmartFontUI';
}
</style>
