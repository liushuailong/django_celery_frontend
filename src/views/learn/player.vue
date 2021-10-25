<template>
  <div class="app-main-container">
    <div id="dplayer"></div>
  </div>
</template>

<script>

import DPlayer from 'dplayer';

// const dp = new DPlayer(options);
export default {
  name: "Dplayer",
  methods: {
    dplayer(url) {
      const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        screenshot: true,
        video: {
          url,
        }
      })
    }
  },
  mounted() {
    this.dplayer('/media/wrape_axio_get.flv')
  }
}
</script>

<style scoped>

</style>