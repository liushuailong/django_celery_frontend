<link rel="stylesheet" href="../styles/mixin.scss">
<template>
  <div class="app-wrapper">
<!--    侧边栏 -->
<!--    <div>侧边栏</div>-->
    <sidebar class="sidebar-container" :class="classObj"/>
<!--    内容容器-->
    <div :class="{mainContainerHide: mainContainerHide, mainContainer: !mainContainerHide}">
      <!--    顶部导航栏 -->

      <div :class="{ 'fixed-header' : fixedHeader }">
        <nav-bar />
      </div>
      <!--    内容区-->
      <app-main />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from "vuex";
import Sidebar from './components/Sidebar/index.vue';
import AppMain from './components/AppMain.vue';
import NavBar from './components/NaveBar.vue';

export default {
  name: "Layout",
  components: {
    Sidebar,
    AppMain,
    NavBar,
  },
  setup() {
    const store = useStore();
    const sidebar = computed(() => store.state.app.sidebar);
    const fixedHeader = computed( () => store.state.app.settings.fixedHeader);
    const mainContainerHide = computed( () => !store.state.app.sidebar.opened);
    const classObj = computed( () => ({
      hideSidebar: !sidebar.value.opened,
      openSidebar: sidebar.value.opened,
      withoutAnimation: sidebar.value.withoutAnimation,
    }));
    return {
      classObj,
      fixedHeader,
      mainContainerHide
    };
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';
@import '../styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  //position: fixed;
  top: 0;
  right: 0;
  //z-index: 9;
  //width: calc(100% - #{$sideBarWidth});
  //width: 0;
  transition: width 0.28s;
}


.hideSidebar {
   width: 0 !important;
}

.mainContainerHide {
  min-height: 100%;
  transition: margin-left .28s;
  margin-left: 0 !important;
}

</style>