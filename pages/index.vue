<template>
  <section>
    <div class="container">
      <Header class="has-padding-top-50 has-margin-botton-50 has-padding-bottom-50"/>
    </div>
    <section class="has-background-white has-padding-top-50 has-padding-bottom-50">
      <div class="container">
        <div class="columns">
          <div class="column is-6" id="section-skill">
            <Wakatime/>
          </div>
          <div class="column is-6">
            <div class="titleunderline is-medium"></div>
            <h2 class="title is-4 has-margin-bottom-10">Skillset</h2>
            <h6 class="has-text-grey">Web development skillset ( higher is better )</h6>
            <Skillset class="has-margin-top-20"/>
          </div>
        </div>
      </div>
    </section>

    <section class="has-background-light has-padding-top-50">
      <div class="container">
        <div class="columns">
          <div class="column is-7" id="section-skill">
            <div class="titleunderline is-medium"></div>

            <h2 class="title is-4 has-margin-bottom-20">{{projects.label}}</h2>

            <Projects :data="projects"/>
          </div>
          <div class="column is-5">
            <github-feed login="puterakahfi"></github-feed>

          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Wakatime from "~/components/Wakatime.vue";
import Skillset from "~/components/Skillset.vue";
import Projects from "~/components/Projects.vue";
import Header from "~/components/Header.vue";

import projects from "~/static/projects.json";
export default {
  data: function() {
    return {
      activity: "",
      projects: projects
    };
  },
  components: {
    Wakatime,
    Skillset,
    Projects,
    Header
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
