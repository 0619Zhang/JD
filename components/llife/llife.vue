<template>
    <div class="llWrap">
        <div class="title">
            <img src="/img/aishenghuo.jpg" alt="">
        </div>
        <div class="pic">
            <div class="left">
                <img src="/img/cp1.jpg" alt="">
            </div>
            <div class="right">
                <img src="/img/cp2.jpg" alt=""><br>
                <img src="/img/cp3.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.llWrap{
    width: 100%;
    padding-top: 0.1rem;
    .title{
        img{
            width: 100%;
        }
    }
    .pic{
        width: 100%;
        .left{
            width: 50%;
            display: inline-block;
            img{
                width: 100%;
                height: 100%;
                border: 1px solid rgb(206, 205, 205);
            }
        }
        .right{
            width: 50%;
            display: inline-block;
            line-height: 0;
            img{
                width: 100%;
                height: 0.86rem;
                border: 1px solid rgb(206, 205, 205);
            }
        }
    }
}
</style>