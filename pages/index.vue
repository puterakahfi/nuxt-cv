<template>
  <div class="container">
    <div class="row" id="head">
      <div class="col-md-6 col-sm-12 pt-5 mt-5 mb-5">
        <h1 class="display-3">Putera Kahfi</h1>
        <h4>Frontend Developer.</h4>

        <div class="cta">
          
          <a
            href="https://github.com/puterakahfi"
            class="btn btn-default smooth  shadowless"
            target="_blank"
          >
            <fa :icon="['fab', 'github']"/>&nbsp;github
          </a>

          <a
            href="https://www.linkedin.com/in/putera-kahfi-52663b48"
            class="btn btn-default smooth  shadowless"
            target="_blank"
          >
            <fa :icon="['fab', 'linkedin']"/>&nbsp;linkedin
          </a>

          <a
            href="https://medium.com/@puterakahfi"
            class="btn btn-default smooth  shadowless"
            target="_blank"
          >
            <fa :icon="['fab', 'medium']"/>&nbsp;blog
          </a>

          <br>
          <br>
          <a
            class="btn btn-lg btn-primary btn-icon icon-left shadowless disabled"
            href="download"
            target="_blank"
          >
            <fa :icon="['fas', 'file-pdf']"/>&nbsp;download CV ( coming soon)
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
    <br>

    <div class="row">
      <div class="col-md-6">
        <h1>Skillset</h1>
        <h6>Web development skillset ( higher is better )</h6>
        <Skillset/>
      </div>
       <div class="col-md-6">
        <h1>Experiences</h1>
        <h6>Web development skillset ( higher is better )</h6>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Wakatime from "~/components/Wakatime.vue";
import Skillset from "~/components/Skillset.vue";

export default {
  components: {
    Logo,
    Wakatime,
    Skillset
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
