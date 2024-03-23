import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import FlowChart from 'flow-chart-static-vue'
import 'flow-chart-static-vue/flow-chart/flow-chart.css'
Vue.use(FlowChart)
new Vue({
  render: h => h(App),
}).$mount('#app')
