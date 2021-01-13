import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Login from "./views/Login.vue";
import Join from "./views/Join.vue";
import Parent from "./views/Parent.vue";
import Overlay from "./views/Overlay.vue";
import list from "./views/list.vue"

import store from "./store";

Vue.use(VueRouter);

const authenticated = (_to, _from, next) => {
    console.log(store.state.accessToken);
    if (!store.state.accessToken) {
        next('/login');
        return;
    }
    next();
}

export default new VueRouter({
    mode : "history",
    routes : [
        {
            path: "/"
            , component: Home
        }
        , {
            path: "/about"
            , component: About
            , beforeEnter: authenticated
        }
        , {
            path: "/login"
            , component: Login
        }
        , {
            path: "/join"
            , component: Join
        }
        , {
            path: "/parent"
            , component: Parent
            , beforeEnter: authenticated
        }
        , {
            path: "/overlay"
            , component: Overlay
        }
        , {
            path: "/list"
            , component: list
        }
    ]
});