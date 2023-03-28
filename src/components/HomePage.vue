<template>
  <div>
    <site-header/>

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
        <h1 class="display-2 font-weight-bold mb-3">Karyabi Project</h1>

        <p @click="goToResume()" class="subheading font-weight-regular">
          رزومه ساز
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import SiteHeader from "@/components/SiteHeader";

export default {
  name: "HelloWorld",
  components: {SiteHeader},
  data: () => ({
    items: ['پروفایل کاربری', 'خروج'],
    isAuth: false,
    exit: false,
    userName: null,
    selected_item: null
  }),
  created() {
    this.getUserData();
  },
  methods: {
    goToPage(item) {
      if (item == 'پروفایل کاربری') {
        this.$router.push({ path: "/user-profile" });
      } else if (item == 'خروج') {
        this.exitFromAccount();
      }

    },
    goToHome() {
      this.$router.push({ path: "/" });
    },
    goToResume() {
      this.$router.push({ path: "/resume-maker" });
    },
    goToSignin() {
      this.$router.push({ path: "/login-signup" });
    },
    goToUserProfile() {
      this.$router.push({ path: "/user-profile" });
    },
    exitFromAccount() {
      this.$cookies.remove("userEntered");
      this.isAuth = false;
      this.exit = false;
      this.userName = null;
    },
    getUserData() {
      axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/v1/user",
        headers: {
              'Authorization': `Bearer ${this.$cookies.get('userToken')}`
          }
      })
        .then(response => {
          this.isAuth = true;
          this.exit = true;
          this.userName = 'سلام' + ' ' + response.data.data.name;
        })
        .catch(err => {
          console.log(err)
          this.isAuth = false;
          this.exit = false;
          this.userName = null;
        })
    },
  },
};
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
  height: 65px;
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
.siteTitle p {
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-right: 10px;
  align-self: flex-end;
  margin-left: 10px;
  width: 100%;
}
.siteTitle {
  display: flex;
  align-items: center;
  justify-content: center !important;
  border-right: 1px solid white;
  border-left: 1px solid white;
  height: 65px !important;
}
.siteTitleName {
  display: flex;
  align-items: center;
  justify-content: center !important;
  border-left: 1px solid white;
  height: 65px !important;
  margin: 0 10px 0 10px;
}
</style>
