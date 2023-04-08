<template>
  <v-card
      class="ma-4"
      color="white"
      rounded="lg"
      variant="flat"
  >
    <v-card-item>
      <v-card-title class="text-body-2 d-flex align-center">
        <span class="text-medium-emphasis font-weight-bold">1 Fri Dec 16th - 9:00 PM</span>
      </v-card-title>

      <div class="container">
        <div class="text-h6">Live Q&A</div>

        <div class="font-weight-light text-medium-emphasis">
          Join the Vuetify team for a live Question and Answer session.
        </div>
      </div>


    </v-card-item>

    <v-divider></v-divider>

    <div class="pa-4 d-flex align-center">
      <v-btn
          border
          class="text-none"
          prepend-icon="mdi-check"
          variant="text"
          color="rgb(129, 209, 168)"
      >
        مشاهده شد
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "NotificationItem"
}
</script>

<style scoped>

</style>