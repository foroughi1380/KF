<template>
  <v-card
      class="mx-auto"
      color="rgb(224, 221, 221)"
      max-width="650"
      min-height="350"
      variant="flat"
  >
    <v-sheet color="rgb(129, 209, 168)">
      <v-card-item>
        <v-divider vertical class="mx-2"></v-divider>
        <v-btn
            class="text-none text-subtitle-1"
            color="#ffffff"
            size="small"
            variant="flat"
            text
            @click="$emit('onClose' , null)"
        >
          بستن
        </v-btn>

      </v-card-item>
    </v-sheet>

    <div v-for="item in items" v-bind:key="item">
      <NotificationItem  :item="item"/>
    </div>

  </v-card>
</template>

<script>
import NotificationItem from "@/components/Notifications/NotificationItem";
export default {
  components: {NotificationItem},
  emits:['onClose'],
  name: "NotificationDialog",
  data: ()=>({
    items:[]
  })
}
</script>

<style scoped>

</style>