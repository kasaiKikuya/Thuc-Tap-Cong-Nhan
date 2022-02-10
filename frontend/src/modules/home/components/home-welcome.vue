<template>
    <el-row gutter="20" >
        <h2>Tác giả nổi bật</h2>
  <el-col :span="6"  >
    <el-card :body-style="{ padding: '0px' }">
      <img src="../../../../public/images/author/Andrew Matthews.jpg">
      <div style="padding: 14px;">
        <span>Andrew Matthews</span>
       </div>
    </el-card>
  </el-col>

  <el-col :span="6"  >
    <el-card :body-style="{ padding: '0px' }">
      <img src="../../../../public/images/author/Dale Carnegie.jpg">
      <div style="padding: 14px;">
        <span>Dale Carnegie</span>
       </div>
    </el-card>
  </el-col>

    <el-col :span="6"  >
     <el-card :body-style="{ padding: '0px' }">
      <img src="../../../../public/images/author/Nguyễn Nhật Ánh.jpg">
      <div style="padding: 14px;">
        <span>Nguyễn Nhật Ánh</span>
       </div>
    </el-card>
    </el-col>

    <el-col :span="6"  >
     <el-card :body-style="{ padding: '0px' }">
      <img src="../../../../public/images/author/Rosie Nguyễn.jpg">
      <div style="padding: 14px;">
        <span>Rosie Nguyễn</span>
       </div>
    </el-card>
  </el-col>
     

  <h2>Tác phẩm nổi bật</h2>

  <el-col :span="6"  >
     <el-card :body-style="{ padding: '0px' }">
      <img src="../../../../public/images/book/sach-hay-dac-nhan-tam.jpg.webp">
      <div style="padding: 14px;">
        <span>Đắc nhân tâm</span>
       </div>
    </el-card>
  </el-col>
  <el-col :span="6"  >
     <el-card :body-style="{ padding: '0px' }">
      <img src="../../../../public/images/book/sach-hay-nha-gia-kim.jpg.webp">
      <div style="padding: 14px;">
        <span>Nhà giả kim</span>
       </div>
    </el-card>
  </el-col>

  <el-col :span="6"  >
     <el-card :body-style="{ padding: '0px' }">
      <img src="../../../../public/images/book/sach-hay-toi-ac-va-hinh-phat.jpg.webp">
      <div style="padding: 14px;">
        <span>Tội ác và Hình phạt</span>
       </div>
    </el-card>
  </el-col>

<el-col :span="6"  >
     <el-card :body-style="{ padding: '0px' }">
      <img src="../../../../public/images/book/sach-hay-tuoi-tre-dang-gia-bao-nhieu.jpg.webp">
      <div style="padding: 14px;">
        <span>Tuổi trẻ đáng giá bao nhiêu</span>
       </div>
    </el-card>
  </el-col>

</el-row>



</template>

<script>
import uuid from 'uuid/v4';


export default {
    name: 'home-welcome',
    data() {
        return {
            id: uuid(),
            currentDate: new Date()
        };
    },
    methods: {
       
    }
};
</script>

<style>
  
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 200px;
    height:230px;

    object-fit:cover;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .el-col{
    border-radius: 4px;
     
  }
  .el-col img{
    height: 250px;
  }
  h2{
    color:dodgerblue;
    
  }
</style>
