<template>
  <div class="Carousel" @mouseover="clearInv" @mouseout="Auto">
    <ul class="imgcont">
      <li>
        <a :href="imgMsg[nowIndex].url">
          <transition  :enter-class="enterClass" :enter-active-class="enterActiveClass"  mode="in-out">
            <img  v-if="isShow" :src="imgMsg[nowIndex].src" height="506" width="900" title="new"/>
          </transition>
          <transition  :leave-active-class="leaveActiveClass" mode="in-out">
            <img v-if="!isShow" :src="imgMsg[nowIndex].src" height="506" width="900" title="old"/>
          </transition>
        </a>
      </li>
    </ul>
    <div class="Nav clear">
      <span class="Title">{{imgMsg[nowIndex].title}}</span>
      <ul class="NavBtn">
        <li @click = go(prevIndex)> < </li>
        <li v-for="(item,index) in imgMsg" :value = 'index' ><a @click = 'go(index)'  :class="{ active: index === nowIndex }">{{ index +1 }}</a></li>
        <li @click = go(nextIndex) style="margin-left: 10px"> > </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "slider-show-diy",
    props: {
      imgMsg: {
        type:Array,
        default:[]
      },
      setData:{
        time: {
          type:Number,
          default:500
        }
      }
    },
    data(){
      return{
        enterClass:'',
        enterActiveClass:'',
        leaveActiveClass:'',
        nowIndex: 0,
        isShow:false
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          this.direction ( 'left');
          return this.imgMsg.length - 1
        }
        else {
          this.direction ( 'left');
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.imgMsg.length - 1) {
          this.direction('right');
          return 0
        }
        else {
          this.direction('right');
          return this.nowIndex + 1
        }
      },
    },
    watch:{
    },
    methods:{
      go (index) {
        this.isShow = false;
        /*if(this.nowIndex<index){
          this.direction('right')
        }
        else{
          this.direction('left')
        }*/
        setTimeout(() => {
          this.isShow = true;
          this.nowIndex = index ;
        }, 10)
      },
      Auto(){
        this.setTime = setInterval (()=>{
          this.go(this.nextIndex)
        },this.setData.time);
      },
      direction(data){
        if(data==='left'){
          this.enterActiveClass = 'new-enter-active-left';
          this.enterClass = 'new-enter-left';
          this.leaveActiveClass = 'old-leave-active-left';
        }
        else{
          this.enterActiveClass = 'new-enter-active-right';
          this.enterClass = 'new-enter-right';
          this.leaveActiveClass = 'old-leave-active-right';
        }
      },
      clearInv(){
         clearInterval(this.setTime);
      },
    },
    mounted(){
      this.Auto()
    }
  }

</script>

<style scoped>
  .new-enter-active-right {
    transition: all .3s;
    transition-timing-function: linear;
    -moz-transition-timing-function: linear; /* Firefox 4 */
    -webkit-transition-timing-function: linear; /* Safari 和 Chrome */
    -o-transition-timing-function: linear; /* Opera */
  }
  .new-enter-right {
    transform: translateX(100%);
  }
  .old-leave-active-right {
    transition: all .3s;
    transform: translateX(-100%);
    transition-timing-function: linear;
    -moz-transition-timing-function: linear; /* Firefox 4 */
    -webkit-transition-timing-function: linear; /* Safari 和 Chrome */
    -o-transition-timing-function: linear; /* Opera */
  }
  .new-enter-left{
    transform: translateX(-100%);
    transition: all .3s;
    transition-timing-function: linear;
    -moz-transition-timing-function: linear; /* Firefox 4 */
    -webkit-transition-timing-function: linear; /* Safari 和 Chrome */
    -o-transition-timing-function: linear; /* Opera */
  }
  .new-enter-active-left {
    transition: all .3s;
    transition-timing-function: linear;
    -moz-transition-timing-function: linear; /* Firefox 4 */
    -webkit-transition-timing-function: linear; /* Safari 和 Chrome */
    -o-transition-timing-function: linear; /* Opera */

  }
  .old-leave-active-left {
    transition: all .3s;
    transition-timing-function: linear;
    -moz-transition-timing-function: linear; /* Firefox 4 */
    -webkit-transition-timing-function: linear; /* Safari 和 Chrome */
    -o-transition-timing-function: linear; /* Opera */
    transform: translateX(100%);
  }
  .Carousel{
    position: relative;
    width:100%;
    height: 100%;
  }
  .Carousel img{
    position: absolute;
  }
  .Carousel .imgcont li a{
    width: 900px;
    display: block;
  }
  .Carousel .Nav{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    background: rgba(74, 72, 70, 0.7);
    line-height: 30px;
  }
  .Carousel .Nav .Title{
    float: left;
    color: #fff;
    margin-left: 5%;
  }
  .Carousel .Nav .NavBtn{
    float: right;
    margin-right: 5%;
  }
  .Carousel .Nav li{
    display: inline;
    color: #fff;
    cursor: pointer;
  }
  .Carousel .Nav li a{
    color: #fff;
    margin-left: 10px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: inline-block;
  }
  .Carousel .imgcont {
    overflow: hidden;
    width: 900px;
    height: 506px;
    position: relative;
  }
  .active{
    text-decoration: underline;
  }
</style>
