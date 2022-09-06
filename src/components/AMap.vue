<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader";
import { onMounted, shallowRef } from "vue";

const map = shallowRef(null);
const initMap = () => {
  AMapLoader.load({
    key: '9b2fee67575241a7be9d613419723be4',//api服务key--另外需要在public中使用安全密钥！！！
    version: '2.0',// 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.PlaceSearch', 'AMap.AutoComplete']// 需要使用的的插件列表
  }).then((AMap) => {
        map.value = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 9.5, // 地图显示的缩放级别
          center: [117.2, 31.8]//中心点
        })
    })
  }

  onMounted(()=>{
    initMap()
  })
 </script>

<template>
<div id="container"></div>
</template>

 <style lang="scss" scoped>
  #container{
        padding:0px;
        margin: 0px;
        width: 100%;
        height: 800px;
    }
</style>