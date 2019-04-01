<template>
  <div class="hero-mini bg">
    <div class="container">
      <div class="row align-items-center" id="head">
        <div class="col-md-6 col-sm-12">
          <h1>Putera Kahfi</h1>
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
        <div class="col-6md-6">
          <div class="row mt-5">
            <div class="col-12">
              <Wakatime/>
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
  font-size: 5rem;
  color:#000000;
}

#head .lead {
  font-size: 3rem;
  margin-bottom: 60px;

  color: #000000;
}

.hero-mini {
  background-image: #0f0f0f;
  padding-top: 40px;
  height: 500px;
  display: flex;
  align-items: center;
}
</style>
