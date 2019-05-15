<template>
  <div class="container">
    <div class="row" id="head">
      <div class="col-md-6 col-sm-12 pt-5 mt-5 mb-5">
                <div class="titleunderline"></div>

        <h1 class="display-3">Putera Kahfi</h1>

        <h4>
          <span class>Backend</span> / Frontend Developer.
        </h4>

        <div class="cta">
          <a
            href="https://github.com/puterakahfi"
            class="btn btn-default smooth shadowless ml-0 pl-0"
            target="_blank"
          >
            <fa :icon="['fab', 'github']"/>&nbsp;github
          </a>

          <a
            href="https://www.linkedin.com/in/putera-kahfi-52663b48"
            class="btn btn-default smooth shadowless"
            target="_blank"
          >
            <fa :icon="['fab', 'linkedin']"/>&nbsp;linkedin
          </a>

          <a
            href="https://medium.com/@puterakahfi"
            class="btn btn-default smooth shadowless"
            target="_blank"
          >
            <fa :icon="['fab', 'medium']"/>&nbsp;medium
          </a>

          <a
            href="https://www.facebook.com/codejunior"
            class="btn btn-default smooth shadowless"
            target="_blank"
          >
            <fa :icon="['fab', 'facebook']"/>&nbsp;facebook
          </a>

          <br>
          <br>
          <a
            class="btn btn-lg btn-primary btn-icon icon-left shadowless disabled"
            href="download"
            target="_blank"
            style="display:none"
          >
            <fa :icon="['fas', 'file-pdf']"/>&nbsp;download CV ( coming soon)
          </a>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <img
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/version_control_9bpv.svg"
          class="img img-fluid"
        >
      </div>
    </div>
    <br>

    <div class="row">
      <div class="col-md-6" id="section-skill">
        <Wakatime/>

        <br>
        <h2>Skillset</h2>

        <div class="titleunderline mb-3"></div>
        <h6>Web development skillset ( higher is better )</h6>

        <Skillset/>
      </div>
      <div class="col-md-6">
        <h2>Projects</h2>
        <div class="titleunderline mb-3"></div>
        <br>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body">
                <h4>Personal CV</h4>My CV Landingpage, build with nuxtjs
                <hr>
                <a
                  href="https://github.com/puterakahfi/nuxt-cv"
                  class="btn btn-sm btn-dark smooth shadowless"
                  target="_blank"
                >
                  <fa :icon="['fab', 'github']"/>&nbsp;github
                </a>

                <a
                  href="https://puterakahfi.github.io/nuxt-cv/"
                  class="btn btn-sm btn-dark smooth shadowless"
                  target="_blank"
                >&nbsp;link</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body">
                <h4>Personal Blog</h4>Personal blog, build with gridsome
                <hr>
                <a
                  href="https://github.com/puterakahfi/puterakahfi.github.io"
                  class="btn btn-sm btn-dark smooth shadowless"
                  target="_blank"
                >
                  <fa :icon="['fab', 'github']"/>&nbsp;github
                </a>

                <a
                  href="https://puterakahfi.github.io"
                  class="btn btn-sm btn-dark smooth shadowless"
                  target="_blank"
                >&nbsp;link</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body">
                <h4>Invest Review</h4>Refview investment platforms
                <hr>
                <a
                  href="https://github.com/puterakahfi/refview-invest"
                  class="btn btn-sm btn-dark smooth shadowless"
                  target="_blank"
                >
                  <fa :icon="['fab', 'github']"/>&nbsp;github
                </a>

                <a
                  href="https://puterakahfi.github.io/refview-invest/"
                  class="btn btn-sm btn-dark smooth shadowless"
                  target="_blank"
                >&nbsp;link</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="card">
              <div class="card-body">
                <h4>Nuxt Awesome</h4>Nuxt js resource landingpage
                <hr>
                <a
                  href="https://github.com/puterakahfi/nuxt-awesome"
                  class="btn btn-sm btn-dark smooth shadowless"
                  target="_blank"
                >
                  <fa :icon="['fab', 'github']"/>&nbsp;github
                </a>

                <a
                  href="https://puterakahfi.github.io/nuxt-awesome/"
                  class="btn btn-sm btn-dark smooth shadowless"
                  target="_blank"
                >&nbsp;link</a>
              </div>
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
import Skillset from "~/components/Skillset.vue";

export default {
  data: function() {
    return {
      activity: ""
    };
  },
  components: {
    Logo,
    Wakatime,
    Skillset
  },
  async asyncData({ $axios }) {
    let act = await $axios.$get(
      "https://api.github.com/users/puterakahfi/events"
    );

    return { activity: act };
  }
};
</script>

<style lang="scss" scoped>
.line-through {
  text-decoration: line-through;
}

h1 {
  &.display-3 {
    font-weight: bold;
  }
}
h4 {
  margin-bottom: 10px;
}
.card {
  border: none;
  transition: all 0.2s ease-in-out;

  hr {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    border: 0;
    border-top: 1px solid rgba(158, 158, 158, 0.1);
  }

  &:hover {
    box-shadow: 0 7px 23px 0 rgba(24, 48, 85, 0.22);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    cursor: pointer;
  }
}

#section-skill {
  h6 {
    color: #484040;
    font-weight: lighter;
  }
}
</style>
