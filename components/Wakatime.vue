<template>
  <div>
    <h1>{{ wakatime.label }}</h1>

    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="pills-home-tab"
          data-toggle="pill"
          href="#pills-home"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >Coding Activity</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-profile-tab"
          data-toggle="pill"
          href="#pills-profile"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >Programming Language</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-contact-tab"
          data-toggle="pill"
          href="#pills-contact"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >Operating System</a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <embed
          src="https://wakatime.com/share/@puterakahfi/ccc17d7a-5f37-4a55-9620-56a25b8a6231.svg"
        >
      </div>
      <div class="tab-pane" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <embed
          src="https://wakatime.com/share/@puterakahfi/f45f7d9c-4b91-466d-bdc5-b869303f3951.svg"
        >
      </div>
      <div class="tab-pane" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
        <embed
          src="https://wakatime.com/share/@puterakahfi/774facfe-769e-4098-9a7f-7f3233a8d519.svg"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "not seriousli"
    };
  },
  computed: {
    wakatime() {
      console.log(this.$store.state.wakatime.list);
      return this.$store.state.wakatime.list;
    }
  }
};
</script>

<style scoped>
.nav-pills .nav-item .nav-link {
  color: #6c757d;
}

.nav-pills .nav-item .nav-link.active {
  box-shadow: none;
  color: #fff;
  background-color: #000000;
}
</style>
