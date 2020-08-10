
<template lang="html">
  <Page actionBarHidden="true">
    <ScrollView ref="scrollView">
      <StackLayout>
        <TextField
          ref="searchField"
          v-model="searchInput"
          hint="Search here"
        />
        <WrapLayout
          ref="itemLayout"
          ~mainContent
        >
          <Image
            v-for="item in filteredItems"
            :key="item.id"
            :width="iconWidth"
            :src="`~/assets/images/${item.image || item.name.replace(/ /g, '_')}.png`"
            @tap="openItemModal(item)"
          />
        </WrapLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
	import itemListMixin from "../mixins/itemListMixin";
	import items from "../data/items.json";

	export default {
		mixins: [itemListMixin],
		data() {
			return {
				searchInput: "",
			};
		},
		computed: {
			filteredItems() {
				return items
					.filter((item) =>
						item.name
							.toLowerCase()
							.includes(this.searchInput.toLowerCase().trim())
					)
					.sort((a, b) => {
						const itemA = a.name.toUpperCase();
						const itemB = b.name.toUpperCase();

						let comparison = 0;
						if (itemA > itemB) {
							comparison = 1;
						} else if (itemA < itemB) {
							comparison = -1;
						}
						return comparison;
					});
			},
		},
	};
</script>

<style lang="scss" scoped>
	Image {
		margin-bottom: 10;
	}

	TextField {
		height: 40;
	}

	StackLayout {
		margin: 0 40;
	}

	TextField,
	WrapLayout {
		width: 100%;
		margin: 0;
	}

	WrapLayout {
		margin-top: 20;
	}
</style>