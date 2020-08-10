
<template lang="html">
  <Page actionBarHidden="true">
    <GridLayout ~mainContent columns="*" rows="*">
      <Label class="message" :text="text" col="0" row="0"/>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello Weapons!"
    };
  },
  methods: {
    openDrawer() {
      this.$parent.$parent.$refs.drawer.nativeView.showDrawer();
    }
  }
};
</script>

<style lang="css">
</style>