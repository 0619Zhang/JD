<template>
  <div class="home">
    <!-- 顶部搜索区域 -->
    <div class="search">
      <myheader></myheader>
    </div>
    <!-- 轮播图片 -->
    <div class="lb">
      <lb></lb>
    </div>
    <!-- 选择区域 -->
    <div class="select">
      <myselect></myselect>
    </div>
    <!-- 中心图片 -->
    <div class="centerPic">
      <img src="/img/fuli.jpg" alt="">
    </div>
    <!-- 掌上秒杀 -->
    <div class="miaosha">
      <myms></myms>
    </div>
    <!-- 爱生活 -->
    <div class="mylife">
        <mylife></mylife>
    </div>
    <!-- 推荐 -->
    <div class="tuijian">
        <myTuijian></myTuijian>
    </div>
    <!-- 按钮 -->
    <div class="btn">
        <mybtn></mybtn>
    </div>
    <!-- 空 -->
    <div class="empty">

    </div>
    <!-- 回到顶部 -->
    <div class="top">
      <mygoTop></mygoTop>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import lb from '@/components/lb/lb'
import myheader from '@/components/header/header'
import myselect from '@/components/select/select'
import mytimer from '@/components/time/mytimer'
import myms from '@/components/miaosha/miaosha'
import mylife from '@/components/llife/llife'
import myTuijian from '@/components/tuijian/tuijian'
import mybtn from '@/components/button/button'
import mygoTop from '@/components/goTop/goTop'

export default {
  data(){
    return{
    }
  },
  components: {
    HelloWorld,
    lb,
    myheader,
    myselect,
    mytimer,
    myms,
    mylife,
    myTuijian,
    mybtn,
    mygoTop,
  },
  
}
</script>

<style lang="less" scoped>
.home{
  background-color: rgb(243, 242, 242);
  .search{
    position: absolute;
    z-index: 2;
  }
  .lb{
    z-index: 1;
    width: 100%;
    // opacity: 0;
  }
  .select{
    margin-top: 0.05rem;
    border-bottom: 1px solid rgb(209, 209, 209);
    background-color: white;
  }
  .centerPic{
    width: 100%;
    margin-top: 0.05rem;
    background-color: white;
    img{
      width: 100%;
    }
  }
  .miaosha{
    margin-top: 0.05rem;
    background-color: white;
  }
  .btn{
    margin-top: 0.1rem;
  }
  .empty{
    width: 100%;
    height: 0.6rem;
    // border: 1px solid black;
  }
  .top{
    position: fixed;
    bottom: 0.6rem;
    right: 0.1rem;
  }
}
</style>