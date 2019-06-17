<template>
  <div class="columns is-multiline">
    <div class="column is-6" v-for="project in data.items" :key="project.label">
      <div class="card has-equal-height">
        <div class="card-content has-padding-20">
          <h4 class="title is-5 has-margin-bottom-10">{{project.label}}</h4>
          <p class="is-size-7 has-margin-bottom-15">{{ project.description }}</p>
          <div class="buttons are-small">
            <a
              v-for="link in project.links"
              :key="link.url"
              :href="link.url"
              class="button is-white"
              target="_blank"
            >
              <fa v-if="link.icon" :icon="[link.icon[0], link.icon[1]]"/>
              &nbsp; {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: ["data"]
};
</script>
