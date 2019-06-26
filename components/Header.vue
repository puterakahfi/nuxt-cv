<template>
  <div class="columns is-left" id="head">
    <div class="column is-6">
      <div class="titleunderline is-medium has-margin-top-50"></div>
      <h1 class="title is-size-large has-margin-bottom-5 has-text-grey-darker">{{data.name}}</h1>

      <h4 class="subtitle is-4 has-margin-top-10 has-text-grey">{{ data.title}}</h4>

      <div class="cta">
        <a
          v-for="link in data.links"
          :key="link.url"
          :href="link.url"
          class="button is-white has-margin-right-5"
          target="_blank"
        >
          <fa v-if="link.icon" :icon="[link.icon[0], link.icon[1]]"/>
          &nbsp; {{ link.label }}
        </a>
      </div>
    </div>

    <div class="column is-6">
      <img :src="selectedImage" class="img img-fluid">
    </div>
  </div>
</template>




<script>
export default {
  props: ["data"],
  data() {
    return {
      selectedImage: ""
    };
  },
  mounted: function() {
    this.selectedImage = this.data.images[
      Math.floor(Math.random() * this.data.images.length)
    ];
  }
};
</script>
