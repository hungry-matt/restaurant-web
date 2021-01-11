import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import Join from "./views/Join";

Vue.use(VueRouter);

export default new VueRouter({
    mode : "history",
    routes : [
        {
            path: "/",
            component: Home
        }
        , {
            path: "/about",
            component: About
        }
        , {
            path: "/login"
            , component: Login
        }
        , {
            path: "/join"
            , component: Join
        }
    ]
});