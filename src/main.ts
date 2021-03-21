import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

Vue.use(VueApollo);

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/main.css";

const apolloClient = new ApolloClient({
	// You should use an absolute URL here
	uri: "http://localhost:4000/graphql",
	credentials: "include",
});

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
});

new Vue({
	router,
	apolloProvider,
	render: (h) => h(App),
}).$mount("#app");
