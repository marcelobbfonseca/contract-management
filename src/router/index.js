import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contract from '../views/Contracts/Contract.vue'
import ContractNew from '../views/Contracts/ContractNew.vue'
import ContractList from '../views/Contracts/ContractList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/clients',
    name: 'clients',
    component: Home
  },
  {
    path: '/contracts',
    component: Contract,
    children: [
      {
        path: '',
        component: ContractList
      },
      {
        path: 'new',
        component: ContractNew,
        name: 'ContractNew'
      }
    ]
  }


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
