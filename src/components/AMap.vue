<script setup lang="ts">
import { useMap } from "@/hooks/useMap";
import { nextTick, onMounted, watch } from "vue";


const {initMap,addSingleMarker,mapReady} = useMap()

initMap('container')



watch(mapReady,(ready) => {
  console.log(1111,'watch');
  nextTick(() => {
    if(ready){
      addSingleMarker([113.260038, 23.127704])
    }
  });
})

</script>

<template>
  <div class="map-container">
    <div id="container"></div>
  </div>
</template>

 <style lang="scss" scoped>
 .map-container {
   width: 100%;
   height: 100vh;
 }
 
 #container {
   padding: 0px;
   margin: 0px;
   width: 100%;
   height: 100%;
 }
 </style>