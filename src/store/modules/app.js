export default {
    namespaced: true,
    state: {
        sidebar: {
            // opened: true,
            opened: (() => {
                let width =window.screen.width;
                return width >= 640
            })(),
            withoutAnimation: false,
        },
        settings: {
            fixedHeader: false,
        },
    },
    mutations: {
        toggleSidebar: state => {
            state.sidebar.opened = !state.sidebar.opened;
            state.sidebar.withoutAnimation = false;
            console.log(state.sidebar.opened);
        },
        closeSidebar: (state, withoutAnimation) => {
            state.sidebar.opened = false;
            state.sidebar.withoutAnimation = withoutAnimation;
        },
        changeSetting: (state, {key, value}) => {
            if (state.hasOwnProperty(key)) {
                state.settings[key] = value;
            }
        }
    }
}