<template>
    <div class="mainBack">
        <nav class="desktopNav ">
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
                <div class="menu_options">
                    <img src="/images/sparkles.png" >
                    <p style="margin-bottom: 0;">رزومه‌ساز</p>
                </div>
            </div>
        </nav>
        <container>
            <v-row class="text-center containerClass">
                <div class="generalPart">
                    <div class="profile_pic">
                        <image-input v-model="avatar">
                            <div slot="activator">
                                <v-avatar size="150px" v-ripple v-if="!avatar" class="grey lighten-3 mb-3">
                                    <img src="./../../public/images/circle_camera.png">
                                </v-avatar>
                                <v-avatar size="150px" v-ripple v-else class="mb-3">
                                    <img :src="avatar.imageURL" alt="avatar">
                                </v-avatar>
                                <div v-if="!avatar">
                                    <v-btn @click="uploadImage" :loading="savingAvatar">انتخاب عکس پرسنلی</v-btn>
                                </div>
                            </div>
                        </image-input>
                        <v-slide-x-transition>
                            <div v-if="avatar && savedAvatarBoolean == false">
                                <v-btn class="primary" @click="uploadImage" :loading="saving">Save Avatar</v-btn>
                            </div>
                        </v-slide-x-transition>
                    </div>
                    <div class="profile_details">
                        <div class="userName">
                            <h2>نام و نام خانوادگی کاربر</h2>
                        </div>
                        <div class="userDet mt-3">
                            <h4>وضعیت اشتغال:</h4>
                            <p class="mr-2">وضعیت</p>
                        </div>
                        <div class="userDet">
                            <h4>آخرین شرکت:</h4>
                            <p class="mr-2">نام آخرین شرکت</p>
                        </div>
                        <div class="userDet">
                            <h4>آخرین مدرک تحصیلی:</h4>
                            <p class="mr-2">نام آخرین مدرک</p>
                        </div>
                        <div class="cv_buttons">
                            <v-btn class="seeCV" @click="uploadImage" :loading="saving">مشاهده رزومه</v-btn>
                            <v-btn class="mr-2" @click="uploadImage" :loading="saving">دریافت فایل رزومه</v-btn>
                        </div>
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <p class="mr-2">اطلاعات فردی</p>
                    </div>
                    <div class="box_body">
                        <div class="rightColumn">
                            <div class="innerPair">
                                <p class="pairTitle">آدرس ایمیل</p>
                                <p class="pairValue">miladsahebnazar@yahoo.com</p>
                            </div>
                            <div class="innerPair">
                                <p class="pairTitle">استان محل سکونت</p>
                                <p class="pairValue">اصفهان</p>
                            </div>
                            <div class="innerPair">
                                <p class="pairTitle">وضعیت تاهل</p>
                                <p class="pairValue">متاهل</p>
                            </div>
                            
                            <div class="innerPair">
                                <p class="pairTitle">جنسیت</p>
                                <p class="pairValue">مرد</p>
                            </div>
                        </div>
                        <div class="leftColumn">
                            <div class="innerPair">
                                <p class="pairTitle">شماره موبایل</p>
                                <p class="pairValue">09133091478</p>
                            </div>
                            <div class="innerPair">
                                <p class="pairTitle">آدرس محل سکونت</p>
                                <p class="pairValue">خیابان باغ دریاچه - کوی ۷۴ - بن بست ارغوان - پلاک ۳۸ - طبقه ۴</p>
                            </div>
                            <div class="innerPair">
                                <p class="pairTitle">سال تولد</p>
                                <p class="pairValue">1371</p>
                            </div>
                            
                            <div class="innerPair">
                                <p class="pairTitle">وضعیت خدمت سربازی</p>
                                <p class="pairValue">پایان خدمت</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-user-alt" />
                        <p class="mr-2">درباره من</p>
                    </div>
                    <div class="box_body">
                        <p class="aboutMeText">عقیده من این است که تعهد، مسئولیت‌پذیری و وفاداری به محیط کار، باعث ایجاد صمیمیت، علاقه و پیشبرد امور سازمان می‌شود. می‌دانم که سخت‌کوشی به تنهایی باعث پیشرفت نمی‌شود. بنابراین، همیشه خودم را با عملکردم می‌سنجم. برای من، امنیت شغلی و حفظ حقوق و برابری و احترام متقابل بسیار مهم است.</p>
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-running" />
                        <p class="mr-2">مهارت‌های حرفه‌ای</p>
                    </div>
                    <div class="box_body">
                        مهارت‌ها
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-building" />
                        <p class="mr-2">سوابق شغلی</p>
                    </div>
                    <div class="box_body">
                        سوابق شغلی
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-graduation-cap" />
                        <p class="mr-2">سوابق تحصیلی</p>
                    </div>
                    <div class="box_body">
                        تحصیلات
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-language" />
                        <p class="mr-2">زبان‌ها</p>
                    </div>
                    <div class="box_body">
                        زبان های خارجی
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <p class="mr-2">ترجیحات شغلی</p>
                    </div>
                    <div class="box_body">
                        ترجیحات
                    </div>
                </div>
            </v-row>
        </container>
    </div>
</template>
<script>
import ImageInput from '../components/ImageInput.vue'

export default {
    data () {
        return {
            avatar: null,
            savingAvatar: false,
            savedAvatarBoolean: false,

        }
    },
    components: {
        ImageInput: ImageInput
    },
    watch:{
        avatar: {
            handler: function() {
                this.savedAvatarBoolean = false
            },
            deep: true
        }
    },
    methods: {
        uploadImage() {
            this.savingAvatar = true
            setTimeout(() => this.savedAvatar(), 1000)
        },
        savedAvatar() {
            this.savingAvatar = false
            this.savedAvatarBoolean = true
        },
        goToHome() {
            this.$router.push({ path: '/' });
        },
    },
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
    height: 3% !important;
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
.generalPart {
    display: flex;
    background: white;
    width: 100%;
    min-height: 210px;
}
.profile_pic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5% 5%;
    border-left: 1px solid #cfcdcd;
}
.profile_details {
    display: flex;
    flex-direction: column;
    padding: 5% 5%;
}
.userName {
    text-align: right;
    color: #f9a60b;
}
.userDet {
    display: flex;
}
.userDet h5 {
    color: #a5a5a5;
}
.cv_buttons {
    display: flex;
}
.seeCV {
    background-color: #1abc9c !important;
    color: white;
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
    padding: 3% 7%;
    width: 100%;
}
.rightColumn {
    margin-left: 20%;
}
.innerPair {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2%;
}
.pairTitle {
    margin-bottom: 0 !important;
    font-size: 18px;
    font-weight: bold;
}
.pairValue {
    margin-bottom: 0 !important;
    font-size: 13px;
}
.aboutMeText {
    width: 80%;
    margin-bottom: 0 !important;
    text-align: right;
}
</style>