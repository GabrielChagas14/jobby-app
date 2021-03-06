import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "../views/Register";
import Login from "../views/Login";
import Home from "../views/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: "Login",
    }
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
