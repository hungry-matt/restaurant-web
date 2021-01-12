import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import Join from "./views/Join";
import Parent from "./views/Parent";

import store from "./store/store";

Vue.use(VueRouter);

const authenticated = (_to, _from, next) => {
    if (!store.state.accessToekn) {
        next('/login');
        return;
    }

    next();
}

export default new VueRouter({
    mode : "history",
    routes : [
        {
            path: "/",
            component: Home,
            beforeEnter: authenticated
        }
        , {
            path: "/about",
            component: About,
            beforeEnter: authenticated
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
        }
    ]
});