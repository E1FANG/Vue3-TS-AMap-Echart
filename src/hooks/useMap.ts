
import AMapLoader from "@amap/amap-jsapi-loader";
import {  shallowReactive, shallowRef ,ref,ShallowRef} from "vue";

const map = shallowRef<AMap.Map | null>(null);

const mapInstance = shallowReactive<{
  map:ShallowRef<AMap.Map | null>,
  markers:AMap.Marker[]
}>({
  map,
  markers:[],
})

const mapReady = ref(false)

const initMap = (containerId:string) => {
  AMapLoader.load({
    key: '9b2fee67575241a7be9d613419723be4',//api服务key--另外需要在public中使用安全密钥！！！
    version: '2.0',// 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.PlaceSearch', 'AMap.AutoComplete']// 需要使用的的插件列表
  }).then((AMap) => {
    map.value = new AMap.Map(containerId, {
      resizeEnable: true,
      zoom: 9.5, // 地图显示的缩放级别
      center: [113.260038, 23.127704]//中心点
    })
    mapReady.value = true
  })
}

export const useMap = () => {
  const addSingleMarker = (lnglat:LngLat)=>{
    const marker = new AMap.Marker({
      position:lnglat,
    })
    map.value?.add(marker)
    mapInstance.markers.push(marker)
    return marker
  }
  return {
    mapInstance,
    initMap,
    mapReady,
    addSingleMarker
  }
}



