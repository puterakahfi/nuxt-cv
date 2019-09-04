<template>
  <section>
    <section data-aos="fade-down" id="header" class>
      <div class="container">
        <Header
          :data="header"
          class="has-padding-top-50 has-margin-botton-50 has-padding-bottom-50"
        />
      </div>
    </section>

    <section class="has-padding-bottom-50">
      <div class="container">
        <div class="columns">
          <div class="column is-7" id="section-skill" data-aos="fade-left">
            <div class="titleunderline is-small"></div>

            <Projects data-aos="zoom-out" />
          </div>
          <div class="column is-5" data-aos="fade-right">
            <GithubFeed />
          </div>
        </div>
      </div>
    </section>

    <section class="has-background-white has-padding-top-50 has-padding-bottom-50">
      <div class="container">
        <div class="columns">
          <div class="column is-7" id="section-skill" data-aos="zoom-in">
            <Wakatime :data="wakatime" />
          </div>
          <div class="column is-5" data-aos="zoom-in">
            <div class="titleunderline is-small"></div>
            <h2 class="title is-4 has-margin-bottom-10 is-light">Skillset</h2>
            <SkillsetCard :data="skillset" />
          </div>
        </div>
      </div>
    </section>

    <footer class="footer has-padding-50" data-aos="zoom-in">
      <div class="content has-text-centered">
        <p class="has-text-grey-light">
          <strong>CV Online</strong> by
          <a href="https://puterakahfi.github.io">Putera Kahfi</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </section>
</template>

<script>
import Wakatime from "~/components/Wakatime.vue";
import Skillset from "~/components/Skillset.vue";
import Projects from "~/components/Projects.vue";
import Header from "~/components/Header.vue";
import SkillsetCard from "~/components/SkillsetCard.vue";

import GithubFeed from "~/components/GithubFeed.vue";

import skillset from "~/static/skillset.json";
import wakatime from "~/static/wakatime.json";
import header from "~/static/header.json";


import "~/assets/scss/main.scss";

export default {
  head() {
    return {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto"
        }
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
          type: "text/javascript"
        }
      ]
    };
  },

  data: function() {
    return {
      activity: "",
      skillset: skillset,
      wakatime: wakatime,
      header: header
    };
  },
  components: {
    Wakatime,
    Skillset,
    Projects,
    Header,
    SkillsetCard,
    GithubFeed
  }
};
</script>

<style lang="scss" scoped>
.line-through {
  text-decoration: line-through;
}

section {
  background: #f9f9ff;
}

h1 {
  &.display-3 {
    font-weight: bold;
  }
}
h4 {
  margin-bottom: 10px;

  .title {
    color: #bebece;
  }
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

.is-light {
  color: #bebece;
}
</style>
