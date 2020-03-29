import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Profile from '@/components/Profile';
import Tables from '@/components/Tables';
import Maps from '@/components/Maps';
import BadGateway from '@/components/BadGateway';
import AddBoard from '@/components/AddBoard';
import BoardList from '@/components/BoardList';
import BoardDetail from '@/components/BoardDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/profile',
      name: 'Profile',
      props: { page: 2 },
      component: Profile
    },
    {
      path: '/tables',
      name: 'Tables',
      props: { page: 3 },
      component: Tables
    },
    {
      path: '/maps',
      name: 'Maps',
      props: { page: 4 },
      component: Maps
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    },
    {
      path: '/addBoard',
      name: 'AddBoard',
      props: { page: 6 },
      component: AddBoard
    },
    {
      path: '/boardList',
      name: 'BoardList',
      props: { page: 7 },
      component: BoardList
    },
    {
      path: '/boardDetail',
      name: 'BoardDetail',
      props: { page: 8 },
      component: BoardDetail
    }
    
  ]
})