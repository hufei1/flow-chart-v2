import FlowChart from "./flow-chart/index.vue";

const install = function (Vue) {
  Vue.component(FlowChart.name, FlowChart);
};

export default install;
