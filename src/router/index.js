import { createRouter,  createWebHashHistory } from 'vue-router';
import store from '@/store';
import { getToken } from "utils/auth";
import { Message } from "element3";

const Login = () => import("comps/Login.vue");

import Layout from 'layout/index.vue';

export const constantRoutes = [
    {
        path: '/login',
        component: Login,
        hidden: true,
    },
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                component: () => import("views/dashboard/index.vue"),
                name: "Dashboard",
                meta: {
                    title: "首页",
                    icon: "el-icon-s-home",
                    affix: true
                },
            },
        ],
    },
    {
        path: "/artical",
        component: Layout,
        redirect: "/artical/list",
        meta: {
            title: "文章",
            icon: "el-icon-user-solid",
        },
        children: [
            {
                path: "list",
                component: () => import("views/artical/list.vue"),
                meta: {
                    title: "文章详情",
                    icon: "el-icon-s-data",
                }
            },
            {
                path: "create",
                component: () => import("views/artical/create.vue"),
                meta: {
                    title: "创建文章",
                    icon: "el-icon-edit",
                },
            },
            {
                path: "edit/:id(\\d+)",
                component: () => import("views/artical/edit.vue"),
                hidden: true, // 不需要导航菜单
                meta: {
                    title: "编辑",
                    activeMenu: "/artical/create", // 左侧导航菜单相关激活url
                },
            },
            {
                path: "detail/:id(\\d+)",
                component: () => import('views/artical/detail.vue'),
                hidden: true,
                meta: {
                    title: "详情",
                    activeMenu: '/artical/list',
                }
            }
        ],
    },
    {
        path: '/data_analysis',
        component: Layout,
        meta: {
            title: "数据分析与可视化",
            icon: 'el-icon-sticks',
        },
        children: [
            {
                path: 'dashboard',
                component: () => import('views/data_analysis/index.vue'),
                hidden: false,
                meta: {
                    title: '数据分析与可视化简介',
                    icon: 'el-icon-edit'
                },
            },
            {
                path: 'echart',
                component: () => import('views/data_analysis/echart.vue'),
                hidden: false,
                meta: {
                    title: '数据可视化: echart',
                    icon: 'el-icon-edit'
                },
            },
            {
                path: 'd3',
                component: () => import('views/data_analysis/d3.vue'),
                hidden: false,
                meta: {
                    title: '数据可视化: d3',
                    icon: 'el-icon-edit'
                },
            },
        ],
    },
    {
        path: '/learn',
        component: Layout,
        meta: {
            title: "学习",
            icon: 'el-icon-sticks',
        },
        children: [
            {
                path: 'player',
                component: () => import('views/learn/player.vue'),
                hidden: true,
                meta: {
                    title: '播放器',
                    icon: 'el-icon-video-play',
                }
            },
            {
                path: 'pdf-viewer',
                component: () => import('views/learn/pdfView.vue'),
                hidden: true,
                meta: {
                    title: 'pdf浏览',
                    icon: 'el-icon-video-play'
                }
            }
        ],

    },
    {
        path: '/multi-omics',
        component: Layout,
        redirect: "/multi-omics/index",
        meta: {
            title: '多组学整合分析',
            icon: 'el-icon-data-analysis',
        },
        children: [
            {
                path: 'index',
                component: () => import('views/multi_omics/index.vue'),
                hidden: false,
                meta: {
                    title: '多组学分析首页',
                    icon: 'el-icon-data-analysis'
                }
            },
            {
                path: 'analysis-list',
                component: () => import('views/multi_omics/analysis_list.vue'),
                hidden: false,
                meta: {
                    title: '分析列表',
                    icon: 'el-icon-data-analysis'
                }
            },
            {
                path: 'analysis-app-card',
                component: () => import('views/multi_omics/analysis_app_card.vue'),
                hidden: false,
                meta: {
                    title: '多组学应用列表',
                    icon: 'el-icon-data-analysis'
                }
            }
        ]
    }

];


