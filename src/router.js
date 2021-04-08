import { createRouter, createWebHistory } from 'vue-router';
import { flatten } from 'ramda';

const routes = import.meta.globEager('./pages/**/route.js');

const router = createRouter({ history: createWebHistory(), routes: flatten(Object.keys(routes).map((item) => routes[item].default)) });

export default router;
