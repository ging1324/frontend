import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Profile from '@/components/Profile';
import Tables from '@/components/Tables';
import Maps from '@/components/Maps';
import BadGateway from '@/components/BadGateway';
import BoardAdd from '@/components/BoardAdd';
import BoardList from '@/components/BoardList';
import BoardDetail from '@/components/BoardDetail';
import BoardModify from '@/components/BoardModify';
import UserList from '@/components/UserList';
import UserAdd from '@/components/UserAdd';

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
      path: '/boardAdd',
      name: 'BoardAdd',
      props: { page: 6 },
      component: BoardAdd
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
    },
    {
      path: '/boardModify',
      name: 'BoardModify',
      props: { page: 9 },
      component: BoardModify
    },
    {
      path: '/userList',
      name: 'UserList',
      props: { page: 10 },
      component: UserList
    },
    {
      path: '/userAdd',
      name: 'UserAdd',
      props: { page: 11 },
      component: UserAdd
    },
    
    
  ]
})