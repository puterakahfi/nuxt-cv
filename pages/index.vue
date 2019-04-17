<template>
  <div class="container">
    <div class="row" id="head">
      <div class="col-md-6 col-sm-12 pt-5 mt-5">
        <h1 class="display-3">Putera Kahfi</h1>
        <h4>Frontend Developer.</h4>

        <div class="cta">
          <br>

          <a
            href="https://github.com/puterakahfi"
            class="btn btn-dark smooth btn-icon icon-left shadowless"
            target="_blank"
          >
            <fa :icon="['fab', 'github']"/> Github
          </a>

          <a
            href="https://github.com/puterakahfi"
            class="btn btn-dark smooth btn-icon icon-left shadowless"
            target="_blank"
          >
            <fa :icon="['fab', 'linkedin']"/> Linkedin
          </a>

          <a
            class="btn btn-lg btn-primary btn-icon icon-right shadowless disabled"
            href="download"
            target="_blank"
          >
            <fa :icon="['fas', 'file-pdf']"/> Download CV ( coming soon)
          </a>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="row">
          <div class="col-12">
            <Wakatime/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Wakatime from "~/components/Wakatime.vue";

export default {
  components: {
    Logo,
    Wakatime
  }
};
</script>

<style sccoped>
h1.display-3 {
  font-weight: bold;
}
h4 {
  margin-bottom: 10px;
}
</style>
