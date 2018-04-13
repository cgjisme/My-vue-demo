<template>
  <div>
  <template v-for="item in Msg">
  <slider :animation=item.SetData.animation  class="Carousel" height="506px" :interval=item.SetData.interval>
    <slider-item v-for="(ImgMsg,index) in item.ImgMsg" :key="index">
      <img :src="ImgMsg.src"/>
    </slider-item>
  </slider>
    </template>
  </div>
</template>

<script>
  import { Slider, SliderItem } from 'vue-easy-slider'
    export default {
        name: "SliderShow",
        components: {
          Slider,
          SliderItem
        },
      props:['Msg'],
      data(){
          return{
          }
      }
    }
</script>

<style scoped>

</style>
