<template>
    <div style="width: 100%;">
        <nav class="desktopNav">
            <h1>سایت کاریابی</h1>
        </nav>
        <div class="mainLogSignBody">
            <div class="textContainer">
                <h1>کاریابی چه کمکی به من می‌کنه؟</h1>
                <h4>همین حالا در کاریابی ثبت‌نام کن و رزومه‌ات رو برای آگهی‌های استخدام شرکت‌های معتبر بفرست.</h4>
            </div>
            <div class="loginPartContainer">
                <div class="titlePart">
                    <div class="loginSignupBtn">
                        <div id="loginBtn" @click="goToLogin()">ورود</div>
                    </div>
                    <div class="loginSignupBtn">
                        <div id="signupBtn" @click="goToSignup()">ثبت‌نام</div>
                    </div>
                </div>
                <div class="mainBox">
                    <div v-if="loginPart == true">
                        <div class="email_part">
                            <p>آدرس ایمیل</p>
                            <input class="input_1" type="text" placeholder="ایمیل خود را وارد کنید" v-model="userMail" autocomplete="off" >
                        </div>
                        <div class="email_part">
                            <p>رمز عبور</p>
                            <input class="input_1" type="text" placeholder="رمز عبور خود را وارد کنید" v-model="userPass" autocomplete="off" >
                        </div>
                        <div class="email_part">
                            <p>نوع کاربری</p>
                            <div class="radio_part">
                                <p style="margin-bottom: 0; font-size: 14px;">کارجو</p>
                                <input id="user" class="input_others" type="radio" name="userType" value="normalUser" v-model="userTypeInput" >
                                <p style="margin-bottom: 0; font-size: 14px;">استادکار</p>
                                <input id="mastUser" class="input_others" type="radio" name="userType" value="masterUser" v-model="userTypeInput" >
                                <p style="margin-bottom: 0; font-size: 14px;">شرکت</p>
                                <input id="compUser" class="input_others" type="radio" name="userType" value="companyUser" v-model="userTypeInput" >
                            </div>
                        </div>
                        <div class="mobileLoginPhoneBtn">
                            <div @click="logninFunc(userMail, userPass, userTypeInput)">ورود</div>
                        </div>
                    </div>
                    <div v-else style="margin-top: -5% !important;">
                        <div class="email_part">
                            <p>نام و نام خانوادگی</p>
                            <input class="input_name" type="text" placeholder="نام و نام خانوادگی خود را وارد کنید" v-model="userName" autocomplete="off" >
                        </div>
                        <div class="email_part">
                            <p>آدرس ایمیل</p>
                            <input class="input_1" type="text" placeholder="ایمیل خود را وارد کنید" v-model="userMail" @blur="validateEmail" autocomplete="off" >
                            <p v-if="emailError == true" style="color: red; font-weight: fold;">آدرس ایمیل معتبر نیست</p>
                        </div>
                        <div class="email_part">
                            <p>رمز عبور</p>
                            <input class="input_1" type="text" placeholder="رمز عبور خود را وارد کنید" v-model="userPass" autocomplete="off" >
                        </div>
                        <div class="email_part">
                            <p>تکرار رمز عبور</p>
                            <input class="input_1" type="text" placeholder="رمز عبور خود را مجددا کنید" v-model="userPassRepeat" autocomplete="off" >
                        </div>
                        <div class="email_part">
                            <p>نوع کاربری</p>
                            <div class="radio_part">
                                <p style="margin-bottom: 0; font-size: 14px;">کارجو</p>
                                <input id="user" class="input_others" type="radio" name="userType" value="normalUser" v-model="userTypeInput" >
                                <p style="margin-bottom: 0; font-size: 14px;">استادکار</p>
                                <input id="mastUser" class="input_others" type="radio" name="userType" value="masterUser" v-model="userTypeInput" >
                                <p style="margin-bottom: 0; font-size: 14px;">شرکت</p>
                                <input id="compUser" class="input_others" type="radio" name="userType" value="companyUser" v-model="userTypeInput" >
                            </div>
                        </div>
                        <div class="mobileLoginPhoneBtn">
                            <div @click="signupFunc(userName, userMail, userPass, userPassRepeat, userTypeInput)">ثبت‌نام</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            loginPart: true,
            emailError: false,
            userName: null,
            userMail: null,
            userPass: null,
            userPassRepeat: null,
            userTypeInput: 'normalUser',
            signupList: [],
        }
    },
    mounted() {
        document.getElementById('loginBtn').style.borderTop = '5px solid #1abc9c';
        document.getElementById('signupBtn').style.borderTop = 'none';
    },
    methods: {
        goToLogin() {
            document.getElementById('loginBtn').style.borderTop = '5px solid #1abc9c';
            document.getElementById('signupBtn').style.borderTop = 'none';
            this.userMail = null;
            this.userPass = null;
            this.loginPart = true;
        },
        goToSignup() {
            document.getElementById('signupBtn').style.borderTop = '5px solid #1abc9c';
            document.getElementById('loginBtn').style.borderTop = 'none';
            this.userMail = null;
            this.userPass = null;
            this.userPassRepeat = null;
            this.loginPart = false;
        },
        emptyCheck(mail, pass) {
            if (mail == null || mail == '' || pass == null || pass == '') {
                this.$alert(
                    "لطفا همه فیلد‌ها رو وارد کنید!",
                    "",
                    "warning"
                );
                return false;
            } else {
                return true;
            }
        },
        emptyCheck2(mail, pass, passRepeat) {
            if (mail == null || mail == '' || pass == null || pass == '' || passRepeat == null || passRepeat == '') {
                this.$alert(
                    "لطفا همه فیلد‌ها رو وارد کنید!",
                    "",
                    "warning"
                );
                return false;
            } else {
                if (this.signupList.length != 0) {
                    for (let j = 0; j < this.signupList.length; j++) {
                        if (this.signupList[j].mail == mail) {
                            this.$alert(
                                "با این ایمیل، قبلا ثبت‌نام صورت گرفته است!",
                                "",
                                "warning"
                            );
                            return false;
                        }
                    }
                    return true;
                } else {
                    if (pass == passRepeat) {
                        return true;
                    } else {
                        this.$alert(
                            "رمز عبور و تکرار رمز عبور با هم همخوانی ندارند!",
                            "",
                            "warning"
                        );
                        return false;
                    }
                    
                }
            }
        },
        validateEmail() {
            if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(this.userMail)) {
                this.emailError = false;
            } else {
                this.emailError = true;
            }
        },
        logninFunc(mail, pass, perm) {
            if (this.emptyCheck(mail, pass) == true) {
                var bodyFormData = new FormData();
                bodyFormData.append("email", mail);
                bodyFormData.append("password", pass);
                this.$cookies.set('userType', perm);
                axios({
                    method: "POST",
                    url:"http://127.0.0.1:8000/api/v1/login",
                    data:bodyFormData,
                })
                    .then((response) => {
                        this.$cookies.set('userToken', response.data.access_token)
                        this.$cookies.set('userEntered', true);
                        this.$router.push({ path: '/' });
                    })
                    .catch((err) => {
                        this.$alert(
                            err.response.data.message,
                            "",
                            "error"
                        );
                    })
            }
        },
        signupFunc(name, mail, pass, passRepeat, perm) {
            if (this.emptyCheck2(mail, pass, passRepeat) == true) {
                var bodyFormData = new FormData();
                bodyFormData.append("name", name);
                bodyFormData.append("email", mail);
                bodyFormData.append("password", pass);
                this.$cookies.set('userType', perm);
                axios({
                    method: "POST",
                    url:"http://127.0.0.1:8000/api/v1/register",
                    data:bodyFormData,
                })
                    .then((response) => {
                        this.$cookies.set('userToken', response.data.access_token)
                        this.$cookies.set('userEntered', true);
                        this.$router.push({ path: '/' });
                    })
                    .catch((err) => {
                        console.log(err)
                        this.$alert(
                            err.response.data.message,
                            "",
                            "error"
                        );
                    })
            }
        },
    }
}
</script>
<style scoped>
.desktopNav {
    display: flex;
    align-items: center;
    padding: 0px 20px;
    height: 10% !important;
    background: transparent;
    color: white;
}
.mainLogSignBody {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: -3%;
    padding: 3.8%;
}
.textContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
    height: 100%;
}
.textContainer h1 {
    color: #555;
    width: 100%;
    font-weight: bold;
}
.textContainer h4 {
    color: #555;
    font-weight: bold;
    width: 100%;
}
.loginPartContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
    width: 37%;
    height: 100%;
    margin-top: 2%;
}
.titlePart {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
.mainBox {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.email_part {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10%;
}
.email_part p {
    margin-bottom: 0;
    padding: 5% 0;
}
.input_1 {
    width: 100%;
    min-height: 50px;
    direction: ltr;
    background-size: 21px;
    padding-right: 40px;
    padding-left: 10px;
    right: 0;
    border-radius: 7px;
    border: 2px solid white;
    box-shadow: 1px 0px 10px 0px rgb(159, 0, 17, 16%);
}
.input_name {
    width: 100%;
    min-height: 50px;
    direction: rtl;
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
.radio_part {
    display: flex;
    justify-content: space-evenly;
    margin-top: -6%;
}
.input_others {
    margin-left: 20%;
}
.mobileLoginPhoneBtn {
    display: inline-flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    margin-top: 0% !important;
}
.mobileLoginPhoneBtn div {
    width: 80% !important;
    text-align: center;
    border: none;
    height: 5vh;
    font-family: "IranSans Regular";
    background: #1abc9c;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-bottom: 2rem;
}
.loginSignupBtn {
    display: inline-flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    margin-top: 0% !important;
}
.loginSignupBtn div {
    font-size: 20px;
    width: 100% !important;
    text-align: center;
    border: none;
    height: 5vh;
    font-family: "IranSans Regular";
    background: white;
    color: #3ab1e4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-bottom: 2rem;
}
.loginSignupBtn div:hover {
    font-weight: bold;
}
</style>