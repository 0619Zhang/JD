<template>
    <div class="msWrap">
        <div class="title">
            <img src="/icon/seckill-icon.png" alt="">
            <span>掌上秒杀</span><span>京选轮番秒</span>
        </div>
        <ul class="content">
            <li v-for="(item,index) in list" :key="index">
                <img :src="item.img" alt=""><br>
                <span>￥{{item.n_price}}</span><br>
                <span>￥{{item.o_price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {img:'/img/pro01.jpg',n_price:80,o_price:150},
                {img:'/img/pro02.jpg',n_price:10,o_price:30},
                {img:'/img/pro03.jpg',n_price:40,o_price:100},
                {img:'/img/pro04.jpg',n_price:80,o_price:140},
                // {img:'/img/pro05.jpg',n_price:90,o_price:120},
                // {img:'/img/pro07.jpg',n_price:100,o_price:110},
                
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .msWrap{
        width: 100%;
        line-height: 0.2rem;
        .title{
            display: flex;
            align-items: center;
            position: relative;
            img{
                width: 0.2rem;
                vertical-align: middle;
                margin-left: 0.2rem;
                
            }
            span:nth-of-type(1){
                // float: right;
             
                margin-left: 0.1rem;
                font-size: 0.16rem;
                color:#DF525D;
            }
            span:nth-of-type(2){
                // float: right;
                position: absolute;
                right: 0rem;
                margin-right: 0.15rem;
                font-size: 0.12rem;
                color:#F2383E;
            }
        }
        .content{
            display: flex;
            // flex-wrap: wrap;
            li{
                width: 25%;
                text-align: center;
                img{
                    width: 100%;
                }
                span:nth-of-type(1){
                    color: red;
                    font-size: 0.14rem;
                    font-weight: 800;
                }
                span:nth-of-type(2){
                    font-size: 0.12rem;
                    color: grey;
                    text-decoration: line-through;
                }
            }
        }
    }
</style>