<template>
  <div class="home">
   <swiper ref="mySwiper" :options="swiperOptions" >
    <swiper-slide v-for="(item,index) in lbimg" :key="index">
        <img :src="item" alt="">
    </swiper-slide>
    
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
        Swiper,
        SwiperSlide
    },
  data(){
    return{
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            
          },
          direction:'horizontal',
          loop:true,
          navigation: {
    　　　　nextEl: '.swiper-button-next',
    　　　　prevEl: '.swiper-button-prev'
    　　},
           pagination: { el: '.swiper-pagination' }, // 分页按钮
            paginationClickable: true,
     
        },
        lbimg:['/img/1.jpg','/img/2.jpg','/img/3.jpg','/img/4.jpg','/img/5.jpg','/img/6.jpg','/img/7.jpg','/img/8.jpg']
    }
  },
   computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods:{

    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(1, 1000, false)
    }
}
</script>

<style lang="less" scoped>
    .home{
        width: 100%;
        img{
            width: 100%;
        }
    }
</style>