<template>
  <div class="hero-mini bg">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-7">
          <h1>PUTERA KAHFI</h1>
          <p
            class="lead"
          >Let's start creating an awesome UI dashboard with Stisla, speed up your project and go to bed early.</p>
          <div class="cta">
            <a
              class="btn btn-lg btn-warning btn-icon icon-right shadowless"
              href="https://getstisla.com/download"
              target="_blank"
            >
              Download CV in PDF
              <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div class="col-5">
          <Wakatime/>
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
.hero-mini {
  background-image: #ededed;
  padding-top: 40px;
  height: 500px;
  display: flex;
  align-items: center;
}
</style>
