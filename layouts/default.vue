<template>
  <div>
    <Navbar/>
    <nuxt/>
  </div>
</template>


<script>
import Navbar from "~/components/NavBar.vue";
export default {
  components: {
    Navbar
  },
  title: "My Awesome Webapp Hmm",
  head: {
    script: [
      {
        src: "/stisla/modules/jquery.min.js"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "stisla/modules/bootstrap/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "stisla/css/style.css"
      },
      {
        rel: "stylesheet",
        href: "stisla/css/components.css"
      }
    ]
  }
};
</script>