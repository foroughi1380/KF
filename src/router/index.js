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
    component: SignUpLogIn
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/resume-maker',
    name: 'resume-maker',
    component: ResumeMaker
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
