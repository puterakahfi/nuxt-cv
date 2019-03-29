<template>
  <div class="hero-mini bg">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <h1>PUTERA KAHFI</h1>
          <p
            class="lead"
          >Let's start creating an awesome UI dashboard with Stisla, speed up your project and go to bed early.</p>
          <div class="cta">
            <a
              class="btn btn-lg btn-warning btn-icon icon-right"
              href="https://getstisla.com/download"
              target="_blank"
            >
              Download Now
              <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-5 pl-lg-5 d-lg-block d-none text-center">
          <img
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/version_control_9bpv.svg"
            alt="image"
            class="img-fluid img-flip"
            width="80%"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
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
