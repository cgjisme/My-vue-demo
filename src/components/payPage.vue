<template>
    <div>
      <el-dialog :visible="show"  :width="payMsg.length*92+100+'px'" @close="closeDialog('show')" title="确认订单" >
        <tr>
        <td  v-for="(item,index) in payMsg" :key="index"  class="showTb" :class="[ index === payMsg.length-1 ? 'last' : '']">
          <div class="cell" style="border-bottom: 1px solid #ebeef5;">{{item.name}}</div>
          <div class="cell">{{item.value}}</div>
        </td>
        </tr>
        <div slot="footer" class="dialog-footer">
          <el-button  @click="closeDialog('show')">取 消</el-button>
          <el-button type="primary" @click="()=>{confirmBuy()}">确认购买</el-button>
        </div>
      </el-dialog>

      <el-dialog :visible="confirmShow"  width="500px" @close="closeDialog('confirmShow')" title="支付详情" :show-close="false" append-to-body>

        <div v-if="!payResult">
        <el-button type="primary" @click="showResult">我已支付</el-button>
        <el-button type="primary" @click="closeDialog('confirmShow')">无法支付，需要帮助</el-button>
        </div>

        <div v-if="payResult">
          <i class="el-icon-loading" v-if="loading"></i>
            <div v-if="!loading">
          <el-button v-if="paySuccess" type="primary" @click="closeDialog('confirmShow')">支付成功！点击返回</el-button>
          <el-button v-if="!paySuccess" type="primary" @click="closeDialog('confirmShow')">交易未完成，请重试！</el-button>
            </div>
        </div>
      </el-dialog>

    </div>
</template>

<script>
    export default {
      name: "payPage",
      props: {
        payMsg: {
        type: Array
        },
        show:{
          type:Boolean
        },
        confirmShow:{
          type:Boolean
        }
      },
      data(){
        return{
          payResult:false,
          paySuccess:true,
          loading: false,
        }
      },
      methods:{
        closeDialog(data) {
          setTimeout(() => {
            this.payResult=false;
            this.PaySuccess=true;
          }, 1000);
          this.$emit("closeDialog",data);
          },
        confirmBuy(){
          this.$emit("confirmBuy");
        },
        showResult(){
          this.loading = true;
          this.payResult = true;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        },
        },

    }
</script>

<style scoped>

.showTb{
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-right: 0;
  min-width: 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  min-width: 80px;
}
  .last{
    border-right: 1px solid #ebeef5;

  }
  .showTbbt{
    border-top: 0;
  }
  tr{
    display: block;
    text-align: center;
  }
  .cell{
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding: 10px;
  }
</style>
