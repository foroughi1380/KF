<template>
  <container>
    <nav class="desktopNav">
      <div class="desktopLogo">
        <p >سایت کاریابی</p>
        <img src="/images/workLogo.jfif">
      </div>
      <div class="desktopMenu">
        <div class="menu_options" @click="goToHome()">
          <img src="/images/house.png" >
          <p style="margin-bottom: 0;">خانه</p>
        </div>
        <div class="menu_options">
          <img src="/images/magnifier.png" >
          <p style="margin-bottom: 0;">جستجوی مشاغل</p>
        </div>
        <div class="menu_options" @click="goToResume()">
          <img src="/images/sparkles.png" >
          <p style="margin-bottom: 0;">رزومه‌ساز</p>
        </div>
        <div class="menu_options" style="border-left: 1px solid white;">
          <img src="/images/gemstone.png" >
          <p style="margin-bottom: 0;">۵۰ شرکت برتر</p>
        </div>
      </div>
    </nav>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Karyabi Project
        </h1>

        <p @click="goToResume()" class="subheading font-weight-regular">
          رزومه ساز
        </p>
      </v-col>
    </v-row>
  </container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    
}),
  methods: {
  goToHome() {
    this.$router.push({ path: '/' });
  },
  goToResume() {
    this.$router.push({ path: '/resume-maker' })
  },
},
}
</script>
<style scoped>
.desktopNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  width: 100%;
  height: 10% !important;
  background: rgb(129, 209, 168);
  color: white;
  position: relative;
}
.desktopMenu {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.desktopMenu img {
  width: 28px;
  margin-left: 10px;
  margin-right: 10px;
}
.desktopMenu p {
  margin-left: 10px;
}
.menu_options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-right: 1px solid white;
}
.menu_options:hover {
  background: rgba(255, 255, 255, 0.197);
}
.desktopLogo {
  display: inline-flex;
  align-items: center !important;
  justify-content: space-between;
}
.desktopLogo p{
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-right: 10px;
  align-self: flex-end;
  margin-bottom: 0;
  margin-left: 10px;
  width: 100%;
}
.desktopLogo img{
  width: 20px;
}
</style>
