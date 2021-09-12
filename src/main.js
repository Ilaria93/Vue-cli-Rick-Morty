import Vue from 'vue'
import App from './App.vue'
//libreria di boostrap js //
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//VUE//

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
