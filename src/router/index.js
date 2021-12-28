import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "../views/Register";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: "Register",
    }
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