export const asyncRoutes = [
    // {
    //     path: "/players",
    //     component: Layout,
    //     meta: {
    //         title: "玩家管理",
    //         icon: "el-icon-user-solid",
    //     },
    //     children: [
    //         {
    //             path: "list",
    //             component: () => import("views/dashboard/index.vue"),
    //             meta: {
    //                 title: "玩家列表",
    //                 icon: "el-icon-document",
    //             },
    //         },
    //         {
    //             path: "create",
    //             component: () => import("views/dashboard/index.vue"),
    //             meta: {
    //                 title: "创建玩家",
    //                 icon: "el-icon-edit",
    //             },
    //         },
    //         {
    //             path: "edit/:id(\\d+)",
    //             component: () => import("views/dashboard/index.vue"),
    //             hidden: true, // 不需要导航菜单
    //             meta: {
    //                 title: "editPlayer",
    //                 activeMenu: "/players/list", // 左侧导航菜单相关激活url
    //             },
    //         },
    //     ],
    // },
    //
    // {
    //     path: "/heros",
    //     component: Layout,
    //     alwaysShow: true,
    //     redirect: "/heros/banpick",
    //     meta: {
    //         title: "英雄",
    //         icon: "el-icon-male",
    //     },
    //     children: [
    //         {
    //             path: "banpick",
    //             component: () => import("/@/views/hero/banpick.vue"),
    //             name: "BanPick",
    //             meta: {
    //                 title: "办选率统计",
    //                 icon: "el-icon-pie-chart",
    //             },
    //         },
    //         {
    //             path: "banpick/:id",
    //             component: () => import("/@/views/hero/banpick-detail.vue"),
    //             name: "BanPickDetail",
    //             hidden: true,
    //             meta: {
    //                 title: "办选率详情",
    //                 activeMenu: "/heros/banpick",
    //             },
    //         },
    //     ],
    // },
    //
    // {
    //     path: "/course",
    //     component: Layout,
    //     alwaysShow: true,
    //     meta: {
    //         title: "课程管理",
    //         icon: "el-icon-video-camera",
    //         roles: ["admin"],
    //     },
    //     children: [
    //         {
    //             path: "",
    //             name: "list",
    //             component: CourseList,
    //             meta: { title: "课程列表", icon: "el-icon-notebook-2" },
    //         },
    //         {
    //             path: "/course/:id",
    //             name: "detail",
    //             component: CourseDetail,
    //             hidden: true,
    //         },
    //         {
    //             path: "/course-add",
    //             name: "course-add",
    //             component: CourseAdd,
    //             hidden: true,
    //         },
    //     ],
    // },
    //
    // {
    //     path: "/example",
    //     component: Layout,
    //     redirect: "/example/list",
    //     name: "Example",
    //     meta: {
    //         title: "表格",
    //         icon: "el-icon-s-help",
    //     },
    //     children: [
    //         {
    //             path: "create",
    //             component: () => import("/@/views/example/create.vue"),
    //             name: "CreateArticle",
    //             meta: { title: "创建文章", icon: "el-icon-edit" },
    //         },
    //         {
    //             path: "edit/:id(\\d+)",
    //             component: () => import("/@/views/example/edit.vue"),
    //             name: "EditArticle",
    //             meta: {
    //                 title: "编辑文章",
    //                 noCache: true,
    //                 activeMenu: "/example/list",
    //             },
    //             hidden: true,
    //         },
    //         {
    //             path: "list",
    //             component: () => import("/@/views/example/list.vue"),
    //             name: "ArticleList",
    //             meta: { title: "文章列表", icon: "el-icon-document" },
    //         },
    //     ],
    // },
    //
    // {
    //     path: "/charts",
    //     component: Layout,
    //     redirect: "noRedirect",
    //     name: "Charts",
    //     alwaysShow: true,
    //     meta: {
    //         title: "图表",
    //         icon: "el-icon-pie-chart",
    //     },
    //     children: [
    //         {
    //             path: "line",
    //             component: () => import("/@/views/charts/line.vue"),
    //             name: "LineChart",
    //             meta: { title: "折线图", noCache: true },
    //         },
    //     ],
    // },
    //
    // // 下面配置会匹配所有path，匹配内容放入`$route.params.pathMatch`
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "NotFound",
    //     component: NotFound,
    //     hidden: true,
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
});

// 路由守卫
const whiteList = ["/login",]
router.beforeEach(async (to, from, next) => {
    // 用户是否登录
    const hasToken = getToken();
    if (hasToken) {
        // 已登录
        if (to.path === '/login') {
            // 重定向至首页
            next({path: '/'});
        } else {
            // 否则获取用户角色信息
            store.dispatch("permission/generateRoutes");
            next()
            // next({...to, replace: true});
            // try {
            //     next({...to, replace: true});
            // } catch (error) {
            //     console.log(error);
            //     await store.dispatch('user/resetToken');
            //     Message.error(error || 'has Error');
            //     next(`/login?redirect=${to.path}`);
            // }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
        }
    }
});

export default router