<template>
  <div class="hero-mini bg">
    <div class="container">
      <div class="row align-items-center" id="head">
        <div class="col-6">
          <h1>Putera Kahfi</h1>
          <p
            class="lead"
          >Let's start creating an awesome UI dashboard with Stisla, speed up your project and go to bed early.</p>
          <div class="cta">
            <a
              class="btn btn-lg btn-primary btn-icon icon-right shadowless"
              href="download"
              target="_blank"
            >
              <fa :icon="['fas', 'download']"/>Download CV in PDF
            </a>
          </div>
        </div>
        <div class="col-6">
          <div class="row mt-5">
            <div class="col-12">
              <Wakatime class="mt-5 pt-5"/>
            </div>
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
#head h1 {
  font-weight: bolder;
  font-size:4rem;
}

.hero-mini {
  background-image: #ededed;
  padding-top: 40px;
  height: 500px;
  display: flex;
  align-items: center;
}
</style>
