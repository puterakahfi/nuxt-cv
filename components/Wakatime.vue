<template>
  <div class="container">
    <b-tabs content-class="mt-3" pills>
      <b-tab
        :title="item.label"
        :key="item.label"
        v-for="item  in wakatime"
        :active="item.isActive"
        class="shadowless"
      >
        <embed :src="item.url">
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    wakatime() {
      // console.log(this.$store.state.wakatime.list);
      return this.$store.state.wakatime.list;
    }
  }
};
</script>

<style scoped>
.nav-link {
  color: #6c757d;
}

.nav-link .active {
  box-shadow: none;
  color: #fff;
  background-color: #000000;
}
</style>
