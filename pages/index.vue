<template>
    <div class="container">
      <div class="row" id="head">
        <div class="col-md-6 col-sm-12">
          <h1 class="display-3">Putera Kahfi</h1>
          <p class="lead">Web Developer.</p>
          <div class="cta">
            <a
              class="btn btn-lg btn-dark btn-icon icon-right shadowless"
              href="download"
              target="_blank"
            >
              <fa :icon="['fas', 'download']"/> Download CV in PDF
            </a>
          </div>
        </div>
        <div class="col-6 md-6">
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

</style>
