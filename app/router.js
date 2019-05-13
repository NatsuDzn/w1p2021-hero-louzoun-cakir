import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Character from './components/Character.vue';
import GameIntro from './components/GameIntro.vue';
import Win from './components/Win.vue';
import Lose from './components/Lose.vue';
import LandArrive from './components/LandArrive.vue';
import Exam1 from './components/Exam1.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/character',
      name: 'character',
      component: Character,
    },
    {
      path: '/id1',
      name: 'gameintro',
      component: GameIntro,
    },
    {
      path: '/id2',
      name: 'LandArrive',
      component: LandArrive,
    },
    {
      path: '/id3',
      name: 'Exam1',
      component: Exam1,
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
    },
    {
      path: '/lose',
      name: 'lose',
      component: Lose,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
