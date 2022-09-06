<script setup lang="ts">
import { EChartOption, init } from 'echarts';
import { onMounted } from 'vue';

const initEchart = () => {
  const chartContainer = document.getElementById('my-chart') as HTMLElement
  const chartInstance = init(chartContainer)
  const option: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
  chartInstance.setOption(option);
}

onMounted(()=>{
  initEchart()
})

</script>

<template>
  <div id="my-chart" style="width: 600px; height: 600px"></div>
</template>

 <style lang="scss" scoped>
 </style>