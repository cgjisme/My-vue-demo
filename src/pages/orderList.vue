<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <el-select v-model="product" placeholder="请选择" size="mini" style="width:150px">
          <el-option
            v-for="item in products"
            :key="item.value"
            :label="item.label"
            :value="item.label"
            @change="">
          </el-option>
        </el-select>
      </div>
      <div class="order-list-option">
        开始日期：
          <el-date-picker
            v-model="startDate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            size="mini"
            @change="">
          </el-date-picker>
      </div>

      <div class="order-list-option">
        结束日期：
        <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          size="mini"
          @change="">
        </el-date-picker>
      </div>

      <div class="order-list-option">
        关键词：
        <el-input
          placeholder="请输入内容"
          v-model="keyword"
          clearable
          size="mini"
          style="width: 180px"
          @change="">
        </el-input>
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads" :class="{active:head.active}">{{ head.label }}</th>
        </tr>
        <tr v-for="item in tableData" :key="item.buyNum">
          <td v-for="head in tableHeads">{{ item[head.key] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
    export default {
        name: "orderlist",
        data(){
          return{
            startDate:null,
            endDate:null,
            product:null,
            keyword:'',
            products: [
              {
                label: '数据统计',
                value: 0
              },
              {
                label: '数据预测',
                value: 1
              },
              {
                label: '流量分析',
                value: 2
              },
              {
                label: '广告发布',
                value: 3
              }
            ],
            tableHeads: [
              {
                label: '订单号',
                key: 'orderId'
              },
              {
                label: '购买产品',
                key: 'product'
              },
              {
                label: '版本类型',
                key: 'version'
              },
              {
                label: '有效时间',
                key: 'period'
              },
              {
                label: '购买日期',
                key: 'date'
              },
              {
                label: '数量',
                key: 'buyNum'
              },
              {
                label: '总价',
                key: 'amount'
              }
            ],
            tableData: [
              {
                "orderId": "ddj123",
                "product": "数据统计",
                "version": "高级版",
                "period": "1年",
                "buyNum": 2,
                "date": "2016-10-10",
                "amount": "500元"
              },
              {
                "orderId": "yuj583",
                "product": "流量分析",
                "version": "户外版",
                "period": "3个月",
                "buyNum": 1,
                "date": "2016-5-2",
                "amount": "2200元"
              },
              {
                "orderId": "pmd201",
                "product": "广告发布",
                "version": "商铺版",
                "period": "3年",
                "buyNum": 12,
                "date": "2016-8-3",
                "amount": "7890元"
              }
            ]
          }
        },
      methods:{
      },
      mounted(){
        this.$http.get('/api/getOrderList')
          .then((rel)=>{
              console.log(rel.data)
              this.tableData=rel.data.list
            },
            function (error) {
              console.log(error)
            }
          )
      }
    }
</script>

<style scoped>
  .order-wrap {
    width: 1200px;
    min-height: 800px;
    margin: 20px auto;
    overflow: hidden;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 200px;
  }
  .order-wrap h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .order-query {
    height: 25px;
    line-height: 25px;
    border: 1px solid #e3e3e3;
    outline: none;
    text-indent: 10px;
  }
  .order-list-option {
    display: inline-block;
    padding-left: 15px;
  }
  .order-list-option:first-child {
    padding-left: 0;
  }
  .order-list-table {
    margin-top: 20px;
  }
  .order-list-table table {
    width: 100%;
    background: #fff;
  }
  .order-list-table td,
  .order-list-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 10px 0;
  }
  .order-list-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
    cursor: pointer;
  }
  .order-list-table th.active {
    background: #35495e;
  }
</style>
