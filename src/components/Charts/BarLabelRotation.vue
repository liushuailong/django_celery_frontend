<template>
  <div :id="id" :class="className" :style="{height: height, width: width}"></div>
</template>

<script>
import * as echarts from 'echarts';
import { ref, onMounted, onUnmounted, unref } from 'vue';
export default {
  name: "BarLabelRotation",
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    height: {
      type: String,
      default: "200px"
    },
    width: {
      type: String,
      default: "200px"
    },
    table_data: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    const chart = ref(null);
    onMounted(() => {
      chart.value = echarts.init(document.getElementById(props.id));
      let option;
      option = {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
          }]
      };
      unref(chart).setOption(option);
    });
    onUnmounted(() => {
      if (!unref(chart)) {
        return;
      }
      chart.value.dispose();
      chart.value = null;
    });
    return {chart};
  }
}
</script>

<style scoped>

</style>