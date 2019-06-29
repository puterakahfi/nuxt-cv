<template>
  <section>
    <section  data-aos="fade-down" id="header" class>
      <div class="container">
        <Header :data="header" class="has-padding-top-50 has-margin-botton-50 has-padding-bottom-50"/>
      </div>
    </section>

    <section class="has-padding-bottom-50">
      <div class="container">
        <div class="columns">
          <div class="column is-7" id="section-skill" data-aos="fade-left">
            <div class="titleunderline is-small"></div>

            <h2 class="title is-4 has-margin-bottom-20 is-light">{{projects.label}}</h2>

            <Projects :data="projects" data-aos="zoom-out"/>
          </div>
          <div class="column is-5" data-aos="fade-right" >
            <github-feed login="puterakahfi"></github-feed>
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
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
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

import projects from "~/static/projects.json";
import skillset from "~/static/skillset.json";
import wakatime from "~/static/wakatime.json";
import header from "~/static/header.json";

export default {
  data: function() {
    return {
      activity: "",
      projects: projects,
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
    SkillsetCard
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

  .title
  {
    color:#bebece;
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

.is-light
{
  color:#bebece;
}
</style>
