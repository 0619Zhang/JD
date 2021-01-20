<template>
    <div class="tabbarWrap">
        <div class="item" v-for="(item,index) in tabList" :key="index" @click="change(index)">
            <img :src="item.n_img" alt="" v-if="!item.flag">
            <img :src="item.a_img" alt="" v-else>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tabList:[
                {n_img:'/icon/icon-home.png',a_img:'/icon/icon-home-active.png',flag:true,url:'/home'},
                {n_img:'/icon/icon-catergry.png',a_img:'/icon/icon-catergry-active.png',flag:false,url:'/fenLei'},
                {n_img:'/icon/icon-find.png',a_img:'/icon/icon-find-active.png',flag:false,url:'/find'},
                {n_img:'/icon/icon-cart.png',a_img:'/icon/icon-cart.png',flag:false,url:'/shoppingcar'},
                {n_img:'/icon/icon-me.png',a_img:'/icon/icon-me-active.png',flag:false,url:'/mine'},
            ]
        }
    },
    methods:{
        change(index){
            for(var i=0;i<this.tabList.length;i++){
                this.tabList[i].flag=false;
            }
            this.tabList[index].flag=true;
            this.$router.push(this.tabList[index].url)
        }
    }
}
</script>

<style lang="less" scoped>
    .tabbarWrap{
        height: 0.6rem;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #d8d8d8;
        display: flex;
        position: fixed;
        bottom: 0;
        .item{
            flex: 1;
            width: 100%;
            img{
                width: 100%;
                margin-top: 8%;
            }
        }
    }
</style>
