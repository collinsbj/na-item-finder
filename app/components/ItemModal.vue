
<template lang="html">
  <Page actionBarHidden="true">
    <StackLayout
      ~mainContent
      class="content-wrapper"
    >
      <GridLayout
        width="100%"
        columns="auto, *"
        rows="auto"
        orientation="horizontal"
        class="header-wrapper"
      >
        <Image
          col="0"
          row="0"
          width="80"
          :src="`~/assets/images/${data.image || data.name.replace(/ /g, '_')}.png`"
        />
        <Label
          col="1"
          row="0"
          :text="data.name" 
          textWrap="true"
        />
      </GridLayout>
      <StackLayout class="data-wrapper">
        <Label
          text="Description"
          class="type"
        />
        <Label
          :text="data.description"
          class="data"
          textWrap="true"
        />

        <template v-if="data.type === 'pet'">
          <Label
            text="HP"
            class="type"
          />
          <Label
            :text="data.hp || 'None'"
            class="data"
            textWrap="true"
          />
          <Label
            text="Evolves From"
            class="type"
          />
          <Label
            :text="data.evovles_from || 'None'"
            class="data"
            textWrap="true"
          />

          <Label
            text="Evolves To"
            class="type"
          />
          <Label
            :text="data.evovles_to || 'None'"
            class="data"
            textWrap="true"
          />
        </template>

        <Label
          text="Type"
          class="type"
        />
        <Label
          :text="data.type"
          class="capitalize data"
          textWrap="true"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
	export default {
		props: ["data"],
	};
</script>

<style lang="scss" scoped>
	.content-wrapper {
		border-color: pink;
		border-right-width: 4px;
		border-top-width: 4px;
		border-left-width: 4px;
		border-radius: 20;
		padding: 40;
	}

	.header-wrapper {
		margin-bottom: 30;

		Label {
			margin-left: 30;
			font-size: 32;
		}
	}

	.data-wrapper {
		margin-left: 30;

		.type {
			font-weight: 700;
		}

		.data {
			margin-bottom: 30;
		}
	}

	.capitalize {
		text-transform: capitalize;
	}
</style>