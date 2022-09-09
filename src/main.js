/* eslint-disable no-undef */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import 'tw-elements';
import BackToTop from 'vue-backtotop';

const feather = require('feather-icons');
feather.replace();

createApp(App)
	.use(router)
	.use(BackToTop)
	.mount('#app');