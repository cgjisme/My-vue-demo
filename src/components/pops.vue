<template>
  <div class="el-dialog__wrapper" style="z-index: 2009;background: rgba(0, 0, 0, 0.4);" v-if="dialogVisible">
    <div class="el-dialog" style="width: 30%; margin-top: 15vh;">
      <div class="el-dialog__header">
        <span class="el-dialog__title">{{contTitle}}</span>
        <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click='closeDialog'>
          <i class="el-dialog__close el-icon el-icon-close"></i>
        </button>
      </div>
      <div class="el-dialog__body">
        <slot></slot>
      </div>
      <div class="el-dialog__footer" v-if="contBtn">
        <span class="dialog-footer">
        <button type="button" class="el-button el-button--default" @click='closeDialog'>
          <span>取 消</span>
        </button>
        <button type="button" class="el-button el-button--primary" @click='closeDialog'>
        <span>{{contTitle}}</span>
        </button>
      </span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "pops",
    props: {
      dialogVisible: {
        type: Boolean,
        default: false
      },
      contTitle:{
        type:String,
        default:"提示"
      },
      contBtn:{
        type: Boolean,
        default: true
      }
    },
    methods: {
      closeDialog() {
        this.$emit('closeDialog')
      }
    }
  }
</script>

<style scoped>

</style>
