<template>
  <section class="skills">
    <h2 class="skills-header">Industry Standard Skills</h2>
    <div class="skills-container">
      <h5 class="skills-sub">Click An Icon To Learn More</h5>
      <div class="skills-row">
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094439/Logos/Sass_Logo_Color_r1mv6v.png"
          alt="SCSS Logo Click To Learn About SCSS"
          class="skills-img"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/js_yjli5z.png"
          alt="JavaScript Logo Click To Learn About JavaScript"
          class="skills-img"
          @click="displayJSComponent"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/Vuelogo_kif8pr.png"
          alt="VueJS Logo Click To Learn About VueJS"
          class="skills-img"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/node2_cifopi.png"
          alt="NodeJS Logo Click To Learn About NodeJS"
          class="skills-img"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/mongo_mx4lbb.png"
          alt="Mongo DB Logo Click To Learn About MongoDB"
          class="skills-img"
        />
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/firebase_byc1b1.png"
          alt="Firebase Logo Click To Learn About Firebase"
          class="skills-img"
        />
      </div>
    </div>
    <JavaScript
      v-if="JS"
      @click="displayJSComponent"
      :JS="JS"
      @hide="hide"
      class="position"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      JS: false,
      SCSS: false,
      Node: false,
      Vue: false,
      Firebase: false,
      Mongo: false,
    }
  },
  methods: {
    displayJSComponent: function () {
      if (this.JS === false) {
        this.JS = true
        return this.JS
      } else {
        this.JS = false
        return this.JS
      }
    },
    hide: function () {
      ;(this.JS = false),
        (this.SCSS = false),
        (this.Node = false),
        (this.Vue = false),
        (this.Firebase = false),
        (this.Mongo = false)
    },
  },
}
</script>

<style lang="scss">
.skills {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: var(--background-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.skills-header {
  font-size: var(--h1);
  text-transform: uppercase;
}
.skills-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.skills-sub {
  margin: 2rem auto;
}
.skills-row {
  background-color: var(--skill-background);
  height: auto;
  width: 100%;
  padding: 5rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.skills-img {
  width: 10%;
  padding: 2rem;
}
.position {
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s;
}
@include tablet {
  .skills-row {
    flex-wrap: wrap;
  }
  .skills-img {
    width: 15%;
    padding: none;
  }
}
@include phone {
  .skills-img {
    width: 20%;
  }
}
</style>
