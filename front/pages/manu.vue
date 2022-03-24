<template>
  <div>
    <NavigationBar
      page="メニュー"
      back="./"
     />
     <v-container
      id="manu"
     >
       <v-row>
         <v-col class="px-6 pb-3">
           <v-card
            height="240px"
            class="content rounded-xl"
            hover
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
            class="content rounded-xl"
            hover
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
            class=" content rounded-xl"
            hover
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
#manu {
  position: absolute;
  top: 124px;
}
#title {
  font-size: 40px;
  padding: 16px 0 0 16px;
}
</style>