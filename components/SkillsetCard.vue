
<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-12" v-for="skill in data.items" :key="skill.label">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <a :href="skill.url" target="_blank">
                  <img :src="skill.image" alt="Image">
                </a>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <small>{{skill.level}}</small>
                  <br>
                  <strong class="title is-6">{{skill.label}}</strong>
                  <br>
                  <small class="is-size-7">{{skill.description}}</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <nav class="level is-mobile other-skill">
        <div class="level-item has-text-centered has-margin-left-10">
          <div>
            <p class="heading"></p>
            <p class="subtitle">Other:</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <b-tooltip label="vuejs:beginner" type="is-dark" position="is-bottom" class="title">
                <fa :icon="['fab', 'vuejs']"/>
              </b-tooltip>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <b-tooltip
                label="docker:intermediate"
                type="is-dark"
                position="is-bottom"
                class="title"
              >
                <fa :icon="['fab', 'docker']"/>
              </b-tooltip>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <b-tooltip label="git:intermediate" type="is-dark" position="is-bottom" class="title">
                <fa :icon="['fab', 'git']"/>
              </b-tooltip>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <b-tooltip
                label="bootstrap:intermediate"
                type="is-dark"
                position="is-bottom"
                class="title"
              >
                <fa :icon="['fab', 'bootstrap']"/>
              </b-tooltip>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <b-tooltip label="ubuntu:enduser" type="is-dark" position="is-bottom" class="title">
                <fa :icon="['fab', 'ubuntu']"/>
              </b-tooltip>
            </p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <b-tooltip label="sass:beginner" type="is-dark" position="is-bottom" class="title">
                <fa :icon="['fab', 'sass']"/>
              </b-tooltip>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <b-tooltip
                label="markdown:beginner"
                type="is-dark"
                position="is-bottom"
                class="title"
              >
                <fa :icon="['fab', 'markdown']"/>
              </b-tooltip>
            </p>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.box {
  padding: 1em;
  box-shadow: none;
  border-radius: none;
}

.other-skill {
  .title {
    font-size: 1.3rem;
    color: #bebece;
  }

  .subtitle {
    font-size: 1rem;
    color: #bebece;
  }
}
</style>



<script>
export default {
  props: ["data"]
};
</script>