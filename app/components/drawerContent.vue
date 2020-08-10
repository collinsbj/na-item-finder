
<template lang="html">
  <ScrollView backgroundColor="pink">
    <StackLayout width="100%">
      <Label
        text="Neon Abyss"
        class="drawer-header"
        @tap="goToPage($routes.Home)"
      />
      <Label
        v-for="page in pages"
        :key="page.name"
        class="drawer-item"
        :text="page.name"
        @tap="goToPage(page.component)"
      />
    </StackLayout>
  </ScrollView>
</template>

<script>
export default {
  data() {
    return {
      // define our pages, making sure the component matches that defined in /app/router/index.js
      pages: [
        { name: "Items", component: this.$routes.Items },
        { name: "Pets", component: this.$routes.Pets },
        { name: "Skills", component: this.$routes.Skills },
        { name: "Weapons", component: this.$routes.Weapons },
      ],
    };
  },
  methods: {
    goToPage(pageComponent) {
      this.$navigateTo(pageComponent, { clearHistory: true });
      this.closeDrawer();
    },
    closeDrawer() {
      this.$parent.$refs.drawer.nativeView.closeDrawer();
    },
  },
};
</script>

<style lang="css">
.drawer-header {
  font-size: 40px;
  margin-left: 20;
}

.drawer-item {
  font-size: 32px;
  margin: 10 0 10 20;
}
</style>