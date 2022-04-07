<template>
  <div>
    <NavigationBar
      page="メニュー"
      back="./"
     />
     <v-container
      id="menu"
     >
       <v-row>
         <v-col class="px-6 pb-3">
           <v-card
            height="300px"
            class="content rounded-lg"
            elevation="0"
            @click="$router.push('./kuku'), $store.dispatch('score/resetScore')"
           >
            <v-card-title
              id="title"
            >
              KUKU
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
            <v-card-title
              id="title"
            >
              きろく
            </v-card-title>
          </v-card>
         </v-col>
       </v-row>
       <v-row>
         <v-col class="px-6 pb-3">
           <v-card
            height="150"
            class=" content rounded-lg"
            elevation="0"
            @click="$router.push('./test_api')"
           >
             <v-card-title
              id="title"
            >
               API
             </v-card-title>
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
    }
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
}
#title {
  font-size: 40px;
  padding: 24px 0 0 24px;
}
</style>