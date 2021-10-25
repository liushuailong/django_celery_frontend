<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveTesxt"
        mode="vertical"
      >
      <el-submenu index="/artical">
        <template v-slot:title>
          <i class="el-icon-notebook-1"></i>
          <span>日志读书博客</span>
        </template>
        <el-menu-item index="/artical/create">
          <router-link to="/artical/create">
            创建文章
          </router-link>
        </el-menu-item>
        <el-menu-item index="/artical/list">
          <router-link to="/artical/list">
            文章列表
          </router-link>
        </el-menu-item>
<!--        <el-menu-item-group title="日记">-->
<!--          <el-menu-item index="/artical/diary_list">-->
<!--            <router-link to="/artical/diary_list">-->
<!--              日记列表-->
<!--            </router-link>-->
<!--          </el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-menu-item-group title="读书笔记">-->
<!--          <el-menu-item index="/artical/reading_list">-->
<!--            <router-link to="/artical/reading_list">-->
<!--              读书笔记列表-->
<!--            </router-link>-->
<!--          </el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-menu-item-group title="博客">-->
<!--          <el-menu-item index="/artical/blog_list">-->
<!--            <router-link to="/artical/blog_list">-->
<!--              博客列表-->
<!--            </router-link>-->
<!--          </el-menu-item>-->
<!--        </el-menu-item-group>-->
      </el-submenu>
      <el-submenu index="/data_analysis">
        <template v-slot:title>
          <i class="el-icon-notebook-1"></i>
          <span>数据分析与可视化</span>
        </template>
        <el-menu-item index="/data_analysis/dashboard">
          <router-link to="/data_analysis/dashboard">
            数据分析与可视化简介
          </router-link>
        </el-menu-item>
        <el-menu-item index="/data_analysis/echart">
          <router-link to="/data_analysis/echart">
            echart
          </router-link>
        </el-menu-item>
        <el-menu-item index="/data_analysis/d3">
          <router-link to="/data_analysis/d3">
            d3
          </router-link>
        </el-menu-item>
<!--        <el-menu-item-group title="数据分析">-->
<!--          <el-menu-item index="#">文章列表</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-menu-item-group title="数据可视化">-->
<!--          <el-menu-item index="#">文章列表</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-menu-item-group title="数据建模">-->
<!--          <el-menu-item index="#">文章列表</el-menu-item>-->
<!--        </el-menu-item-group>-->
      </el-submenu>
      <el-submenu index="/learn">
        <template v-slot:title>
          <i class="el-icon-notebook-2"></i>
          <span>前端技术练习</span>
        </template>
        <el-menu-item index="/learn/player">
          <router-link to="/learn/player">
            <i class="el-icon-video-play"></i>
            视频播放
          </router-link>
        </el-menu-item>
        <el-menu-item index="/learn/pdf-viewer">
          <router-link to="/learn/pdf-viewer">
            <i class="el-icon-video-play"></i>
            pdf展示
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/multi-omics">
        <template v-slot:title>
          <router-link to="/multi-omics">
            <i class="el-icon-data-analysis"></i>
            多组学整合分析
          </router-link>
        </template>
        <el-menu-item index="/multi-omics/analysis-list">
          <router-link to="/multi-omics/analysis-list">
            <i class="el-icon-data-analysis"></i>
            分析列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/multi-omics/analysis-app-card">
          <router-link to="/multi-omics/analysis-app-card">
            <i class="el-icon-data-analysis"></i>
            多组学应用列表
          </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    </el-scrollbar>
  </div>

</template>

<script>
import variables from 'styles/variables.module.scss';
// import { parseScssVariables } from "utils/parse.js";
import { mapGetters } from 'vuex';
// import SidebarItem from './SidebarItem.vue';

export default {
  name: "Sidebar",
  components: {
    // SidebarItem,
  },
  mounted() {
    // console.log(this.$route);
    // console.log(this);
    // console.log(this.permissionRoutes);
    // console.log(this)
  },
  computed: {
    ...mapGetters([
        'sidebar',
        'permissionRoutes',
    ]),
    variables() {
      // parseScssVariables 作用是什么？
      // return parseScssVariables(variables);
      return variables;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if ( meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  }
}
</script>

<style scoped>

</style>