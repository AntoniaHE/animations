import Vue from 'vue'
import Router from 'vue-router'
// import Timer from '../components/timer'
import Index from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'timer',
    //   component: Timer
    // },
    {
      path: '/',
      component: Index
    }
  ]
})
