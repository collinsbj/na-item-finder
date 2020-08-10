<template lang="html">
  <RadSideDrawer
    ref="drawer"
    drawerTransition="PushTransition"
  >
    <DrawerContent ~drawerContent />
    <Frame ~mainContent>
      <Home />
    </Frame>
  </RadSideDrawer>
</template>

<script>
	import Home from "../pages/Home";
	import DrawerContent from "./drawerContent";

	export default {
		components: {
			Home,
			DrawerContent,
		},
		data() {
			return {
				page: "Home",
			};
		},
	};
</script>

<style lang="scss">
	@import "./app/app.scss";
</style>