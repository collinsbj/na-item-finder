import ItemModal from "../components/ItemModal";

const platformModule = require("tns-core-modules/platform");

export default {
	data() {
		return {
			iconWidth: 0,
		};
	},
	mounted() {
		this.iconWidth = Math.floor(
			(platformModule.screen.mainScreen.widthDIPs - 80) / 4
		);
	},
	methods: {
		openDrawer() {
			this.$parent.$parent.$refs.drawer.nativeView.showDrawer();
		},
		openItemModal(item) {
			this.$showModal(ItemModal, { props: { data: item } });
		},
	},
};
