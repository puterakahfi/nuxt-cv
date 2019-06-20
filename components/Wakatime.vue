<template>
  <div>
    <b-tabs content-class="mt-3" type="is-boxed">
      <b-tab-item
        :label="item.label"
        :key="item.label"
        v-for="item  in wakatime"
        :active="item.isActive"
        class="shadowless"
      >
        <embed :src="item.url">
      </b-tab-item>
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

<style>
.nav-link {
  color: #6c757d;
}

.nav-link.active {
  box-shadow: none !important;
  color: #fff;
}
</style>
