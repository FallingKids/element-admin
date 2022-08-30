<template>
  <el-container>
  <el-aside width="200px">
    <Aside/>
  </el-aside>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #ffffff;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    height: 1000px;
  }
</style>

<script>
import Header from './Header.vue';
import Aside from './Aside.vue';
  export default {
    name: "Layout",
    components: { Header, Aside }
};
</script>
