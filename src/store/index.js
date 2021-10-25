import { createStore } from 'vuex';
import user from "./modules/user.js";
import permission from "./modules/permission.js";
import app from './modules/app.js';

const store = createStore({
    modules: {
        user,
        permission,
        app,
    },
    getters: {
        avatar: state => state.user.avatar,
        token: state => state.user.token,
        roles: state => state.user.roles,
        permissionRoutes: state => state.permission.routes,
        sidebar: state => state.app.sidebar,
        settings: state => state.app.settings,
    },
});

export default store;