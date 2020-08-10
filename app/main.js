import Vue from "nativescript-vue";
import VueDevtools from "nativescript-vue-devtools";
import routes from "~/router";
import store from "~/store";
import sideDrawer from "~/components/sideDrawer";

if (TNS_ENV !== "production") {
	Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";
Vue.config.suppressRenderLogs = true;

Vue.prototype.$routes = routes;

Vue.registerElement(
	"RadSideDrawer",
	() => require("nativescript-ui-sidedrawer").RadSideDrawer
);

new Vue({
	store,
	render: (h) => h(sideDrawer),
}).$start();
