<template>
  <div id="app">
    <!-- chartKeyField是唯一标识 chartNameField是显示的名称 -->
    <!-- clickItem是点击每一列执行事件 -->
    <flow-chart :chartList="chartList" chartNameField="fieldName" chartKeyField="id"  @clickItem="clickItem" :colunmNum="2"/>
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
