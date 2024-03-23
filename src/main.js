import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import FlowChart from "flow-chart-v2";
import "flow-chart-v2/flow-chart/flow-chart.css";
Vue.use(FlowChart);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
