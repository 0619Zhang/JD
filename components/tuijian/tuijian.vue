<template>
    <div class="TjWrap">
        <div class="logo">
            <img src="/icon/upload.png" alt=""><span>为您推荐</span>
        </div>

        <ul class="content">
            <li v-for="(item,index) in list" :key="index">
                <img :src="item.img" alt=""><br>
                <span>{{item.title}}</span><br>
                <span>￥{{item.price}}</span><br>&nbsp;<br>
                <span>好评率{{item.haoPin}}%</span>
                <button>看相似</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {img:'/img/item01.jpg',title:'晋腾 不锈钢面条机手动压面机家用压面器小型手压手摇饸饹机打面机 压面机-五模具',price:99,haoPin:94},
                {img:'/img/item02.jpg',title:'晋腾 不锈钢面条机手动压面机家用压面器小型手压手摇饸饹机打面机 压面机-五模具',price:199,haoPin:99},
                {img:'/img/item03.jpg',title:'晋腾 不锈钢面条机手动压面机家用压面器小型手压手摇饸饹机打面机 压面机-五模具',price:1988,haoPin:99},
                {img:'/img/item04.jpg',title:'晋腾 不锈钢面条机手动压面机家用压面器小型手压手摇饸饹机打面机 压面机-五模具',price:23.80,haoPin:99},
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.TjWrap{
    padding-top: 0.1rem;
    width: 100%;
    .logo{
        // text-align: center;
        // letter-spacing: 0.1rem;
        margin-bottom: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            vertical-align: middle;
            margin-right: 0.1rem;
        }
        span{
            color: grey;
            font-size: 0.12rem;
        }
    }
    .content{
        list-style-type: none;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background-color: #F0F2F5;
        li{
            width: 50%;
            line-height: 0.13rem;
            border: 1px solid rgb(216, 216, 216);
            padding-bottom: 0.02rem;
            img{
                width: 100%;
            }
            span:nth-of-type(1){
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            span:nth-of-type(2){
                font-size: 0.15rem;
                color: red;
                font-weight: bold;
            }
            span:nth-of-type(3){
                color: grey;
            }
            button{
                float: right;
                margin-right: 0.05rem;
                color: rgb(116, 116, 116);
                letter-spacing: 0.01rem;
            }
        }
    }
}
</style>