import { createApp } from 'vue';

// Vuetify
import 'vuetify/styles'; // eslint-disable-line
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import BaseTextAndValue from '@/components/BaseTextAndValue/BaseTextAndValue.vue';

import App from './App.vue';
import router from './router';
import store from './store';

/* Creating a vuetify instance. */
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .component('BaseTextAndValue', BaseTextAndValue)
  .mount('#app');
