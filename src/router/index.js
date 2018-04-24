import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import RePassword from '@/components/RePassword.vue'
import ContentBox from '@/components/ContentBox.vue'
import ChouJiang from '@/components/choujiang.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name: 'RePassword',
      path: '/repassword',
      component: RePassword
    },
    {
      name: 'Login',
      path: '',
      component: Login
    },
    {
      name: 'Index',
      path: '/index',
      component: Index,
      meta: {requiresAuth: true},
      children: [
        {
          name: 'ContentBox',
          path: 'page',
          component: ContentBox
        }, {
          name: 'ChouJiang',
          path: 'choujiang',
          component: ChouJiang
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!sessionStorage.getItem('access_token')) {
      next('/')
    } else {
      if (to.matched.length === 0) {
        from.name ? next({ name: from.name }) : next('/')
      } else {
        next()
      }
    }
  } else {
    if (to.matched.length === 0) {
      from.name ? next({ name: from.name }) : next('/')
    } else {
      next()
    }
  }
})
export default router
