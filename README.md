## flow-chart-static-vue 流程图

> 流程图组件 基于 vue2 开发 主要用于显示和点击交互事件，未做过多封装

### 效果图

![流程图](https://img2024.cnblogs.com/blog/872697/202403/872697-20240323110104244-1474756149.png)

### 使用步骤

1. 安装依赖

```sh
npm i flow-chart-static-vue
```

2. main.js 中注册

```js
// main.js
import FlowChart from "flow-chart-static-vue";
import "flow-chart-static-vue/flow-chart/flow-chart.css";
Vue.use(FlowChart);
```

3.组件内使用

```vue
<template>
  <div id="app">
    <!-- chartKeyField是唯一标识 chartNameField是显示的名称 -->
    <!-- clickItem是点击每一列执行事件 -->
    <flow-chart :chartList="chartList" chartNameField="fieldName"  @clickItem="clickItem" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      chartList: [
       {
        id: 1,
        fieldName: '流程步骤01'
       },
       {
        id: 2,
        fieldName: '流程步骤02'
       },
       {
        id: 3,
        fieldName: '流程步骤03'
       },
       {
        id: 4,
        fieldName: '流程步骤04'
       },
       {
        id: 5,
        fieldName: '流程步骤05'
       },
       {
        id: 6,
        fieldName: '流程步骤06'
       },
       {
        id: 7,
        fieldName: '流程步骤07'
       },
      ]
    }
  },
  methods: {
    clickItem(item) {
      console.log(item)
    }
  }
}
</script>

<style></style>

```

### props配置项

| Property  | Description | Type | Default | required
| --------- | ----------- | ---- | ------- | --------|
| chartList | 渲染数组    | `Array`| [] | 是
| chartNameField | 内容区字段名    | `String`| '' | 是
| chartKeyField | 渲染唯一ID字段名    | `string`| id | 是
| colunmNum | 每一列显示的格式    | `Number`| 4 | 否

### 自定义事件
| event  | Description | Type | Default |
| --------- | ----------- | ---- | ------- |
| clickItem | 点击每一列的事件    | `Function`| 无
