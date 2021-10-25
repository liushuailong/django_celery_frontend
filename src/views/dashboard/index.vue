<template>
  <div>
    <div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="item in piclist" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="index-text">
      <span>春水初生，春林初盛，春风十里，不如你 。<span class="right-info">---《 春》  冯唐</span></span>
      <el-divider></el-divider>
      <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
      <el-divider></el-divider>
      <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      piclist: [
        "/media/carouslpic/carousl-1.jpeg",
        "/media/carouslpic/carousl-2.jpeg",
        "/media/carouslpic/carousl-3.jpeg",
        "/media/carouslpic/carousl-4.jpeg",
      ]
    }
  }

}
</script>

<style scoped>
.block {
  width: 960px;
  height: auto;
  margin: 20px auto 50px;
}

.el-carousel__item img {
    width: 100%;
    height: 100%
}

.index-text {
  width: 960px;
  height: auto;
  margin: 0 auto;
}

.right-info {
  float: right;
}
</style>