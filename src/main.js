import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible/flexible';
import '@/assets/css/common.scss';
import '@/assets/css/reset.scss';
import '@/assets/css/app.scss';

import { Lazyload } from 'vant';

Vue.config.productionTip = false;

Vue.use(Lazyload, {
    lazyComponent: true,
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
