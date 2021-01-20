<template>
    <div class="selectWrap">
        <ul>
            <li v-for="(item,index) in selectList" :key="index">
                <img :src="item.img" alt=""><br>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selectList:[
                {img:'/img/nav0.png',title:'分类查询'},
                {img:'/img/nav1.png',title:'物流查询'},
                {img:'/img/nav2.png',title:'购物车'},
                {img:'/img/nav3.png',title:'我的京东'},
                {img:'/img/nav4.png',title:'京东生鲜'},
                {img:'/img/nav5.png',title:'领券中心'},
                {img:'/img/nav6.png',title:'京东超市'},
                {img:'/img/nav7.png',title:'我的关注'},
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .selectWrap{
        ul{
           list-style-type: none;
           display: flex;
           flex-wrap: wrap;
           li{
               width: 25%;
            //    border: 1px solid black;
               text-align: center;
               line-height: 0.2rem;
               img{
                   width: 0.5rem;
               }
              
           }
        }
    }
</style>