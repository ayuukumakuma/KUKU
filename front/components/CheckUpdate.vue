<template>
  <div>
    <v-dialog v-model="isUpdate" persistent>
      <v-card v-if="!progress">
        <v-card-title>
          アップデートがあります<br />
          更新してください
        </v-card-title>
        <v-card-actions style="display: flex; justify-content: center">
          <v-btn
            style="font-size: 1rem;"
            class="rounded-lg mb-2"
            height="3rem"
            depressed
            color="content"
            large
            @click="update()"
          >
            更新
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-else>
        <v-card-title>
          更新中
        </v-card-title>
        <v-card-actions>
          <v-progress-linear indeterminate color="primary" class="mb-2" />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      progress: false
    }
  },
  computed: {
    isUpdate() {
      return this.$store.getters['checkUpdate/isCheckUpdate']
    },
  },
  methods: {
    async update() {
      this.progress = true
      this.$nuxt.$loading.start()
      await window.navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          for (const registration of registrations) {
            registration.unregister()
          }
        })
      this.$nuxt.$loading.finish()
      window.location.reload(true)
    },
  },
}
</script>
