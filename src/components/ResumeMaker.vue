<template>
    <div class="mainBack">
        <v-container>
            <v-row class="text-center">
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
                                    <v-btn @click="uploadImage" :loading="saving">انتخاب عکس پرسنلی</v-btn>
                                </div>
                            </div>
                        </image-input>
                        <v-slide-x-transition>
                            <div v-if="avatar && saved == false">
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
                            <v-btn @click="uploadImage" :loading="saving">انتخاب عکس پرسنلی</v-btn>
                            <v-btn class="mr-2" @click="uploadImage" :loading="saving">انتخاب عکس پرسنلی</v-btn>
                        </div>
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <p class="mr-2">اطلاعات فردی</p>
                    </div>
                    <div class="box_body">
                        hi
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-user-alt" />
                        <p class="mr-2">اطلاعات فردی</p>
                    </div>
                    <div class="box_body">
                        
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-running" />
                        <p class="mr-2">اطلاعات فردی</p>
                    </div>
                    <div class="box_body">
                        
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-building" />
                        <p class="mr-2">اطلاعات فردی</p>
                    </div>
                    <div class="box_body">
                        
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-graduation-cap" />
                        <p class="mr-2">اطلاعات فردی</p>
                    </div>
                    <div class="box_body">
                        
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-language" />
                        <p class="mr-2">اطلاعات فردی</p>
                    </div>
                    <div class="box_body">
                        
                    </div>
                </div>
                <div class="personalInfo">
                    <div class="box_header">
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <p class="mr-2">اطلاعات فردی</p>
                    </div>
                    <div class="box_body">
                        
                    </div>
                </div>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import ImageInput from '../components/ImageInput.vue'

export default {
    data () {
        return {
            avatar: null,
            saving: false,
            saved: false,

        }
    },
    components: {
        ImageInput: ImageInput
    },
    watch:{
        avatar: {
            handler: function() {
                this.saved = false
            },
            deep: true
        }
    },
    methods: {
        uploadImage() {
            this.saving = true
            setTimeout(() => this.savedAvatar(), 1000)
        },
        savedAvatar() {
            this.saving = false
            this.saved = true
        }
    },
}
</script>
<style scoped>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.mainBack {
    background: rgb(224, 221, 221);
    height: 100%;
    padding: 5% 20%;
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
</style>