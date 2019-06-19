
<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-6" v-for="skill in data.items" :key="skill.label">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img :src="skill.image" alt="Image">
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
    </div>
  </div>
</template>



<script>
export default {
  props: ["data"]
};
</script>