<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>广告发布</h2>
      <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <el-input-number v-model="num" @change="(value)=>{this.num =value;showMoney()}" :min="0" :max="10" label="购买数量">
          </el-input-number>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          行业：
        </div>
        <div class="sales-board-line-right">
          <el-select v-model="industry" placeholder="请选择" @change="showMoney" >
            <el-option
              v-for="item in tradeList"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <el-select v-model="Edition" placeholder="请选择" @change="showMoney" >
            <el-option
              v-for="item in versionList"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          {{time}}
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          {{money}} 元
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button">
            <el-button type="primary" round @click="uploadMsg" size="medium">立即购买</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>

      <table class="sales-board-table">
        <tbody>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>安全安保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>办公文教</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>彩票</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>车辆物流</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>成人用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>出版传媒</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>电脑硬件</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>电子电工</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>房地产建筑装修</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>分类平台</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>服装鞋帽</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>箱包饰品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>化工原料制品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>机械设备</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>家庭日用品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>家用电器</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>教育培训</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>节能环保</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>金融服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>礼品</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>旅游住宿</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>美容化妆</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>母婴护理</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>农林牧渔</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>软件</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>商务服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>生活服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>食品保健品</label>
            </div>
          </td>
        </tr>
        <tr class="ui-table-row">
          <td class="col-first">
            <div class="intro-pic">
              <label>手机数码</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>通讯服务设备</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>网络服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>医疗服务</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>游戏</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>运动休闲娱乐</label>
            </div>
          </td>
          <td>
            <div class="intro-pic">
              <label>招商加盟</label>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <PayPage :payMsg="postData"  :show="show" :confirmShow="confirmShow" @closeDialog="closeDialog" @confirmBuy="confirmBuy"></PayPage>
  </div>
</template>

<script>
  import PayPage from '@/components/payPage'
  export default {
    name: "ggfb",
    components:{
      PayPage,
    },
    data () {
      return {
        confirmShow:false,
        show:false,
        complete:false,
        num:'0',
        industry: '',
        Edition:'',
        time: '一年',
        loading: false,
        tradeList: [
          {
            label: '出版业',
            value: 0
          },
          {
            label: '媒体',
            value: 1
          },
          {
            label: '金融',
            value: 2
          },
          {
            label: '互联网',
            value: 3
          },
          {
            label: '游戏',
            value: 4
          }
        ],
        versionList: [
          {
            label: '初级版',
            value: 0
          },
          {
            label: '中级版',
            value: 1
          },
          {
            label: '高级版',
            value: 2
          },
          {
            label: '专家版',
            value: 3
          }
        ],
        money: "500",
      }
    },
    computed: {
      postData() {
        return [
          { name:"产品名称",value:"广告发布"},
          { name:"购买数量",value:this.num},
          { name:"行业",value:this.industry},
          { name:"产品版本",value:this.Edition},
          { name:"有效时间",value:this.time},
          { name:"价格",value:this.money},
        ]
      },
    },
    methods: {
      showMoney() {
        if (this.postData[1].value !== 0 && this.postData[2].value !== ''&& this.postData[3].value !== '') {
          return this.complete =true;
        } else {
          return this.complete =false;
        }
      },
      uploadMsg() {
        this.complete? this.show = true : ''
      },
      closeDialog(data){
        if (data==='show'){
          this.show = false
        } else if(data==='confirmShow'){
          this.confirmShow = false;
          this.show = false
        }
      },
      confirmBuy(){
        this.confirmShow = true
      },
    },
  }
</script>

<style scoped>

</style>
