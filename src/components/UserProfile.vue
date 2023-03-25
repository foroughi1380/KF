<template>
    <div class="mainBack">
        <nav class="desktopNav ">
            <div class="desktopLogo">
                <div class="siteTitle">
                    <p >سایت کاریابی</p>
                    <img src="/images/workLogo.jfif">
                </div>
                <div style="cursor: pointer;" class="siteTitle" >
                    <p>{{userName}}</p>
                </div>
                <div style="cursor: pointer;" class="siteTitle" @click="exitFromAccount()">
                    <p>خروج</p>
                </div>
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
                <div class="menu_options">
                    <img src="/images/sparkles.png" @click="goToResume()">
                    <p style="margin-bottom: 0;">رزومه‌ساز</p>
                </div>
            </div>
        </nav>
        <div>
            <v-row class="text-center containerClass">
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-info-circle" />
                        <p class="mr-2">تکمیل اطلاعات</p>
                    </div>
                    <div class="box_body">
                        <div class="pairs">
                            <div class="email_part">
                                <p>نام و نام خانوادگی</p>
                                <input class="input_1" type="text" placeholder="ایمیل خود را وارد کنید" v-model="userNameFamily" autocomplete="off" >
                            </div>
                            <div class="email_part">
                                <p>کد ملی</p>
                                <input class="input_1" style="direction: ltr;" type="number" placeholder="کد ملی خود را وارد کنید" v-model="userIdNum" autocomplete="off" >
                            </div>
                        </div>
                        <div class="pairs mt-3">
                            <div class="email_part">
                                <p>شماره تماس</p>
                                <input class="input_1" style="direction: ltr;" type="number" placeholder="شماره تماس خود را وارد کنید" v-model="userPhoneNum" autocomplete="off" >
                            </div>
                            <div class="email_part">
                                <p>استان</p>
                                <input class="input_1" type="text" placeholder="نام استان محل زندگی خود را وارد کنید" v-model="userState" autocomplete="off" >
                            </div>
                        </div>
                        <div class="pairs mt-3">
                            <div class="email_part">
                                <p>شهر/روستا</p>
                                <input class="input_1" type="text" placeholder="نام شهر/روستای محل زندگی خود را وارد کنید" v-model="userCity" autocomplete="off" >
                            </div>
                            <div class="email_part">
                                <p>مقطع تحصیلی</p>
                                <input class="input_1" type="text" placeholder="آخرین مقطع تحصیلی خود را وارد کنید" v-model="userEducation" autocomplete="off" >
                            </div>
                        </div>
                        <div class="pairs mt-3">
                            <div class="email_part">
                                <p>رشته</p>
                                <input class="input_1" type="text" placeholder="نام رشته تحصیلی خود را وارد کنید" v-model="userMajor" autocomplete="off" >
                            </div>
                            <div class="email_part">
                                <p>محل تحصیل</p>
                                <input class="input_1" type="text" placeholder="نام محل تحصیل خود را وارد کنید" v-model="userUniversity" autocomplete="off" >
                            </div>
                        </div>
                        <div class="pairs mt-3">
                            <div class="about_me_part">
                                <p>درباره من</p>
                                <textarea class="discriptionClass" name="description" placeholder="متن کوتاهی راجع به خودتان بنویسید" v-model="userAboutMe"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </v-row>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            userName: null,
            userNameFamily: null,
            userIdNum: null,
            userPhoneNum: null,
            userState: null,
            userCity: null,
            userEducation: null,
            userMajor: null,
            userUniversity: null,
            userAboutMe: null,
        }
    },
    created() {
        this.getUserData();
    },
    methods: {
        goToHome() {
            this.$router.push({ path: '/' });
        },
        goToResume() {
            this.$router.push({ path: "/resume-maker" });
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
                this.userNameFamily = response.data.data.name;
            })
            .catch(err => {
            console.log(err)
            this.isAuth = false;
            this.exit = false;
            this.userName = null;
            })
        },
    }
}
</script>
<style scoped>
.mainBack {
    background: rgb(224, 221, 221);
    height: 100%;
}
.desktopNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    width: 100%;
    height: 5.4% !important;
    background: rgb(129, 209, 168);
    color: white;
    position: relative;
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
    margin-left: 7px;
}
.siteTitle p {
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-right: 10px;
    align-self: center;
    margin-left: 10px;
    width: 100%;
}
.siteTitle {
    display: flex;
    align-items: center;
    border-right: 1px solid white;
    border-left: 1px solid white;
    height: 50px !important;
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
.containerClass {
    padding: 5% 15%;
}
.personalInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: white;
    width: 100%;
    min-height: 210px;
    margin-top: 2%;
}
.box_header {
    display: flex;
    width: 100%;
    height: 5vh;
    padding: 10px;
    background: rgba(85, 85, 85, 0.149);
}
.box_body {
    display: flex;
    flex-direction: column;
    padding: 3% 7%;
    width: 100%;
}
.pairs {
    display: flex;
}
.email_part {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0 8%;
}
.email_part p {
    margin-bottom: 0;
    padding: 5% 0;
}
.about_me_part {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0 8%;
}
.about_me_part p {
    margin-bottom: 0;
    padding: 2% 0;
}
.input_1 {
    min-width: 100%;
    min-height: 50px;
    background-size: 21px;
    padding-right: 40px;
    padding-left: 10px;
    right: 0;
    border-radius: 7px;
    border: 2px solid white;
    box-shadow: 1px 0px 10px 0px rgb(159, 0, 17, 16%);
}
input:focus {
    border: 2px solid white;
    outline-width: 0;
}
input:-ms-input-placeholder {
    text-align: right;
    color: #3D3D3D;
    opacity:0.8;
}
input::-webkit-input-placeholder {
    text-align: right;
    color: #3D3D3D;
    opacity:0.8;
}
input::-moz-placeholder {
    text-align: right;
    color: #3D3D3D;
    opacity:0.8;
}
.discriptionClass {
    width: 100%;
    direction: rtl;
    min-height: 100px !important;
    padding-right:10px;
    padding-left: 10px;
    margin-top: 0%;
    border-radius: 3px;
    border: 1px solid rgb(172, 159, 159);
}
textarea:focus {
    outline-width: 0;
}
textarea:-ms-input-placeholder {
    text-align: right;
    color: #3D3D3D;
    opacity:0.6;
    font-size: 18px;
}
textarea::-webkit-input-placeholder {
    text-align: right;
    color: #3D3D3D;
    opacity:0.6;
    font-size: 18px;
}
textarea::-moz-placeholder {
    text-align: right;
    color: #3D3D3D;
    opacity:0.6;
    font-size: 18px;
}
</style>