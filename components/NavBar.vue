<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand smooth h1">Putera Kahfi</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ml-lg-3 align-items-lg-center">
          <li class="nav-item dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              class="nav-link dropdown-toggle"
              aria-expanded="false"
            >Developers</a>
            <ul class="dropdown-menu">
              <li class="dropdown-title">Getting Started</li>
              <li>
                <a
                  href="https://getstisla.com/getting-started"
                  class="dropdown-item"
                >Getting Started</a>
              </li>
              <li>
                <a href="https://getstisla.com/docs" class="dropdown-item">Documentation</a>
              </li>
              <li class="dropdown-title">Core</li>
              <li>
                <a href="http://demo.getstisla.com/index.html" class="dropdown-item">Dashboard</a>
              </li>
              <li>
                <a
                  href="http://demo.getstisla.com/layout-transparent.html"
                  class="dropdown-item"
                >Layouts</a>
              </li>
              <li>
                <a
                  href="http://demo.getstisla.com/bootstrap-alert.html"
                  class="dropdown-item"
                >Bootstrap</a>
              </li>
              <li>
                <a
                  href="http://demo.getstisla.com/components-article.html"
                  class="dropdown-item"
                >Components</a>
              </li>
              <li>
                <a
                  href="http://demo.getstisla.com/modules-calendar.html"
                  class="dropdown-item"
                >Third-party Libraries</a>
              </li>
              <li>
                <a
                  href="http://demo.getstisla.com/features-activities.html"
                  class="dropdown-item"
                >Pre-built Pages</a>
              </li>
              <li>
                <a href="javascript:;" class="dropdown-item">Skeleton (Progress)</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link"  target="_blank" href="https://medium.com/@puterakahfi/">Blog</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto align-items-lg-center d-none d-lg-block">
          <li class="ml-lg-3 nav-item">
            <a
              href="https://github.com/puterakahfi"
              class="btn btn-dark smooth btn-icon icon-left shadowless"
              target="_blank"
            >
              <fa :icon="['fab', 'github']"/>Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style scoped>

.navbar-light .navbar-nav .nav-link {
    color: rgba(0,0,0,.5);
    font-weight: bold;
}

.navbar .navbar-brand {
  color: #6c757d;
  text-transform: inherit;
  font-weight: 700;
  padding-top: 12px;
}

.navbar {
  left: 0;
  right: 0;
  background: white;
  height: auto;
}
</style>