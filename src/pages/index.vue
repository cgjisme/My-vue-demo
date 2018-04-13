<template>
  <div class="index-wrap clear">
    <div class="index-left fl">
      <div class="left-box">
        <div class="left-box-title">
        <a href="#">全部产品</a>
        </div>
        <template v-for="item in ProductList">
        <div class="left-box-content">
          <p class="box-content-title">{{item.pc.title}}</p>
          <ul>
            <li v-for="list in item.pc.list">{{list.title}}</li>
          </ul>
        </div>
        <div class="left-box-content">
          <p class="box-content-title">{{item.app.title}}</p>
          <ul>
            <li v-for="list in item.app.list">{{list.title}}</li>
          </ul>
        </div>
        </template>
      </div>
      <div class="left-box">
        <template v-for="item in NewsList">
        <div class="left-box-title"><a href="#">{{item.title}}</a></div>
        <div class="left-box-content" style="height: 445px">
          <ul>
            <li v-for="list in item.lists"><a :href="list.url">{{list.title}}</a></li>
          </ul>
        </div>
        </template>
      </div>
    </div>
    <div class="index-right fl">
    <SliderShowDiy :imgMsg="CarouselMsg.imgMsg"  :setData="CarouselMsg.setData"  v-if="flag"/>
      <div class="right-box clear">
        <template v-for="(item,index) in Modular">
        <div class="right-box-content" :class="{rt: index %2 !== 0}">
          <img :src='item.ImgSrc'/>
          <h2 class="right-box-title">{{item.title}}</h2>
          <h3 class="right-box-intro">{{item.intro}}</h3>
          <a class="right-box-button" :href="item.url">立即购买</a>
        </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  //import SliderShow from '@/components/SliderShow'
  import SliderShowDiy from '@/components/SliderShowDiy'
    export default {
      components: {
        //SliderShowDiy
        SliderShowDiy
      },
      name: "index",
      beforeMount:function(){
        //ajax请求
        (()=>{ this.$http.get('/api/NewsList')
              .then((res)=>{
                  this.NewsList = res.data;
                },
                function(err){
                  console.log(err)
                })
        })();
        (()=>{ this.$http.get('/api/ProductList')
          .then((res)=>{
              this.ProductList = res.data;
            },
            function(err){
              console.log(err)
            })})();
        (()=>{ this.$http.get('/api/Modular')
          .then((res)=>{
              this.Modular = res.data
            },
            function(err){
              console.log(err)
            })})();

        (()=>{ this.$http.get('/api/CarouselMsg')
          .then((res)=>{
              this.CarouselMsg= res.data;
              this.flag=true
            },
            function(err){
              console.log(err)
            })})();
      },
      data(){
          return {
            flag:false,
            ProductList:[],
            NewsList:[],
            Modular:[],
            CarouselMsg:{}
          }
        }
    }
</script>

<style scoped>
  a{
    color: black;
  }
  .index-wrap{
  min-width: 1200px;
  height: 100%;
  position: relative;
  background: #ebedef;
  overflow: hidden;
}
  /*left*/
  .index-left{
    width: 285px;
  }
  .left-box{
    width: 100%;
    background: #ebedef;
    height: 100%;
    margin-bottom: 10px;
  }
  .left-box-title{
    width: 100%;
    height: 30px;
    background: #3ba781
  }
  .left-box-title a{
  color: #fff;
  padding: 7px 10px;
  display: inline-block;
  font-size: 13px;
}
  .left-box-content{
    margin-bottom: 5px;
    background: #fff;
    font-size: 13px;
    padding: 5px 10px;
  }
  .box-content-title{
    font-weight: bold;
    margin: 10px 0 0 0;
    height: 14px;

  }
  .left-box-content ul{
    margin-top: 10px;
    padding-left: 6px;
  }
  .left-box-content ul li{
    margin-bottom:10px;
  }
  /*left end*/

  /*right*/
  .index-right{
    width: 900px;
    margin-left: 15px;
  }

.right-box{
  margin-top: 5px;
}
  .right-box-content{
    width: 402px;
    height: 100px;
    background: #fff;
    padding: 20px;
    position: relative;
    float: left;
    margin-right: 15px;
    margin-bottom: 15px;
  }
  .right-box-content img{
    display: inline-block;
    float: left;
  }
  .right-box-content h2{
    font-size: 16px;
    font-weight: bold;
    display: block;
    left: 20px;
    top: 10px;
    position: relative;
  }
  .right-box-content h3{
    font-size: 14px;
    position: relative;
    left: 20px;
    top: 20px;
  }
  .right-box-button{
    position: relative;
    left: 20px;
    top: 30px;
    font-size: 14px;
    color: #fff;
    background: #2d9973;
    width: 80px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    border: 0;
    cursor: pointer;
  }

</style>
