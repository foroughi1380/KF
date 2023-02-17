import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage'
import ResumeMaker from '../components/ResumeMaker'
import SignUpLogIn from '../components/SignUpLogIn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signUpLogIn',
    meta: { login: false },
    component: SignUpLogIn
  },
  {
    path: '/home',
    name: 'home',
    meta: { login: true },
    component: HomePage
  },
  {
    path: '/resume-maker',
    name: 'resume-maker',
    meta: { login: true },
    component: ResumeMaker
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function checkLogin() {
  console.log(window.$cookies.get('userEntered'))
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
