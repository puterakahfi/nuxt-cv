<template>
  <div>
    <b-tabs content-class="mt-3" type="is-boxed">
      <b-tab-item
        :label="item.label"
        :key="item.label"
        v-for="item  in data.items"
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
  props: ["data"]
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
