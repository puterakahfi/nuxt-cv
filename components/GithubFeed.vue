<template>
<div>
 <div v-if="this.$store.state.githubrepo.isLoading">Loading Repository...</div>
  <github-feed :login="username">{{ username }}</github-feed>
</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    username() {
      return this.$store.state.githubrepo.username;
    }
  },

  methods: {
    ...mapActions({ fetchFeed: "githubrepo/fetchFeed" })
  },
  created() {
    this.fetchFeed();
  }
};
</script>

<style>
</style>