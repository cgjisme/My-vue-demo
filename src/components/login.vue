<template>
  <div>
    <!-- login -->
    <el-dialog title="登录" :visible="dialogLoginVisible" @close="closeDialog('loginform')" :width="formWidth">
      <el-form :model="loginform" :label-width="formLabelWidth" :rules="rules" ref="loginform">
        <el-form-item label="用户名" prop="loginUsername">
          <el-input v-model="loginform.loginUsername" auto-complete="on" style="width: 80%"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="loginPassword" >
          <el-input v-model="loginform.loginPassword" auto-complete="off" style="width: 80%"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog('loginform')">取 消</el-button>
        <el-button type="primary" @click="submitForm('loginform')">登录</el-button>
      </div>
    </el-dialog>

    <!-- reg -->
    <el-dialog title="注册" :visible="dialogRegVisible" @close="closeDialog('regform')" :width="formWidth">
      <el-form :model="regform" :label-width="formLabelWidth" :rules="rules" ref="regform">
        <el-form-item label="用户名">
          <el-input v-model="regform.regUsername" auto-complete="on" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="regform.regPassword" auto-complete="off" style="width: 80%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog('regform')">取 消</el-button>
        <el-button type="primary" @click="submitForm('regform')">注册</el-button>
      </div>
    </el-dialog>

    <!-- about -->
    <el-dialog title="关于" :visible="dialogAboutVisible" @close="closeDialog()" :width="formWidth">
      <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue
        的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。 如果你想在深入学习 Vue
        之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。 如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。
      </p>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "login",
    props: {
      dialogLoginVisible: {
        type: Boolean,
        default: false
      },
      dialogRegVisible: {
        type: Boolean,
        default: false
      },
      dialogAboutVisible:{
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        rules:{
          loginUsername:[
            {  required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          loginPassword:[
            {  required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        loginform: {
          loginUsername: "",
          loginPassword:"",
        },
        regform:{
          regUsername: "",
          regPassword:"",
        },
        formWidth: '480px',
        formLabelWidth: '80px'
         }
    },

    methods: {
      closeDialog(form) {
        this.$emit("closeDialog");
        if(form){
          this.resetForm(form)
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get('/api/login')
              .then((data)=>{
                  console.log(data)
                },
                function (error) {
                  console.log(error)
                }
              )
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

  }

</script>

<style scoped>

</style>
