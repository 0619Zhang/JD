<template>
    <div class="topWrap">
        <img src="/icon/top.png" alt="" @click="gotop">
        
    </div>
</template>

<script>
export default {
     data(){
        return{
            isShowing:false
        }
    },
    methods:{
        gotop(){
              document.body.scrollTop = document.documentElement.scrollTop = 0
                this.isShowimg = false
        }
    }
}
</script>

<style lang="less" scoped>
    .topWrap{
        width: 100%;
       img{
           width: 0.4rem;
       }
      
    }
</style>