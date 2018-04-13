<template>
  <div id="app">
    <el-scrollbar class="page-component_scroll">
    <div class="app-header">
      <div class="app-header-content">
      <a href="/" class="header-logo" >
        <img src="../assets/logo.png" height="50" width="50"/>
      </a>
      <div class="header-nav fr">
        <ul class="header-list">
          <!--<li class="fl nav-line"><a href="#" class="header-info" @click = "[dialogVisible = true,dialogCont=login,title='登录']">登录</a></li>
          <li class="fl nav-line"><a href="#" class="header-info" @click = "[dialogVisible = true,dialogCont=login,title='注册']" >注册</a></li>
          <li class="fl clear">   <a href="#" class="header-info" @click = "[dialogVisible = true,dialogCont=about,title='Vue.js 是什么？',btn= false]">关于</a></li>-->
          <li class="fl nav-line"><a href="#" class="header-info" @click="dialogLogin=true">登录</a></li>
          <li class="fl nav-line"><a href="#" class="header-info" @click="dialogReg=true">注册</a></li>
          <li class="fl clear">   <a href="#" class="header-info" @click="dialogAbout=true">关于</a></li>
        </ul>
      </div>
      </div>
    </div>
    <div class="app-content"><router-view></router-view></div>
    <div class="app-footer">
      <span class="footer-info">
        ©2018 Monarch Copyright
      </span>
    </div>
    <Login :dialogLoginVisible="dialogLogin" :dialogRegVisible="dialogReg" :dialogAboutVisible="dialogAbout" @closeDialog=" closeDialog"></Login>
   <!-- <pops :dialogVisible="dialogVisible" @closeDialog=" [dialogVisible = false,dialogCont='',btn=true]" :contTitle="title" :contBtn="btn">
      <div v-html="dialogCont"></div>
    </pops>-->
    </el-scrollbar>
  </div>
</template>

<script>
  import Login from '@/components/login'
    export default {
        name: "layout",
        components:{
          Login
        },
        data(){
          return{
            dialogLogin: false,
            dialogReg: false,
            dialogAbout:false
          }

        },
      methods: {
        closeDialog(){
          this.dialogReg = false;
          this.dialogLogin = false;
          this.dialogAbout=false;
        }
      }
    }
</script>

<style >
  #app{
    height: 100%;
    overflow: hidden;
  }
  .page-component_scroll{
    height: 100%;
  }
  .el-scrollbar__bar.is-vertical{
    width:10px;
  }
  .el-scrollbar__bar.is-horizontal{
    height: 10px;
  }
  .el-scrollbar__thumb{
    background-color: rgba(74, 72, 70, 0.3)
  }
 #app .el-scrollbar__wrap{
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
.app-header{
  min-width: 1200px;
  height: 80px;
  background: #303030;
}
  .app-header-content{
    width: 1200px;
    margin: 0 auto;
  }
.header-logo{
  margin:15px auto 15px 30px;
  width: 50px;
  height: 50px;
  display: inline-block!important;
}
.header-nav{
  color: #727272;
  font-size: 14px;
  margin: 30px 15px 0 0;
  font-weight: bold;
}

.header-list span{
  position: relative;
  bottom: 1px;
}
.header-list a{
  margin-right: 0px;
}
.app-content{
  min-width: 1200px;
  width: 1200px;
  padding-top: 15px;
  margin: 0 auto
}
.app-footer{
  width: 100%;
  min-width: 1200px;
  height: 80px;
  background: #dadce0;
}

.footer-info{
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 80px;
  float: left;
  color: #6c6e72;
}
  .nav-line::after{
    content: '|';
    display: inline-block;
    position: relative;
    bottom: 1px;
    margin: 0 5px;
  }
</style>
