<template>
  <el-container>
    <el-header>HelloElementUI</el-header>
    <el-main>
      <el-input v-model="inputValue" placeholder="请输入名字"></el-input>
      <el-button type="primary" @click="open">打个招呼</el-button>
    </el-main>
  </el-container>

</template>

<script>
export default {
  name: 'HelloElementUI',
  data(){
    return {
      inputValue:null
    }
  },
  methods:{
    open() {
      this.$alert('Hello, '+this.inputValue, '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    }
  }
}
</script>

<style scoped>

</style>