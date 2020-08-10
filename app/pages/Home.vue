
<template lang="html">
  <Page actionBarHidden="true">
    <GridLayout
      ~mainContent
      columns="*"
      rows="*"
    >
      <TextField
        class="searchInput"
        textAlignment="center"
        color="pink"
        returnKeyType="search"
        :text="searchValue"
        hint="Start typing or swipe left to start"
      />
    </GridLayout>
  </Page>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: "",
			};
		},
		methods: {
			openDrawer() {
				this.$parent.$parent.$refs.drawer.nativeView.showDrawer();
			},
		},
	};
</script>

<style lang="scss">
	TextField {
		border-bottom-color: pink;
		border-bottom-width: 2px;
		height: 32;
		width: 80%;
	}
</style>