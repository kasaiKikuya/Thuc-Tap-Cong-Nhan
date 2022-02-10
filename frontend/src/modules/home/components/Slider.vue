<template>
   
<el-carousel :interval="4000"  indicator-position="outside" width="1000">
    <el-carousel-item>
      <img class="item__image"  src="../../../../public/images/slide/rsz_slide2.jpg" alt="" />
   
    </el-carousel-item>
    <el-carousel-item>
      <img class="item__image"  src="../../../../public/images/slide/rsz_1screen-0.jpg" alt="" />
   
    </el-carousel-item>
    <el-carousel-item>
      <img class="item__image"  src="../../../../public/images/slide/slide10.jpg" alt="" />
   
    </el-carousel-item>
     
     
      
  </el-carousel>

</template>

<script>
export default {
    name: 'Slider',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
};
</script>

<style>
  .el-carousel-item{
    object-fit: contain;
    display :flex;
    justify-content: center;
    align-items: center;
    padding: 0 auto;
  }
  .el-carousel-item img{
    display: block;
    margin-left: auto;
    margin-right: auto;
   }
</style>
