<template>
  <div>
    <h1>{{ wakatime.label }}</h1>

    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <figure>
        <embed src="https://wakatime.com/share/@puterakahfi/8a50b45d-089e-47f4-ac0c-8dfdb2b369d8.svg"></embed>
    
    </figure>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
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