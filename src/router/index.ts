import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Me from "../components/Me.vue";
import Home from "../components/Home.vue";


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/me",
		name: "Me",
		component: Me,
	},
	{
		path: "/home",
		name: "home",
		component: Home,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;