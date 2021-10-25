<template>
  <div>
    <div class="echart-example">
      <a href="https://echarts.apache.org/examples/zh/index.html" target="_blank"><h3>ECHARTS 示例</h3></a>
    </div>
    <div id="echart">
      <BarLabelRotation
          height="100%"
          width="100%"
          :table_data="raw_data"
      ></BarLabelRotation>
    </div>
  </div>
</template>

<script>
import BarLabelRotation from "comps/Charts/BarLabelRotation.vue";
export default {
  name: "echart",
  data() {
    return {
      raw_data: {"index": [2012, 2013, 2014, 2015, 2016], "columns": ["Forest", "Steppe", "Desert", "Wetland"], "data": [[320, 220, 152, 98], [332, 182, 232, 77], [301, 191, 201, 101], [334, 234, 154, 99], [390, 290, 190, 40]]}
    }
  },
  components: {
    BarLabelRotation
  }
}
</script>

<style scoped>
div#echart {
  height: 600px;
  width: 800px;
  margin: 50px auto 10px;
}

.echart-example {
  width:800px;
  margin: 20px auto 20px;
  text-align: center;
}
</style>