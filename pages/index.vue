<template>
  <section>
    <Component :is="loadTheme" />
  </section>
</template>

<script>
import configs from "~/resume.config";

export default {
  data() {
    return {
      theme: "default"
    };
  },
  async asyncData({ configs }) {
    return {
      theme: () => "~/themes/default"
    };
  },
  computed: {
    loadTheme() {
      this.theme = configs.theme;
      return () => import(`~/themes/${this.theme}`);
    }
  },
  methods: {
    switchTheme: function(theme) {
      this.theme = () => import(`~/themes/${theme}`);
    }
  }
};
</script>
