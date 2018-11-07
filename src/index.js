/**
 * author     dark
 * date       18/10/23
 */
import Vue from 'vue/dist/vue.min';
import App from './App';

Vue.config.productionTip = false;

const vueInstance = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
});

window.sa.quick('autoTrack');

export default vueInstance;
