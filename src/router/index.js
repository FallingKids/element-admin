import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/common/Layout'
import PasswordList from '@/components/page/passwordPage/PasswordList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/helloWorld',
          name: 'HelloWorld',
          component: HelloWorld,
        },

        // 密码管理
        {
          path: '/passwordList',
          name: 'PasswordList',
          component: PasswordList,
        }
      ]
    }
  ]
})
