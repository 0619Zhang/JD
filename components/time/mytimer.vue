<template>
  <span style="color: #ff5454;">{{time}}</span>
</template>



<script>
  export default{
    data () {
      return {
        time : '',
        flag : false
      }
    },
    mounted () {
      let time = setInterval(()=>{
        if(this.flag == true){
          clearInterval(time)
        }
        this.timeDown()
      },1000)
    },
    props : {
      endTime : {
        type : String
      }
    },
    methods : {
      timeDown () {
        const endTime = new Date(this.endTime)
        const nowTime = new Date();
        let leftTime = parseInt((endTime.getTime()-nowTime.getTime())/1000)
        let h = 8
        let m = 1
        let s = 1
        if(leftTime <= 0){
          this.flag = true
          this.$emit('time-end')
        }
        this.time = `${h}小时${m}分${s}秒`
      },
      formate (time) {
        if(time>=10){
          return time
        }else{
          return `0${time}`
        }
      }
    }
  }
</script>

<style scoped>
</style>