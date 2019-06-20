
<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-6" v-for="skill in data.items" :key="skill.label">
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
            <p class="subtitle">
              Other:
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <fa :icon="['fab', 'docker']"/>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <fa :icon="['fab', 'git']"/>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <fa :icon="['fab', 'bootstrap']"/>
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <fa :icon="['fab', 'ubuntu']"/>
            </p>
          </div>
        </div>

         <div class="level-item has-text-centered">
          <div>
            <p class="heading"></p>
            <p class="title">
              <fa :icon="['fab', 'sass']"/>
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
}

.other-skill
{
  .title
  {
    font-size: 1.3rem;
    color:#BEBECE;
  }

  .subtitle
  {
    font-size: 1rem;
    color:#BEBECE;
  }
}
</style>



<script>
export default {
  props: ["data"]
};
</script>