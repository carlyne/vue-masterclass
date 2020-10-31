import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/PageHome';
import ThreadShow from '@/pages/PageThreadShow';
import PageForumThread from '@/pages/PageForumThread';
import NotFound from '@/pages/PageNotFound'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: Home
    },

    {
      path: '/forum/:id',
      name: 'PageForumThread',
      component: PageForumThread,
      props: true
    },

    {
      path: '/thread/:id',
      name: 'PageThreadShow',
      component: ThreadShow,
      props: true
    },

    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],

  mode: 'history'
})
