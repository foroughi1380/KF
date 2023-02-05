<template>
  <v-app>
    <v-main>
      <div class="bodyStyle">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
  },
};
</script>
<style scoped>
.bodyStyle {
  width: 100%;
  height: 100%;
  background-color: rgb(224, 221, 221)
}
</style>
