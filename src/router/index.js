import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage'
import ResumeMaker from '../components/ResumeMaker'
import SignUpLogIn from '../components/SignUpLogIn'
import UserProfile from '../components/UserProfile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { login: false },
    component: HomePage
  },
  {
    path: '/login-signup',
    name: 'signUpLogIn',
    meta: { login: false },
    component: SignUpLogIn
  },
  {
    path: '/resume-maker',
    name: 'resume-maker',
    meta: { login: true },
    component: ResumeMaker
  },
  {
    path: '/user-profile',
    name: 'user-profile',
    meta: { login: true },
    component: UserProfile
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function checkLogin() {
  if (window.$cookies.get('userEntered') == 'true' || window.$cookies.get('userEntered') == true) {
    return true;
        
  } else {
    console.log(window.$cookies.get('userEntered'))
    return false
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.login && checkLogin() == false) {
    alert("ابتدا باید وارد شوید")
    return next({ path: '/' });
  } else {
    return next();
  }
});

export default router
