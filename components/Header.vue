<template>
    
    <div class="columns is-left" id="head">
      <div class="column is-6">
        <div class="titleunderline is-large has-margin-top-50"></div>

        <h1 class="title is-size-large has-margin-bottom-15	">Putera Kahfi</h1>

        <h4 class="subtitle is-4 has-margin-top-10">
          <span class>Backend</span> / Frontend Developer.
        </h4>

        <div class="cta">
          <a
            href="https://github.com/puterakahfi"
            class="button is-white"
            target="_blank"
          >
            <fa :icon="['fab', 'github']"/>&nbsp;github
          </a>

          <a
            href="https://www.linkedin.com/in/putera-kahfi-52663b48"
            class="button  is-white"
            target="_blank"
          >
            <fa :icon="['fab', 'linkedin']"/>&nbsp;linkedin
          </a>

          <a
            href="https://medium.com/@puterakahfi"
            class="button  is-white"
            target="_blank"
          >
            <fa :icon="['fab', 'medium']"/>&nbsp;medium
          </a>

          <a
            href="https://www.facebook.com/codejunior"
            class="button  is-white"
            target="_blank"
          >
            <fa :icon="['fab', 'facebook']"/>&nbsp;facebook
          </a>

          <a
            class="button btn-lg btn-primary btn-icon icon-left shadowless disabled"
            href="download"
            target="_blank"
            style="display:none"
          >
            <fa :icon="['fas', 'file-pdf']"/>&nbsp;download CV ( coming soon)
          </a>
        </div>
      </div>
      <div class="column is-5">
        <img
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/professor_8lrt.svg"
          class="img img-fluid"
        >
      </div>
    </div>
</template>
