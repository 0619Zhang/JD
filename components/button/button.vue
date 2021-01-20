<template>
    <div class="btnWrap">
        <ul class="first">
            <li>登录</li>
            <li>注册</li>
            <li>反馈</li>
            <li @click="toTop">返回顶部</li>
        </ul>
        <ul class="second">
            <li><div class="a"></div><br>客户端</li>
            <li><div class="b"></div><br>触屏版</li>
            <li><div class="c"></div><br>电脑版</li>
        </ul>
        <div class="banQuan">
            <span>Copyright &copy; 2004-2008 京东JD.com版权所有</span>
        </div>
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
        toTop(){
              document.body.scrollTop = document.documentElement.scrollTop = 0
                this.isShowimg = false
        }
    }
}
</script>

<style lang="less" scoped>
.btnWrap{
    
    
    .first{
        padding-left:0.15rem;
        padding-right: 0.15rem;
        list-style-type: none;
        display: flex;
        width: 100%;
        border-top: 1px solid grey;
         border-bottom: 1px solid grey;
        li{
            width: 25%;
            text-align: center;
            display: inline-block;
            color: grey;
            font-size: 0.14rem;
           margin-top: 0.1rem;
           margin-bottom: 0.1rem;
            border-left: 1px solid grey;
        }
        li:first-child{
            border-left: none;
        }
    }
    .second{
        list-style-type: none;
        width: 100%;
        display: flex;
         border-bottom: 1px solid grey;
        li{
            display: inline-block;
            width: 33.3333%;
            text-align: center;
            color: grey;
            font-size: 0.14rem;
           div{
                width: 0.56rem;
                height: 0.56rem;
                background: url('/icon/sprites.png')  no-repeat;
                 margin: 0.05rem auto;
                margin-bottom: -0.1rem;
           }
            .a{            
                background-position: -2.05rem -1.19rem; 
            }
             .b{      
                background-position: -0.68rem -1.19rem;  
            }
             .c{         
                background-position: -1.36rem -1.19rem; 
            }
        }
    }
    .banQuan{
        text-align: center;
        color: grey;
    }
}
</style>