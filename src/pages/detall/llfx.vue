<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>
        是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
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
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <el-select v-model="productType" @change="()=>{showthis();showMoney()}" placeholder="请选择">
            <el-option
              v-for="item in options"
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
          <el-radio v-model="time" label="一年" :disabled="radio1" @change="showMoney">一年</el-radio>
          <el-radio v-model="time" label="两年" :disabled="radio2" @change="showMoney">两年</el-radio>
          <el-radio v-model="time" label="三年" :disabled="radio3" @change="showMoney">三年</el-radio>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <el-radio v-model="Edition" label="客户版" border @change="showMoney">客户版</el-radio>
          <el-radio v-model="Edition" label="代理商版" border @change="showMoney">代理商版</el-radio>
          <el-radio v-model="Edition" label="专家版" border @change="showMoney">专家版</el-radio>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">
            总价：
          </div>
          <div class="sales-board-line-right" style="margin-top: 30px"><i class="el-icon-loading" v-if="loading"></i>
            <div v-if="!loading">{{money}}元</div>
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">&nbsp;</div>
          <div class="sales-board-line-right">
            <el-button type="primary" round @click="uploadMsg" size="medium">立即购买</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

      <h3>用户行为指标</h3>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>

      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>
    <PayPage :payMsg="postData"  :show="show" :confirmShow="confirmShow" @closeDialog="closeDialog" @confirmBuy="confirmBuy"></PayPage>
  </div>
</template>
<script>
  import PayPage from '@/components/payPage'
  export default {
    name: "llfx",
    components:{
      PayPage,
    },
    data() {
      return {
        confirmShow:false,
        show:false,
        complete:false,
        num: 0,
        time: '',
        Edition: "",
        productType: '',
        radio1: false,
        radio2: false,
        radio3: false,
        loading: false,
        options: [{
          value: 1,
          label: '低级版'
        }, {
          value: 2,
          label: '中极版'
        }, {
          value: 3,
          label: '高级版'
        }, {
          value: 4,
          label: '顶级版'
        }, {
          value: 5,
          label: '至尊版'
        }],
        money: "---",
      }
    },
    computed: {
      postData() {
        return [
          { name:"产品名称",value:"流量分析"},
          { name:"购买数量",value:this.num},
          { name:"产品类型",value:this.productType},
          { name:"有效时间",value:this.time},
          { name:"产品版本",value:this.Edition},
          { name:"总价",value:this.money},
          ]
      },
    },
    methods: {
      showMoney() {
        if (this.postData[1].value !== 0 && this.postData[2].value !== '' && this.postData[3].value !== '' && this.postData[4].value !== '') {
          this.complete =true;
          this.loading = true;
          this.$http.post('/api/postData', this.postData)
            .then((res) => {
              this.money = res.data.pay;
              setTimeout(() => {
                this.loading = false;
              }, 100);
            })
        } else {
          this.complete =false;
          this.money = "---";
        }
      },
      showthis() {
        this.time = "";
        if (this.productType === "低级版") {
          return this.radio1 = true
        }
        else {
          this.radio1 = false
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
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
  }

  .buy-dialog-btn {
    margin-top: 20px;
  }

  .buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
  }

  .buy-dialog-table td,
  .buy-dialog-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
  }

  .buy-dialog-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
  }
</style>
