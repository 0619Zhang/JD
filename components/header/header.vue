<template>
    <div class="headerWrap">
        <img src="/img/buy-logo.png" alt="">
        <div class="search"></div>
        <input type="text" placeholder="请输入要搜索的内容">
        <button>登录</button>
    </div>
</template>

<style lang="less" scoped>
.headerWrap{
    width: 100%;
    position: relative;
    .search{
        position: absolute;
        top: 0.15rem;
        left: 0.6rem;
        width: 0.3rem;
        height: 0.3rem;
        background: url('/icon/sprites.png') no-repeat;
        background-position: -1.4rem 0rem;
        z-index: 3;
    }
    img{
        width: 0.25rem;
        position: absolute;
        top: 0.14rem;
        left: 0.3rem;
        z-index: 2;
    }
    input{
        width: 2.5rem;
        height: 0.35rem;
        border:none;
        outline: none;
        border-radius: 0.2rem;
        position: absolute;
        top: 0.1rem;
        left: 0.2rem;
        text-indent: 6.5em;
        z-index: 1;
        // display: none;
    }
    button{
        width: 0.25rem;
        background-color:transparent;
        border-style: none;
        color: white;
        position: absolute;
        top: 0.2rem;
        left: 2.8rem;
    }
}
</style>